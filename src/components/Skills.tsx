type SkillsProps = {
  language: "en" | "sv";
};

function Skills({ language }: SkillsProps) {
  const skillGroups = [
    {
      title: {
        en: "Frontend",
        sv: "Frontend",
      },
      skills: [
        "HTML",
        "CSS / SCSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Responsive Web Design",
        "UX/UI",
        "Accessibility",
      ],
    },
    {
      title: {
        en: "Backend & APIs",
        sv: "Backend & API:er",
      },
      skills: ["PHP", "Node.js & npm", "REST APIs"],
    },
    {
      title: {
        en: "Tools",
        sv: "Verktyg",
      },
      skills: [
        "Git & GitHub",
        "Vite",
        "VS Code",
        "Figma",
        "Postman / Insomnia",
      ],
    },
    {
      title: {
        en: "Other",
        sv: "Övrigt",
      },
      skills: [
        "C#",
        "Java",
        "Cybersecurity",
        "Agile / Scrum",
        "AI-assisted Development",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-heading">
        <p className="section-label">
          {language === "en" ? "Skills" : "Kompetenser"}
        </p>

        <h2>
          {language === "en"
            ? "Technologies I work with"
            : "Tekniker jag arbetar med"}
        </h2>

        <p>
          {language === "en"
            ? "A selection of technologies, tools and methods I have worked with during my studies and projects."
            : "Ett urval av tekniker, verktyg och metoder som jag har arbetat med under mina studier och projekt."}
        </p>
      </div>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title.en}>
            <h3>{group.title[language]}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
