export type Page = 'home' | 'courses' | 'about' | 'course-details' | 'payment';

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'Digital Marketing' | 'Influencer' | 'Streamer' | 'Business Analyst' | 'Data Scientist' | 'Startup' | 'Remote Work';
  level: 'Pemula' | 'Menengah' | 'Lanjutan';
  isFree: boolean;
  thumbnail: string;
  instructor: string;
  duration: string;
}

export type NavItem = {
  label: string;
  href: string;
};
