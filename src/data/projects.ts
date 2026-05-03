import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'mcclintock',
    title: 'McClintock Pipeline',
    description:
      'A meta-pipeline that identifies transposable element (TE) insertions using next-generation sequencing data. Integrates multiple TE detection tools for comprehensive, reproducible genomic analysis.',
    tags: ['Shell', 'Python', 'Bioinformatics', 'Genomics', 'Linux'],
    githubUrl: 'https://github.com/pfothergill/mcclintock',
    featured: true,
  },
  {
    id: 'mcclintock-figure',
    title: 'McClintock Figure Recreation',
    description:
      'Programmatic recreation of Figure 5 from the McClintock publication using pipeline output data. Demonstrates data visualization techniques for genomic transposable element analysis results.',
    tags: ['JavaScript', 'Data Visualization', 'Bioinformatics', 'Research'],
    githubUrl: 'https://github.com/pfothergill/McClintock-Pipeline-Figure-5-Recreation',
    featured: true,
  },
  {
    id: 'ciphers-and-codes',
    title: 'Ciphers & Codes in Python',
    description:
      'An exploration of classic cipher techniques — Caesar, Vigenère, ROT13, and more — all implemented from scratch in Python 3. Great for learning cryptographic fundamentals.',
    tags: ['Python', 'Cryptography', 'Algorithms'],
    githubUrl: 'https://github.com/pfothergill/ciphers-and-codes-using-python',
    featured: true,
  },
  {
    id: 'cs50',
    title: 'CS50 Problem Sets',
    description:
      "Solutions and projects from Harvard's CS50 Introduction to Computer Science. Covers memory management in C, Python scripting, SQL databases, and full-stack web development.",
    tags: ['C', 'Python', 'SQL', 'Web Development'],
    githubUrl: 'https://github.com/pfothergill/cs50',
    featured: false,
  },
  {
    id: 'git-workshop',
    title: 'Git & GitHub Workshop',
    description:
      'A hands-on educational resource developed for a University of Iowa workshop. Walks students through branching, merging, pull requests, and collaborative development workflows.',
    tags: ['Git', 'GitHub', 'Education', 'Documentation'],
    githubUrl: 'https://github.com/pfothergill/git_workshop',
    featured: false,
  },
  {
    id: 'python-practice',
    title: 'Python Practice',
    description:
      'A curated collection of Python 3 scripts and examples covering common programming patterns, data structures, algorithms, and real-world automation tasks.',
    tags: ['Python', 'Algorithms', 'Automation'],
    githubUrl: 'https://github.com/pfothergill/python_practice',
    featured: false,
  },
];
