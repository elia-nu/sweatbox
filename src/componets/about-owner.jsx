import React from 'react';
import { motion } from 'framer-motion';

const AboutOwner = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-white text-white relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://sweatboxapg.com/wp-content/uploads/2022/05/g-1024x628.jpg.webp)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
        >
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <motion.div
              className="relative w-64 h-64"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-20"></div>
              <img
                src="https://sweatboxapg.com/wp-content/uploads/2022/05/g-1024x628.jpg.webp"
                alt="Getachew Melese"
                className="relative w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div className="text-center lg:text-left" {...fadeIn}>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Getachew Melese
              </h1>
              <p className="text-xl text-gray-300 mb-4">Founder & Head Coach</p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://www.instagram.com/sweatboxapg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/sweatboxapg"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* About Section */}
          <motion.section {...fadeIn} className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-12 h-[2px] bg-blue-500"></span>
              About
            </h2>
            <div className="space-y-6 text-gray-300">
              <p>
                Getachew (Gech) Melese is the visionary founder and Manager of
                SWEATBOX APG, whose unique approach to fitness has redefined the
                industry standards in Ethiopia. With a lifelong dedication to
                fitness, rooted in martial arts and sprinting, Gech has evolved
                into an exceptional personal trainer and coach with over 12
                years of experience.
              </p>
              <p>
                As the only CrossFit Level 1 certified trainer in Addis,
                complemented by his NESTA certification and Level 4 Diploma from
                AFPT Norge, Gech brings unparalleled expertise to the Ethiopian
                fitness landscape. In 2020, he established SWEATBOX APG with a
                mission to revolutionize the local fitness industry through a
                more dynamic, inclusive, and professional approach.
              </p>
              <p>
                At SWEATBOX, Gech has cultivated an environment where individual
                goals and community support converge. His philosophy transcends
                quick-fix solutions, focusing instead on sustainable lifestyle
                changes through structured training plans and client
                accountability. His impressive client portfolio spans from
                beginners to elite athletes, including diplomats and celebrities
                across Ethiopia and Europe.
              </p>
            </div>
          </motion.section>

          {/* Certifications Section */}
          <motion.section {...fadeIn} className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-12 h-[2px] bg-purple-500"></span>
              Certifications
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "CrossFit Level 1",
                  subtitle: "Certified Trainer",
                },
                {
                  title: "NESTA",
                  subtitle: "Certified Personal Trainer",
                },
                {
                  title: "Level 4 Diploma",
                  subtitle: "Akademiet for Personlig Trening",
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-semibold text-blue-400">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400">{cert.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-12 h-[2px] bg-blue-500"></span>
              Contact
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.a
                href="tel:+251913004932"
                className="flex items-center gap-4 bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-gray-300">+251 913 004 932</span>
              </motion.a>

              <motion.a
                href="mailto:Gechniclassaddis@gmail.com"
                className="flex items-center gap-4 bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-gray-300">
                  Gechniclassaddis@gmail.com
                </span>
              </motion.a>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutOwner;
