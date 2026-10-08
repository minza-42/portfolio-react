type AboutProps = {
  language: 'en' | 'sv'
}

function About({ language }: AboutProps) {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <p className="section-label">
          {language === 'en' ? 'About me' : 'Om mig'}
        </p>

        <h2>
          {language === 'en'
            ? 'Frontend developer with a creative mindset.'
            : 'Frontendutvecklare med ett kreativt tänkande.'}
        </h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            {language === 'en'
              ? 'I’m a frontend development student at Medieinstitutet with a passion for creating modern, accessible and thoughtfully designed digital experiences.'
              : 'Jag studerar frontendutveckling på Medieinstitutet och brinner för att skapa moderna, tillgängliga och genomtänkta digitala upplevelser.'}
          </p>

          <p>
            {language === 'en'
              ? 'My path into development wasn’t a straight one. After studying animal care, I decided to change direction and follow my interest in technology, design and creativity. Gaming has also played a big part in developing my interest in interactive experiences, which eventually led me to frontend development and UX.'
              : 'Min väg till utveckling var inte rak. Efter att ha studerat djurvård valde jag att byta riktning och följa mitt intresse för teknik, design och kreativitet. Gaming har också spelat en stor roll i mitt intresse för interaktiva upplevelser, vilket så småningom ledde mig till frontendutveckling och UX.'}
          </p>

          <p>
            {language === 'en'
              ? 'I enjoy working at the intersection of technology and creativity. I’m curious, observant and hands-on, and I learn best by experimenting, solving real problems and continuously finding better ways to build user-friendly experiences.'
              : 'Jag trivs i skärningspunkten mellan teknik och kreativitet. Jag är nyfiken, observant och praktiskt lagd, och lär mig bäst genom att experimentera, lösa riktiga problem och hela tiden hitta bättre sätt att skapa användarvänliga upplevelser.'}
          </p>
        </div>

        <div className="about-details">
          <div className="about-detail">
            <span>
              {language === 'en' ? 'Based in' : 'Bor i'}
            </span>

            <strong>Uppsala, Sweden</strong>
          </div>

          <div className="about-detail">
            <span>
              {language === 'en' ? 'Education' : 'Utbildning'}
            </span>

            <strong>
              {language === 'en'
                ? 'Frontend Development — Medieinstitutet'
                : 'Frontendutveckling — Medieinstitutet'}
            </strong>
          </div>

          <div className="about-detail">
            <span>
              {language === 'en' ? 'Interested in' : 'Intresserad av'}
            </span>

            <strong>
              {language === 'en'
                ? 'AI, UX & Design'
                : 'AI, UX & Design'}
            </strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About