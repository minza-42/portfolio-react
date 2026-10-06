import translations from '../data/translations'

type Language = keyof typeof translations

type HeaderProps = {
  language: Language
  setLanguage: React.Dispatch<React.SetStateAction<Language>>
  translations: typeof translations.en
}

function Header({
  language,
  setLanguage,
  translations,
}: HeaderProps) {
  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'sv' : 'en')
  }

  return (
    <header className="header">
      <a href="#home" className="logo">
        MK
      </a>

      <nav className="navigation">
        <a href="#home">{translations.navigation.home}</a>
        <a href="#about">{translations.navigation.about}</a>
        <a href="#projects">{translations.navigation.projects}</a>
        <a href="#skills">{translations.navigation.skills}</a>
        <a href="#contact">{translations.navigation.contact}</a>

        <button
          className="language-button"
          onClick={handleLanguageChange}
        >
          {language === 'en' ? 'SV' : 'EN'}
        </button>
      </nav>
    </header>
  )
}

export default Header