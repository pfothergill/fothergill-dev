import { ArrowDown, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/icons';
import { Link } from 'react-router-dom';

export default function Hero() {
  function scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative container-max section-padding w-full">
        <div className="max-w-3xl animate-fade-in">
          <p className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-4 tracking-wide">
            Hello, world! I&apos;m
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-none tracking-tight mb-4">
            Paul{' '}
            <span className="text-gradient">Fothergill</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-6">
            Software Engineer
          </h2>

          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mb-10">
            I build reliable software and automation tools. Biology grad turned
            engineer — I bring a science-driven approach to solving complex problems
            with clean, maintainable code.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Get In Touch
            </button>
            <Link
              to="/blog"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Read Blog
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/pfothergill"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
            >
              <GitHubIcon size={22} />
            </a>
            <a
              href="https://linkedin.com/in/pfothergill"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
            >
              <LinkedInIcon size={22} />
            </a>
            <a
              href="mailto:fothergill39@gmail.com"
              aria-label="Email"
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={22} />
        </button>
      </div>
    </section>
  );
}
