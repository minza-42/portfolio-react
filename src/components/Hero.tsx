import translations from '../data/translations'

type HeroProps = {
  translations: typeof translations.en
}

function Hero({ translations }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          {translations.hero.titleGreeting}
          <br />
          {translations.hero.titleIntro}{' '}
          <span>{translations.hero.name}</span>
        </h1>

        <p className="hero-role">
          {translations.hero.role}
        </p>

        <p className="hero-description">
          {translations.hero.description}
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            {translations.hero.viewWork}
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