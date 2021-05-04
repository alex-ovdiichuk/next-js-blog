export interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: Date;
  slug: string;
  content: string;
  isFeatured: boolean;
}

export type RequestStatus = 'success' | 'error' | 'pending' | null;
