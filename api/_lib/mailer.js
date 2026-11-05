/* ==========================================================================
   mailer.js: sending the two confirmation emails.

   There are two ways to send, and the site picks whichever is configured:

     1. Google OAuth   : sends through the Gmail API with the same token
                         that creates the calendar event and the Meet link.
                         Best option: unique Meet link per booking.

     2. Gmail SMTP     : sends with an App Password. Much quicker to set up
                         (no Cloud Console), and pairs with a fixed MEET_LINK
                         for your personal Meet room.

   If neither is configured nothing is sent and the caller falls back to
   preview mode. Nothing is ever faked.
   ========================================================================== */
import nodemailer from 'nodemailer';
import { hasGoogleOAuth, sendMail as sendViaGmailApi, OWNER_EMAIL } from './google.js';

export const GMAIL_USER = process.env.GMAIL_USER || OWNER_EMAIL;
const APP_PASSWORD = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');

export const hasSmtp = () => Boolean(GMAIL_USER && APP_PASSWORD);

/** Which transport will actually be used: 'google' | 'smtp' | 'none'. */
export function mailMode() {
  if (hasGoogleOAuth()) return 'google';
  if (hasSmtp()) return 'smtp';
  return 'none';
}

let transport = null;
function smtpTransport() {
  if (!transport) {
    transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: GMAIL_USER, pass: APP_PASSWORD },
      pool: false,
      connectionTimeout: 12_000,
      greetingTimeout: 12_000,
      socketTimeout: 20_000,
    });
  }
  return transport;
}

/**
 * Send one message. Throws on failure, so the caller decides whether a failed
 * email should fail the whole booking (it should not; the slot is real).
 */
export async function deliver({ to, subject, html, text, replyTo, attachments }) {
  const mode = mailMode();
  if (mode === 'none') throw new Error('No email transport configured.');

  if (mode === 'google') {
    return sendViaGmailApi({ to, subject, html, text, replyTo, attachments });
  }

  await smtpTransport().sendMail({
    from: `Maya Studio <${GMAIL_USER}>`,
    to, replyTo, subject, html, text,
    attachments: (attachments || []).map((a) => ({
      filename: a.filename, content: a.content, contentType: a.contentType,
    })),
  });
  return true;
}

/** Checked at startup by the dev server so the banner tells the truth. */
export async function verifyTransport() {
  if (mailMode() !== 'smtp') return true;
  await smtpTransport().verify();
  return true;
}
