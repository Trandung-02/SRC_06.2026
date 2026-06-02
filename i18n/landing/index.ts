import type { AppLocale } from '../schema'
import { enLanding } from './en'
import type { LandingStrings } from './types'
import { viLanding } from './vi'

const MESSAGES: Partial<Record<AppLocale, LandingStrings>> = {
  vi: viLanding,
  en: enLanding,
}

export type { LandingStrings } from './types'

export function getLandingStrings(locale: AppLocale): LandingStrings {
  return MESSAGES[locale] ?? enLanding
}
