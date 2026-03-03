import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    document.body.classList.add('modal-open');
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleEsc);
    };
  }, [project, onClose]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-titlebar">project_details.exe</div>
            <button className="modal-close" aria-label="Close modal" onClick={onClose}>
              <i className="fa-solid fa-xmark" />
            </button>
            <img
              className="modal-image"
              src={project.image.replace('/600/', '/720/')}
              alt={project.title}
            />
            <div className="modal-body">
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-description">{project.description}</p>
              <div className="modal-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="modal-role">
                <h4>My Role</h4>
                <p>{project.role}</p>
              </div>
              {project.background && (
                <div className="modal-role">
                  <h4>Background</h4>
                  <p>{project.background}</p>
                </div>
              )}
              {project.decisions && (
                <div className="modal-role">
                  <h4>Decisions</h4>
                  <p>{project.decisions}</p>
                </div>
              )}
              {project.results && (
                <div className="modal-role">
                  <h4>Results</h4>
                  <p>{project.results}</p>
                </div>
              )}
              <div className="modal-links">
                {project.github && (
                  <a href={project.github} className="modal-link-github">
                    <i className="fa-brands fa-github" /> GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="modal-link-live">
                    <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
