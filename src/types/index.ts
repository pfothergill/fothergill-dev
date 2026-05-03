export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: ContentBlock[];
  tags: string[];
  readTime: number;
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'subheading' | 'code' | 'list' | 'quote';
  text?: string;
  language?: string;
  items?: string[];
}

export interface Skill {
  name: string;
  category: 'Language' | 'Framework' | 'Tool' | 'Cloud' | 'Database';
  level: 'Expert' | 'Proficient' | 'Familiar';
}
