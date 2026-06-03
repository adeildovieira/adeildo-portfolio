import { ImageResponse } from "next/og";

/**
 * Apple touch icon, generated at build time (replaces the missing
 * /apple-touch-icon.png that metadata previously pointed at).
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          color: "#47a7e7",
          fontSize: 112,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        a
      </div>
    ),
    { ...size }
  );
}
