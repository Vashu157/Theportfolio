import { motion } from 'framer-motion';

export default function TechStack() {
  const stack = [
    {
      category: "Languages",
      items: ["C++", "Python", "TypeScript", "JavaScript", "SQL", "Kotlin"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Next.js", "FastAPI", "Express", "REST APIs", "Authentication"]
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "Redis", "Drizzle", "Prisma"]
    },
    {
      category: "AI & Parsing",
      items: ["Gemini API", "RAG", "LangChain (Learning)", "Vector DBs", "Tree-sitter", "AST Parsing"]
    },
    {
      category: "Cloud & DevOps",
      items: ["Docker", "Azure", "GitHub Actions", "CI/CD"]
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind", "React Native"]
    }
  ];

  return (
    <section className="py-20 border-t border-[var(--color-border)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10 text-white tracking-tight">Engineering Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((group, idx) => (
            <div key={idx} className="glass-card p-6 rounded-xl hover:bg-[rgba(255,255,255,0.04)] transition-colors">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <span className="w-8 h-[1px] bg-blue-500 mr-3"></span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 bg-white/8 border border-white/12 rounded-md text-sm text-gray-300 hover:border-blue-500/50 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
