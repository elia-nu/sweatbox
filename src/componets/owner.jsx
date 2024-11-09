import React from 'react';
import { motion } from 'framer-motion';



const Owner = () => {
  return (
    <div className="py-24 px-4 bg-secondary-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            MEET OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">
              OWNER & HEAD COACH
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://sweatboxapg.com/wp-content/uploads/2022/05/g-768x471.jpg.webp"
              alt="Head Coach"
              className="w-full h-auto w-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h3 className="text-4xl font-bold mb-6">John Smith</h3>
            <div className="space-y-6 text-gray-300">
              <p>
                With over 15 years of experience in fitness and performance
                training, Coach John has transformed countless lives through his
                innovative training methodologies.
              </p>
              <p>• Certified Strength & Conditioning Specialist (CSCS)</p>
              <p>• Former Professional Athlete</p>
              <p>• Sports Nutrition Specialist</p>
              <p>• Performance Enhancement Specialist</p>
              <p className="italic">
                "My mission is to help every individual unlock their full
                potential and achieve what they once thought was impossible."
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full font-bold text-white"
            >
              Book a Session
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Owner;
