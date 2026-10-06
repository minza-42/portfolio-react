import translations from '../data/translations'

import cvEnglish from '../assets/cv/Minai-Karlsson-CV-EN.pdf'
import cvSwedish from '../assets/cv/Minai-Karlsson-CV-SV.pdf'


type HeroProps = {
  translations: typeof translations.en
  language: 'en' | 'sv'
}

function Hero({ translations, language }: HeroProps) {
  const cv = language === 'en' ? cvEnglish : cvSwedish

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          {translations.hero.titleGreeting}
          <br />
          <span>
            {translations.hero.titleIntro}{' '}
            {translations.hero.name}
          </span>
        </h1>

        <p className="hero-role">
          {translations.hero.role}
        </p>

        <p className="hero-description">
          {translations.hero.description}
        </p>

        <div className="hero-buttons">
          <a
            href={cv}
            download
          >
            {translations.hero.downloadCV}
          </a>

          <a href="#contact">
            {translations.hero.contact}
          </a>
        </div>
      </div>

      <div className="hero-code">
        <div className="code-header">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <pre>
{`const developer = {
  name: "Minai",
  role: "Frontend Developer",
  skills: [
    "HTML",
    "CSS / SCSS",
    "JavaScript",
    "React",
    "TypeScript"
  ]
}`}
        </pre>
      </div>
    </section>
  )
}

export default Hero