import { ImageResponse } from "next/og";

/**
 * Open Graph / Twitter card image, generated at build time.
 * Next injects this as both `og:image` and `twitter:image`.
 */
export const alt = "Adeildo Vieira — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,154,224,0.18), rgba(5,5,5,0) 70%)",
          color: "#f0f0f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#47a7e7",
            fontWeight: 600,
          }}
        >
          Software Engineer
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 116,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            <span>Adeildo&nbsp;</span>
            <span style={{ color: "#47a7e7" }}>Vieira</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 34,
              color: "#a0a0a0",
            }}
          >
            Computer Science at Duke &rsquo;26 · New Grad
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            color: "#a0a0a0",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#3b9ae0",
              marginRight: 16,
            }}
          />
          adeildovieira.com
        </div>
      </div>
    ),
    { ...size }
  );
}
