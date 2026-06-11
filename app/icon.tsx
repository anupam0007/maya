import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0F",
          borderRadius: 6,
        }}
      >
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
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
      </div>
    ),
    { ...size }
  );
}
