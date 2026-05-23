const Leadership = () => {
  const roles = [
    {
      role: 'Deputy General Secretary',
      organization: 'Upvision (Tech Club) at NIT Delhi'
    },
    {
      role: 'Placement Coordinator',
      organization: "CSE '27 batch"
    },
    {
      role: 'Lead Organizer',
      organization: '"Build with TRAE" Hackathon and the "Bellatrix" 24-hour hackathon'
    }
  ];

  return (
    <section className="py-[120px] px-[5%] max-w-[1100px] mx-auto" id="leadership">
      <h2 className="font-[var(--font-playfair)] text-[2.5rem] font-bold mb-14 text-left relative inline-block after:content-[''] after:block after:w-[40px] after:h-[2px] after:bg-[var(--color-primary-accent)] after:mt-2.5 after:rounded-[1px] text-[var(--color-primary-accent)]">
        Leadership & Extracurriculars
      </h2>

      <div className="flex flex-col max-w-[720px] mx-auto">
        {roles.map((item, index) => (
          <div key={index} className="py-[1.5rem] md:py-[2rem] flex items-start gap-[1.25rem] md:gap-[2rem] border-b border-black/10 last:border-b-0 transition-transform duration-300 hover:translate-x-1.5 group">
            <span className="font-[var(--font-playfair)] text-[2rem] md:text-[2.5rem] font-bold text-black/10 leading-none shrink-0 min-w-[44px] md:min-w-[56px] transition-colors duration-300 select-none group-hover:text-[var(--color-primary-accent)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex-grow pt-1">
              <h3 className="font-[var(--font-playfair)] text-[1.15rem] md:text-[1.3rem] font-semibold text-[var(--color-text-primary)] mb-1.5 leading-[1.3]">{item.role}</h3>
              <p className="font-[var(--font-inter)] text-[0.95rem] text-[#555] leading-[1.5]">{item.organization}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
