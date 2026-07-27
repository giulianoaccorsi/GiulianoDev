import { ImageResponse } from "next/og";

export const alt = "Giuliano Accorsi | Mobile Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background:
          "radial-gradient(circle at 80% 20%, #176b47 0%, #0b2a1d 35%, #07120d 72%)",
        color: "#f4fbf7",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "80px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(167, 243, 208, 0.25)",
          borderRadius: "32px",
          display: "flex",
          flexDirection: "column",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#6ee7b7",
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Giuliano Accorsi
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginTop: 28,
          }}
        >
          Mobile Developer
        </div>
        <div
          style={{
            color: "#b7c9c0",
            display: "flex",
            fontSize: 30,
            lineHeight: 1.35,
            marginTop: 32,
          }}
        >
          SwiftUI · Flutter · Mobile products built with care
        </div>
      </div>
    </div>,
    size,
  );
}
