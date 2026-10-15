import translations from "../data/translations";

type FooterProps = {
  translations: typeof translations.en;
};

function Footer({ translations }: FooterProps) {
  return (
    <footer className="footer">
      <nav className="footer-navigation" aria-label="Footer navigation">
        <a href="#home">
          <span>{translations.navigation.home}</span>
        </a>

        <a href="#about">
          <span>{translations.navigation.about}</span>
        </a>

        <a href="#skills">
          <span>{translations.navigation.skills}</span>
        </a>

        <a href="#projects">
          <span>{translations.navigation.projects}</span>
        </a>

        <a href="#contact">
          <span>{translations.navigation.contact}</span>
        </a>
      </nav>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Minai Karlsson</p>
        <p>Built with React, TypeScript &amp; SCSS</p>
      </div>
    </footer>
  );
}

export default Footer;
