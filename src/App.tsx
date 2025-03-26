import React, { useEffect, useState } from 'react';
import { GithubIcon, Linkedin, Mail, ExternalLink, FileText } from 'lucide-react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (position > window.innerHeight * 0.3) {
        setShowContent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nameScale = 1 + (scrollPosition / window.innerHeight) * 2;
  const nameOpacity = 1 - (scrollPosition / (window.innerHeight * 0.5));

  return (
    <div className="bg-gradient-to-b from-[#0b0b15] via-[#121630] to-[#0a1525] min-h-[200vh] relative">
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-40 md:w-80 h-40 md:h-80 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Name Section */}
      <div className="name-container fixed top-0 left-0 w-full h-screen flex items-center justify-center">
        <div className="relative">
          <div className="text-center">
            <h1
              className="text-orange-300 font-bold tracking-wider font-impact"
              style={{
                fontSize: `${1.5 * Math.min(12, 6 + nameScale)}vw`,
                opacity: Math.max(0, nameOpacity),
                transform: `scale(${nameScale}) translateZ(${scrollPosition * 0.1}px)`
              }}
            >
              NAMAN SINGH
            </h1>
            <h1
              className="text-orange-300 font-bold tracking-wider font-raleway"
              style={{
                fontSize: `${0.3 * Math.min(10, 4 + nameScale)}vw`,
                opacity: Math.max(0, nameOpacity),
                transform: `scale(${nameScale}) translateZ(${scrollPosition * 0.1}px)`
              }}
            >
              PORTFOLIO
            </h1>
          </div>
        </div>
        <div className="absolute bottom-8 w-full text-center text-orange-400/30 text-xs md:text-sm tracking-widest animate-bounce">
          SCROLL TO EXPLORE
        </div>
      </div>

      {/* Content Section */}
      <div className="relative top-[100vh] w-full">
        <div className="glass-effect">
          {/* Hero Section */}
          <section className="content-section">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title">About Me</h2>
                <p className="text-orange-200/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  I'm a passionate competitive programmer who thrives on solving challenging problems and optimizing solutions. I love pushing my limits in contests, and I've built a strong foundation in data structures and algorithms. While my main focus is competitive programming, I also enjoy web development, especially creating unique projects that give me a sense of ownership and creativity. I've developed a Codeforces companion website that provides detailed user stats, problem filters, and sorting options. Currently, I'm pursuing computer science engineering and working towards improving both sides of my interests.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                  <a href="https://github.com/Naman1005" className="social-link">
                    <GithubIcon size={20} className="mr-2" />
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/naman1005" className="social-link">
                    <Linkedin size={20} className="mr-2" />Naman Singh
                  </a>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-orange-300 mb-3 md:mb-4">Competitive Programming Profiles</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <a href="https://codeforces.com/profile/Naman1005" className="cp-link">
                    <h4 className="text-pink-300 font-semibold">Codeforces</h4>
                    <p className="text-orange-200/60">Expert (1600+)</p>
                  </a>
                  <a href="https://www.codechef.com/users/naman1005" className="cp-link">
                    <h4 className="text-yellow-300 font-semibold">CodeChef</h4>
                    <p className="text-orange-200/60">4★ (1800+)</p>
                  </a>
                  <a href="https://leetcode.com/u/Naman1005/" className="cp-link">
                    <h4 className="text-orange-300 font-semibold">LeetCode</h4>
                    <p className="text-orange-200/60">Knight (1900+)</p>
                  </a>
                  <a href="https://atcoder.jp/users/Naman1005" className="cp-link">
                    <h4 className="text-purple-300 font-semibold">AtCoder</h4>
                    <p className="text-orange-200/60">Cyan (1200+)</p>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="content-section">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="skill-card">
                    <h3 className="text-pink-300">Technical Skills</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-orange-300 font-semibold mb-2">Programming Languages</h4>
                        <p className="text-orange-200/60">C++, Java, Python, SQL</p>
                      </div>
                      <div>
                        <h4 className="text-orange-300 font-semibold mb-2">Competitive Programming</h4>
                        <p className="text-orange-200/60">Data Structures, Algorithms, Problem Solving</p>
                      </div>
                      <div>
                        <h4 className="text-orange-300 font-semibold mb-2">Web Development</h4>
                        <p className="text-orange-200/60">HTML, CSS, JavaScript, React.js, Node.js</p>
                      </div>
                      <div>
                        <h4 className="text-orange-300 font-semibold mb-2">Databases</h4>
                        <p className="text-orange-200/60">MySQL</p>
                      </div>
                      <div>
                        <h4 className="text-orange-300 font-semibold mb-2">Version Control</h4>
                        <p className="text-orange-200/60">Git, GitHub</p>
                      </div>
                      <div>
                        <h4 className="text-orange-300 font-semibold mb-2">Operating System</h4>
                        <p className="text-orange-200/60">Ubuntu</p>
                      </div>
                      <div>
                        <h4 className="text-orange-300 font-semibold mb-2">APIs & Integrations</h4>
                        <p className="text-orange-200/60">Codeforces API</p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-card">
                    <h3 className="text-yellow-300">Soft Skills</h3>
                    <ul className="text-orange-200/60 space-y-3">
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        <div>
                          <h4 className="font-semibold mb-1">Problem-Solving</h4>
                          <p className="text-sm">Analytical approach to breaking down complex problems</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        <div>
                          <h4 className="font-semibold mb-1">Logical Thinking</h4>
                          <p className="text-sm">Strong ability to think systematically and solve problems efficiently</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        <div>
                          <h4 className="font-semibold mb-1">Attention to Detail</h4>
                          <p className="text-sm">Meticulous approach to code quality and problem-solving</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        <div>
                          <h4 className="font-semibold mb-1">Time Management</h4>
                          <p className="text-sm">Efficient prioritization and execution, especially during contests</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        <div>
                          <h4 className="font-semibold mb-1">Adaptability</h4>
                          <p className="text-sm">Quickly learns and applies new technologies, problem-solving techniques, and coding strategies</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        <div>
                          <h4 className="font-semibold mb-1">Resilience</h4>
                          <p className="text-sm">Stays focused and persistent in solving challenging problems, even under pressure</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="content-section">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="project-card">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 rounded-xl"></div>
                    <div className="relative">
                      <h3 className="text-lg md:text-xl font-semibold text-pink-300 mb-2 md:mb-3">CF-Assist</h3>
                      <p className="text-orange-200/60 text-sm md:text-base mb-3 md:mb-4">
                        A Codeforces companion website providing enhanced user statistics tracking and advanced problem filtering capabilities not available on the original platform.
                      </p>
                      <a href="https://naman1005.github.io/CF-Assist/" target="_blank" rel="noopener noreferrer" className="project-link">
                        View Website <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                  <div className="project-card">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-xl"></div>
                    <div className="relative">
                      <h3 className="text-lg md:text-xl font-semibold text-yellow-300 mb-2 md:mb-3">Triangle Lemming</h3>
                      <p className="text-orange-200/60 text-sm md:text-base mb-3 md:mb-4">
                        A challenging Codeforces problem I designed incorporating concepts from mathematics, geometry, and sequences.
                      </p>
                      <a href="https://codeforces.com/contestInvitation/5453c68b25f947c6db8f4055165698a93b6eea76" target="_blank" rel="noopener noreferrer" className="project-link">
                        View Problem <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                  <div className="project-card md:col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl"></div>
                    <div className="relative">
                      <h3 className="text-lg md:text-xl font-semibold text-purple-300 mb-2 md:mb-3">Transform, Permute</h3>
                      <p className="text-orange-200/60 text-sm md:text-base mb-3 md:mb-4">
                        A complex Codeforces problem I designed that combines mathematical concepts with permutations and graph theory.
                      </p>
                      <a href="https://codeforces.com/contestInvitation/4d1ac0c35b2b52c17a9f9f9951591ee4d21582ee" target="_blank" rel="noopener noreferrer" className="project-link">
                        View Problem <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="content-section">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title">Education</h2>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="education-card">
                    <div className="relative overflow-hidden rounded-xl mb-4 md:mb-6 aspect-video">
                      <img
                        src="/src/college.jpg"
                        alt="NIT Campus"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] to-transparent"></div>
                    </div>
                    <h3 className="text-pink-300">Bachelor of Technology</h3>
                    <h4 className="text-orange-300">Dr. B.R. National Institute of Technology • 2023 - Present</h4>
                    <p className="text-orange-200/60">
                      Pursuing Computer Science Engineering with a focus on competitive programming and software development.
                    </p>
                  </div>
                  <div className="education-card">
                    <div className="relative overflow-hidden rounded-xl mb-4 md:mb-6 aspect-video">
                      <img
                        src="/src/school.jpg"
                        alt="School Campus"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] to-transparent"></div>
                    </div>
                    <h3 className="text-yellow-300">Higher Secondary Education</h3>
                    <h4 className="text-orange-300">School • 2008 - 2023</h4>
                    <p className="text-orange-200/60">
                      Completed science stream with computer applications. Specialized in Java programming and developed a strong foundation in mathematics and science.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="content-section">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title">Achievements</h2>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="achievements-card bg-[#0f0f1a]/40 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-orange-500/10">
                    <h3 className="text-pink-300">Competitive Programming Milestones</h3>
                    <ul className="text-orange-200/60 space-y-3 md:space-y-4">
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        Reached Expert rating (1600+) on Codeforces
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        Achieved 4★ rating (1800+) on CodeChef
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        Attained Knight rank (1900+) on LeetCode
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        Ranked Cyan (1200+) on AtCoder
                      </li>
                    </ul>
                  </div>
                  <div className="achievements-card bg-[#0f0f1a]/40 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-orange-500/10">
                    <h3 className="text-yellow-300">Problem Setting & Development</h3>
                    <ul className="text-orange-200/60 space-y-3 md:space-y-4">
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        Created "Triangle Lemming" - A mathematical and geometric problem on Codeforces
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        Designed "Transform, Permute" - A complex problem combining permutations and graph theory
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        Developed CF-Assist, enhancing Codeforces user experience with advanced analytics
                      </li>
                    </ul>
                  </div>
                  <div className="achievements-card bg-[#0f0f1a]/40 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-orange-500/10 md:col-span-2">
                    <h3 className="text-purple-300">Academic Excellence</h3>
                    <ul className="text-orange-200/60 space-y-3 md:space-y-4">
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        Best Startup Award at Satyan Innovation Fest (SIF) 2022
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-300 mr-2">•</span>
                        Scored 96% in Class 12 board examinations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Resume Section */}
          {/* <section className="content-section">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title">Resume</h2>
                <div className="text-center">
                  <p className="text-orange-200/80 text-base md:text-lg mb-6 md:mb-8">
                    Download my resume to learn more about my experience, skills, and achievements.
                  </p>
                  <a
                    href="/path-to-your-cv.pdf"
                    download
                    className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full text-orange-300 hover:text-orange-200 transition-colors border border-orange-500/20 hover:border-orange-500/40 text-sm md:text-base"
                  >
                    <FileText size={18} className="mr-2" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </section> */}

          {/* Contact Section */}
          <section className="content-section">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title">Get in Touch</h2>
                <p className="text-orange-200/80 text-base md:text-lg mb-6 md:mb-8">
                  Feel free to connect with me for discussions on competitive programming, web development, or any exciting projects! I'm always open to learning and collaborating.
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <a href="mailto:s.naman1610@gmail.com" className="contact-link">
                    <Mail size={18} className="mr-2" /> s.naman1610@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/naman1005" className="contact-link">
                    <Linkedin size={18} className="mr-2" />Naman Singh
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;