import { motion } from 'framer-motion';

export default function Timeline() {
  const steps = [
    { year: '2024', title: 'Started Full Stack', desc: 'Building foundational user interfaces and APIs.' },
    { year: '2025', title: 'Built Large Backend Projects', desc: 'Scaling architectures, learning distributed systems and database optimization.' },
    { year: '2026', title: 'Building AI Developer Tools', desc: 'Integrating LLMs, AST parsing, and robust orchestration into tooling.' },
    { year: 'Currently', title: 'Learning Production RAG Systems', desc: 'Focusing on vector search and advanced AI system design.' }
  ];

  return (
    <section className="py-20 border-t border-[var(--color-border)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-white tracking-tight">Engineering Progression</h2>
        
        <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10">
              <div className="absolute w-4 h-4 bg-black border-2 border-blue-500 rounded-full -left-2 top-1.5 ring-4 ring-black"></div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <span className="text-blue-400 font-mono text-sm font-semibold">{step.year}</span>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-2xl">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
