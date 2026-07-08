import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-500 hover:underline inline-flex items-center">
            <ArrowLeft className="mr-2" size={20} /> Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Navbar />
      <main className="content-layer max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-gray-400 hover:text-white inline-flex items-center mb-8 transition-colors">
            <ArrowLeft className="mr-2" size={20} /> Back to Projects
          </Link>

          <div className="mb-12 border-b border-[var(--color-border)] pb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-400 mb-6">{project.tagline}</p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {project.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors font-medium">
                <Github className="mr-2" size={18} /> View Source
              </a>
              {project.demoLink !== '#' && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-white rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors font-medium">
                  <ExternalLink className="mr-2" size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Overview</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{project.overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Problem Statement</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{project.problemStatement}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-white">Architecture Flow</h2>
              <div className="glass-card p-6 rounded-lg font-mono text-sm sm:text-base text-blue-400 overflow-x-auto whitespace-nowrap">
                {project.architecture.flow.split(' -> ').map((step, idx, arr) => (
                  <span key={idx}>
                    <span className="text-white">{step}</span>
                    {idx < arr.length - 1 && <span className="mx-3 text-gray-600">→</span>}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Engineering Challenges</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{project.challenges}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Key Engineering Decisions</h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-300 text-lg">
                {project.engineeringDecisions.map((decision, idx) => (
                  <li key={idx} className="leading-relaxed">{decision}</li>
                ))}
              </ul>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
