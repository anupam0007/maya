import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Maya — Web Experiences That Ship";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0F",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(124,58,237,0.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.35), transparent 50%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28, marginBottom: 32 }}>
          <svg width="96" height="96" viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="a" x1="4" y1="6" x2="44" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#7C3AED" />
                <stop offset="1" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="b" x1="4" y1="42" x2="44" y2="6" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#06B6D4" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient id="c" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#F5A623" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            <path d="M6 42V8.5C6 7.12 7.6 6.36 8.68 7.22L22 18V42H14V21.5L8 16.7V42H6Z" fill="url(#a)" />
            <path d="M42 42V8.5C42 7.12 40.4 6.36 39.32 7.22L26 18V42H34V21.5L40 16.7V42H42Z" fill="url(#b)" />
            <path d="M14 21.5L24 13L34 21.5L24 30L14 21.5Z" fill="url(#c)" />
          </svg>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, color: "#fff" }}>
            Maya
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#F5F5F7", textAlign: "center", padding: "0 80px" }}>
          Web experiences that ship.
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#9CA3AF", marginTop: 16 }}>
          Design &amp; Development by Anupam Gowda — Bengaluru, India
        </div>
      </div>
    ),
    { ...size }
  );
}
