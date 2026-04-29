import { skills } from '../data/personal';

export default function Skills() {
  const categories = [
    { title: "Frontend", items: skills.frontend, color: "blue" },
    { title: "Backend", items: skills.backend, color: "green" },
    { title: "Databases", items: skills.databases, color: "purple" },
    { title: "DevOps & Cloud", items: skills.devops, color: "orange" },
    { title: "Tools & Others", items: skills.tools, color: "red" }
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className={`text-xl font-semibold mb-4 text-${category.color}-600`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
