import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          padding: "80px 90px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Background grid dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, #1e293b 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            opacity: 0.6,
          }}
        />

        {/* Right-side glow */}
        <div
          style={{
            position: "absolute",
            right: "-100px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          {/* Cyan accent bar */}
          <div
            style={{
              width: "56px",
              height: "4px",
              backgroundColor: "#06b6d4",
              borderRadius: "2px",
              marginBottom: "28px",
            }}
          />

          {/* Eyebrow tag */}
          <p
            style={{
              color: "#06b6d4",
              fontSize: "17px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 600,
              margin: "0 0 22px 0",
            }}
          >
            Defence · Government · Healthcare · Industry
          </p>

          {/* IT monogram badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                backgroundColor: "#06b6d4",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              IT
            </div>
            <h1
              style={{
                color: "#ffffff",
                fontSize: "58px",
                fontWeight: 700,
                margin: 0,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Ideaved Technologies
            </h1>
          </div>

          {/* Tagline */}
          <p
            style={{
              color: "#94a3b8",
              fontSize: "26px",
              margin: "0 0 52px 0",
              lineHeight: 1.5,
              maxWidth: "780px",
              fontWeight: 400,
            }}
          >
            Intelligent Systems for Complex Environments.
          </p>

          {/* Bottom row */}
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {["7 AI Products", "8 Projects Delivered", "6 Industries"].map(
              (stat) => (
                <div
                  key={stat}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#06b6d4",
                      borderRadius: "50%",
                    }}
                  />
                  <span
                    style={{
                      color: "#64748b",
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                  >
                    {stat}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
