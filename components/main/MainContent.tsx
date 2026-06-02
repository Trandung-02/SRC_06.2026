'use client'

import React from 'react'

import MvBenefitsSection from '@/components/meta-verified-for-business/landing/MvBenefitsSection'
import MvFaqSection from '@/components/meta-verified-for-business/landing/MvFaqSection'
import MvFinalCta from '@/components/meta-verified-for-business/landing/MvFinalCta'
import MvHeroSection from '@/components/meta-verified-for-business/landing/MvHeroSection'
import MvStepsSection from '@/components/meta-verified-for-business/landing/MvStepsSection'

type MainContentProps = {
  handleOpenInfoModal: () => void
}

const MainContent = ({ handleOpenInfoModal }: MainContentProps) => {
  const handleActivate = () => {
    handleOpenInfoModal()
  }

  return (
    <main id="main-content" className="flex min-h-0 w-full flex-1 flex-col">
      <MvHeroSection onActivate={handleActivate} />
      <MvBenefitsSection />
      <MvStepsSection />
      <MvFinalCta onActivate={handleActivate} />
      <MvFaqSection />
    </main>
  )
}

export default MainContent
