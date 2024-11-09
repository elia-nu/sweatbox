import React from 'react';
import { motion } from 'framer-motion';

const Programs = () => {
  const programs = [
    {
      title: "Weight Loss and Nutrition Plans",
      description: "We have teamed up with Nutritionists who provide clients with customized analyses, meal plans and nutrition counselling to manage weight gain/loss, learn about appropriate portion size and balanced nutrition, as well as how to prevent/control chronic conditions",
      icon: "🧬",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
    },
    {
      title: "HIIT (High-Intensity Interval Training)", 
      description: "Most of our group classes and personal training plans incorporate HIIT, meaning we alternate short periods of intense exercise with short recovery periods in one session for maximum impact.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712"
    },
    {
      title: "Muscle Toning and Hypertrophy",
      description: "For clients who want to increase the size of their muscles and increase muscle definition and leanness, we offer individualized training programs to achieve hypertrophy.",
      icon: "💪", 
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
    },
    {
      title: "General Bio-Mechanics Analysis",
      description: "We offer clients an initial, detailed examination of various everyday movements like squatting, dead-lifting (picking up things), walking up stairs, lunging, and running (gait) to assess their mobility and any limitations.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c"
    }
  ];

  return (
    <section className="pb-32 px-4 bg-secondary-900 md:pb-72 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 pt-20">
            ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600 animate-gradient-x">PROGRAMS</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Unlock your full potential with our scientifically-backed training methodologies
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative bg-secondary-800/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/90 to-transparent z-10" />
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover h-96 group-hover:scale-105 transition-transform duration-600"
                />
                <div 
                  className="relative z-20 p-8 flex flex-col items-center mt-auto"
                >
                  <div className="text-6xl mb-6">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-center text-primary-500 mb-3">{program.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
