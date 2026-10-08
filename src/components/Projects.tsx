import { useState } from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

type ProjectsProps = {
  language: 'en' | 'sv'
}

function Projects({ language }: ProjectsProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = [...new Set(projects.flatMap((project) => project.tags))]

  const toggleTag = (tag: string) => {
    setSelectedTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((currentTag) => currentTag !== tag)
        : [...currentTags, tag],
    )
  }

  const clearFilters = () => {
    setSelectedTags([])
  }

  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTags.every((tag) => project.tags.includes(tag)),
        )

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

      <div className="project-filters">
        {allTags.map((tag) => (
          <button
          key={tag}
          type="button"
          className={selectedTags.includes(tag) ? 'active' : ''}
          data-tag={tag}
          onClick={() => toggleTag(tag)}
          >
            {tag}
            </button>
        ))}

        {selectedTags.length > 0 && (
          <button
            type="button"
            className="clear-filter"
            onClick={clearFilters}
          >
            {language === 'en' ? 'Clear filters' : 'Rensa filter'}
          </button>
        )}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
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