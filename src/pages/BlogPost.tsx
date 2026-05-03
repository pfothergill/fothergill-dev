import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import type { ContentBlock } from '../types';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
          {block.text}
        </h2>
      );
    case 'subheading':
      return (
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
          {block.text}
        </h3>
      );
    case 'paragraph':
      return (
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{block.text}</p>
      );
    case 'list':
      return (
        <ul className="list-disc list-outside pl-5 space-y-2 mb-4">
          {block.items?.map((item, i) => (
            <li key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case 'code':
      return (
        <div className="my-5 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
          {block.language && (
            <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                {block.language}
              </span>
            </div>
          )}
          <pre className="p-4 bg-slate-50 dark:bg-slate-900 overflow-x-auto">
            <code className="font-mono text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {block.text}
            </code>
          </pre>
        </div>
      );
    case 'quote':
      return (
        <blockquote className="my-6 pl-4 border-l-4 border-indigo-400 dark:border-indigo-600">
          <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed">{block.text}</p>
        </blockquote>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24">
        <div className="container-max section-padding py-0 pt-12 text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Post not found
          </h1>
          <Link to="/blog" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            ← Back to blog
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prev = blogPosts[currentIndex + 1];
  const next = blogPosts[currentIndex - 1];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <article className="container-max section-padding py-0 pt-8 max-w-3xl">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-500 mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {post.readTime} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-5">
            {post.title}
          </h1>

          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed border-l-4 border-indigo-300 dark:border-indigo-800 pl-4">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900"
              >
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          {post.content.map((block, i) => (
            <RenderBlock key={i} block={block} />
          ))}
        </div>

        {/* Navigation between posts */}
        <nav className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prev && (
            <Link
              to={`/blog/${prev.slug}`}
              className="card p-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group"
            >
              <p className="text-xs text-slate-400 mb-1">← Previous</p>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                {prev.title}
              </p>
            </Link>
          )}
          {next && (
            <Link
              to={`/blog/${next.slug}`}
              className="card p-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group sm:text-right sm:ml-auto w-full"
            >
              <p className="text-xs text-slate-400 mb-1">Next →</p>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                {next.title}
              </p>
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}
