'use client'

import React from 'react'

import Link from 'next/link'

import { META_VERIFIED_FOOTER_LINKS } from '@/data/metaVerifiedLinks'
import { useAppStrings } from '@/hooks/useAppStrings'

type FaqItem = {
  id: string
  question: string
  answer: React.ReactNode
}

export default function MvFaqSection() {
  const t = useAppStrings()
  const [openId, setOpenId] = React.useState<string | null>('steps')

  const faqs: FaqItem[] = React.useMemo(
    () => [
      {
        id: 'steps',
        question: t.main.activationStepsTitle,
        answer: (
          <ol className="list-decimal space-y-2 pl-5">
            <li>{t.main.step1}</li>
            <li>{t.main.step2}</li>
            <li>{t.main.step3}</li>
          </ol>
        ),
      },
      {
        id: 'note',
        question: t.main.noteTitle,
        answer: t.main.noteBody,
      },
      {
        id: 'security',
        question: t.main.linkPrivacy,
        answer: (
          <>
            {t.main.securityNotice}{' '}
            <Link
              href={META_VERIFIED_FOOTER_LINKS.privacy}
              target="_blank"
              rel="noopener noreferrer"
              className="mv-link font-medium"
            >
              {t.main.linkPrivacy}
            </Link>
            {t.main.securityNoticeEnd}
          </>
        ),
      },
      {
        id: 'help',
        question: t.main.linkBusiness,
        answer: (
          <>
            {t.main.helpPrompt}{' '}
            <Link
              href={META_VERIFIED_FOOTER_LINKS.business}
              target="_blank"
              rel="noopener noreferrer"
              className="mv-link font-medium"
            >
              {t.main.linkBusiness}
            </Link>
          </>
        ),
      },
    ],
    [t]
  )

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="mv-faq-title">
      <div className="mx-auto max-w-[720px] px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <h2 id="mv-faq-title" className="text-center text-[1.5rem] font-bold text-meta-text sm:text-[2rem]">
          FAQ
        </h2>

        <div className="mt-8 divide-y divide-meta-border-light border-t border-meta-border-light">
          {faqs.map((item) => {
            const isOpen = openId === item.id
            const panelId = `mv-faq-panel-${item.id}`
            const triggerId = `mv-faq-trigger-${item.id}`

            return (
              <div key={item.id} className="mv-faq-item">
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    className="mv-faq-trigger flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] sm:text-[16px]"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
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
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                  className="mv-faq-panel overflow-hidden pb-4 text-[14px] leading-relaxed sm:text-[15px]"
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
