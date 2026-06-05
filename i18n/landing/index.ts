import type { AppLocale } from '../schema'
import { arLanding } from './ar'
import { csLanding } from './cs'
import { deLanding } from './de'
import { enLanding } from './en'
import { esLanding } from './es'
import { frLanding } from './fr'
import { heLanding } from './he'
import { idLanding } from './id'
import { itLanding } from './it'
import { jaLanding } from './ja'
import { koLanding } from './ko'
import { ptLanding } from './pt'
import { ruLanding } from './ru'
import { svLanding } from './sv'
import { thLanding } from './th'
import type { LandingStrings } from './types'
import { viLanding } from './vi'
import { zhHansLanding } from './zh-Hans'
import { zhHantLanding } from './zh-Hant'

const MESSAGES: Record<AppLocale, LandingStrings> = {
  en: enLanding,
  ar: arLanding,
  vi: viLanding,
  'zh-Hans': zhHansLanding,
  'zh-Hant': zhHantLanding,
  ja: jaLanding,
  ko: koLanding,
  th: thLanding,
  id: idLanding,
  es: esLanding,
  pt: ptLanding,
  fr: frLanding,
  de: deLanding,
  cs: csLanding,
  he: heLanding,
  it: itLanding,
  ru: ruLanding,
  sv: svLanding,
}

export type { LandingStrings } from './types'

export function getLandingStrings(locale: AppLocale): LandingStrings {
  return MESSAGES[locale] ?? enLanding
}
