export const personalInfo = {
  name: "Raja Senthilkumar",
  title: "Full Stack Developer",
  email: "raja2001ece@gmail.com",
  phone: "+91 9952846346",
  location: "India",
  summary: "Skilled Full Stack Developer with 3+ years of experience in React.js, Node.js, and modern web applications. Specializes in MERN stack with proven capabilities in backend integrations, real-time analytics, and secure payments."
};

export const skills = {
  frontend: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Styled Components", "Bootstrap"],
  backend: ["Node.js", "Express.js", "GraphQL", "Stripe"],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
  devops: ["Docker", "Kubernetes", "CI/CD", "AWS S3", "AWS Cognito"],
  tools: ["Git", "Jira", "Keycloak", "Socket.IO"]
};

export const projects = [
  {
    name: "ULCMS - E-Learning Management System",
    tech: ["React.js", "Node.js", "PostgreSQL", "Keycloak"],
    description: "Secure LMS with dynamic quiz engine, course progression tracking, and role-based access control.",
    features: ["Built reusable UI components", "Integrated Keycloak authentication", "Implemented RBAC"]
  },
  {
    name: "FleetTrack - Real-time Fleet Monitoring",
    tech: ["React.js", "Java", "PostgreSQL", "Konva.js", "Socket.IO"],
    description: "Real-time fleet monitoring solution for tracking vehicles and driver behavior.",
    features: ["Live tracking via WebSocket", "Geofencing implementation", "Fuel analytics"]
  },
  {
    name: "Go Perla - SaaS Document Analysis",
    tech: ["React.js", "Node.js", "GraphQL", "AWS Cognito", "MongoDB", "Stripe"],
    description: "Multi-tenant SaaS platform for processing legal and financial documents.",
    features: ["AWS Cognito authentication", "Stripe integration", "S3 file storage"]
  },
  {
    name: "Video Editor - Canvas Editor Tool",
    tech: ["React.js", "Konva.js", "PHP", "PostgreSQL"],
    description: "Browser-based visual editor for customizing posters and videos.",
    features: ["Canvas manipulation", "Object layering", "Real-time previews"]
  }
];
