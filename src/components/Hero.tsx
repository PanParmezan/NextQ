"use client";
import Image from "next/image"; // <-- Додай цей рядок

interface HeroProps {
  onStartTrial?: () => void;
}

export default function Hero({ onStartTrial }: HeroProps) {
  return (
    <section className="relative flex w-full min-h-screen flex-col items-center justify-center overflow-hidden pb-24 pt-[120px]">
{/* 2. ФОН З КАРТИНКИ */}
<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Контейнер для фону */}
        <div className="absolute inset-0 mx-auto w-full max-w-[1440px]">
          <Image
            src="/bg-aurora.png" // Назва твого файлу з папки public (обов'язково зі слешем / на початку)
            alt="Background"
            fill
            priority
            className="object-cover object-center opacity-90" 
          />
        </div>
      </div>
      {/* 3. ВНУТРІШНІЙ КОНТЕЙНЕР ДЛЯ КОНТЕНТУ (max-w-7xl) */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-between gap-12 px-8 lg:flex-row">
        
       {/* ЛІВА КОЛОНКА */}
        {/* Збільшили max-w-[750px] та lg:basis-[60%], щоб тексту вистачило місця по ширині */}
        <div className="relative z-10 max-w-[750px] flex-1 lg:basis-[60%]">
          {/* Бейдж */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/5 bg-gradient-to-r from-white/[0.15] to-transparent px-4 py-1.5 text-[13px] text-gray-300 backdrop-blur-md">
            {/* Збільшили розмір до text-[16px] та зробили яскраво-білим */}
            <span className="text-[16px] leading-none text-white">✦</span>
            <span>Your Gateway to Smarter Financial Decisions</span>
          </div>

          {/* Заголовок */}
          <h1 className="mb-6 text-[52px] font-normal leading-[0.98] tracking-[-0.05em] text-white md:text-[68px] lg:text-[78px]">
            Redefining <br />
            the Next Era <br />
            <span className="whitespace-nowrap">
              of{" "}
              {/* Для Digital скидаємо негативний трекінг (tracking-normal) і додаємо більший відступ справа (pr-2) */}
              <span className="font-serif italic font-light tracking-normal pr-2 text-gray-200">
                Digital
              </span>
              Finance
            </span>
          </h1>

          <p className="mb-10 max-w-[600px] text-[16px] leading-[1.6] text-gray-400 md:text-[17px]">
            Step into a platform built to transform how you interact with blockchain, <br className="hidden md:block" />
            DeFi, and the broader crypto ecosystem.
          </p>

          {/* CTA Кнопка */}
          <button
            onClick={onStartTrial}
            className="inline-flex cursor-pointer items-center gap-3 rounded-[14px] bg-[#00F2C3] px-5 py-3 text-[15px] font-medium text-[#040908] transition-all hover:bg-[#00d8ae] active:scale-95"
          >
            {/* Суцільний білий фон для кружечка та іконка зірочки */}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[14px] leading-none text-black shadow-sm">
              ✦
            </span>
            <span>Start free trial</span>
          </button>
        </div>

        {/* ПРАВА КОЛОНКА — КАРТКА ТА ІКОНКИ */}
        <div className="relative z-10 flex w-full justify-center lg:basis-[45%] lg:justify-end">
          
          <div className="flex w-full max-w-[430px] flex-col gap-3">
            
            {/* 1. ГОЛОВНА КАРТКА (Тільки баланс) */}
            <div className="w-full rounded-[32px] border border-white/[0.07] bg-white/[0.025] p-9 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
              {/* Верхній рядок */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm font-normal text-white/60">Wallet 1</span>
                <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-white/70">
                  <svg 
                    className="h-3 w-3 text-white/60" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>0x24534...23</span>
                </div>
              </div>

              {/* Баланс і відсоток */}
              <div className="flex items-end justify-between">
                <div>
                  <div className="mb-2 text-4xl font-normal leading-none tracking-[-0.02em] text-white md:text-[42px]">
                    $5,237.34
                  </div>
                  {/* Задали такий самий розмір (text-4xl md:text-[42px]), але залишили колір text-white/50 */}
                  <div className="text-4xl font-normal leading-none tracking-[-0.02em] text-white/50 md:text-[42px]">
                    $55.35
                  </div>
                </div>
                <div className="text-[32px] font-medium leading-none tracking-[-0.02em] text-[#00F2C3]">
                  +23%
                </div>
              </div>
            </div>

            {/* 2. КНОПКИ Receive / Transfer (ОКРЕМО) */}
            {/* Прибрано pr-9, тепер кнопки торкаються правої межі контейнера */}
            <div className="mt-1 flex justify-end gap-3">
              <button className="flex w-[135px] cursor-pointer items-center justify-between rounded-[24px] border border-white/[0.06] bg-white/[0.025] px-5 py-4 text-[13px] text-white shadow-lg backdrop-blur-2xl transition-colors hover:bg-white/[0.08]">
                <span>Receive</span>
                <span className="opacity-50">↓</span>
              </button>
              <button className="flex w-[135px] cursor-pointer items-center justify-between rounded-[24px] border border-white/[0.06] bg-white/[0.025] px-5 py-4 text-[13px] text-white shadow-lg backdrop-blur-2xl transition-colors hover:bg-white/[0.08]">
                <span>Transfer</span>
                <span className="opacity-50">↗</span>
              </button>
            </div>

            {/* 3. НИЖНІ КРУГЛІ ІКОНКИ */}
            {/* Прибрано pr-9, іконки ідеально вирівняні по правому краю картки */}
            <div className="flex items-center justify-end gap-3">
              <button className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-[#00F2C3] text-lg text-[#040908] transition-transform hover:scale-105">
                ⌂
              </button>
              {["⇄", "✉", "⚙"].map((icon, i) => (
                <button
                  key={i}
                  className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.025] text-base text-white/70 shadow-lg backdrop-blur-2xl transition-colors hover:bg-white/[0.09] hover:text-white"
                >
                  {icon}
                </button>
              ))}
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}