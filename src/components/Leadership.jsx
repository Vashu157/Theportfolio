import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function Leadership() {
  const roles = [
    {
      title: 'Deputy General Secretary',
      org: 'Tech Club, NIT Delhi',
      desc: 'Orchestrating technical initiatives, hackathons, and coding competitions. Fostering a community of 500+ student developers.'
    },
    {
      title: 'Senior Member',
      org: 'Training & Placement Cell, NIT Delhi',
      desc: 'Coordinating placement drives, liaising with recruiters, and organizing technical mock interviews for the student body.'
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
        <div className="flex items-center mb-10">
          <Users className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-3xl font-bold text-white tracking-tight">Leadership & Community</h2>
        </div>
        
        <div className="space-y-6">
          {roles.map((role, idx) => (
            <div key={idx} className="glass-card p-6 md:p-8 rounded-xl border border-gray-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{role.title}</h3>
                  <div className="text-blue-400 font-medium">{role.org}</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-3xl">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
