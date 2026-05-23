const Skills = () => {
  const categories = [
    {
      label: 'Languages',
      skills: ['C/C++', 'Python', 'JavaScript', 'TypeScript', 'Kotlin'],
    },
    {
      label: 'Frontend',
      skills: ['React.JS', 'Next.js', 'React Native', 'Jetpack Compose', 'HTML5', 'CSS3'],
    },
    {
      label: 'Backend',
      skills: ['Node.js', 'REST APIs', 'Prisma', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
      label: 'AI / ML',
      skills: ['YOLOv8', 'MiDaS', 'PyTorch', 'Stable Baselines 3', 'Computer Vision'],
    },
  ];

  return (
    <section className="py-[120px] px-[5%] max-w-[1100px] mx-auto" id="skills">
      <h2 className="font-[var(--font-playfair)] text-[2.5rem] font-bold mb-14 text-left relative inline-block after:content-[''] after:block after:w-[40px] after:h-[2px] after:bg-[var(--color-primary-accent)] after:mt-2.5 after:rounded-[1px] text-[var(--color-primary-accent)]">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col gap-5">
            <h3 className="font-[var(--font-playfair)] text-[1.1rem] font-semibold text-[var(--color-primary-accent)] tracking-[0.02em] m-0 pb-2 border-b border-black/5">{category.label}</h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, i) => (
                <span key={i} className="font-[var(--font-inter)] text-[0.85rem] font-medium text-[var(--color-text-primary)] bg-white border border-black/10 rounded-full px-5 py-2 whitespace-nowrap transition-colors duration-300 hover:border-[var(--color-primary-accent)] hover:bg-[#fefae0]">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
