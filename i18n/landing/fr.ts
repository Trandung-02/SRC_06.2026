import type { LandingStrings } from './types'

export const frLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: 'Commencer' },
      { label: 'Publicité' },
      { label: 'Apprendre' },
      { label: 'Assistance' },
    ],
    cta: 'Commencer',
    ctaAria: 'Commencer — activer Meta Verified for Business',
  },
  hero: {
    title: 'Montrez au monde que votre entreprise est sérieuse.',
    lead:
      'Meta Verified for Business vous aide à instaurer la confiance, protéger votre marque et renforcer votre présence sur Facebook, Instagram et WhatsApp.',
    eligibility:
      'Disponible pour les entreprises éligibles dans les pays et régions pris en charge. Les exigences et tarifs peuvent varier.',
    creatorPrefix: 'Vous êtes créateur·trice ?',
    creatorLink: 'En savoir plus sur Meta Verified pour les créateurs',
    cta: 'Activer',
    badgeAlt: 'Badge Meta Verified',
    videoAria: 'Vidéo de présentation Meta Verified for Business',
  },
  benefits: {
    title: 'Découvrez les avantages de Meta Verified for Business',
    subtitle:
      'Vérifiez l\'identité de votre entreprise et accédez à des outils pour vous connecter aux clients de manière plus crédible.',
    learnMore: 'En savoir plus',
    items: [
      {
        title: 'Badge vérifié',
        description:
          'Affichez le badge Meta Verified sur votre Page et le compte Instagram associé pour que les clients reconnaissent votre entreprise officielle.',
      },
      {
        title: 'Protection de l\'identité',
        description:
          'Surveillance renforcée contre l\'usurpation de marque et les comptes susceptibles de tromper les clients.',
      },
      {
        title: 'Assistance prioritaire',
        description:
          'Accédez à une assistance prioritaire pour votre Page, votre compte ou les questions liées à la vérification.',
      },
      {
        title: 'Crédibilité renforcée',
        description:
          'Montrez que vous avez terminé le processus de vérification Meta — un signal important lorsque les clients décident de faire confiance à votre marque.',
      },
      {
        title: 'Outils professionnels',
        description:
          'Utilisez des fonctionnalités conçues pour les entreprises vérifiées sur Facebook, Instagram et WhatsApp.',
      },
      {
        title: 'Croissance durable',
        description:
          'Construisez des relations durables avec vos clients sur les apps Meta qu\'ils utilisent au quotidien.',
      },
    ],
  },
  steps: {
    title: 'Activez Meta Verified for Business.',
    subtitle:
      'Notre processus de vérification vise à préserver l\'intégrité du badge vérifié pour les entreprises. Commencez par compléter vos informations d\'activation. Consultez la FAQ pour les tarifs et conditions.',
    items: [
      {
        title: 'Commencer l\'activation.',
        description:
          'Les entreprises souhaitant activer Meta Verified for Business doivent respecter certaines conditions d\'éligibilité (exigences pour Facebook et Instagram ; exigences pour WhatsApp). Au départ, préparez les coordonnées de votre entreprise.',
      },
      {
        title: 'Vérifier les informations de l\'entreprise.',
        description:
          'Dans le formulaire Informations d\'activation, indiquez le nom complet du représentant, l\'e-mail de contact, l\'e-mail professionnel, le nom de la Page/Fan Page, le numéro de téléphone et la date de naissance. Remplissez correctement tous les champs obligatoires pour finaliser l\'activation Meta Verified.',
      },
      {
        title: 'Examen.',
        description:
          'Nous examinerons votre demande et vous enverrons des mises à jour sur votre statut sous 3 jours ouvrés.',
      },
    ],
  },
  testimonials: {
    title: 'Ce que disent les entreprises',
    prevAria: 'Témoignage précédent',
    nextAria: 'Témoignage suivant',
    items: [
      {
        quote:
          'Le badge vérifié aide les clients à nous faire confiance dès la première interaction sur Facebook.',
        author: 'Lan Nguyen',
        role: 'Propriétaire de boutique de mode',
      },
      {
        quote:
          'Nous recevons moins de messages demandant « est-ce la page officielle ? » après l\'activation de Meta Verified.',
        author: 'Minh Tran',
        role: 'Directeur marketing',
      },
      {
        quote:
          'Le processus d\'activation était clair et l\'assistance rapide lorsque nous devions mettre à jour nos informations.',
        author: 'Huong Pham',
        role: 'Co-fondatrice d\'une marque beauté',
      },
    ],
  },
  finalCta: {
    title: 'Prêt à activer ?',
    subtitle:
      'Commencez dès aujourd\'hui à vérifier votre entreprise et montrez aux clients que vous êtes sérieux.',
    cta: 'Activer',
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      {
        question: 'Qu\'est-ce que Meta Verified for Business ?',
        answer:
          'Il s\'agit d\'un abonnement payant qui aide les entreprises éligibles à vérifier leur identité et à accéder au badge Meta Verified ainsi qu\'aux avantages de protection de marque sur les apps Meta.',
      },
      {
        question: 'Qui est éligible ?',
        answer:
          'Les entreprises doivent respecter les exigences d\'identité, d\'activité et les règles Meta. L\'éligibilité peut varier selon le pays.',
      },
      {
        question: 'Puis-je annuler mon forfait ?',
        answer:
          'Oui. Vous pouvez annuler ou modifier votre forfait dans les paramètres Meta Verified. Certains avantages peuvent se poursuivre jusqu\'à la fin de la période de facturation en cours.',
      },
      {
        question: 'Combien de temps dure l\'examen ?',
        answer:
          'L\'examen prend généralement de quelques jours à plusieurs semaines selon votre demande. Vous serez informé des mises à jour.',
      },
      {
        question: 'En quoi diffère-t-il de la vérification gratuite ?',
        answer:
          'Meta Verified for Business est un abonnement payant avec badge, protection de marque et assistance supplémentaire, distinct de la vérification gratuite dans certains contextes produits.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Technologies Meta',
        links: [{ label: 'Facebook' }, { label: 'Instagram' }, { label: 'WhatsApp' }],
      },
      {
        title: 'Outils',
        links: [{ label: 'Meta Business Suite' }, { label: 'Ads Manager' }],
      },
      {
        title: 'Assistance',
        links: [{ label: 'Centre d\'aide' }, { label: 'Meta Business Help' }],
      },
    ],
  },
}
