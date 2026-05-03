import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Moon size={20} className="transition-transform duration-300 rotate-0 scale-100" />
      )}
    </button>
  );
}
