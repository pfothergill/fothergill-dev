import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Home from './pages/Home';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 pt-16">
      <div className="text-center px-4">
        <p className="font-mono text-indigo-500 dark:text-indigo-400 text-sm mb-3">404</p>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Page not found</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          This page doesn&apos;t exist — or has moved.
        </p>
        <a
          href="/"
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors"
        >
          Go home
        </a>
      </div>
    </div>
  );
}
