import type { LandingStrings } from './types'

export const zhHansLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: '开始使用' },
      { label: '投放广告' },
      { label: '学习' },
      { label: '支持' },
    ],
    cta: '开始使用',
    ctaAria: '开始使用 — 激活 Meta Verified for Business',
  },
  hero: {
    title: '向世界展示你认真经营业务。',
    lead:
      'Meta Verified for Business 帮助你在 Facebook、Instagram 和 WhatsApp 上建立信任、保护品牌并提升影响力。',
    eligibility:
      '适用于支持国家和地区中符合条件的商家。要求和价格可能因地区而异。',
    creatorPrefix: '你是创作者吗？',
    creatorLink: '了解面向创作者的 Meta Verified',
    cta: '激活',
    badgeAlt: 'Meta Verified 徽章',
    videoAria: 'Meta Verified for Business 介绍视频',
  },
  benefits: {
    title: '了解 Meta Verified for Business 的优势',
    subtitle: '验证商家身份，解锁更可信地与客户建立联系的工具。',
    learnMore: '了解更多',
    items: [
      {
        title: '认证徽章',
        description:
          '在你的公共主页和关联 Instagram 账户上显示 Meta Verified 徽章，让客户识别你的官方商家。',
      },
      {
        title: '身份保护',
        description: '加强对品牌冒充和可能让客户困惑的账户的监控。',
      },
      {
        title: '优先支持',
        description: '在公共主页、账户或认证相关问题上获得优先支持。',
      },
      {
        title: '提升信誉',
        description:
          '表明你已完成 Meta 的认证流程——这是客户决定是否信任你的品牌的重要信号。',
      },
      {
        title: '商家工具',
        description: '使用为 Facebook、Instagram 和 WhatsApp 上已认证商家设计的功能。',
      },
      {
        title: '可持续增长',
        description: '在客户每天使用的 Meta 应用中建立长期关系。',
      },
    ],
  },
  steps: {
    title: '激活 Meta Verified for Business。',
    subtitle:
      '我们的认证流程旨在维护面向商家的认证徽章的公信力。请先完成激活信息。有关价格和条件的详情，请参阅常见问题。',
    items: [
      {
        title: '开始激活。',
        description:
          '希望激活 Meta Verified for Business 的商家须满足特定资格条件（Facebook 和 Instagram 的要求；WhatsApp 的要求）。开始前，请准备好商家的联系信息。',
      },
      {
        title: '验证商家详细信息。',
        description:
          '在激活信息表单中，需提供代表人全名、联系邮箱、企业邮箱、公共主页/粉丝专页名称、电话号码和出生日期。请准确填写所有必填项以完成 Meta Verified 激活。',
      },
      {
        title: '等待审核。',
        description: '我们将审核你的申请，并在 3 个工作日内发送状态更新。',
      },
    ],
  },
  testimonials: {
    title: '商家怎么说',
    prevAria: '上一条',
    nextAria: '下一条',
    items: [
      {
        quote: '认证徽章帮助我们在 Facebook 上的第一次互动就赢得客户信任。',
        author: 'Lan Nguyen',
        role: '时尚零售店主',
      },
      {
        quote: '激活 Meta Verified 后，询问「这是官方主页吗？」的消息变少了。',
        author: 'Minh Tran',
        role: '营销总监',
      },
      {
        quote: '激活流程清晰，需要更新商家信息时支持也很及时。',
        author: 'Huong Pham',
        role: '美妆品牌联合创始人',
      },
    ],
  },
  finalCta: {
    title: '准备好激活了吗？',
    subtitle: '立即开始验证你的商家，向客户展示你认真经营业务。',
    cta: '激活',
  },
  faq: {
    title: '常见问题',
    items: [
      {
        question: '什么是 Meta Verified for Business？',
        answer:
          '这是一项付费订阅，帮助符合条件的商家验证身份，并获得 Meta Verified 徽章及 Meta 应用中的品牌保护权益。',
      },
      {
        question: '谁有资格？',
        answer: '商家须满足身份、活动和 Meta 政策要求。资格可能因国家/地区而异。',
      },
      {
        question: '可以取消套餐吗？',
        answer:
          '可以。你可以在 Meta Verified 设置中取消或更改套餐。部分权益可能持续至当前计费周期结束。',
      },
      {
        question: '审核需要多久？',
        answer: '审核通常需要数天到数周，具体取决于你的申请。有更新时会通知你。',
      },
      {
        question: '与免费认证有何不同？',
        answer:
          'Meta Verified for Business 是包含徽章、品牌保护和额外支持的付费订阅，与特定产品场景中的免费认证不同。',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Meta 技术',
        links: [{ label: 'Facebook' }, { label: 'Instagram' }, { label: 'WhatsApp' }],
      },
      {
        title: '工具',
        links: [{ label: 'Meta Business Suite' }, { label: 'Ads Manager' }],
      },
      {
        title: '支持',
        links: [{ label: '帮助中心' }, { label: 'Meta Business Help' }],
      },
    ],
  },
}
