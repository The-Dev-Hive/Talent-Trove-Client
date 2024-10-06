import {
  DollarSign,
  Code,
  Clipboard,
  Briefcase,
  Layout,
  Rocket,
  Headphones,
  Heart,
  Car,
} from 'lucide-react';

interface JobCategory {
  title: string;
  positions: number;
  icon: React.ReactNode;
}

export const jobCategories: JobCategory[] = [
  { title: 'Accounting / Finance', positions: 2, icon: <DollarSign /> },
  { title: 'Marketing', positions: 86, icon: <Briefcase /> },
  { title: 'Design', positions: 43, icon: <Layout /> },
  { title: 'Development', positions: 12, icon: <Code /> },
  { title: 'Human Resource', positions: 55, icon: <Clipboard /> },
  { title: 'Project Management', positions: 2, icon: <Rocket /> },
  { title: 'Customer Service', positions: 2, icon: <Headphones /> },
  { title: 'Health and Care', positions: 25, icon: <Heart /> },
  { title: 'Automotive Jobs', positions: 92, icon: <Car /> },
];

interface Job {
  title: string;
  company: string;
  location: string;
  time: string;
  salary: string;
  tags: { type: string; label: string }[];
  img?: string;
}

export const jobs: Job[] = [
  {
    img: 'https://i.postimg.cc/0yx9LBwm/1-2.png',
    title: 'Software Engineer (Android), Libraries',
    company: 'Segment',
    location: 'London, UK',
    time: '11 hours ago',
    salary: '$35k - $45k',
    tags: [
      { type: 'full-time', label: 'Full Time' },
      { type: 'private', label: 'Private' },
      { type: 'urgent', label: 'Urgent' },
    ],
  },
  {
    img: 'https://i.postimg.cc/FHZhmVy6/1-3.png',
    title: 'Frontend Developer',
    company: 'Google',
    location: 'Mountain View, CA',
    time: '2 days ago',
    salary: '$100k - $120k',
    tags: [
      { type: 'full-time', label: 'Full Time' },
      { type: 'public', label: 'Public' },
      { type: 'urgent', label: 'Urgent' },
    ],
  },
  {
    img: 'https://i.postimg.cc/WpBN73p5/1-4.png',
    title: 'Backend Engineer',
    company: 'Facebook',
    location: 'New York, USA',
    time: '5 hours ago',
    salary: '$85k - $100k',
    tags: [
      { type: 'part-time', label: 'Part Time' },
      { type: 'private', label: 'Private' },
    ],
  },
  {
    img: 'https://i.postimg.cc/QMdhMKSd/1-5.png',
    title: 'Data Scientist',
    company: 'Amazon',
    location: 'Seattle, WA',
    time: '1 day ago',
    salary: '$90k - $110k',
    tags: [
      { type: 'full-time', label: 'Full Time' },
      { type: 'public', label: 'Public' },
    ],
  },
  {
    img: 'https://i.postimg.cc/hGZgQ43b/1-6.png',
    title: 'Mobile App Developer',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    time: '12 hours ago',
    salary: '$75k - $95k',
    tags: [
      { type: 'contract', label: 'Contract' },
      { type: 'private', label: 'Private' },
    ],
  },
  {
    img: 'https://i.postimg.cc/Wb02YvhT/1-1.png',
    title: 'DevOps Engineer',
    company: 'Spotify',
    location: 'Stockholm, Sweden',
    time: '3 hours ago',
    salary: '$80k - $100k',
    tags: [
      { type: 'full-time', label: 'Full Time' },
      { type: 'public', label: 'Public' },
    ],
  },
];
