import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import translations from './data/translations'

type Language = 'en' | 'sv'

function App() {
  const [language, setLanguage] = useState<Language>('en')

  const t = translations[language]

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        translations={t}
      />

      <main>
        <Hero
          translations={t}
          language={language}
        />

        <Projects language={language} />
      </main>
    </>
  )
}

export default App