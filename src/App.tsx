import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import translations from "./data/translations";

type Language = "en" | "sv";

function App() {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

  return (
    <>
      <Header language={language} setLanguage={setLanguage} translations={t} />

      <main>
        <Hero translations={t} language={language} />

        <About language={language} />

        <Skills language={language} />

        <Projects language={language} />

        <Contact language={language} />
      </main>

      <Footer translations={t} />
    </>
  );
}

export default App;
