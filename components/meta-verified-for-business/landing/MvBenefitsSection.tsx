'use client'

import React from 'react'

import { useAppStrings } from '@/hooks/useAppStrings'

type FeatureItem = {
  icon: string
  titleKey: 'feature1Title' | 'feature2Title' | 'feature3Title' | 'feature4Title' | 'feature5Title' | 'feature6Title'
  descKey: 'feature1Desc' | 'feature2Desc' | 'feature3Desc' | 'feature4Desc' | 'feature5Desc' | 'feature6Desc'
  iconClass?: string
}

const FEATURES: FeatureItem[] = [
  { icon: '/images/icons/ic_advanced.svg', titleKey: 'feature1Title', descKey: 'feature1Desc', iconClass: 'h-5 w-5' },
  { icon: '/images/icons/ic_blue.svg', titleKey: 'feature2Title', descKey: 'feature2Desc', iconClass: 'h-5 w-5' },
  { icon: '/images/icons/ic_mess.svg', titleKey: 'feature3Title', descKey: 'feature3Desc' },
  { icon: '/images/icons/ic_topics.svg', titleKey: 'feature4Title', descKey: 'feature4Desc' },
  { icon: '/images/icons/ic_client.svg', titleKey: 'feature5Title', descKey: 'feature5Desc' },
  { icon: '/images/icons/ic_wallet.svg', titleKey: 'feature6Title', descKey: 'feature6Desc' },
]

export default function MvBenefitsSection() {
  const t = useAppStrings()

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="mv-benefits-title">
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="mx-auto max-w-[720px] text-center lg:mx-0 lg:text-left">
          <h2
            id="mv-benefits-title"
            className="text-[1.5rem] font-bold leading-tight text-meta-text sm:text-[2rem]"
          >
            {t.main.featuresTitle}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-meta-text-body sm:text-[16px]">
            {t.main.programScope}
          </p>
        </div>

        <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {FEATURES.map(({ icon, titleKey, descKey, iconClass }) => (
            <li key={titleKey}>
              <article className="mv-benefit-card flex h-full flex-col p-5 transition-[border-color,box-shadow] duration-200 sm:p-6">
                <h3 className="mb-3 flex items-center gap-2 text-[15px] font-bold text-meta-text sm:text-[16px]">
                  <img
                    src={icon}
                    className={`${iconClass ?? 'h-[18px] w-[18px]'} shrink-0`}
                    alt=""
                    aria-hidden
                  />
                  <span>{t.main[titleKey]}</span>
                </h3>
                <p className="text-[14px] leading-[1.65] text-meta-text-body">{t.main[descKey]}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
