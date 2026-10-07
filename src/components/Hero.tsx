"use client";

interface HeroProps {
  onStartTrial?: () => void;
}

export default function Hero({ onStartTrial }: HeroProps) {
  return (
    <section
      style={{
        position: "relative",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "40px 32px 100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "48px",
        minHeight: "calc(100vh - 120px)",
      }}
    >
      {/* Бірюзове світіння по центру та ззаду */}
      {/* НАКЛОННЫЕ СВЕТОВЫЕ ЛИНИИ / AURORA WAVES */}
<div
  style={{
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 0,
  }}
>
  {/* Основная наклонная бирюзовая полоса света */}
  <div
    style={{
      position: "absolute",
      top: "-15%",
      left: "48%",
      width: "280px",
      height: "140%",
      background: "linear-gradient(180deg, rgba(0, 242, 195, 0) 0%, rgba(0, 242, 195, 0.28) 40%, rgba(13, 148, 136, 0.22) 65%, rgba(0, 242, 195, 0) 100%)",
      transform: "rotate(-28deg)",
      filter: "blur(55px)",
      opacity: 0.85,
    }}
  />

  {/* Вторая более мягкая изумрудная полоса рядом для эффекта глубины */}
  <div
    style={{
      position: "absolute",
      top: "-20%",
      left: "62%",
      width: "220px",
      height: "140%",
      background: "linear-gradient(180deg, rgba(16, 185, 129, 0) 0%, rgba(13, 148, 136, 0.2) 35%, rgba(5, 150, 105, 0.12) 70%, transparent 100%)",
      transform: "rotate(-28deg)",
      filter: "blur(75px)",
      opacity: 0.7,
    }}
  />

  {/* Тонкий направленный луч свечения между текстом и виджетом */}
  <div
    style={{
      position: "absolute",
      top: "10%",
      left: "42%",
      width: "120px",
      height: "110%",
      background: "linear-gradient(180deg, transparent 0%, rgba(0, 242, 195, 0.2) 45%, transparent 80%)",
      transform: "rotate(-26deg)",
      filter: "blur(35px)",
    }}
  />
</div>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "35%",
          width: "380px",
          height: "380px",
          background: "radial-gradient(circle, rgba(13, 148, 136, 0.18) 0%, rgba(5, 11, 10, 0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ЛІВА КОЛОНКА */}
      <div style={{ flex: "1 1 55%", maxWidth: "620px", zIndex: 1 }}>
        {/* Бейдж */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 18px",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            fontSize: "13px",
            color: "#94a3b8",
            marginBottom: "32px",
            backdropFilter: "blur(12px)",
          }}
        >
          <span style={{ color: "#00F2C3", fontSize: "12px" }}>✦</span>
          <span>Your Gateway to Smarter Financial Decisions</span>
        </div>

        {/* Заголовок */}
        <h1
          style={{
            fontSize: "68px",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            margin: "0 0 24px 0",
          }}
        >
          Redefining <br />
          the Next Era <br />
          of{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              color: "#e2e8f0",
            }}
          >
            Digital Finance
          </span>
        </h1>

        {/* Опис */}
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.6,
            color: "#94a3b8",
            maxWidth: "500px",
            margin: "0 0 36px 0",
          }}
        >
          Step into a platform built to transform how you interact with blockchain, DeFi, and the broader crypto ecosystem.
        </p>

        {/* CTA Кнопка */}
        <button
          onClick={onStartTrial}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#00F2C3",
            color: "#040908",
            fontWeight: 700,
            fontSize: "15px",
            padding: "14px 28px",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 0 30px rgba(0, 242, 195, 0.25)",
            transition: "all 0.2s ease",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "1.5px solid rgba(0, 0, 0, 0.4)",
              fontSize: "13px",
              lineHeight: 1,
            }}
          >
            +
          </span>
          <span>Start free trial</span>
        </button>
      </div>

      {/* ПРАВА КОЛОНКА — КАРТКА */}
      <div
        style={{
          flex: "1 1 45%",
          display: "flex",
          justifyContent: "flex-end",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "430px",
            borderRadius: "32px",
            padding: "36px",
            background: "rgba(255, 255, 255, 0.025)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.07)",
            boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.8)",
          }}
        >
          {/* Верхній рядок */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)" }}>
              Wallet 1
            </span>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                fontSize: "12px",
                fontFamily: "monospace",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              <span style={{ fontSize: "11px" }}>🔒</span>
              <span>0x24534...23</span>
            </div>
          </div>

          {/* Баланс і відсоток */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "36px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                $5,237.34
              </div>
              <div
                style={{
                  fontSize: "17px",
                  color: "rgba(255, 255, 255, 0.45)",
                }}
              >
                $55.35
              </div>
            </div>
            <div
              style={{
                fontSize: "34px",
                fontWeight: 600,
                color: "#00F2C3",
                letterSpacing: "-0.02em",
              }}
            >
              +23%
            </div>
          </div>

          {/* Кнопки Receive / Transfer */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "32px" }}>
            <button
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 18px",
                borderRadius: "14px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                color: "#ffffff",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              <span>Receive</span>
              <span style={{ opacity: 0.5 }}>↓</span>
            </button>
            <button
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 18px",
                borderRadius: "14px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                color: "#ffffff",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              <span>Transfer</span>
              <span style={{ opacity: 0.5 }}>↗</span>
            </button>
          </div>

          {/* Нижні іконки навігації */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#00F2C3",
                color: "#040908",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 16px rgba(0, 242, 195, 0.35)",
              }}
            >
              ⌂
            </button>
            {["⇄", "✉", "⚙"].map((icon, i) => (
              <button
                key={i}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}