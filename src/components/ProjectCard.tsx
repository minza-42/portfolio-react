import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  language: 'en' | 'sv'
}

function ProjectCard({ project, language }: ProjectCardProps) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.title[language]}
        className="project-image"
      />

      <div className="project-content">
        <h3>{project.title[language]}</h3>

        <p>{project.description[language]}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span
            key={tag}
            className="project-tag"
            data-tag={tag}
          >
            {tag}
          </span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard