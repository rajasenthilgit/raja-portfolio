import { Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-5xl text-white font-bold">{personalInfo.name.charAt(0)}</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{personalInfo.name}</h1>
        <p className="text-xl text-blue-600 dark:text-blue-400 mb-6">{personalInfo.title}</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Mail size={18} /> {personalInfo.email}
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Phone size={18} /> {personalInfo.phone}
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <MapPin size={18} /> {personalInfo.location}
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
