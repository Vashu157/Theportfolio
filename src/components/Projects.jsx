import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Capable',
      description: 'Assistive Mobility App: Engineered a real-time computer vision engine to identify dynamic obstacles for visually impaired users. Architected offline turn-by-turn navigation via GraphHopper and OpenStreetMap.',
      tech: ['Kotlin', 'YOLOv8', 'MiDaS', 'GraphHopper'],
    },
    {
      title: 'RideIt',
      description: 'Full-Stack Ride-booking Platform: Built a scalable platform with state management. Designed an ACID-compliant digital wallet using Prisma transactions and NextAuth.js connected to Neon PostgreSQL.',
      tech: ['Next.js', 'TypeScript', 'Zustand', 'Prisma', 'PostgreSQL'],
    },
  ];

  return (
    <section className="py-[120px] px-[5%] max-w-[1100px] mx-auto" id="projects">
      <h2 className="font-[var(--font-playfair)] text-[2.5rem] font-bold mb-14 text-left relative inline-block after:content-[''] after:block after:w-[40px] after:h-[2px] after:bg-[var(--color-primary-accent)] after:mt-2.5 after:rounded-[1px] text-[var(--color-primary-accent)]">
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="p-8 md:p-10 flex flex-col h-full relative overflow-hidden border-b-[3px] border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-b-[var(--color-primary-accent)] bg-[var(--color-bg-light)] border border-[var(--color-border)] shadow-[var(--shadow-md)] rounded-[16px] group"
          >
            <div className="flex justify-between items-center mb-7">
              <span className="font-[var(--font-playfair)] text-[1.1rem] font-bold text-[var(--color-primary-accent)] tracking-[0.02em]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex gap-4">
                <a href="#" className="text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-text-primary)]" aria-label="GitHub Link"><FaGithub size={20} /></a>
                <a href="#" className="text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-text-primary)]" aria-label="External Link"><ExternalLink size={20} /></a>
              </div>
            </div>
            <h3 className="font-[var(--font-playfair)] text-[1.3rem] md:text-[1.5rem] font-bold text-[var(--color-text-primary)] mb-4 leading-[1.3] transition-colors duration-300 group-hover:text-[var(--color-primary-accent)]">{project.title}</h3>
            <p className="font-[var(--font-inter)] text-[var(--color-text-secondary)] text-[0.95rem] leading-[1.7] flex-grow mb-7">{project.description}</p>
            <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
              {project.tech.map((tech, i) => (
                <li className="font-[var(--font-inter)] text-[0.8rem] font-medium text-[var(--color-text-secondary)] bg-[#fefae0] border border-black/10 rounded-full px-3.5 py-1 whitespace-nowrap" key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
