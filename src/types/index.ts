export type LocalizedString = {
  en: string;
  es: string;
};

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  imageUrl: string;
  imageHint?: string;
  liveDemoUrl?: string;
  repoUrl?: string;
  methodologies?: LocalizedString[];
  methodologyList?: { en: string[]; es: string[] }; 
  tags?: string[]; 
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: LocalizedString;
  institution: LocalizedString;
  description: LocalizedString;
  icon?: React.ElementType;
}