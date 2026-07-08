import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--color-border)] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold font-mono tracking-tight text-white">VASHU<span className="text-blue-500">.</span></span>
            <p className="text-gray-400 mt-2 font-medium">Always building something interesting.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:kumarvashu157@gmail.com" className="text-gray-500 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://github.com/Vashu157/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/vashukr/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center md:text-left text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Vashu Kumar. Designed for engineering depth.
        </div>
      </div>
    </footer>
  );
}
