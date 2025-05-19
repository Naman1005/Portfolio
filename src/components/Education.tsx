import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, School, Calendar, MapPin, Award, Code, Trophy, Book } from 'lucide-react';

const educationData = [
  {
    type: 'College',
    name: 'Dr. B.R. Ambedkar National Institute of Technology',
    duration: '2023 - 2027',
    field: 'Computer Science Engineering',
    location: 'Jalandhar',
    icon: GraduationCap,
    color: '#3B82F6',
    highlights: [
      {
        icon: Code,
        title: 'Coding Excellence',
        description: 'Highest rated coder in the college'
      },
      {
        icon: Trophy,
        title: 'Hackathons',
        description: 'Participated in a number of hackathons'
      },
      {
        icon: Book,
        title: 'Coursework',
        description: 'Data Structures, Algorithms, Operating Systems, Database Management'
      }
    ]
  },
  {
    type: 'School',
    name: 'Sacred Heart Convent School',
    duration: '2008 - 2023',
    field: 'Mathematics, Science, and Computer Applications',
    location: 'Ludhiana',
    icon: School,
    color: '#10B981',
    highlights: [
      {
        icon: Trophy,
        title: 'Academic Excellence',
        description: '96% in 12th grade, 95.6% in 10th grade'
      },
      {
        icon: Award,
        title: 'Startup Competition Winner',
        description: 'Stood first in Startup competition of Satyan Innovation Fest'
      },
      {
        icon: Code,
        title: 'Best Coder',
        description: 'Best Coder in school with highest academic excellence in computer applications'
      }
    ]
  }
];

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            Education
          </motion.h2>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((education, index) => {
            const Icon = education.icon;
            
            return (
              <motion.div
                key={education.name}
                className="card min-h-[32rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  type: 'spring',
                  damping: 25,
                  stiffness: 300,
                  delay: index * 0.1
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="card-icon">
                      <Icon size={32} className="text-accent" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="card-title">
                        {education.type}
                      </h3>
                      <p className="text-xl font-semibold text-white mb-4">
                        {education.name}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-textSecondary">
                          <Calendar size={16} />
                          <span>{education.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-textSecondary">
                          <MapPin size={16} />
                          <span>{education.location}</span>
                        </div>
                      </div>
                      <p className="text-lg text-textSecondary mb-6">
                        {education.field}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 flex-grow">
                    {education.highlights.map((highlight, hIndex) => {
                      const HighlightIcon = highlight.icon;
                      return (
                        <div 
                          key={hIndex}
                          className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-accent/30 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-surface">
                            <HighlightIcon size={20} className="text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">
                              {highlight.title}
                            </h4>
                            <p className="text-textSecondary">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
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

export default Education;