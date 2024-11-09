import React from 'react';
import { motion } from 'framer-motion';


const Programs = () => {
  return (
    <>
     {/* Activities Section */}
     <div className="pb-32 px-4 bg-secondary-900 md:pb-72 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 pt-10">
              ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">PROGRAMS</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Unlock your full potential with our scientifically-backed training methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative  bg-secondary-800/50 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="absolute bottom-0 w-full h-full  bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 px-10 py-10 " />
                <motion.img 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={activity.image} 
                  alt={activity.title}
                  className="absolute bottom-0 w-full h-full  object-cover group-hover:scale-110 transition-transform duration-500 flex items-end justify-end bg-secondary-400/70"
                />
                <div className="relative z-20 p-8 flex flex-col items-center justify-end bg-secondary-800/70 backdrop-blur-sm rounded-xl mt-40">
                  <div className="text-6xl mb-6">{activity.icon}</div>
                  
                  <h3 className="text-2xl font-bold text-primary-500 mb-3">{activity.title}</h3>
                  <p className="text-gray-300">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
