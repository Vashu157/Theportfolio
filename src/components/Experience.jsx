const Experience = () => {
  const experiences = [
    {
      role: 'Full-Stack Developer',
      company: 'Blinkit-style Delivery Ecosystem',
      date: 'Oct 2025 - Present',
      points: [
        'Engineered a 3-tier delivery system comprising dual React Native apps and a Next.js admin dashboard.',
        'Architected a Node.js & PostgreSQL backend to sync real-time order lifecycles.',
        'Integrated Firebase Cloud Messaging (FCM) for automated push notifications.',
        'Developed secure RESTful APIs for multi-role authentication and dynamic inventory tracking.'
      ]
    },
    {
      role: 'Mobile Developer',
      company: 'Capable (Assistive Mobility App)',
      date: 'Jan 2026 - Apr 2026',
      points: [
        'Engineered a real-time computer vision engine utilizing Kotlin, CameraX, YOLOv8, and MiDaS to identify dynamic obstacles for visually impaired users.',
        'Architected a fully offline turn-by-turn navigation pipeline using GraphHopper and OpenStreetMap, featuring background compilation of routing graphs via the Overpass API.',
        'Designed a thread-safe Priority Dispatcher using Kotlin Coroutines, ensuring haptic obstacle warnings preempt standard Text-to-Speech instructions.',
        'Developed an accessible Jetpack Compose UI with Room DB for landmark management, and integrated cloud VLM/OCR alongside an isolated emergency SOS module.'
      ]
    }
  ];

  return (
    <section className="py-[120px] px-[5%] max-w-[1100px] mx-auto" id="experience">
      <h2 className="font-[var(--font-playfair)] text-[2.5rem] font-bold mb-14 text-left relative inline-block after:content-[''] after:block after:w-[40px] after:h-[2px] after:bg-[var(--color-primary-accent)] after:mt-2.5 after:rounded-[1px]">
        Work Experience
      </h2>
      
      <div className="relative pl-[40px] md:pl-[52px] mt-12 before:content-[''] before:absolute before:left-[14px] md:before:left-[20px] before:top-0 before:bottom-0 before:w-[1.5px] before:bg-black/10">
        {experiences.map((exp, index) => (
          <div 
            className="relative mb-10 last:mb-0 before:content-[''] before:absolute before:-left-[32px] md:before:-left-[38px] before:top-[28px] before:w-[10px] md:before:w-[12px] before:h-[10px] md:before:h-[12px] before:rounded-full before:bg-[var(--color-primary-accent)] before:border-2 before:border-[#fefae0] before:shadow-[0_0_0_3px_rgba(221,161,94,0.2)] before:z-10" 
            key={index}
          >
            <div className="px-[1.4rem] md:px-[2.2rem] py-[1.5rem] md:py-[2rem] rounded-[16px] bg-[var(--color-bg-light)] border border-[var(--color-border)] shadow-[var(--shadow-md)]">
              <h3 className="font-[var(--font-playfair)] text-[1.15rem] md:text-[1.3rem] font-semibold text-black mb-1 tracking-[-0.01em]">{exp.role}</h3>
              <h4 className="text-[0.92rem] font-medium text-[var(--color-primary-accent)] mb-2 tracking-[0.01em]">{exp.company}</h4>
              <p className="text-[0.82rem] text-[#999] mb-5 font-normal tracking-[0.03em] uppercase">{exp.date}</p>
              <ul className="list-none p-0 m-0">
                {exp.points.map((point, i) => (
                  <li className="relative pl-[1.2rem] mb-[0.7rem] last:mb-0 text-[0.95rem] leading-[1.7] text-[#555] before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(221,161,94,0.5)]" key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
