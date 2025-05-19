import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Github, 
  Linkedin, 
  ArrowUpRight 
} from 'lucide-react';

const links = [
  {
    platform: 'Codeforces',
    url: 'https://codeforces.com/profile/Naman1005',
    icon: Code,
    color: '#3B82F6'
  },
  {
    platform: 'Codechef',
    url: 'https://www.codechef.com/users/naman1005',
    icon: Code,
    color: '#F59E0B'
  },
  {
    platform: 'LeetCode',
    url: 'https://leetcode.com/u/Naman1005',
    icon: Code,
    color: '#FF9900'
  },
  {
    platform: 'AtCoder',
    url: 'https://atcoder.jp/users/Naman1005',
    icon: Code,
    color: '#0AC5B3'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/Naman1005',
    icon: Github,
    color: '#6B7280'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/naman1005/',
    icon: Linkedin,
    color: '#0A66C2'
  }
];

const Links: React.FC = () => {
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
            Connect With Me
          </motion.h2>
        </div>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {links.map((link, index) => {
            const Icon = link.icon;
            
            return (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 sm:p-6 group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: 'spring',
                      damping: 25,
                      stiffness: 300
                    }
                  }
                }}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="card-icon">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <span className="text-lg sm:text-xl font-semibold text-white">
                      {link.platform}
                    </span>
                  </div>
                  <ArrowUpRight 
                    size={18} 
                    className="text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                  />
                </div>
                
                <div className="text-xs sm:text-sm text-textSecondary truncate mt-2">
                  {link.url}
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Links;