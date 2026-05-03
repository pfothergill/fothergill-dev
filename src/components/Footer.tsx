import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './icons';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="container-max section-padding py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Paul Fothergill. Built with React &amp; TypeScript.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/pfothergill"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/pfothergill"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="mailto:fothergill39@gmail.com"
              aria-label="Email"
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
