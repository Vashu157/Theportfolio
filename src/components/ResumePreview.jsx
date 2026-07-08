import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export default function ResumePreview() {
  return (
    <section className="py-20 border-t border-[var(--color-border)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-8 md:p-12 border border-gray-800 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">Full Resume</h2>
          <p className="text-gray-400 mb-8 text-lg">
            A comprehensive overview of my experience, projects, skills, and education, tailored for engineering roles.
          </p>
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors hover:scale-105 transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <Download className="mr-2 w-5 h-5" />
            Download Resume (PDF)
          </a>
          
          <p className="text-sm text-gray-600 mt-6 font-mono">
            Updated regularly.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
