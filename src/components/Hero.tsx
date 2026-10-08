"use client";

interface HeroProps {
  onStartTrial?: () => void;
}

export default function Hero({ onStartTrial }: HeroProps) {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl flex-col items-center justify-between gap-12 px-8 py-10 pb-24 lg:flex-row">
      {/* Нахилені світлові лінії / Aurora Waves */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Основна нахилена бірюзова смуга */}
        <div className="absolute -top-[15%] left-[48%] h-[140%] w-[280px] -rotate-[28deg] bg-gradient-to-b from-transparent via-[#00F2C3]/[0.28] to-transparent opacity-85 blur-[55px]" />

        {/* Смарагдова смуга для глибини */}
        <div className="absolute -top-[20%] left-[62%] h-[140%] w-[220px] -rotate-[28deg] bg-gradient-to-b from-transparent via-emerald-600/20 to-transparent opacity-70 blur-[75px]" />

        {/* Тонкий направлений промінь */}
        <div className="absolute top-[10%] left-[42%] h-[110%] w-[120px] -rotate-[26deg] bg-gradient-to-b from-transparent via-[#00F2C3]/20 to-transparent blur-[35px]" />
      </div>

      {/* Кругове світіння позаду */}
      <div className="pointer-events-none absolute right-[35%] bottom-[10%] z-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,_rgba(13,148,136,0.18)_0%,_rgba(5,11,10,0)_70%)] blur-[80px]" />

      {/* ЛІВА КОЛОНКА */}
      <div className="relative z-10 max-w-[620px] flex-1 lg:basis-[55%]">
        {/* Бейдж */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-[13px] text-slate-400 backdrop-blur-md">
          <span className="text-xs text-[#00F2C3]">✦</span>
          <span>Your Gateway to Smarter Financial Decisions</span>
        </div>

        {/* Заголовок */}
        <h1 className="mb-6 text-5xl font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-[68px]">
          Redefining <br />
          the Next Era <br />
          of{" "}
          <span className="font-normal italic text-slate-200">
            Digital Finance
          </span>
        </h1>

        {/* Опис */}
        <p className="mb-9 max-w-[500px] text-[17px] leading-relaxed text-slate-400">
          Step into a platform built to transform how you interact with blockchain, DeFi, and the broader crypto ecosystem.
        </p>

        {/* CTA Кнопка */}
        <button
          onClick={onStartTrial}
          className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#00F2C3] px-7 py-3.5 text-[15px] font-bold text-[#040908] shadow-[0_0_30px_rgba(0,242,195,0.25)] transition-all hover:bg-[#00d8ae] hover:shadow-[0_0_35px_rgba(0,242,195,0.4)] active:scale-95"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-black/40 text-[13px] leading-none">
            +
          </span>
          <span>Start free trial</span>
        </button>
      </div>

      {/* ПРАВА КОЛОНКА — КАРТКА */}
      <div className="relative z-10 flex w-full justify-center lg:basis-[45%] lg:justify-end">
        <div className="w-full max-w-[430px] rounded-[32px] border border-white/[0.07] bg-white/[0.025] p-9 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          {/* Верхній рядок */}
          <div className="mb-10 flex items-center justify-between">
            <span className="text-sm text-white/60">Wallet 1</span>
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-white/70">
              <span className="text-[11px]">🔒</span>
              <span>0x24534...23</span>
            </div>
          </div>

          {/* Баланс і відсоток */}
          <div className="mb-9 flex items-baseline justify-between">
            <div>
              <div className="mb-2 text-4xl font-bold leading-none tracking-[-0.02em] text-white md:text-[40px]">
                $5,237.34
              </div>
              <div className="text-[17px] text-white/45">$55.35</div>
            </div>
            <div className="text-[34px] font-semibold tracking-[-0.02em] text-[#00F2C3]">
              +23%
            </div>
          </div>

          {/* Кнопки Receive / Transfer */}
          <div className="mb-8 flex gap-3">
            <button className="flex flex-1 cursor-pointer items-center justify-between rounded-[14px] border border-white/[0.06] bg-white/[0.04] px-4.5 py-3.5 text-sm text-white transition-colors hover:bg-white/[0.08]">
              <span>Receive</span>
              <span className="opacity-50">↓</span>
            </button>
            <button className="flex flex-1 cursor-pointer items-center justify-between rounded-[14px] border border-white/[0.06] bg-white/[0.04] px-4.5 py-3.5 text-sm text-white transition-colors hover:bg-white/[0.08]">
              <span>Transfer</span>
              <span className="opacity-50">↗</span>
            </button>
          </div>

          {/* Нижні іконки навігації */}
          <div className="flex items-center justify-between">
            <button className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#00F2C3] text-lg text-[#040908] shadow-[0_0_16px_rgba(0,242,195,0.35)] transition-transform hover:scale-105">
              ⌂
            </button>
            {["⇄", "✉", "⚙"].map((icon, i) => (
              <button
                key={i}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.04] text-base text-white/70 transition-colors hover:bg-white/[0.09] hover:text-white"
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