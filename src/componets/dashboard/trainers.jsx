import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Trainers = () => {
  const [trainers] = useState([
    {
      id: 1,
      name: 'David Miller',
      specialization: 'Strength Training', 
      experience: '8 years',
      rating: 4.9,
      clients: 45,
      availability: 'Morning/Evening',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      certifications: ['NASM CPT', 'CrossFit L2'],
      sessions: [
        { date: '2024-01-15', time: '09:00', client: 'John Doe' },
        { date: '2024-01-16', time: '15:30', client: 'Jane Smith' }
      ],
      bio: 'Specializing in strength and conditioning with focus on proper form and technique. Passionate about helping clients achieve their fitness goals safely and effectively.'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      specialization: 'Yoga & Pilates',
      experience: '6 years', 
      rating: 4.8,
      clients: 38,
      availability: 'Afternoon',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      certifications: ['RYT 200', 'PMA-CPT'],
      sessions: [
        { date: '2024-01-15', time: '14:00', client: 'Mike Johnson' },
        { date: '2024-01-17', time: '16:00', client: 'Sarah Lee' }
      ],
      bio: 'Dedicated to bringing mindfulness and body awareness through yoga and pilates. Helping clients find balance, flexibility and inner strength.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      specialization: 'Sports Conditioning',
      experience: '10 years',
      rating: 4.9,
      clients: 52,
      availability: 'Flexible',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      certifications: ['CSCS', 'USAW'],
      sessions: [
        { date: '2024-01-16', time: '10:00', client: 'Tom Wilson' },
        { date: '2024-01-18', time: '11:30', client: 'Amy Chen' }
      ],
      bio: 'Elite sports performance specialist focused on developing speed, agility and power. Working with athletes to reach peak performance.'
    },
    {
      id: 4,
      name: 'Emma Thompson',
      specialization: 'Weight Loss',
      experience: '5 years',
      rating: 4.7,
      clients: 33,
      availability: 'Morning',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      certifications: ['ACE CPT', 'Precision Nutrition'],
      sessions: [
        { date: '2024-01-15', time: '08:00', client: 'Lisa Brown' },
        { date: '2024-01-17', time: '09:30', client: 'David Park' }
      ],
      bio: 'Nutrition and fitness coach specializing in sustainable weight loss through lifestyle changes. Creating personalized plans for long-term success.'
    }
  ])

  const [selectedTrainer, setSelectedTrainer] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  const filterTrainers = (filter) => {
    setActiveFilter(filter)
  }

  const filteredTrainers = trainers.filter(trainer => {
    if (activeFilter === 'all') return true
    
    const specialization = trainer.specialization.toLowerCase()
    switch(activeFilter) {
      case 'strength':
        return specialization.includes('strength')
      case 'cardio':
        return specialization.includes('cardio') || specialization.includes('conditioning')
      case 'yoga':
        return specialization.includes('yoga')
      case 'weight loss':
        return specialization.includes('weight loss')
      default:
        return true
    }
  })

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-5xl font-extrabold text-secondary-900 mb-4">
              Meet Our Expert Trainers
            </h1>
            <p className="text-xl text-secondary-600 max-w-2xl">
              Transform your fitness journey with our certified professionals
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
          >
            Join Our Team
          </motion.button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {['all', 'strength', 'cardio', 'yoga', 'weight loss'].map((filter) => (
            <button
              key={filter}
              onClick={() => filterTrainers(filter)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-secondary-600 hover:bg-secondary-100'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-primary-600">
                    ⭐ {trainer.rating}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-secondary-600">
                    {trainer.clients} Clients
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-primary-600 font-semibold">
                    {trainer.specialization}
                  </p>
                </div>

                <p className="text-secondary-600 mb-6 line-clamp-3">
                  {trainer.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {trainer.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold"
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      setSelectedTrainer(trainer)
                      setShowCalendar(true)
                    }}
                  >
                    Schedule
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300"
                  >
                    Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && selectedTrainer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-secondary-900">
                  {selectedTrainer.name}
                </h3>
                <p className="text-secondary-600">Available Sessions</p>
              </div>
              <button
                onClick={() => setShowCalendar(false)}
                className="text-secondary-500 hover:text-secondary-700 p-2 hover:bg-secondary-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Calendar
              className="rounded-xl border-none shadow-lg"
              tileClassName={({ date }) => {
                const sessionForDate = selectedTrainer.sessions.find(
                  session => session.date === date.toISOString().split('T')[0]
                )
                return sessionForDate ? 'bg-primary-100 text-primary-600 font-semibold' : null
              }}
              tileContent={({ date }) => {
                const sessionForDate = selectedTrainer.sessions.find(
                  session => session.date === date.toISOString().split('T')[0]
                )
                return sessionForDate ? (
                  <div className="text-xs mt-1 text-primary-600 font-bold">
                    {sessionForDate.time}
                  </div>
                ) : null
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Trainers
