export interface Idea {
  id: string;
  title: string;
  description: string;
  author: string;
  tags: string[];
  likes: number;
  comments: number;
  category: string;
  createdAt: string;
}

export const mockIdeas: Idea[] = [
  {
    id: "1",
    title: "AI-Powered Study Buddy",
    description: "A smart learning companion that uses AI to create personalized study plans, quiz students on their weak areas, and provide real-time explanations for complex topics. Perfect for students preparing for exams.",
    author: "Alex Johnson",
    tags: ["AI", "Education", "Machine Learning"],
    likes: 45,
    comments: 12,
    category: "Technology",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Campus Food Waste Reducer",
    description: "An app that connects university cafeterias with students to sell leftover food at discounted prices before closing time. Reduces food waste while helping budget-conscious students.",
    author: "Sarah Chen",
    tags: ["Sustainability", "Mobile App", "Social Impact"],
    likes: 67,
    comments: 23,
    category: "Environment",
    createdAt: "2024-01-14",
  },
  {
    id: "3",
    title: "Virtual Lab Simulator",
    description: "A VR-based platform for conducting science experiments virtually. Students can perform dangerous or expensive experiments safely from their computers without actual equipment.",
    author: "Mike Williams",
    tags: ["VR", "Education", "Science"],
    likes: 38,
    comments: 8,
    category: "Technology",
    createdAt: "2024-01-13",
  },
  {
    id: "4",
    title: "Peer Mentorship Platform",
    description: "A matching system that connects senior students with juniors based on their courses, interests, and career goals. Includes scheduling, goal tracking, and resource sharing features.",
    author: "Emily Davis",
    tags: ["Social", "Networking", "Education"],
    likes: 52,
    comments: 15,
    category: "Community",
    createdAt: "2024-01-12",
  },
  {
    id: "5",
    title: "Smart Campus Navigation",
    description: "An indoor navigation app using Bluetooth beacons to help new students and visitors find classrooms, offices, and facilities on large campuses. Includes accessibility routes.",
    author: "James Lee",
    tags: ["IoT", "Mobile App", "Accessibility"],
    likes: 29,
    comments: 6,
    category: "Technology",
    createdAt: "2024-01-11",
  },
  {
    id: "6",
    title: "Student Budget Tracker",
    description: "A financial management app designed specifically for students. Tracks spending, splits bills with roommates, and provides insights on saving money during college years.",
    author: "Lisa Park",
    tags: ["Finance", "Mobile App", "Students"],
    likes: 41,
    comments: 19,
    category: "Finance",
    createdAt: "2024-01-10",
  },
];

export const categories = [
  "All",
  "Technology",
  "Environment",
  "Community",
  "Finance",
  "Health",
  "Education",
];
