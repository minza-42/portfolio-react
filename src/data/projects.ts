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
      en: "Minza's Sushi House",
      sv: "Minzas Sushi House",
    },
    description: {
      en: 'An interactive sushi e-commerce website built with JavaScript.',
      sv: 'En interaktiv sushi-webbshop byggd med JavaScript.',
    },
    image: '/src/assets/minzas-sushi-house.webp',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/minza-42',
  },

  {
    id: 2,
    title: {
      en: 'Budget App',
      sv: 'Budget App',
    },
    description: {
      en: 'A web application for keeping track of personal expenses and budgets.',
      sv: 'En webbapplikation för att hålla koll på personliga utgifter och budget.',
    },
    image: '/src/assets/budget-app.webp',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/minza-42',
  },

  {
    id: 3,
    title: {
      en: 'Anoteros',
      sv: 'Anoteros',
    },
    description: {
      en: 'A website rebuild project originally created with PHP.',
      sv: 'Ett projekt där en befintlig webbplats byggdes om med PHP.',
    },
    image: '/src/assets/anoteros.webp',
    tags: ['PHP', 'HTML', 'CSS'],
    github: 'https://github.com/minza-42',
  },

  {
    id: 4,
    title: {
      en: 'The Temple of Five',
      sv: 'The Temple of Five',
    },
    description: {
      en: 'A collaborative web project created during my frontend development studies.',
      sv: 'Ett grupprojekt som skapades under mina frontendstudier.',
    },
    image: '/src/assets/the-tempel-of-five.webp',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/minza-42',
  },

  {
    id: 5,
    title: {
      en: 'Arossnickeri',
      sv: 'Arossnickeri',
    },
    description: {
      en: 'A website rebuild project focused on creating a modern and responsive experience.',
      sv: 'Ett webbprojekt med fokus på en modern och responsiv upplevelse.',
    },
    image: '/src/assets/arossnickeri.webp',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/minza-42',
  },

  {
    id: 6,
    title: {
      en: 'Valentine Project',
      sv: 'Alla hjärtans dag-projekt',
    },
    description: {
      en: 'A creative and interactive web project built with frontend technologies.',
      sv: 'Ett kreativt och interaktivt webbprojekt byggt med frontendtekniker.',
    },
    image: '/src/assets/valentine_screenshot.webp',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/minza-42',
  },
]

export default projects