import Image from 'next/image';

export default function MainSection() {
  const skills = {
    frontend: ['React', 'Angular', 'Next.js'],
    backend: ['Node.js', 'Express.js', 'Python'],
    database: ['MongoDB', 'SQL'],
    other: ['Responsive Design', 'Clean Code']
  };

  const SkillTag = ({ skill }) => (
    <span className="inline-block px-3 py-1 mx-1 my-1 bg-gray-800 text-yellow-400 rounded-full text-sm border border-yellow-400/30 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 cursor-default transform hover:scale-105 hover:shadow-[0_0_10px_rgba(234,179,8,0.3)]">
      {skill}
    </span>
  );

  const HighlightedSkill = ({ children }) => (
    <span className="text-yellow-400 font-semibold">{children}</span>
  );

  return (
    <section id="main" className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
              <Image
                src="/assets/images/photo.jpg"
                alt="Ehap Mohmad"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-center transform transition-all duration-300 hover:scale-110 hover:text-yellow-400 hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">
              Osama Ramdam
            </h1>
            <p className="text-xl text-gray-300 mb-4 text-center max-w-2xl">
              Full Stack Developer | System Architecture Enthusiast | Problem Solver
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center">
            <div className="text-lg text-gray-400 mb-8 text-center">
              <p className="mb-4 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                &nbsp;&nbsp;&nbsp;&nbsp;I'm a results-driven Full-Stack Developer with over 5 years of experience building high-performance, scalable web applications. 
                I specialize in modern JavaScript frameworks like <HighlightedSkill>React</HighlightedSkill> and <HighlightedSkill>Angular</HighlightedSkill>, and backend technologies such as <HighlightedSkill>.NET Core</HighlightedSkill>, <HighlightedSkill>Node.js</HighlightedSkill>, and <HighlightedSkill>Python</HighlightedSkill>.
                My expertise extends to cloud platforms like <HighlightedSkill>AWS</HighlightedSkill> and <HighlightedSkill>Azure</HighlightedSkill>, where I design secure, maintainable architectures.
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;I'm passionate about writing clean, efficient code, optimizing databases, implementing secure authentication systems, and streamlining development workflows through automated <HighlightedSkill>CI/CD</HighlightedSkill> pipelines. I thrive in <HighlightedSkill>Agile</HighlightedSkill> teams and take pride in delivering production-ready software that solves real-world problems.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="flex flex-wrap justify-center">
                    {skillList.map((skill) => (
                      <SkillTag key={skill} skill={skill} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <a
                href="#projects"
                className="group relative px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
              <a
                href="#contact"
                className="group relative px-6 py-3 border border-yellow-400 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-yellow-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 