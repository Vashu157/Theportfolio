import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="pt-14 md:pt-20 pb-10 md:pb-12 px-[5%] border-t border-black/5 bg-[#fefae0] mt-16 text-center" id="contact">
      <div className="max-w-[600px] mx-auto flex flex-col items-center gap-5">
        <h2 className="font-[var(--font-playfair)] text-[2rem] md:text-[2.5rem] font-bold text-[var(--color-text-primary)] m-0 leading-[1.2]">Let's Connect</h2>
        <p className="font-[var(--font-inter)] text-[1rem] text-[#555] mb-4">Have a project in mind? Let's talk.</p>

        <a href="mailto:kumarvashu157@gmail.com" className="font-[var(--font-inter)] text-[1rem] md:text-[1.1rem] font-medium text-[var(--color-text-primary)] no-underline transition-colors duration-250 relative hover:text-[var(--color-primary-accent)] after:content-[''] after:absolute after:w-full after:h-[1px] after:bottom-[-3px] after:left-0 after:bg-[var(--color-primary-accent)] after:scale-x-0 after:transition-transform after:duration-250 after:origin-right hover:after:scale-x-100 hover:after:origin-left">
          kumarvashu157@gmail.com
        </a>

        <div className="flex gap-6 mt-3">
          <a href="https://github.com/Vashu157" target="_blank" rel="noopener noreferrer" className="text-[#555] transition-colors duration-250 flex items-center hover:text-[var(--color-primary-accent)]">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/vashukr" target="_blank" rel="noopener noreferrer" className="text-[#555] transition-colors duration-250 flex items-center hover:text-[var(--color-primary-accent)]">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:kumarvashu157@gmail.com" className="text-[#555] transition-colors duration-250 flex items-center hover:text-[var(--color-primary-accent)]">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-[#888] font-[var(--font-inter)] text-[0.8rem] mt-8 tracking-[0.3px]">
          &copy; {new Date().getFullYear()} Vashu Kumar. Designed & Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
