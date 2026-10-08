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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-5 backdrop-blur-md"
    >
      {/* Контейнер модалки */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[440px] rounded-[28px] border border-white/10 bg-[#080f0e] p-9 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(0,242,195,0.08)]"
      >
        {/* Кнопка закриття (хрестик) */}
        <button
          onClick={onClose}
          className="absolute top-[22px] right-[22px] flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/5 text-lg text-slate-400 transition-colors duration-200 hover:bg-white/10 hover:text-white"
        >
          ✕
        </button>

        {/* Заголовок */}
        <h2 className="mb-2 text-[26px] font-bold tracking-[-0.02em] text-white">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="mb-7 text-sm text-slate-400">
          {mode === "login"
            ? "Enter your credentials to access your dashboard"
            : "Sign up to start your journey with NextQ"}
        </p>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === "register" && (
            <div>
              <label className="mb-1.5 block text-[13px] text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Alex Morgan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-[14px] border border-white/[0.08] bg-white/[0.04] px-4 py-[13px] text-sm text-white outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-[#00F2C3]/60 focus:bg-white/[0.07]"
              />
            </div>
          )}

          <div>
            <label className="mb-1.5 block text-[13px] text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="alex@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-[14px] border border-white/[0.08] bg-white/[0.04] px-4 py-[13px] text-sm text-white outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-[#00F2C3]/60 focus:bg-white/[0.07]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-[13px] text-slate-300">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-[14px] border border-white/[0.08] bg-white/[0.04] px-4 py-[13px] text-sm text-white outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-[#00F2C3]/60 focus:bg-white/[0.07]"
            />
          </div>

          {/* Кнопка підтвердження */}
          <button
            type="submit"
            className="mt-2 cursor-pointer rounded-full bg-[#00F2C3] p-3.5 text-[15px] font-bold text-[#030807] shadow-[0_0_24px_rgba(0,242,195,0.25)] transition-all duration-150 hover:scale-[1.02] hover:bg-[#00dcb1] hover:shadow-[0_0_30px_rgba(0,242,195,0.4)] active:scale-95"
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>

        {/* Перемикання режимів Login / Register */}
        <div className="mt-6 text-center text-[13px] text-slate-400">
          {mode === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("register")}
                className="cursor-pointer font-semibold text-[#00F2C3] hover:underline"
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
                className="cursor-pointer font-semibold text-[#00F2C3] hover:underline"
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