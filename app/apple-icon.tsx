import { ImageResponse } from "next/og";

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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0e8536 0%, #0a6629 42%, #1c3d91 100%)",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            fontFamily: "Impact, Haettenschweiler, sans-serif",
          }}
        >
          RKC
        </div>
        <div
          style={{
            marginTop: 6,
            fontSize: 14,
            fontWeight: 700,
            color: "rgba(255,255,255,0.88)",
            letterSpacing: "0.22em",
            fontFamily: "Arial, sans-serif",
          }}
        >
          AUTO
        </div>
      </div>
    ),
    { ...size },
  );
}
