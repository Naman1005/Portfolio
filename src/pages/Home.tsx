import React from 'react';
import { motion } from 'framer-motion';
import TextRotate from '../components/ui/TextRotate';

const HomePage = () => {
  return (
    <section className="h-[calc(100vh-6rem)] flex flex-col justify-center items-center px-4 sm:px-6">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 300,
            damping: 30,
            delay: 0.2
          }}
        >
          <span className="text-white font-normal">Hi, I'm </span>
          <span className="text-gradient font-bold">Naman Singh</span>
        </motion.h1>
        
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 300,
            damping: 30,
            delay: 0.4
          }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-textPrimary flex flex-wrap justify-center items-center gap-x-2">
            <span>I'm a</span>
            <TextRotate 
               texts={['Competitive Programmer', 'Front-end Developer', 'Problem-solving enthusiast', 'Bug Hunter', 'Logic Designer']}
               mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-accent to-orange-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-bold"
               staggerFrom={"last"}
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               exit={{ y: "-120%" }}
               staggerDuration={0.025}
               splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
               transition={{ type: "spring", damping: 30, stiffness: 400 }}
               rotationInterval={2500}
            />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;