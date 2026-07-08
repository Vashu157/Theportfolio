import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const TerminalAnimation = () => {
  const [text, setText] = useState('');
  const fullText = "import { engineer } from 'vashu';\n\nawait engineer.build({\n  systems: 'scalable',\n  ai: 'integrated',\n  impact: 'global'\n});";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass-card rounded-lg p-4 font-mono text-sm sm:text-base text-gray-300 w-full h-48 flex flex-col relative overflow-hidden group">
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="whitespace-pre-wrap">
        {text}
        <motion.span 
          animate={{ opacity: [1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-blue-500 ml-1 align-middle"
        />
      </div>
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-10" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Available for Internships</span>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Building Scalable Backend Systems & <span className="text-gradient-accent">AI-Powered Developer Tools</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Computer Science undergraduate at NIT Delhi specializing in Backend Engineering, Distributed Systems, and Applied AI.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors inline-flex items-center group">
              View Projects
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.pdf" target="_blank" className="px-6 py-3 border border-gray-700 text-white font-medium rounded hover:bg-gray-800 transition-colors inline-flex items-center">
              <Download className="mr-2 w-4 h-4" />
              Resume
            </a>
            <a href="https://github.com/Vashu157/" target="_blank" rel="noreferrer" className="p-3 border border-gray-700 text-gray-300 rounded hover:text-white hover:bg-gray-800 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/vashukr/" target="_blank" rel="noreferrer" className="p-3 border border-gray-700 text-gray-300 rounded hover:text-white hover:bg-gray-800 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <TerminalAnimation />
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-lg hover:border-gray-500 transition-colors">
              <div className="text-3xl font-bold text-white mb-1">600+</div>
              <div className="text-sm text-gray-400 font-medium">DSA Problems</div>
            </div>
            <div className="glass-card p-6 rounded-lg hover:border-gray-500 transition-colors">
              <div className="text-3xl font-bold text-white mb-1">4+</div>
              <div className="text-sm text-gray-400 font-medium">Major Projects</div>
            </div>
            <div className="glass-card p-6 rounded-lg hover:border-gray-500 transition-colors">
              <div className="text-lg font-bold text-white mb-1">Backend + AI</div>
              <div className="text-sm text-gray-400 font-medium">Core Focus</div>
            </div>
            <div className="glass-card p-6 rounded-lg hover:border-gray-500 transition-colors">
              <div className="text-lg font-bold text-white mb-1">NIT Delhi</div>
              <div className="text-sm text-gray-400 font-medium">CSE '27</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
