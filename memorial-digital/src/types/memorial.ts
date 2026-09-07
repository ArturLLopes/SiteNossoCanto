export interface Memorial {
  name: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  quote: string;
  biography: string[];
  familyCredit: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface Favorite {
  label: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Story {
  id: string;
  title: string;
  author: string;
  date: string;
  summary: string;
}

export interface Tribute {
  id: string;
  author: string;
  message: string;
  createdAt: string;
}

export interface RecentUpdate {
  type: 'tributo' | 'fotografia' | 'historia';
  title: string;
  date: string;
}

export interface RemembranceDay {
  label: string;
  date: string;
  description: string;
}
