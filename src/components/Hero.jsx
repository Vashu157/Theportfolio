import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-start relative overflow-hidden px-[5%] max-w-[1100px] mx-auto" id="home">
      {/* Decorative background elements */}
      <div className="hidden md:block absolute -right-[80px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-[1.5px] border-black/5 pointer-events-none z-0" />
      <div className="hidden md:block absolute -right-[30px] top-1/2 -translate-y-[45%] w-[280px] h-[280px] rounded-full border border-[rgba(221,161,94,0.12)] pointer-events-none z-0" />

      <motion.div
        className="text-left max-w-[680px] z-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="block w-[40px] h-[2px] bg-[var(--color-primary-accent)] mb-5 rounded-[1px]" />

        <p className="text-[0.95rem] text-[var(--color-primary-accent)] mb-4 font-[var(--font-plex)] tracking-[1.5px] font-medium">
          Hi, my name is
        </p>

        <h1 className="font-[var(--font-playfair)] text-[3rem] md:text-[5rem] font-bold mb-3 leading-[1.05] text-[var(--color-primary-accent)]">
          Vashu Kumar.
        </h1>

        <h2 className="font-[var(--font-playfair)] text-[1.35rem] md:text-[1.75rem] font-semibold mb-7 text-[var(--color-text-secondary)] leading-[1.35]">
          Full-Stack Developer &amp; AI Enthusiast <br />
          <span className="text-[1.1rem] text-[var(--color-primary-accent)]">
            CSE &rsquo;27 at NIT Delhi
          </span>
        </h2>

        <p className="text-[1.05rem] text-[var(--color-text-secondary)] mb-11 leading-[1.7] max-w-[500px] font-light">
          Building scalable web architectures and intelligent computer vision
          applications. I specialize in creating robust digital experiences with
          modern technologies.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-start items-start md:items-center">
          <a href="#projects" className="w-full md:w-auto">
            <button className="w-full md:w-auto inline-block bg-transparent text-[var(--color-text-primary)] border-[1.5px] border-[var(--color-text-primary)] px-8 py-3 rounded-full font-[var(--font-inter)] font-medium text-[0.95rem] cursor-pointer transition-all duration-250 hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-primary)] hover:scale-105">
              View Projects
            </button>
          </a>
          <a href="#contact" className="w-full md:w-auto">
            <button className="w-full md:w-auto inline-block bg-transparent text-[var(--color-primary-accent)] border-[1.5px] border-[var(--color-primary-accent)] px-8 py-3 rounded-full font-[var(--font-inter)] font-medium text-[0.95rem] cursor-pointer transition-all duration-250 hover:bg-[var(--color-primary-accent)] hover:text-white hover:scale-105">
              Contact Me
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
