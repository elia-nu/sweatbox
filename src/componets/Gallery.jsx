import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      title: "Morning HIIT Session",
      title_am: "የጠዋት HIIT ክፍለ ጊዜ",
      description: "High intensity interval training with our elite trainers",
      description_am: "ከእኛ የመጀመሪያ ደረጃ አሰልጣኞች ጋር ከፍተኛ ጥንካሬ ያለው የጊዜ ስልጠና",
      img_url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
    },
    {
      id: 2,
      title: "Strength Training",
      title_am: "የጥንካሬ ስልጠና",
      description: "Building muscle and power with proper form",
      description_am: "ትክክለኛ መልክ ያለው የጡንቻ እና ሃይል ግንባታ",
      img_url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
    {
      id: 3,
      title: "Yoga & Flexibility",
      title_am: "ዮጋ እና ተለዋዋጭነት",
      description: "Improve mobility and mindfulness",
      description_am: "እንቅስቃሴን እና ንቃተ ህሊናን ያሻሽሉ",
      img_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    },
    {
      id: 4,
      title: "Boxing Class",
      title_am: "የቦክስ ክፍል",
      description: "Learn proper technique and build endurance",
      description_am: "ትክክለኛ ቴክኒክን ይማሩ እና ጽናትን ይገንቡ",
      img_url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
    },
    {
      id: 5,
      title: "Morning HIIT Session",
      title_am: "የጠዋት HIIT ክፍለ ጊዜ",
      description: "High intensity interval training with our elite trainers",
      description_am: "ከእኛ የመጀመሪያ ደረጃ አሰልጣኞች ጋር ከፍተኛ ጥንካሬ ያለው የጊዜ ስልጠና",
      img_url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
    },
    {
      id: 2,
      title: "Strength Training",
      title_am: "የጥንካሬ ስልጠና",
      description: "Building muscle and power with proper form",
      description_am: "ትክክለኛ መልክ ያለው የጡንቻ እና ሃይል ግንባታ",
      img_url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
    {
      id: 3,
      title: "Yoga & Flexibility",
      title_am: "ዮጋ እና ተለዋዋጭነት",
      description: "Improve mobility and mindfulness",
      description_am: "እንቅስቃሴን እና ንቃተ ህሊናን ያሻሽሉ",
      img_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    },
    {
      id: 4,
      title: "Boxing Class",
      title_am: "የቦክስ ክፍል",
      description: "Learn proper technique and build endurance",
      description_am: "ትክክለኛ ቴክኒክን ይማሩ እና ጽናትን ይገንቡ",
      img_url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
    },
    {
      id: 1,
      title: "Morning HIIT Session",
      title_am: "የጠዋት HIIT ክፍለ ጊዜ",
      description: "High intensity interval training with our elite trainers",
      description_am: "ከእኛ የመጀመሪያ ደረጃ አሰልጣኞች ጋር ከፍተኛ ጥንካሬ ያለው የጊዜ ስልጠና",
      img_url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
    },
    {
      id: 2,
      title: "Strength Training",
      title_am: "የጥንካሬ ስልጠና",
      description: "Building muscle and power with proper form",
      description_am: "ትክክለኛ መልክ ያለው የጡንቻ እና ሃይል ግንባታ",
      img_url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
    {
      id: 3,
      title: "Yoga & Flexibility",
      title_am: "ዮጋ እና ተለዋዋጭነት",
      description: "Improve mobility and mindfulness",
      description_am: "እንቅስቃሴን እና ንቃተ ህሊናን ያሻሽሉ",
      img_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    },
    {
      id: 4,
      title: "Boxing Class",
      title_am: "የቦክስ ክፍል",
      description: "Learn proper technique and build endurance",
      description_am: "ትክክለኛ ቴክኒክን ይማሩ እና ጽናትን ይገንቡ",
      img_url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
    },
    {
      id: 1,
      title: "Morning HIIT Session",
      title_am: "የጠዋት HIIT ክፍለ ጊዜ",
      description: "High intensity interval training with our elite trainers",
      description_am: "ከእኛ የመጀመሪያ ደረጃ አሰልጣኞች ጋር ከፍተኛ ጥንካሬ ያለው የጊዜ ስልጠና",
      img_url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
    },
    {
      id: 2,
      title: "Strength Training",
      title_am: "የጥንካሬ ስልጠና",
      description: "Building muscle and power with proper form",
      description_am: "ትክክለኛ መልክ ያለው የጡንቻ እና ሃይል ግንባታ",
      img_url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
    {
      id: 3,
      title: "Yoga & Flexibility",
      title_am: "ዮጋ እና ተለዋዋጭነት",
      description: "Improve mobility and mindfulness",
      description_am: "እንቅስቃሴን እና ንቃተ ህሊናን ያሻሽሉ",
      img_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    },
    {
      id: 4,
      title: "Boxing Class",
      title_am: "የቦክስ ክፍል",
      description: "Learn proper technique and build endurance",
      description_am: "ትክክለኛ ቴክኒክን ይማሩ እና ጽናትን ይገንቡ",
      img_url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
    },
  ];

  return (
    <>
      <div className="bg-orange-200/10 backdrop-blur-xl pt-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-400 font-serif text-7xl">
          Gallery
        </h1>
        <p className="text-center text-white text-xl  mb-4 max-w-7xl mx-auto">
          We believe in our programming – so much so that our coaches follow the
          same training. In fact, it is likely you will train alongside a coach
          multiple times a week! Coaches stay connected to our members through
          coaching and training 
        </p>

        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 pb-24  pt-24 px-10"
        >
          <AnimatePresence>
            {images.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative break-inside-avoid cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.img_url}
                  alt={image.title}
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <div className="absolute bottom-0 p-6">
                    <h4 className="text-xl font-light mb-2 text-white">
                      {image.title}
                    </h4>
                    <p className="text-sm text-orange-100 line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Gallery;
