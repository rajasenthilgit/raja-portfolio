import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personal';
import profileImage from '../assets/Media.jpeg';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "💼 Professional Background",
      content: "Skilled and versatile Full Stack Developer with over 3+ years of hands-on experience in building and scaling modern web applications. Specializes in React.js and the MERN stack with proven capabilities in backend integrations, real-time analytics, and secure payments.\n\nExperienced in developing enterprise-grade solutions including E-Learning Management Systems (ULCMS), real-time fleet monitoring platforms (FleetTrack), and SaaS document analysis tools (Go Perla)."
    },
    {
      title: "🔐 Security & Authentication",
      content: "Proficient in modern authentication mechanisms including Keycloak, AWS Cognito, and JWT with RBAC implementation. Experienced in designing secure REST APIs with role-based access controls for user and admin-level permissions.\n\nImplemented robust authorization flows across multiple enterprise applications ensuring data security and compliance with industry standards."
    },
    {
      title: "🛠️ Technical Expertise",
      content: "Technical expertise spans React.js, Next.js, TypeScript for frontend development, Node.js, Express.js, GraphQL for backend services, and PostgreSQL, MongoDB for database management.\n\nFamiliar with DevOps practices including Docker and AWS services. Strong advocate of Agile/Scrum methodologies with experience in sprint planning, code reviews, and task tracking using Jira."
    }
  ];

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Main Container with Image Left and Content Right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16">
          {/* Image Section - Left Side */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img 
                src={profileImage}
                alt={personalInfo.name}
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${personalInfo.name.replace(' ', '+')}&background=4F46E5&color=fff&size=200&bold=true`;
                }}
              />
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400 transition-all duration-300"></div>
            </div>
          </div>

          {/* Details Section - Center aligned */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block animate-pulse">
                <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
                {personalInfo.title}
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all">
                  <Mail size={18} className="text-blue-500" /> 
                  <span className="text-gray-700 dark:text-gray-300">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all">
                  <Phone size={18} className="text-blue-500" /> 
                  <span className="text-gray-700 dark:text-gray-300">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all">
                  <MapPin size={18} className="text-blue-500" /> 
                  <span className="text-gray-700 dark:text-gray-300">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section with Tabs */}
        <div className="mt-8 max-w-4xl mx-auto lg:mx-0">
          <div className="relative">
            {/* Decorative quote icon */}
            <div className="absolute -top-6 -left-4 text-6xl text-blue-200 dark:text-blue-800 opacity-50 z-0">
              "
            </div>
            
            <div className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 dark:border-gray-700/50 overflow-hidden">
              {/* Tab Headers */}
              <div className="flex border-b border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-gray-800/60">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 px-4 py-3 text-sm md:text-base font-medium transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent border-b-2 border-purple-600 dark:border-purple-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 md:p-8 min-h-[280px]">
                <div style={{
                  animation: 'fadeIn 0.3s ease-out'
                }}>
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {tabs[activeTab].title}
                  </h3>
                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg space-y-3">
                    {tabs[activeTab].content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20"></div>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="fixed bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
        <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
      </div>

      {/* Add this style tag in your global CSS file or component */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}