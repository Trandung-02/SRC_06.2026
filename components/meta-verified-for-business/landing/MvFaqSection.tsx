'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvFaqSection() {
  const t = useLandingStrings()
  const [openId, setOpenId] = React.useState<string | null>(t.faq.items[0]?.question ?? null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="mv-faq-title">
      <div className="mx-auto max-w-[720px] px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <h2 id="mv-faq-title" className="text-center text-[1.5rem] font-bold text-meta-text sm:text-[2rem]">
          {t.faq.title}
        </h2>

        <div className="mt-8 border-t border-meta-border-light">
          {t.faq.items.map((item) => {
            const isOpen = openId === item.question
            const panelId = `mv-faq-${item.question.slice(0, 12)}`

            return (
              <div key={item.question} className="mv-faq-item">
                <h3>
                  <button
                    type="button"
                    className="mv-faq-trigger flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] sm:text-[16px]"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.question)}
                  >
                    <span>{item.question}</span>
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-meta-bg-soft text-meta-blue transition-transform duration-200"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  hidden={!isOpen}
                  className="mv-faq-panel pb-4 text-[14px] leading-relaxed sm:text-[15px]"
                >
                  {item.answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
