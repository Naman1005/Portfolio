import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Trophy, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <motion.h2 
            className="section-title text-3xl sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            About Me
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            className="card lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              type: 'spring',
              damping: 25,
              stiffness: 300,
              delay: 0.1
            }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="card-icon">
                <Code size={24} className="text-accent" />
              </div>
              
              <div className="flex-grow">
                <h3 className="card-title text-xl sm:text-2xl">My Journey</h3>
                <p className="text-textSecondary text-base sm:text-lg leading-relaxed mb-4">
                  I'm passionate about solving complex problems through code. With a strong foundation in algorithms and data structures, 
                  I've honed my skills through competitive programming on platforms like Codeforces, Codechef, LeetCode, and AtCoder.
                </p>
                <p className="text-textSecondary text-base sm:text-lg leading-relaxed mb-4">
                  As a frontend developer, I combine my problem-solving abilities with creative design to build intuitive, 
                  performant user interfaces that provide exceptional user experiences.
                </p>
                <p className="text-textSecondary text-base sm:text-lg leading-relaxed">
                  I'm constantly learning and challenging myself to improve, whether it's optimizing an algorithm or 
                  crafting pixel-perfect UI components.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              type: 'spring',
              damping: 25,
              stiffness: 300,
              delay: 0.2
            }}
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="card-icon">
                <Brain size={24} className="text-accent" />
              </div>
              
              <div className="flex-grow">
                <h3 className="card-title text-xl sm:text-2xl mb-6">My Skills</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3">
                    <Code className="text-accent mt-1" size={18} />
                    <div>
                      <h4 className="font-medium text-white text-base sm:text-lg">Competitive Programming</h4>
                      <p className="text-textSecondary text-sm sm:text-base">Advanced algorithms & data structures</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Brain className="text-accent mt-1" size={18} />
                    <div>
                      <h4 className="font-medium text-white text-base sm:text-lg">Problem Solving</h4>
                      <p className="text-textSecondary text-sm sm:text-base">Analytical thinking & optimization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Trophy className="text-accent mt-1" size={18} />
                    <div>
                      <h4 className="font-medium text-white text-base sm:text-lg">Frontend Development</h4>
                      <p className="text-textSecondary text-sm sm:text-base">React, TypeScript, CSS, UI/UX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Coffee className="text-accent mt-1" size={18} />
                    <div>
                      <h4 className="font-medium text-white text-base sm:text-lg">Languages</h4>
                      <p className="text-textSecondary text-sm sm:text-base">C++, JavaScript, TypeScript, Java, Python</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;