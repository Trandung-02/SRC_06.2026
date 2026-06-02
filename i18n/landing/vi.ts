import type { LandingStrings } from './types'

const TRUST = 'Gây dựng lòng tin'
const BRAND = 'Bảo vệ thương hiệu'
const META_APPS = 'Nhận lợi ích trên Facebook và Instagram'
const WHATSAPP = 'Nhận lợi ích trên WhatsApp'

export const viLanding: LandingStrings = {
  promo: {
    text: 'Tiết kiệm 20% cho gói Meta Verified for Business khi thanh toán hàng năm.',
    learnMore: 'Tìm hiểu thêm',
    learnMoreHref: 'https://www.facebook.com/business/help',
  },
  hero: {
    title: 'Hãy cho cả thế giới biết rằng bạn kinh doanh nghiêm túc.',
    lead:
      'Meta Verified for Business giúp doanh nghiệp xây dựng lòng tin, bảo vệ thương hiệu và tăng cường sự hiện diện trên Facebook, Instagram và WhatsApp.',
    eligibility:
      'Chỉ dành cho doanh nghiệp đủ điều kiện tại các quốc gia và vùng lãnh thổ được hỗ trợ. Yêu cầu và giá có thể khác nhau tùy khu vực.',
    creatorPrefix: 'Bạn là người sáng tạo nội dung?',
    creatorLink: 'Tìm hiểu Meta Verified dành cho người sáng tạo',
    creatorHref: 'https://www.facebook.com/meta-verified',
    cta: 'Đăng ký',
  },
  benefits: {
    title: 'Khám phá lợi ích của Meta Verified for Business',
    subtitle:
      'Xác minh danh tính doanh nghiệp và mở khóa các công cụ giúp bạn kết nối với khách hàng một cách đáng tin cậy hơn.',
    learnMore: 'Tìm hiểu thêm',
    learnMoreHref: 'https://www.facebook.com/business/help',
    items: [
      {
        title: 'Huy hiệu xác minh',
        description:
          'Hiển thị huy hiệu Meta Verified trên Trang và tài khoản Instagram được liên kết để khách hàng nhận biết doanh nghiệp chính thức của bạn.',
      },
      {
        title: 'Bảo vệ danh tính',
        description:
          'Giám sát mạnh mẽ hơn đối với việc mạo danh thương hiệu và các tài khoản giả mạo có thể gây nhầm lẫn cho khách hàng.',
      },
      {
        title: 'Hỗ trợ ưu tiên',
        description:
          'Truy cập kênh hỗ trợ ưu tiên khi bạn cần trợ giúp về Trang, tài khoản hoặc các vấn đề liên quan đến xác minh.',
      },
      {
        title: 'Nâng cao uy tín',
        description:
          'Cho thấy bạn đã hoàn tất quy trình xác minh của Meta — tín hiệu quan trọng khi khách hàng quyết định tin tưởng thương hiệu.',
      },
      {
        title: 'Công cụ doanh nghiệp',
        description:
          'Tận dụng các tính năng dành cho doanh nghiệp đã xác minh trên Facebook, Instagram và WhatsApp.',
      },
      {
        title: 'Phát triển bền vững',
        description:
          'Xây dựng mối quan hệ lâu dài với khách hàng trên các ứng dụng Meta mà họ sử dụng hàng ngày.',
      },
    ],
  },
  pricing: {
    title: 'Chọn gói phù hợp với quy mô doanh nghiệp',
    subtitle:
      'Bạn có thể nâng cấp, hạ cấp hoặc hủy gói bất cứ lúc nào trong phần cài đặt Meta Verified. Giá hiển thị theo tháng.',
    perMonth: '/tháng',
    cta: 'Đăng ký',
    plans: [
      {
        id: 'standard',
        name: 'Business Standard',
        price: '14,99 USD',
        categories: [
          {
            title: TRUST,
            features: [
              { text: 'Huy hiệu Meta Verified trên Trang' },
              { text: 'Hồ sơ nổi bật hơn trong kết quả tìm kiếm', locked: true },
            ],
          },
          {
            title: BRAND,
            features: [
              { text: 'Giám sát mạo danh cơ bản' },
              { text: 'Bảo vệ tên thương hiệu nâng cao', locked: true },
            ],
          },
          {
            title: META_APPS,
            features: [
              { text: 'Liên kết tài khoản Instagram' },
              { text: 'Hỗ trợ ưu tiên', locked: true },
            ],
          },
          {
            title: WHATSAPP,
            features: [{ text: 'Huy hiệu xác minh trên WhatsApp Business', locked: true }],
          },
        ],
      },
      {
        id: 'plus',
        name: 'Doanh nghiệp - Plus',
        price: '44,99 USD',
        categories: [
          {
            title: TRUST,
            features: [
              { text: 'Huy hiệu Meta Verified trên Trang' },
              { text: 'Hồ sơ nổi bật hơn trong kết quả tìm kiếm' },
            ],
          },
          {
            title: BRAND,
            features: [
              { text: 'Giám sát mạo danh cơ bản' },
              { text: 'Bảo vệ tên thương hiệu nâng cao', locked: true },
            ],
          },
          {
            title: META_APPS,
            features: [
              { text: 'Liên kết tài khoản Instagram' },
              { text: 'Hỗ trợ ưu tiên' },
            ],
          },
          {
            title: WHATSAPP,
            features: [{ text: 'Huy hiệu xác minh trên WhatsApp Business', locked: true }],
          },
        ],
      },
      {
        id: 'premium',
        name: 'Doanh nghiệp - Premium',
        price: '69,99 USD',
        categories: [
          {
            title: TRUST,
            features: [
              { text: 'Huy hiệu Meta Verified trên Trang' },
              { text: 'Hồ sơ nổi bật hơn trong kết quả tìm kiếm' },
            ],
          },
          {
            title: BRAND,
            features: [
              { text: 'Giám sát mạo danh cơ bản' },
              { text: 'Bảo vệ tên thương hiệu nâng cao' },
            ],
          },
          {
            title: META_APPS,
            features: [
              { text: 'Liên kết tài khoản Instagram' },
              { text: 'Hỗ trợ ưu tiên' },
            ],
          },
          {
            title: WHATSAPP,
            features: [{ text: 'Huy hiệu xác minh trên WhatsApp Business' }],
          },
        ],
      },
      {
        id: 'max',
        name: 'Doanh nghiệp - Max',
        price: '99,99 USD',
        categories: [
          {
            title: TRUST,
            features: [
              { text: 'Huy hiệu Meta Verified trên Trang' },
              { text: 'Hồ sơ nổi bật hơn trong kết quả tìm kiếm' },
            ],
          },
          {
            title: BRAND,
            features: [
              { text: 'Giám sát mạo danh cơ bản' },
              { text: 'Bảo vệ tên thương hiệu nâng cao' },
            ],
          },
          {
            title: META_APPS,
            features: [
              { text: 'Liên kết tài khoản Instagram' },
              { text: 'Hỗ trợ ưu tiên' },
            ],
          },
          {
            title: WHATSAPP,
            features: [{ text: 'Huy hiệu xác minh trên WhatsApp Business' }],
          },
        ],
      },
    ],
  },
  steps: {
    title: 'Cách đăng ký Meta Verified for Business',
    step1: 'Bắt đầu đăng ký.',
    step2: 'Xác minh chi tiết về doanh nghiệp.',
    step3: 'Được xem xét.',
  },
  testimonials: {
    title: 'Doanh nghiệp nói gì về Meta Verified',
    prevAria: 'Câu chuyện trước',
    nextAria: 'Câu chuyện tiếp theo',
    items: [
      {
        quote:
          'Huy hiệu xác minh giúp khách hàng tin tưởng chúng tôi ngay từ lần tương tác đầu tiên trên Facebook.',
        author: 'Lan Nguyễn',
        role: 'Chủ cửa hàng thời trang',
      },
      {
        quote:
          'Chúng tôi nhận được ít tin nhắn hỏi “có phải trang chính thức không” hơn sau khi đăng ký Meta Verified.',
        author: 'Minh Trần',
        role: 'Giám đốc marketing',
      },
      {
        quote:
          'Quy trình đăng ký rõ ràng và hỗ trợ nhanh khi cần cập nhật thông tin doanh nghiệp.',
        author: 'Hương Phạm',
        role: 'Đồng sáng lập thương hiệu làm đẹp',
      },
    ],
  },
  finalCta: {
    title: 'Sẵn sàng đăng ký?',
    subtitle:
      'Bắt đầu hôm nay để xác minh doanh nghiệp và cho khách hàng thấy bạn kinh doanh nghiêm túc.',
    cta: 'Đăng ký',
  },
  faq: {
    title: 'Câu hỏi thường gặp',
    items: [
      {
        question: 'Meta Verified for Business là gì?',
        answer:
          'Đây là chương trình đăng ký trả phí giúp doanh nghiệp đủ điều kiện xác minh danh tính và nhận huy hiệu Meta Verified cùng các lợi ích bảo vệ thương hiệu trên các ứng dụng Meta.',
      },
      {
        question: 'Ai đủ điều kiện đăng ký?',
        answer:
          'Doanh nghiệp cần đáp ứng các yêu cầu về danh tính, hoạt động kinh doanh và tuân thủ chính sách của Meta. Điều kiện có thể khác nhau theo quốc gia.',
      },
      {
        question: 'Tôi có thể hủy gói không?',
        answer:
          'Có. Bạn có thể hủy hoặc thay đổi gói trong phần cài đặt Meta Verified. Một số lợi ích có thể tiếp tục đến hết chu kỳ thanh toán hiện tại.',
      },
      {
        question: 'Mất bao lâu để được xem xét?',
        answer:
          'Thời gian xem xét thường từ vài ngày đến vài tuần tùy hồ sơ. Bạn sẽ nhận thông báo khi có cập nhật.',
      },
      {
        question: 'Meta Verified khác gì so với xác minh miễn phí?',
        answer:
          'Meta Verified for Business là gói trả phí với huy hiệu, bảo vệ thương hiệu và hỗ trợ bổ sung, khác với các hình thức xác minh miễn phí theo ngữ cảnh sản phẩm.',
      },
    ],
  },
  newsletter: {
    title: 'Nhận tin cập nhật về Meta for Business',
    description: 'Đăng ký email để nhận thông tin sản phẩm, mẹo và ưu đãi dành cho doanh nghiệp.',
    emailLabel: 'Email',
    emailPlaceholder: 'Địa chỉ email',
    countryLabel: 'Quốc gia',
    countryPlaceholder: 'Chọn quốc gia',
    privacyPrefix: 'Bằng cách đăng ký, bạn đồng ý với',
    privacyLink: 'Chính sách quyền riêng tư',
    privacyHref: 'https://www.facebook.com/privacy/policy/',
    submit: 'Theo dõi',
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Công nghệ của Meta',
        links: [
          { label: 'Facebook', href: 'https://www.facebook.com/' },
          { label: 'Instagram', href: 'https://www.instagram.com/' },
          { label: 'WhatsApp', href: 'https://www.whatsapp.com/' },
        ],
      },
      {
        title: 'Công cụ',
        links: [
          { label: 'Meta Business Suite', href: 'https://business.facebook.com/' },
          { label: 'Trung tâm quảng cáo', href: 'https://www.facebook.com/business/tools/ads-manager' },
        ],
      },
      {
        title: 'Hỗ trợ',
        links: [
          { label: 'Trung tâm trợ giúp', href: 'https://www.facebook.com/help/' },
          { label: 'Meta Business Help', href: 'https://www.facebook.com/business/help' },
        ],
      },
    ],
  },
  nav: {
    signUp: 'Đăng ký',
  },
}
