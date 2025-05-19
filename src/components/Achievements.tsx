import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code, BarChart, Target } from 'lucide-react';

const achievements = [
  {
    platform: 'Codeforces',
    rating: 'Expert (1741)',
    rank: 'top 5% globally',
    icon: Code,
    color: '#3B82F6',
    description: '550+ problems solved with expertise in algorithms and data structures.'
  },
  {
    platform: 'Codechef',
    rating: '5 star (2008)',
    rank: 'top 1% globally',
    icon: Award,
    color: '#F59E0B',
    description: 'Consistent two-digit global ranks in many contests.'
  },
  {
    platform: 'LeetCode',
    rating: 'Knight (1955)',
    rank: 'top 4% globally',
    icon: Target,
    color: '#10B981',
    description: 'Strong DSA knowledge with optimal solutions to complex problems.'
  },
  {
    platform: 'AtCoder',
    rating: 'Cyan (1280)',
    rank: 'top 5% globally',
    icon: BarChart,
    color: '#06B6D4',
    description: 'Specialized in solving challenging algorithmic problems under time constraints.'
  }
];

const Achievements: React.FC = () => {
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
            Competitive Programming Achievements
          </motion.h2>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <motion.div
                key={achievement.platform}
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
                      {achievement.platform}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3 sm:mb-4">
                      <span className="text-lg sm:text-xl font-semibold text-white">
                        {achievement.rating}
                      </span>
                      <span className="tag text-xs sm:text-sm">
                        {achievement.rank}
                      </span>
                    </div>
                    <p className="text-textSecondary text-base sm:text-lg leading-relaxed">
                      {achievement.description}
                    </p>
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

export default Achievements;