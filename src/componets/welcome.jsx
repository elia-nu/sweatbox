import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [currentTime, setCurrentTime] = React.useState(0);
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
   <>
          <div className="bg-secondary-800/50 backdrop-blur-md py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              WELCOME TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">SWEATBOX</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Experience fitness redefined. Where innovation meets dedication to forge the strongest version of you.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
          
              muted
              playsInline
              loop
              onTimeUpdate={handleTimeUpdate}
              poster="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa"
            >
              <source src="https://sweatboxapg.com/wp-content/uploads/2022/04/Untitled.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Custom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent z-20">
              <div className="flex items-center gap-4 text-white">
                <button 
                  onClick={togglePlay}
                  className="hover:text-orange-400 transition-colors"
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
                <span className="text-sm">{formatTime(currentTime)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
   </>
  );
};

export default Welcome;
