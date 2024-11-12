import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'hiit', name: 'HIIT' },
    { id: 'strength', name: 'Strength' },
    { id: 'yoga', name: 'Yoga' },
    { id: 'boxing', name: 'Boxing' }
  ];

  const images = [
    {
      id: 1,
      category: 'hiit',
      title: "Morning HIIT Session",
      title_am: "የጠዋት HIIT ክፍለ ጊዜ", 
      description: "High intensity interval training with our elite trainers",
      description_am: "ከእኛ የመጀመሪያ ደረጃ አሰልጣኞች ጋር ከፍተኛ ጥንካሬ ያለው የጊዜ ስልጠና",
      img_url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
    },
    {
      id: 2, 
      category: 'strength',
      title: "Strength Training",
      title_am: "የጥንካሬ ስልጠና",
      description: "Building muscle and power with proper form",
      description_am: "ትክክለኛ መልክ ያለው የጡንቻ እና ሃይል ግንባታ",
      img_url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
    {
      id: 3,
      category: 'yoga', 
      title: "Yoga & Flexibility",
      title_am: "ዮጋ እና ተለዋዋጭነት",
      description: "Improve mobility and mindfulness",
      description_am: "እንቅስቃሴን እና ንቃተ ህሊናን ያሻሽሉ",
      img_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    },
    {
      id: 4,
      category: 'boxing',
      title: "Boxing Class",
      title_am: "የቦክስ ክፍል",
      description: "Learn proper technique and build endurance", 
      description_am: "ትክክለኛ ቴክኒክን ይማሩ እና ጽናትን ይገንቡ",
      img_url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
    },
    {
      id: 5,
      category: 'hiit',
      title: "Evening HIIT Session",
      title_am: "የማታ HIIT ክፍለ ጊዜ",
      description: "End your day with an intense workout",
      description_am: "ቀንዎን በጠንካራ የአካል ብቃት እንቅስቃሴ ይጨርሱ",
      img_url: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb",
    },
    {
      id: 6,
      category: 'strength',
      title: "Power Lifting",
      title_am: "ሃይል ማንሳት",
      description: "Advanced strength training techniques",
      description_am: "የላቀ የጥንካሬ ስልጠና ቴክኒኮች",
      img_url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5",
    },
    {
      id: 7,
      category: 'yoga',
      title: "Morning Flow",
      title_am: "የጠዋት ፍሰት",
      description: "Start your day with energizing yoga",
      description_am: "ቀንዎን በሃይል የሚሞላ ዮጋ ይጀምሩ",
      img_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    },
    {
      id: 8,
      category: 'boxing',
      title: "Advanced Boxing",
      title_am: "የላቀ ቦክስ",
      description: "Take your boxing skills to the next level",
      description_am: "የቦክስ ክህሎትዎን ወደ ቀጣዩ ደረጃ ይውሰዱ",
      img_url: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3",
    },
    {
      id: 9,
      category: 'hiit',
      title: "Circuit Training",
      title_am: "የዑደት ስልጠና",
      description: "Full body workout with minimal rest",
      description_am: "ባነስተኛ እረፍት የሙሉ አካል ስልጠና",
      img_url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    },
    {
      id: 10,
      category: 'strength',
      title: "Core Strength",
      title_am: "የውስጥ ጥንካሬ",
      description: "Build a strong foundation",
      description_am: "ጠንካራ መሰረት ይገንቡ",
      img_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    },
    {
      id: 11,
      category: 'yoga',
      title: "Power Yoga",
      title_am: "ሃይለኛ ዮጋ",
      description: "Challenging poses and sequences",
      description_am: "አስቸጋሪ አቋሞች እና ቅደም ተከተሎች", 
      img_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    },
    {
      id: 12,
      category: 'boxing',
      title: "Sparring Practice", 
      title_am: "የስፓሪንግ ልምምድ",
      description: "Practice with partners in a safe environment",
      description_am: "በደህንነት ያለው አካባቢ ከአጋሮች ጋር ይለማመዱ",
      img_url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
    },
    {
      id: 13,
      category: 'hiit',
      title: "Tabata Training",
      title_am: "ታባታ ስልጠና",
      description: "High intensity with short intervals",
      description_am: "አጭር ክፍተት ያለው ከፍተኛ ጥንካሬ",
      img_url: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    },
    {
      id: 14,
      category: 'strength',
      title: "Olympic Lifting",
      title_am: "ኦሎምፒክ ማንሳት", 
      description: "Master complex lifting movements",
      description_am: "phስብስብ የማንሳት እንቅስቃሴዎችን ይማሩ",
      img_url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    },
    {
      id: 15,
      category: 'yoga',
      title: "Restorative Yoga",
      title_am: "አድሳሽ ዮጋ",
      description: "Gentle stretching and relaxation",
      description_am: "ቀስ ያለ መዘርጋት እና መዝናናት",
      img_url: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
    },
    {
      id: 16,
      category: 'hiit',
      title: "CrossFit Style",
      title_am: "ክሮስፊት ዘዴ",
      description: "Varied functional movements at high intensity",
      description_am: "በከፍተኛ ጥንካሬ የተለያዩ የሰውነት እንቅስቃሴዎች",
      img_url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    },
    {
      id: 17,
      category: 'strength',
      title: "Kettlebell Training",
      title_am: "ኬትልቤል ስልጠና",
      description: "Dynamic strength and conditioning",
      description_am: "ተለዋዋጭ ጥንካሬ እና ማጠንከሪያ",
      img_url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    },
    {
      id: 18,
      category: 'yoga',
      title: "Vinyasa Flow",
      title_am: "ቪንያሳ ፍሰት",
      description: "Fluid movement synchronized with breath",
      description_am: "ከትንፋሽ ጋር የተዋሃደ ፈሳሽ እንቅስቃሴ",
      img_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    },
    {
      id: 19,
      category: 'boxing',
      title: "Kickboxing",
      title_am: "ኪክቦክሲንግ",
      description: "Combine boxing with powerful kicks",
      description_am: "ቦክሲንግን ከጠንካራ ኪኮች ጋር ያጣምሩ",
      img_url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
    },
    {
      id: 20,
      category: 'hiit',
      title: "Bootcamp",
      title_am: "ቡትካምፕ",
      description: "Military-style fitness training",
      description_am: "የወታደራዊ-ዘይቤ የአካል ብቃት ስልጠና",
      img_url: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb",
    },
    {
      id: 21,
      category: 'strength',
      title: "Functional Training",
      title_am: "ተግባራዊ ስልጠና",
      description: "Real-world applicable strength",
      description_am: "በእውነተኛ ሕይወት ውስጥ ተግባራዊ የሚሆን ጥንካሬ",
      img_url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
    {
      id: 22,
      category: 'yoga',
      title: "Ashtanga Yoga",
      title_am: "አሽታንጋ ዮጋ",
      description: "Traditional Indian yoga system",
      description_am: "ባህላዊ የሕንድ ዮጋ ስርዓት",
      img_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    },
    {
      id: 23,
      category: 'boxing',
      title: "Boxing Conditioning",
      title_am: "የቦክሲንግ ማጠንከሪያ",
      description: "Build stamina and boxing skills",
      description_am: "የቦክሲንግ ክህሎቶችን እና ጽናትን ይገንቡ",
      img_url: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3",
    },
    {
      id: 24,
      category: 'hiit',
      title: "Metabolic Conditioning",
      title_am: "የኃይል ማጠንከሪያ",
      description: "Boost metabolism and burn fat",
      description_am: "የሰውነት ኃይልን ያሳድጉ እና ስብን ያቃጥሉ",
      img_url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
    },
    {
      id: 25,
      category: 'strength',
      title: "Bodyweight Training",
      title_am: "የሰውነት ክብደት ስልጠና",
      description: "No equipment needed strength training",
      description_am: "መሳሪያ የማያስፈልገው የጥንካሬ ስልጠና",
      img_url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5",
    },
    {
      id: 26,
      category: 'yoga',
      title: "Yin Yoga",
      title_am: "ዪን ዮጋ",
      description: "Deep tissue and fascia release",
      description_am: "የጥልቅ ሕብረ ሕዋስ እና ፋሺያ መፍታት",
      img_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    },
    {
      id: 27,
      category: 'boxing',
      title: "Boxing Technique",
      title_am: "የቦክሲንግ ቴክኒክ",
      description: "Master the fundamentals of boxing",
      description_am: "የቦክሲንግ መሰረታዊ ነገሮችን ይማሩ",
      img_url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
    },
    {
      id: 28,
      category: 'hiit',
      title: "Sprint Training",
      title_am: "የፍጥነት ስልጠና",
      description: "Explosive power and speed work",
      description_am: "ፈንጂ መሰል ኃይል እና የፍጥነት ስራ",
      img_url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
    },
    {
      id: 29,
      category: 'strength',
      title: "Resistance Training",
      title_am: "የተቃውሞ ስልጠና",
      description: "Build strength with resistance bands",
      description_am: "በተቃውሞ ባንዶች ጥንካሬን ይገንቡ",
      img_url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
    {
      id: 30,
      category: 'yoga',
      title: "Meditation Yoga",
      title_am: "የማስተንፈስ ዮጋ",
      description: "Find inner peace and balance",
      description_am: "የውስጥ ሰላም እና ሚዛን ያግኙ",
      img_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <>
      <div className="bg-black/50 backdrop-blur-xl pt-10">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center mb-4 md:mb-8 text-orange-400 font-serif">
          Gallery
        </h1>
        <p className="text-center text-white text-sm md:text-xl mb-4 max-w-7xl mx-auto px-4">
          We believe in our programming – so much so that our coaches follow the
          same training. In fact, it is likely you will train alongside a coach
          multiple times a week! Coaches stay connected to our members through
          coaching and training 
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 px-4">
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 md:px-6 py-1 md:py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-orange-200/10 text-orange-400 hover:bg-orange-500/20'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 pb-12 md:pb-24 pt-12 md:pt-24 px-4 md:px-10"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
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
                  <div className="absolute bottom-0 p-4 md:p-6">
                    <h4 className="text-lg md:text-xl font-light mb-1 md:mb-2 text-white">
                      {image.title}
                    </h4>
                    <p className="text-xs md:text-sm text-orange-100 line-clamp-2">
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
