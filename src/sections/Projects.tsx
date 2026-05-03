import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter(p => p.featured);
  const displayed = showAll ? projects : featured;

  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2 tracking-wide">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            A selection of personal, academic, and professional projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {!showAll && projects.length > featured.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
            >
              Show all {projects.length} projects
            </button>
          </div>
        )}

        <div className="text-center mt-6">
          <a
            href="https://github.com/pfothergill"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            View all repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
