import React from 'react';
import { FaDumbbell, FaRunning, FaHeartbeat, FaWeight, FaAppleAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ServicesCard = ({ title, description, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className=" relative bg-white/90 backdrop-blur-xl h-96 flex flex-col justify-end rounded-xl shadow-lg overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="p-6 bg-black/80 transition-colors">
        <div className="absolute bottom-0 bg-gradient-to-t from-black/60 to-transparent" />
      
        <h3 className="text-2xl font-bold text-orange-500 mb-3">{title}</h3>
        <p className="text-gray-100 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const FacilityCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-secondary-800/50 backdrop-blur rounded-xl p-8 text-center"
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-full bg-orange-500/20">
          <Icon className="text-orange-400 text-5xl" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Individual (Solo) Plan",
      description: "A person that purchases this plan can use the facility on their own without a trainer. Client is still able to get assistance of a trainer when needed.",
      image: "https://sweatboxapg.com/wp-content/uploads/2022/05/solo.jpg.webp"
    },
    {
      title: "Personal Training Plan", 
      description: "1 on 1 and 2 on 1 plans are possible with a trainer.",
      image: "https://sweatboxapg.com/wp-content/uploads/2022/01/22.jpg.webp"
    },
    {
      title: "Group Class Plan",
      description: "A group of people (or more than 3) working in a class with one or more trainers.",
      image: "https://sweatboxapg.com/wp-content/uploads/2022/01/23.jpg.webp"
    },
    {
      title: "Boxing/Kick Boxing/Thai Boxing Plan",
      description: "Both types of trainings are given by former practitioners.",
      image: "https://sweatboxapg.com/wp-content/uploads/2022/01/25-300x200.jpg.webp"
    }
  ];

  const facilities = [
    {
      icon: FaDumbbell,
      title: "GENERAL BIO-MECHANICS ANALYSIS",
      description: "We offer bio-mechanical analysis for various movements like squatting, dead lifting (picking up things), walking up stairs, lunging, and running. Used to assess their mobility and any limitations."
    },
    {
      icon: FaHeartbeat,
      title: "RESISTANCE TRAINING",
      description: "We design progressive and result-driven training plans using external resistance which includes free weight exercises, medicine balls, sand bags, resistance bands, and body weight exercises."
    },
    {
      icon: FaRunning,
      title: "MUSCLE TONING AND HYPERTROPHY",
      description: "For clients who want to improve the size of their muscles and achieve muscle growth, we design and offer individualized training programs to achieve hypertrophy."
    },
    {
      icon: FaWeight,
      title: "HIIT TRAINING",
      description: "Most of our group class and personal training plans incorporate HIIT, alternating short periods of intense exercise with recovery periods for maximum impact in minimal time."
    },
    {
      icon: FaAppleAlt,
      title: "WEIGHT LOSS AND NUTRITION",
      description: "We offer customized nutrition counseling to manage weight, learn about portion size and balanced nutrition. Our approach focuses on sustainable, long-term healthy eating habits."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
         <span className="text-orange-500">    SWEATBOX</span> SERVICES
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </motion.div>
        
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 flex flex-wrap items-center bg-secondary-900/20 backdrop-blur-xl justify-center">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
         
            >
              <ServicesCard {...service} />
            </motion.div>
          ))}
        </div>
        </div>

        {/* Facilities Section */}
        <div className="relative rounded-2xl overflow-hidden " style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),url('https://sweatboxapg.com/wp-content/uploads/2021/12/crossfit7.jpg')",
          backgroundAttachment: "fixed"
        }}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <div className="relative py-20 px-4 container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-white">WORLD CLASS </span>
                <span className="text-orange-500">FACILITIES</span>
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
            </motion.div>
            
            <div className=" flex flex-row gap-8  flex-wrap items-center justify-center">
              {facilities.map((facility, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className='w-96 h-96 break-inside-avoid cursor-pointer'
                >
                  <FacilityCard {...facility} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
        {/* Personal Trainer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-secondary-800/50 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://sweatboxapg.com/wp-content/uploads/2021/12/3-1-768x577.jpg.webp" 
                alt="Personal Trainer" 
                className="rounded-xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                TRAINER EXPERT
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                PERSONAL <span className="text-orange-500">TRAINER</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Carlos/Neo (Coach) Melayah, is the founder and Manager of SWEATBOX APG and it is his vision and approach to fitness that define the unique SWEATBOX culture. Gech has been a fitness enthusiast for more than two decades and has grown up with an art form which then led to a career as a personal trainer and coach. Gech has 12 years of experience practicing his craft.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Read More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
