import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LineChart, Ticket, Code2, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Codeforces Companion Website',
    description: 'An advanced profile statistics viewer for Codeforces users that provides insights into solving patterns and skill progression.',
    icon: LineChart,
    color: '#3B82F6',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Codeforces API']
  },
  {
    title: 'Concert Ticket Prioritization',
    description: 'A hackathon project that uses an algorithm to fairly distribute concert tickets based on various priority metrics.',
    icon: Ticket,
    color: '#EC4899',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Priority Queue Algorithm']
  },
  {
    title: 'Valid Token Recognizer',
    description: 'A C/C++ syntax validator that uses finite automata to recognize valid tokens and detect syntax errors.',
    icon: Code2,
    color: '#10B981',
    technologies: ['C++', 'Automata Theory', 'Lexical Analysis', 'Parser Design']
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing competitive programming achievements and frontend development projects.',
    icon: Globe,
    color: '#F59E0B',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  }
];

const Projects: React.FC = () => {
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
            Featured Projects
          </motion.h2>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <motion.div
                key={project.title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  type: 'spring',
                  damping: 25,
                  stiffness: 300,
                  delay: index * 0.1
                }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="card-icon">
                    <Icon size={24} className="text-accent" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="card-title text-xl sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-textSecondary text-base sm:text-lg leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="tag text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;