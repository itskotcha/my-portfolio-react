// src/components/Projects/ProjectCard.jsx
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ project }) {
  const { title, description, image, technologies, demoUrl, githubUrl } = project;

  return (
    <article className="project-card">
      <div className="project-thumb">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="img-fallback">No Image</div>
        )}
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        {technologies?.length && (
          <ul className="tech-list">
            {technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        )}
        <div className="project-actions">
          {demoUrl && (
            <a
              className="btn-primary"
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} /> Live
            </a>
          )}
          {githubUrl && (
            <a
              className="btn-secondary"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;