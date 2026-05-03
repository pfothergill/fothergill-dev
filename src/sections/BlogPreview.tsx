import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

export default function BlogPreview() {
  const recent = blogPosts.slice(0, 3);

  return (
    <section id="blog-preview" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-max">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2 tracking-wide">
              Writing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Latest Posts
            </h2>
          </div>
          <Link
            to="/blog"
            className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all duration-200"
          >
            View all posts <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recent.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
