"use client";

import { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "register";
}

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = "login",
}: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      mode === "login"
        ? `Вхід успішний для: ${email}`
        : `Акаунт створено для: ${name} (${email})`
    );
    onClose();
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        padding: "20px",
      }}
    >
      {/* Контейнер модалки */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "440px",
          backgroundColor: "#080f0e",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "28px",
          padding: "36px",
          position: "relative",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 242, 195, 0.08)",
        }}
      >
        {/* Кнопка закриття (хрестик) */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "22px",
            right: "22px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "none",
            color: "#94a3b8",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#94a3b8";
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
          }}
        >
          ✕
        </button>

        {/* Заголовок */}
        <h2
          style={{
            fontSize: "26px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            marginBottom: "8px",
          }}
        >
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#94a3b8",
            marginBottom: "28px",
          }}
        >
          {mode === "login"
            ? "Enter your credentials to access your dashboard"
            : "Sign up to start your journey with NextQ"}
        </p>

        {/* Форма */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {mode === "register" && (
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "#cbd5e1",
                  marginBottom: "6px",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Alex Morgan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 16px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>
          )}

          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#cbd5e1",
                marginBottom: "6px",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="alex@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "13px 16px",
                borderRadius: "14px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#ffffff",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#cbd5e1",
                marginBottom: "6px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "13px 16px",
                borderRadius: "14px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#ffffff",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>

          {/* Кнопка підтвердження */}
          <button
            type="submit"
            style={{
              marginTop: "8px",
              padding: "14px",
              borderRadius: "9999px",
              backgroundColor: "#00F2C3",
              color: "#030807",
              fontSize: "15px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 24px rgba(0, 242, 195, 0.25)",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>

        {/* Перемикання режимів Login / Register */}
        <div
          style={{
            marginTop: "24px",
            textAlign: "center",
            fontSize: "13px",
            color: "#94a3b8",
          }}
        >
          {mode === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("register")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#00F2C3",
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#00F2C3",
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}