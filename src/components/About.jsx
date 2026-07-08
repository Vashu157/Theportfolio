import { motion } from 'framer-motion';
import { Terminal, Server, BrainCircuit, Code2 } from 'lucide-react';

export default function About() {
  const interests = [
    { icon: <Server className="w-5 h-5" />, label: 'Backend Engineering' },
    { icon: <BrainCircuit className="w-5 h-5" />, label: 'AI Engineering' },
    { icon: <Terminal className="w-5 h-5" />, label: 'Distributed Systems' },
    { icon: <Code2 className="w-5 h-5" />, label: 'Developer Tooling' },
  ];

  return (
    <section id="about" className="py-20 border-t border-[var(--color-border)]">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Systems Over Applications</h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              I am driven by the complexity of what happens under the hood. While building user interfaces is essential, my true passion lies in architecting the systems that power them.
            </p>
            <p>
              I specialize in backend engineering, distributed systems, and integrating applied AI into developer tools. I enjoy solving problems related to scale, concurrency, and performance bottlenecks.
            </p>
            <p>
              Currently, I am deeply exploring <strong className="text-gray-200">Retrieval-Augmented Generation (RAG)</strong>, production LLM systems, and how AI can fundamentally change how developers interact with codebases.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-800 pb-4">Current Interests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((interest, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-gray-300 p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                <div className="text-blue-500">
                  {interest.icon}
                </div>
                <span className="font-medium">{interest.label}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h4 className="text-sm text-gray-500 font-mono mb-3 uppercase tracking-wider">Currently exploring</h4>
            <div className="flex flex-wrap gap-2">
              {['RAG Architecture', 'Vector Databases', 'System Design', 'AST Parsing'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
