"use client";

interface HeaderProps {
  onLogin?: () => void;
  onStart?: () => void;
}

export default function Header({ onLogin, onStart }: HeaderProps) {
  return (
    <header
      style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "28px 32px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        zIndex: 30,
        boxSizing: "border-box",
      }}
    >
      {/* ЛОГОТИП NextQ */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Зовнішнє бірюзове коло */}
          <circle
            cx="14"
            cy="14"
            r="12"
            stroke="#00F2C3"
            strokeWidth="2.4"
          />
          {/* Внутрішнє кільце / точка */}
          <circle
            cx="14"
            cy="14"
            r="5"
            stroke="#00F2C3"
            strokeWidth="2.2"
          />
          <circle
            cx="14"
            cy="14"
            r="1.8"
            fill="#00F2C3"
          />
        </svg>

        <span
          style={{
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#ffffff",
          }}
        >
          Next<span style={{ fontWeight: 400, color: "#e2e8f0" }}>Q</span>
        </span>
      </div>

      {/* КНОПКИ АВТОРИЗАЦІЇ */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        {/* Login */}
        <button
          onClick={onLogin}
          style={{
            padding: "9px 22px",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            color: "#e2e8f0",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s ease",
            backdropFilter: "blur(12px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            e.currentTarget.style.color = "#e2e8f0";
          }}
        >
          Login
        </button>

        {/* Start now */}
        <button
          onClick={onStart}
          style={{
            padding: "9px 24px",
            borderRadius: "9999px",
            backgroundColor: "#00F2C3",
            color: "#030807",
            fontSize: "14px",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 0 20px rgba(0, 242, 195, 0.25)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.backgroundColor = "#00dcb1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "#00F2C3";
          }}
        >
          Start now
        </button>
      </div>
    </header>
  );
}