import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

function getAllTags() {
  const tagSet = new Set<string>();
  blogPosts.forEach(p => p.tags.forEach(t => tagSet.add(t)));
  return ['All', ...Array.from(tagSet).sort()];
}

export default function BlogList() {
  const [activeTag, setActiveTag] = useState('All');
  const tags = getAllTags();

  const filtered =
    activeTag === 'All' ? blogPosts : blogPosts.filter(p => p.tags.includes(activeTag));

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="container-max section-padding py-0 pt-8">
        <div className="mb-4">
          <Link
            to="/"
            className="text-sm text-slate-500 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            ← Back home
          </Link>
        </div>

        <div className="mb-10">
          <p className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2 tracking-wide">
            Writing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            Blog
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl">
            Thoughts on software engineering, bioinformatics, automation, and the occasional deep
            dive into things I find interesting.
          </p>
        </div>

        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-500 py-12 text-center">
            No posts found for this tag.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
