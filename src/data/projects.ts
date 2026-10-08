import sushiImage from '../assets/project-images/minzas-sushi-house.webp'
import budgetImage from '../assets/project-images/budget-app.webp'
import anoterosImage from '../assets/project-images/anoteros.webp'
import arossnickeriImage from '../assets/project-images/arossnickeri.webp'
import juniperImage from '../assets/project-images/juniper-ab.webp'
import templeImage from '../assets/project-images/the-tempel-of-five.webp'
import valentineImage from '../assets/project-images/valentine_screenshot.webp'

export type Project = {
  id: number
  title: {
    en: string
    sv: string
  }
  description: {
    en: string
    sv: string
  }
  image: string
  tags: string[]
  github?: string
  live?: string
}

const projects: Project[] = [

  {
    id: 1,
    title: {
      en: 'Anoteros',
      sv: 'Anoteros',
    },
    description: {
      en: 'Designed and developed a custom business website with a focus on responsive design, improved structure and modern UX. Deployed via FileZilla.',
      sv: 'Designade och utvecklade en anpassad affärswebbplats med fokus på responsiv design, förbättrad struktur och modern UX. Deployment via FileZilla.',
    },
    image: anoterosImage,
    tags: ['HTML', 'CSS', 'PHP'],
    github: 'https://github.com/minza-42',
    live: 'https://www.anoteros.eu/',
  },
  
  {
    id: 2,
    title: {
      en: 'Arossnickeri',
      sv: 'Arossnickeri',
    },
    description: {
      en: 'Rebuilt a company website from WordPress to a fully custom-coded solution. Focus on responsive design, accessibility and modern UX.',
      sv: 'Byggde om en företagswebbplats från WordPress till en helt specialkodad lösning. Fokus på responsiv design, tillgänglighet och modern UX.',
    },
    image: arossnickeriImage,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/minza-42',
    live: 'https://www.arossnickeri.se/',
  },
  
  {
    id: 3,
    title: {
      en: 'Juniper AB',
      sv: 'Juniper AB',
    },
    description: {
      en: 'A fictional Swedish company making alcohol-free botanical drinks. Received a Figma design and implemented it as a fully responsive website.',
      sv: 'Fiktivt svenskt företag för botaniska drycker. Tog emot en färdig Figma-design och implementerade den som en responsiv webbplats.',
    },
    image: juniperImage,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/minza-42',
    live: 'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-vector-graphics',
  },

  {
    id: 4,
    title: {
      en: 'The Temple of Five',
      sv: 'The Temple of Five',
    },
    description: {
      en: 'A collaborative digital escape room where players solve elemental puzzles. Built with TypeScript and SCSS featuring animations, dynamic sound and full keyboard access.',
      sv: 'Digitalt escape room-spel där spelare löser elementära pussel. TypeScript och SCSS med animationer, dynamiskt ljud, notspårning och full tangentbordsåtkomst.',
    },
    image: templeImage,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/minza-42',
    live: 'https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-pogo-stick-pioneers',
  },
  
  {
    id: 5,
    title: {
      en: 'Budget App',
      sv: 'Budget App',
    },
    description: {
      en: 'Modern budgeting app for tracking income, expenses and savings in real time. Includes data visualisation, PDF export and dark/light mode support.',
      sv: 'Modern budgeteringsapp för att spåra inkomster, utgifter och sparande i realtid. Inkluderar datavisualisering, PDF-export och mörk/light mode.',
    },
    image: budgetImage,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/minza-42',
    live: 'https://medieinstitutet.github.io/fed25d-js-inl-2-budget-app-minza-42/'
  },
  
  {
    id: 6,
    title: {
      en: "Minza's Sushi House",
      sv: "Minzas Sushi House",
    },
    description: {
      en: 'E-commerce app for sushi with dynamic cart management, filtering and form validation. Smart pricing logic, discount system and dark/light mode support.',
      sv: 'E-handelsapp för sushi med dynamisk varukorgshantering, filtrering och formulärvalidering. Smarta prissystem, rabattlogik och mörk/light mode.',
    },
    image: sushiImage,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/minza-42',
    live: 'https://medieinstitutet.github.io/fed25d-js-intro-inl-1-minza-42/',
  },

  {
    id: 7,
    title: {
      en: 'Valentine Project',
      sv: 'Alla hjärtans dag-projekt',
    },
    description: {
      en: 'Playful interactive webpage asking "Will you be my Valentine?" — with a fun twist. Animated buttons, responsive design and humorous interactive behaviour.',
      sv: 'Lekfull interaktiv webbsida, "Vill du vara min Valentin?" med en rolig twist. Animerade knappar, responsiv design och humoristiskt interaktivt beteende.',
    },
    image: valentineImage,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/minza-42',
  },
]

export default projects