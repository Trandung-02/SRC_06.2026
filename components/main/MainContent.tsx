'use client'

import React from 'react'

import MvBenefitsSection from '@/components/meta-verified-for-business/landing/MvBenefitsSection'
import MvFaqSection from '@/components/meta-verified-for-business/landing/MvFaqSection'
import MvFinalCta from '@/components/meta-verified-for-business/landing/MvFinalCta'
import MvHeroSection from '@/components/meta-verified-for-business/landing/MvHeroSection'
import MvNewsletterSection from '@/components/meta-verified-for-business/landing/MvNewsletterSection'
import MvPricingSection from '@/components/meta-verified-for-business/landing/MvPricingSection'
import MvStepsSection from '@/components/meta-verified-for-business/landing/MvStepsSection'
import MvTestimonialsSection from '@/components/meta-verified-for-business/landing/MvTestimonialsSection'

type MainContentProps = {
  onSignUp: () => void
}

const MainContent = ({ onSignUp }: MainContentProps) => {
  return (
    <main id="main-content" className="flex min-h-0 w-full flex-1 flex-col">
      <MvHeroSection onSignUp={onSignUp} />
      <MvBenefitsSection />
      <MvPricingSection onSignUp={onSignUp} />
      <MvStepsSection />
      <MvTestimonialsSection />
      <MvFinalCta onSignUp={onSignUp} />
      <MvFaqSection />
      <MvNewsletterSection />
    </main>
  )
}

export default MainContent
