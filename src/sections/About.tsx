import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-slate-900 section-padding">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Avatar */}
          <div className="shrink-0 animate-fade-in">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 p-1 shadow-xl shadow-indigo-500/20">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="/profile_picture.png"
                    alt="Paul Fothergill"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative dot */}
              <div className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-emerald-400 ring-4 ring-white dark:ring-slate-900" title="Available for opportunities" />
            </div>
          </div>

          {/* Bio */}
          <div className="animate-slide-up flex flex-col gap-6 max-w-2xl">
            <div>
              <p className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2 tracking-wide">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                I turn curiosity into code.
              </h2>
            </div>

            <div className="flex flex-col gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I&apos;m a software engineer with an unconventional background — a Biology degree
                from the <span className="text-slate-800 dark:text-slate-200 font-medium">University of Iowa</span>,
                where I fell in love with programming while automating genomics research pipelines.
                What started as a necessity became a career.
              </p>
              <p>
                Currently working at{' '}
                <span className="text-slate-800 dark:text-slate-200 font-medium">Principal Financial Group</span>,
                I build reliable software that helps real people. I&apos;m particularly
                passionate about automation, data pipelines, and developer tooling — anything that
                makes other engineers&apos; lives easier.
              </p>
              <p>
                When I&apos;m not writing code, I&apos;m probably reading about it, tinkering with
                side projects, or thinking about how computational biology is going to reshape
                medicine.
              </p>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                <MapPin size={14} className="text-indigo-500" />
                Iowa
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                <Briefcase size={14} className="text-indigo-500" />
                Principal Financial Group
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                <GraduationCap size={14} className="text-indigo-500" />
                B.S. Biology, University of Iowa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
