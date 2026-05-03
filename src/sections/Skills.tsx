import { useState } from 'react';
import { skills } from '../data/skills';
import type { Skill } from '../types';

type Category = 'All' | Skill['category'];

const categories: Category[] = ['All', 'Language', 'Framework', 'Tool', 'Cloud', 'Database'];

const levelColors = {
  Expert: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900',
  Proficient: 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900',
  Familiar: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700',
};

const levelDots = {
  Expert: 3,
  Proficient: 2,
  Familiar: 1,
};

export default function Skills() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2 tracking-wide">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Skills &amp; Tools
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Languages, frameworks, and tools I work with regularly.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map(skill => (
            <div
              key={skill.name}
              className={`card p-4 flex flex-col gap-2 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-medium text-sm text-slate-800 dark:text-slate-200 leading-tight">
                  {skill.name}
                </span>
                <div className="flex gap-0.5 shrink-0 pt-0.5">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i < levelDots[skill.level]
                          ? 'bg-indigo-500'
                          : 'bg-slate-200 dark:bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-500">
                  {skill.category}
                </span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium ${levelColors[skill.level]}`}
                >
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-slate-500 dark:text-slate-500">
          {(Object.entries(levelDots) as [keyof typeof levelDots, number][]).map(([label, dots]) => (
            <div key={label} className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      i < dots ? 'bg-indigo-500' : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  />
                ))}
              </div>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
