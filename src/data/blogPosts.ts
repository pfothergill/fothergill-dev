import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'biology-to-software-engineer',
    title: 'From Biology Grad to Software Engineer: My Journey',
    date: '2024-03-20',
    excerpt:
      'How a Biology degree from the University of Iowa unexpectedly launched a career in software engineering — and why that science background turned out to be a superpower.',
    tags: ['Career', 'Personal'],
    readTime: 6,
    content: [
      {
        type: 'paragraph',
        text: "When people discover I have a Biology degree from the University of Iowa, they often raise an eyebrow. 'How did you end up writing code?' It's a fair question, and the honest answer is: gradually, then all at once.",
      },
      {
        type: 'heading',
        text: 'The Turning Point',
      },
      {
        type: 'paragraph',
        text: "During my undergraduate research, I found myself spending more time writing Python scripts to process sequencing data than I did at the bench. What started as a necessity became a passion. I was automating analysis pipelines, wrangling large datasets, and building tools that my labmates actually used.",
      },
      {
        type: 'paragraph',
        text: "That's when it clicked: the problem-solving mindset I'd developed in biology — forming a hypothesis, testing it, iterating based on results — is exactly the mindset of a good software engineer.",
      },
      {
        type: 'heading',
        text: 'The Skills That Transferred',
      },
      {
        type: 'list',
        items: [
          'Rigorous documentation habits from writing research papers',
          'Comfort with ambiguous, open-ended problems',
          'Strong fundamentals in statistics and data analysis',
          'Domain expertise in bioinformatics — a genuinely rare combination',
          'Patience: debugging a pipeline has a lot in common with troubleshooting an experiment',
        ],
      },
      {
        type: 'paragraph',
        text: "If you're a scientist wondering if you could make a similar transition — the answer is almost certainly yes. The logical thinking you've trained for years translates directly.",
      },
    ],
  },
  {
    slug: 'automating-workflows-python',
    title: 'Automating Daily Workflows with Python',
    date: '2024-02-14',
    excerpt:
      'Small Python scripts can save hours every week. Here are practical automation patterns I use regularly to eliminate repetitive tasks and reclaim my time.',
    tags: ['Python', 'Automation', 'Productivity'],
    readTime: 5,
    content: [
      {
        type: 'paragraph',
        text: "One of the most satisfying things about knowing how to code is turning repetitive tasks into zero-effort automation. Python's standard library alone gives you everything you need for most day-to-day automation.",
      },
      {
        type: 'heading',
        text: 'File Organization',
      },
      {
        type: 'paragraph',
        text: "The pathlib module makes file system operations a joy. A few lines can sort downloads folders, rename batches of files, or watch a directory and react to new files automatically.",
      },
      {
        type: 'code',
        language: 'python',
        text: `from pathlib import Path
import shutil

downloads = Path.home() / "Downloads"
for f in downloads.iterdir():
    if f.suffix in ('.pdf', '.docx'):
        dest = Path.home() / "Documents" / f.name
        shutil.move(str(f), str(dest))
        print(f"Moved {f.name}")`,
      },
      {
        type: 'heading',
        text: 'Scheduled Reports',
      },
      {
        type: 'paragraph',
        text: "Combining schedule with smtplib (or a service like SendGrid) lets you build automated email digests. I use this to get a daily summary of metrics I care about, delivered to my inbox every morning.",
      },
      {
        type: 'heading',
        text: 'The Rule of Three',
      },
      {
        type: 'paragraph',
        text: "My heuristic: if I do something manually three times, I write a script for it. The upfront investment is almost always worth it, and you end up with reusable tools that compound in value over time.",
      },
    ],
  },
  {
    slug: 'transposable-elements-explainer',
    title: "Transposable Elements: DNA That Moves Around",
    date: '2024-01-10',
    excerpt:
      "A plain-language explainer on transposable elements — the 'jumping genes' that make up nearly half the human genome — and the computational tools we use to study them.",
    tags: ['Bioinformatics', 'Genomics', 'Science'],
    readTime: 9,
    content: [
      {
        type: 'paragraph',
        text: "Nearly half of the human genome consists of sequences that can, in principle, copy and paste themselves to new locations. These are transposable elements (TEs), and they've been shaping genomes for hundreds of millions of years.",
      },
      {
        type: 'heading',
        text: 'What Are They?',
      },
      {
        type: 'paragraph',
        text: "TEs were first discovered by Barbara McClintock in maize in the 1940s — work that earned her a Nobel Prize decades later. She observed that certain genetic loci were unstable: a gene could be active in one generation and silenced in the next, because a TE had inserted itself nearby.",
      },
      {
        type: 'heading',
        text: 'Why Do We Care?',
      },
      {
        type: 'list',
        items: [
          'TE insertions can disrupt gene function, potentially causing disease',
          'They contribute to genetic diversity and evolution',
          'Some TEs have been co-opted by the genome for regulatory functions',
          'Understanding TE activity is crucial for interpreting genome sequencing data',
        ],
      },
      {
        type: 'heading',
        text: 'Computational Detection',
      },
      {
        type: 'paragraph',
        text: "Finding TE insertions in sequencing data is a non-trivial computational problem. Tools like McClintock integrate multiple detection algorithms and compare their results to produce high-confidence insertion calls. This kind of meta-pipeline approach reduces both false positives and false negatives.",
      },
      {
        type: 'paragraph',
        text: "This is exactly the kind of problem where bioinformatics sits at the intersection of biology and computer science — and why I find the field so compelling.",
      },
    ],
  },
  {
    slug: 'git-for-scientists',
    title: 'Git for Scientists: Version Control for Research Code',
    date: '2023-12-05',
    excerpt:
      "Version control isn't just for software developers. If you write analysis scripts for research, Git can save you from the nightmare of lost work and unreproducible results.",
    tags: ['Git', 'Science', 'Tutorial'],
    readTime: 7,
    content: [
      {
        type: 'paragraph',
        text: "How many times have you saved a script as analysis_v2_FINAL_revised.py? If you've been there, Git is the tool that will finally end that habit — and make your research more reproducible in the process.",
      },
      {
        type: 'heading',
        text: 'The Core Mental Model',
      },
      {
        type: 'paragraph',
        text: "Git takes snapshots of your project at points in time (commits). Every commit is a complete, restorable state. You can always go back. You can experiment on branches without risking your working code. You can collaborate without emailing files back and forth.",
      },
      {
        type: 'heading',
        text: 'The Three Commands You Need Today',
      },
      {
        type: 'code',
        language: 'bash',
        text: `# Stage your changes
git add analysis.py

# Take a snapshot with a message
git commit -m "Add normalization step to preprocessing pipeline"

# See the history
git log --oneline`,
      },
      {
        type: 'heading',
        text: 'For Reproducible Research',
      },
      {
        type: 'paragraph',
        text: "Tag the exact commit that produced your publication's figures. Anyone who clones your repository and checks out that tag will get identical results. That's reproducibility in a single command.",
      },
      {
        type: 'quote',
        text: "Your future self — six months from now trying to reproduce a figure — will thank you.",
      },
    ],
  },
  {
    slug: 'intro-to-bioinformatics-python',
    title: 'Getting Started with Bioinformatics Using Python',
    date: '2023-10-22',
    excerpt:
      'Python has become the go-to language for bioinformatics. Here is how to set up your environment and start analyzing sequence data with BioPython and common pipelines.',
    tags: ['Python', 'Bioinformatics', 'Tutorial'],
    readTime: 8,
    content: [
      {
        type: 'paragraph',
        text: "Python's combination of readable syntax, powerful libraries, and strong community adoption has made it the dominant language in bioinformatics. If you're a biologist who wants to analyze your own data, Python is the best place to start.",
      },
      {
        type: 'heading',
        text: 'Setting Up Your Environment',
      },
      {
        type: 'paragraph',
        text: "Use conda or mamba for environment management — it handles both Python packages and native bioinformatics tools in one place.",
      },
      {
        type: 'code',
        language: 'bash',
        text: `conda create -n bioinfo python=3.11
conda activate bioinfo
conda install -c bioconda biopython samtools`,
      },
      {
        type: 'heading',
        text: 'Parsing FASTA with BioPython',
      },
      {
        type: 'code',
        language: 'python',
        text: `from Bio import SeqIO

for record in SeqIO.parse("sequences.fasta", "fasta"):
    print(f"{record.id}: {len(record.seq)} bp")
    print(f"GC content: {gc_fraction(record.seq):.1%}")`,
      },
      {
        type: 'heading',
        text: 'Where to Go Next',
      },
      {
        type: 'list',
        items: [
          'Rosalind — bioinformatics problem sets in the style of Project Euler',
          'Bioconductor — the R ecosystem (worth knowing even as a Python user)',
          'Galaxy Project — web-based workflows for those not yet comfortable on the command line',
          'arXiv / bioRxiv — keep up with new tools and methods',
        ],
      },
    ],
  },
];
