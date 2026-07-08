import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-[var(--color-border)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Major Projects</h2>
          <span className="text-gray-500 font-mono text-sm hidden sm:block">Building for scale</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="group h-full glass-card p-8 rounded-xl flex flex-col justify-between cursor-pointer border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-500/20">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map(tech => (
                      <span key={tech} className="text-xs font-mono text-gray-500 bg-black px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs font-mono text-gray-500 bg-black px-2 py-1 rounded">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center text-blue-500 font-medium mt-4 group-hover:translate-x-2 transition-transform">
                  View Architecture & Details <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
