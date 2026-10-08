"use client";

interface HeaderProps {
  onLogin?: () => void;
  onStart?: () => void;
}

export default function Header({ onLogin, onStart }: HeaderProps) {
  return (
    <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-8 pt-7 pb-3">
      {/* ЛОГОТИП NextQ */}
      <div className="flex cursor-pointer items-center gap-2.5 select-none">
        <svg
          className="h-7 w-7"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Внешний бирюзовый круг */}
          <circle
            cx="14"
            cy="14"
            r="12"
            stroke="#00F2C3"
            strokeWidth="2.4"
          />
          {/* Внутреннее кольцо / точка */}
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

        <span className="text-[22px] font-bold tracking-[-0.03em] text-white">
          Next<span className="font-normal text-slate-200">Q</span>
        </span>
      </div>

      {/* КНОПКИ АВТОРИЗАЦИИ */}
      <div className="flex items-center gap-3">
        {/* Login */}
        <button
          onClick={onLogin}
          className="cursor-pointer rounded-full border border-white/[0.08] bg-white/[0.05] px-[22px] py-[9px] text-sm font-medium text-slate-200 backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95"
        >
          Login
        </button>

        {/* Start now */}
        <button
          onClick={onStart}
          className="cursor-pointer rounded-full bg-[#00F2C3] px-6 py-[9px] text-sm font-bold text-[#030807] shadow-[0_0_20px_rgba(0,242,195,0.25)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#00dcb1] hover:shadow-[0_0_25px_rgba(0,242,195,0.4)] active:scale-95"
        >
          Start now
        </button>
      </div>
    </header>
  );
}