import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">Raja.dev</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-blue-600 text-xl">🐙</a>
              <a href="#" className="hover:text-blue-600 text-xl">🔗</a>
              <a href="#" className="hover:text-blue-600 text-xl">📧</a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 hover:bg-gray-100">Home</a>
            <a href="#skills" className="block px-3 py-2 hover:bg-gray-100">Skills</a>
            <a href="#projects" className="block px-3 py-2 hover:bg-gray-100">Projects</a>
          </div>
        </div>
      )}
    </nav>
  );
}
