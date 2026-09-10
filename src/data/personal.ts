export const personalInfo = {
  name: "Raja Senthilkumar",
  title: "FrontEnd Developer",
  email: "raja2001ece@gmail.com",
  phone: "+91 9952846346",
  location: "Puducherry, India",
  summary: "Skilled and versatile FrontEnd Developer with over 3+ years of hands-on experience in building and scaling modern web applications. Specializes in React.js and the MERN stack with proven capabilities in backend integrations, real-time analytics, and secure payments.\n\n" +
    "Experienced in developing enterprise-grade solutions including E-Learning Management Systems (ULCMS), real-time fleet monitoring platforms (FleetTrack), and SaaS document analysis tools (Go Perla). Proficient in modern authentication mechanisms including Keycloak, AWS Cognito, and JWT with RBAC implementation.\n\n" +
    "Technical expertise spans React.js, Next.js, TypeScript for frontend development, Node.js, Express.js, GraphQL for backend services, and PostgreSQL, MongoDB for database management. Familiar with DevOps practices including Docker,  and AWS services. Strong advocate of Agile/Scrum methodologies with experience in sprint planning, code reviews, and task tracking using Jira."
};

export const skills = {
  frontend: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Styled Components", "Bootstrap"],
  backend: ["Node.js", "Express.js", "GraphQL", "Stripe"],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
  devops: ["Docker","AWS S3", "AWS Cognito"],
  tools: ["Git", "Jira", "Keycloak", "Socket.IO"]
};

export const projects = [
  {
    name: "ULCMS - E-Learning Management System",
    tech: ["React.js", "Node.js", "PostgreSQL", "Keycloak"],
    description: "A secure and scalable Learning Management System (LMS) designed to manage courses, users, and assessments. Features a dynamic quiz engine, course progression tracking, and user role segregation.",
    features: ["Built reusable UI components for course content", "Integrated Keycloak for authentication and RBAC", "Implemented dynamic data fetching using React Query"]
  },
  {
    name: "FleetTrack - Real-time Fleet Monitoring",
    tech: ["React.js", "Java", "PostgreSQL", "Konva.js", "Socket.IO"],
    description: "Real-time fleet monitoring solution for tracking vehicle location, fuel consumption, and driver behavior. Includes GPS path visualization, alerting system, geofencing, and analytics dashboards.",
    features: ["Interactive dashboards with live WebSocket tracking", "Geofencing implementation and fuel analytics", "Optimized PostgreSQL queries for fleet insights"]
  },
  {
    name: "Go Perla - SaaS Document Analysis Platform",
    tech: ["React.js", "Node.js", "GraphQL", "AWS Cognito", "MongoDB", "Redis", "AWS S3", "Stripe"],
    description: "Multi-tenant SaaS platform for uploading, processing, and analyzing legal and financial documents. Offers role-based access, secure file management, and subscription-based billing.",
    features: ["AWS Cognito authentication with RBAC", "Stripe integration for billing and subscriptions", "AWS S3 file storage with pre-signed URLs", "Optimized frontend with lazy loading"]
  },
  {
    name: "Video Editor - Poster & Video Customization Tool",
    tech: ["React.js", "Konva.js", "PHP", "PostgreSQL"],
    description: "Browser-based visual editor for customizing posters and videos using drag-and-drop features. Allows users to edit layers, insert text, and manage visual elements using HTML5 canvas.",
    features: ["Canvas-based drag-and-drop interface using Konva.js", "Object manipulation, resizing, and layering", "Real-time previews with undo-redo functionality"]
  }
];