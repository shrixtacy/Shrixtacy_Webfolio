import { 
  LucideIcon, 
  Code2, 
  Palette, 
  BarChart2, 
  Video,
  Image,
  Share2,
  GitBranch,
  BookOpen,
  Instagram,
  Linkedin,
  Mail
} from 'lucide-react';

export interface PortfolioConfig {
  title: string;
  subtitle: string; 
  description: string;
  social: {
    icon: LucideIcon;
    url: string;
    label: string;
  }[];
  skills: {
    icon: LucideIcon;
    title: string;
    description: string;
    technologies: string[];
  }[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  theme?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  certifications: {
    title: string;
    issuer: string;
    date: string;
    image: string;
    link: string;
  }[];
}

export const portfolioConfig: PortfolioConfig = {
  title: "Shrixtacy",
  subtitle: "Frontend Developer & Digital Creative",
  description: "A versatile professional combining development expertise with creative design and data analysis skills",
  social: [
    {
      icon: Instagram,
      url: "https://www.instagram.com/obs1ruct/",
      label: "Instagram"
    },
    {
      icon: GitBranch,
      url: "https://github.com/shrixtacy",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/shriyanshdash/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      url: "mailto:shriyanshdash12@gmail.com",
      label: "Email"
    },
    {
      icon: BookOpen,
      url: "https://shrilogs.wordpress.com",
      label: "Blog"
    }
  ],
  skills: [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive and dynamic web applications",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript"]
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user experiences",
      technologies: ["Figma", "UI/UX Design", "Web Design", "Graphic Design"]
    },
    {
      icon: BarChart2,
      title: "Data Analysis",
      description: "Transforming data into actionable insights",
      technologies: ["Tableau", "Power BI", "R", "Python", "Spreadsheets"]
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Creating engaging video content",
      technologies: ["CapCut", "VN", "Alight Motion", "After Effects"]
    },
    {
      icon: Image,
      title: "Photo Editing",
      description: "Professional photo enhancement and manipulation",
      technologies: ["Photoroom", "Lightroom"]
    },
    {
      icon: Share2,
      title: "Digital Marketing",
      description: "Strategic digital presence management",
      technologies: ["Digital Marketing", "Social Media Management", "Trends Analysis"]
    }
  ],
  contact: {
    email: "shriyanshdash12@gmail.com",
    phone: "+91 8260542544",
    location: "Bhubaneswar, Odisha"
  },
  theme: {
    primary: "purple",
    secondary: "blue",
    accent: "pink"
  },
  certifications: [
    {
      title: "Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      title: "UI/UX Design",
      issuer: "Google",
      date: "2023",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      title: "Data Analysis",
      issuer: "DataCamp",
      date: "2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    }
  ]
};