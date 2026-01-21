import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
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
          background: "#1E1E1E",
          borderRadius: 14,
          border: "2px solid rgba(237,139,0,0.35)",
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: "-1px",
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

