import { motion } from 'framer-motion';

export default function Architecture() {
  const steps = [
    { name: 'Frontend', desc: 'React, Next.js, Framer Motion', color: 'border-blue-500/50' },
    { name: 'API Layer', desc: 'FastAPI, Express, GraphQL', color: 'border-purple-500/50' },
    { name: 'Business Logic', desc: 'Core Domain Services', color: 'border-green-500/50' },
    { name: 'Caching', desc: 'Redis, Memcached', color: 'border-red-500/50' },
    { name: 'Database', desc: 'PostgreSQL, MongoDB', color: 'border-yellow-500/50' },
    { name: 'Background Workers', desc: 'Celery, BullMQ', color: 'border-orange-500/50' },
    { name: 'Notifications/Events', desc: 'WebSockets, FCM, Kafka', color: 'border-pink-500/50' },
  ];

  return (
    <section id="architecture" className="py-20 border-t border-[var(--color-border)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">How I Build Software</h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            I approach systems from top to bottom, ensuring each layer is decoupled, scalable, and optimized for its specific workload.
          </p>
        </div>
        
        <div className="glass-card p-8 sm:p-12 rounded-xl border border-gray-800">
          <div className="flex flex-col items-center space-y-2">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center w-full">
                <div className={`w-full max-w-sm px-6 py-4 bg-black border ${step.color} rounded-lg text-center relative z-10 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-shadow`}>
                  <div className="font-bold text-white mb-1">{step.name}</div>
                  <div className="text-xs text-gray-500 font-mono">{step.desc}</div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="h-8 w-px bg-gray-700 relative my-1">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 border-r border-b border-gray-700 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
