import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-[120px] px-[5%] max-w-[1100px] mx-auto" id="about">
      <motion.h2 
        className="font-[var(--font-playfair)] text-[2.5rem] font-bold mb-14 text-left relative inline-block after:content-[''] after:block after:w-[40px] after:h-[2px] after:bg-[var(--color-primary-accent)] after:mt-2.5 after:rounded-[1px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[3rem] lg:gap-[5rem] items-center">
        <div className="text-[1.08rem] leading-[1.9] text-[#555] order-last lg:order-first">
          <p className="mb-[1.6rem]">
            I am pursuing a B.Tech in <span className="text-[var(--color-primary-accent)] font-medium border-b-[1.5px] border-[rgba(221,161,94,0.35)] pb-[1px]">Computer Science Engineering</span> at the National Institute of Technology Delhi. 
            I am passionate about building scalable full-stack web and mobile applications using Next.js, React Native, and Node.js.
          </p>
          <p className="mb-[1.6rem]">
            I also have a strong interest in Artificial Intelligence, developing solutions that leverage 
            <span className="text-[var(--color-primary-accent)] font-medium border-b-[1.5px] border-[rgba(221,161,94,0.35)] pb-[1px]"> Computer Vision and Reinforcement Learning</span>. 
          </p>
          <p>
            I am an active competitive programmer with over <span className="text-[var(--color-primary-accent)] font-medium border-b-[1.5px] border-[rgba(221,161,94,0.35)] pb-[1px]">450 DSA problems</span> solved on LeetCode. 
            When I'm not coding, you'll probably find me tinkering with new AI models or exploring architectural patterns for scalable systems.
          </p>
        </div>
        
        <div className="relative flex justify-center items-center h-[300px] lg:h-[400px] order-first lg:order-last">
          <div className="relative w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] flex justify-center items-center [animation:spin_30s_linear_infinite]">
            <span className="absolute rounded-full border-solid border-transparent w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] border-[1.5px] border-[rgba(221,161,94,0.5)] border-t-transparent" />
            <span className="absolute rounded-full border-solid border-transparent w-[170px] h-[170px] lg:w-[220px] lg:h-[220px] border-[1px] border-black/10 border-x-transparent [animation:spin_24s_linear_infinite_reverse]" />
            <span className="absolute rounded-full border-solid border-transparent w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] border-[1.5px] border-[rgba(221,161,94,0.3)] border-b-transparent [animation:spin_18s_linear_infinite]" />
            <span className="absolute rounded-full border-solid border-transparent w-[76px] h-[76px] lg:w-[100px] lg:h-[100px] border-[1px] border-black/5 border-y-transparent [animation:spin_14s_linear_infinite_reverse]" />
            <span className="absolute rounded-full border-solid border-transparent w-[38px] h-[38px] lg:w-[48px] lg:h-[48px] border-[1.5px] border-[rgba(221,161,94,0.45)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
