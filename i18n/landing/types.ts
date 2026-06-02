export type LandingBenefit = {
  title: string
  description: string
}

export type LandingPlanFeature = {
  text: string
  locked?: boolean
}

export type LandingPlan = {
  id: string
  name: string
  price: string
  categories: {
    title: string
    features: LandingPlanFeature[]
  }[]
}

export type LandingTestimonial = {
  quote: string
  author: string
  role: string
}

export type LandingFaqItem = {
  question: string
  answer: string
}

export type LandingFooterColumn = {
  title: string
  links: { label: string; href: string }[]
}

export type LandingStrings = {
  promo: {
    text: string
    learnMore: string
    learnMoreHref: string
  }
  hero: {
    title: string
    lead: string
    eligibility: string
    creatorPrefix: string
    creatorLink: string
    creatorHref: string
    cta: string
  }
  benefits: {
    title: string
    subtitle: string
    learnMore: string
    learnMoreHref: string
    items: LandingBenefit[]
  }
  pricing: {
    title: string
    subtitle: string
    perMonth: string
    cta: string
    plans: LandingPlan[]
  }
  steps: {
    title: string
    step1: string
    step2: string
    step3: string
  }
  testimonials: {
    title: string
    items: LandingTestimonial[]
    prevAria: string
    nextAria: string
  }
  finalCta: {
    title: string
    subtitle: string
    cta: string
  }
  faq: {
    title: string
    items: LandingFaqItem[]
  }
  newsletter: {
    title: string
    description: string
    emailLabel: string
    emailPlaceholder: string
    countryLabel: string
    countryPlaceholder: string
    privacyPrefix: string
    privacyLink: string
    submit: string
    privacyHref: string
  }
  footer: {
    copyright: string
    columns: LandingFooterColumn[]
  }
  nav: {
    signUp: string
  }
}
