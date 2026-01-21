import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

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
          background: "#1E1E1E",
          borderRadius: 36,
          border: "4px solid rgba(237,139,0,0.35)",
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-3px",
            color: "#ED8B00",
          }}
        >
          AM
        </div>
      </div>
    ),
    size,
  );
}

