import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[72px] flex justify-between items-center px-[5%] z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="font-[var(--font-playfair)] text-[1.3rem] font-semibold tracking-[0.5px] text-[var(--color-text-primary)]">
        <a href="#">Vashu.dev</a>
      </div>

      <div
        className={`${
          mobileOpen
            ? 'flex flex-col absolute top-[72px] left-0 w-full bg-[var(--color-bg-primary)] py-8 gap-7 border-b border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
            : 'hidden'
        } md:flex md:flex-row md:static md:w-auto md:bg-transparent md:py-0 md:gap-9 md:border-none md:shadow-none items-center`}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-[var(--font-inter)] text-[0.9rem] font-medium tracking-[0.5px] text-[var(--color-text-primary)] transition-colors duration-300 relative no-underline hover:text-[var(--color-primary-accent)] after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-4px] after:left-0 after:bg-[var(--color-primary-accent)] after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setMobileOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/Vashu157"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-text-primary)] transition-colors duration-300 flex items-center hover:text-[var(--color-primary-accent)]"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/vashukr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-text-primary)] transition-colors duration-300 flex items-center hover:text-[var(--color-primary-accent)]"
        >
          <FaLinkedin size={20} />
        </a>
        <button
          className="block md:hidden bg-transparent border-none text-[var(--color-text-primary)] cursor-pointer p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
