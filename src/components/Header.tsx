"use client";

interface HeaderProps {
  onLogin?: () => void;
  onStart?: () => void;
}

export default function Header({ onLogin, onStart }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-8 pt-7 pb-3">
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
      {/* Спільна темна капсула, яка обгортає обидві кнопки */}
      <div className="flex items-center rounded-full border border-white/5 bg-white/[0.03] p-1 backdrop-blur-md">
        
        {/* Login */}
        <button
          onClick={onLogin}
          className="cursor-pointer px-5 py-2 text-[14px] font-medium text-white/70 transition-colors hover:text-white"
        >
          Login
        </button>

        {/* Start now */}
        {/* Замінили яскравий #00F2C3 на більш спокійний матовий #40D5B5 (м'ятний), як на макеті */}
        <button
          onClick={onStart}
          className="cursor-pointer rounded-full bg-[#40D5B5] px-6 py-2 text-[14px] font-medium text-[#040908] transition-all hover:bg-[#38C2A4] active:scale-95"
        >
          Start now
        </button>
        
      </div>
    </header>
  );
}