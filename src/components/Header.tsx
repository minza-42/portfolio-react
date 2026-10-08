import { useState, type Dispatch, type SetStateAction } from "react";
import translations from "../data/translations";

type HeaderProps = {
  language: "en" | "sv";
  setLanguage: Dispatch<SetStateAction<"en" | "sv">>;
  translations: typeof translations.en;
};

function Header({ language, setLanguage, translations }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "sv" : "en"));
  };

  return (
    <header className="header">
      <a href="#home" className="logo" onClick={closeMenu}>
        MK
      </a>

      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          {translations.navigation.home}
        </a>

        <a href="#about" onClick={closeMenu}>
          {translations.navigation.about}
        </a>

        <a href="#skills" onClick={closeMenu}>
          {translations.navigation.skills}
        </a>

        <a href="#projects" onClick={closeMenu}>
          {translations.navigation.projects}
        </a>

        <a href="#contact" onClick={closeMenu}>
          {translations.navigation.contact}
        </a>
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="language-toggle"
          onClick={toggleLanguage}
        >
          {language === "en" ? "SV" : "EN"}
        </button>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
