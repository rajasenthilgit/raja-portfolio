import { skills } from '../data/personal';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Wrench,
  Sparkles
} from 'lucide-react';

export default function Skills() {
  const categories = [
    { title: "Frontend", items: skills.frontend, icon: Code2, color: "#3B82F6" },
    { title: "Backend", items: skills.backend, icon: Server, color: "#10B981" },
    { title: "Databases", items: skills.databases, icon: Database, color: "#8B5CF6" },
    { title: "DevOps & Cloud", items: skills.devops, icon: Cloud, color: "#F97316" },
    { title: "Tools & Others", items: skills.tools, icon: Wrench, color: "#6366F1" }
  ];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
            <Sparkles size={18} className="text-blue-500" />
            <span className="text-sm font-medium text-gray-700">Technical Arsenal</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Leveraging modern tech stack to build scalable and performant applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div 
                key={idx} 
                className="group backdrop-blur-sm bg-white/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/50 hover:border-white/80"
                style={{
                  backdropFilter: 'blur(10px)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)'
                }}
              >
                {/* Icon Circle */}
                <div className="relative mb-6">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  ></div>
                  <div 
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon size={32} style={{ color: category.color }} />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {category.title}
                </h3>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-lg text-sm font-medium text-gray-700 hover:bg-white transition-all duration-200 hover:shadow-md cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-4 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}