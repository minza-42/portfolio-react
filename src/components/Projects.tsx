import projects from '../data/projects'
import ProjectCard from './ProjectCard'

type ProjectsProps = {
  language: 'en' | 'sv'
}

function Projects({ language }: ProjectsProps) {
  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p className="section-label">
          {language === 'en' ? 'Projects' : 'Projekt'}
        </p>

        <h2>
          {language === 'en' ? 'Selected projects' : 'Utvalda projekt'}
        </h2>

        <p>
          {language === 'en'
            ? 'A selection of projects I have built during my studies and personal development.'
            : 'Ett urval av projekt som jag har byggt under mina studier och min egen utveckling.'}
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            language={language}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects