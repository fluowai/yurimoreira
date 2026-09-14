export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'Users' | 'Briefcase' | 'Building2' | 'Scale' | 'FileText';
  keyServices: string[];
}

export interface MetricItem {
  number: string;
  label: string;
}

export interface LegalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
}
