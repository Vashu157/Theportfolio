import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/5" style={{ background: 'rgba(5,5,5,0.85)', backdropFilter: 'blur(16px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-xl font-bold tracking-tighter">
            VASHU<span className="text-blue-500">.</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#architecture" className="text-gray-300 hover:text-white transition-colors">Architecture</a>
            <a href="/resume.pdf" target="_blank" className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors">
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
