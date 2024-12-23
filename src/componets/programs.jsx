import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);

  const programs = [
    {
      title: "Weight Loss and Nutrition Plans",
      description: "We have teamed up with Nutritionists who provide clients with customized analyses, meal plans and nutrition counselling to manage weight gain/loss, learn about appropriate portion size and balanced nutrition, as well as how to prevent/control chronic conditions",
      icon: "🧬",
      image: "https://sweatboxapg.com/wp-content/uploads/2022/05/g-768x471.jpg.webp"
    },
    {
      title: "HIIT (High-Intensity Interval Training)", 
      description: "Most of our group classes and personal training plans incorporate HIIT, meaning we alternate short periods of intense exercise with short recovery periods in one session for maximum impact.",
      icon: "⚡",
      image: "https://sweatboxapg.com/wp-content/uploads/2022/05/g-768x471.jpg.webp"
    },
    {
      title: "Muscle Toning and Hypertrophy",
      description: "For clients who want to increase the size of their muscles and increase muscle definition and leanness, we offer individualized training programs to achieve hypertrophy.",
      icon: "💪", 
      image: "https://sweatboxapg.com/wp-content/uploads/2022/05/g-768x471.jpg.webp"
    },
    {
      title: "General Bio-Mechanics Analysis",
      description: "We offer clients an initial, detailed examination of various everyday movements like squatting, dead-lifting (picking up things), walking up stairs, lunging, and running (gait) to assess their mobility and any limitations.",
      icon: "🎯",
      image: "https://sweatboxapg.com/wp-content/uploads/2022/05/g-768x471.jpg.webp"
    }
  ];


  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      onViewportEnter={() => setIsVisible(true)}
      className="pb-32 px-4 bg-secondary-900 md:pb-72"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-black text-white mb-6 pt-20"
          >
            ELITE <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600"
            
            >PROGRAMS</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            Unlock your full potential with our scientifically-backed training methodologies
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
            {isVisible && programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="relative bg-secondary-800/10 rounded-3xl overflow-hidden flex flex-col h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/90 to-transparent z-10" />
                <motion.img 
                  src={program.image} 
                  alt={program.title}
                  loading="lazy"
                  width="300"
                  height="200"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                  className="relative z-20 p-8 flex flex-col items-center mt-auto"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-6"
                  >
                    {program.icon}
                  </motion.div>
                  <motion.h3 
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold text-center text-primary-500 mb-3"
                  >
                    {program.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.4 }}
                    className="text-gray-300 text-sm text-center"
                  >
                    {program.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Programs;
