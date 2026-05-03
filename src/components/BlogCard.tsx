import { ArrowRight, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`card p-6 flex flex-col gap-4 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all duration-200 group ${
        featured ? 'border-indigo-200 dark:border-indigo-900/50' : ''
      }`}
    >
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {post.readTime} min read
        </span>
        <span>·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 dark:text-white text-lg leading-snug mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-1">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/blog/${post.slug}`}
          className="flex items-center gap-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:gap-2 transition-all shrink-0 ml-3"
        >
          Read more <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
}
