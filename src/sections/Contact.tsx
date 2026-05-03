import { Mail, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/icons';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'fothergill39@gmail.com',
    href: 'mailto:fothergill39@gmail.com',
    description: 'Best way to reach me',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/pfothergill',
    href: 'https://github.com/pfothergill',
    description: 'Code & open source',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pfothergill',
    href: 'https://linkedin.com/in/pfothergill',
    description: 'Professional network',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2 tracking-wide">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Whether you have a project in mind, a question, or just want to say hi —
            my inbox is always open. I&apos;ll do my best to get back to you promptly.
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-3 text-sm text-slate-500 dark:text-slate-500">
            <MapPin size={14} className="text-emerald-500" />
            Based in Iowa — open to remote opportunities
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {links.map(({ icon: Icon, label, value, href, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="card p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950 transition-colors">
                <Icon size={22} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm mb-0.5">
                  {label}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">{description}</p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono break-all">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
