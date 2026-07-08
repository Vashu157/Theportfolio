import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function Learning() {
  const topics = [
    { name: 'Retrieval-Augmented Generation (RAG)', desc: 'Building context-aware applications.' },
    { name: 'LangChain & LlamaIndex', desc: 'Orchestrating complex LLM workflows.' },
    { name: 'Production LLM Systems', desc: 'Managing token limits, caching, and prompt engineering at scale.' },
    { name: 'Vector Search', desc: 'Implementing similarity search using Pinecone and Qdrant.' },
    { name: 'Advanced System Design', desc: 'Studying distributed consensus, sharding, and fault tolerance.' }
  ];

  return (
    <section className="py-20 border-t border-[var(--color-border)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-10">
          <BookOpen className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-3xl font-bold text-white tracking-tight">Currently Learning</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, idx) => (
            <div key={idx} className="glass-card p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">{topic.name}</h3>
              <p className="text-gray-400">{topic.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
