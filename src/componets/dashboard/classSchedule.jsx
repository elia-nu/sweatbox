import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ClassSchedule = () => {
  const [classes] = useState([
    {
      id: 1,
      name: 'HIIT Training',
      trainer: 'Sarah Wilson', 
      time: '07:00 AM',
      duration: '45 min',
      capacity: '20',
      enrolled: '15',
      room: 'Studio A',
      day: 'Monday',
      description: 'High-intensity interval training to boost metabolism and burn calories',
      equipment: 'Dumbbells, Kettlebells, Jump Ropes',
      level: 'Intermediate'
    },
    {
      id: 2,
      name: 'Yoga Flow',
      trainer: 'Emma Thompson',
      time: '09:00 AM', 
      duration: '60 min',
      capacity: '15',
      enrolled: '12',
      room: 'Studio B',
      day: 'Monday',
      description: 'Dynamic yoga sequence focusing on breath and movement',
      equipment: 'Yoga Mat, Blocks, Straps',
      level: 'All Levels'
    },
    {
      id: 3,
      name: 'Strength Training',
      trainer: 'Michael Chen',
      time: '10:30 AM',
      duration: '50 min', 
      capacity: '12',
      enrolled: '8',
      room: 'Weight Room',
      day: 'Monday',
      description: 'Full body strength workout focusing on proper form and technique',
      equipment: 'Barbells, Weight Machines, Free Weights',
      level: 'Beginner to Advanced'
    },
    {
      id: 4,
      name: 'Spin Class',
      trainer: 'James Rodriguez',
      time: '08:00 AM',
      duration: '45 min',
      capacity: '25',
      enrolled: '20',
      room: 'Spin Studio',
      day: 'Tuesday',
      description: 'High-energy indoor cycling class with intervals and climbs',
      equipment: 'Spin Bikes',
      level: 'All Levels'
    },
    {
      id: 5,
      name: 'Pilates',
      trainer: 'Lisa Chen',
      time: '11:00 AM',
      duration: '55 min',
      capacity: '15',
      enrolled: '10',
      room: 'Studio B',
      day: 'Wednesday',
      description: 'Core strengthening and flexibility training using Pilates principles',
      equipment: 'Reformer, Mat, Small Equipment',
      level: 'Intermediate'
    },
    {
      id: 6,
      name: 'Boxing',
      trainer: 'Mike Taylor',
      time: '06:00 PM',
      duration: '60 min',
      capacity: '20',
      enrolled: '18',
      room: 'Boxing Area',
      day: 'Thursday',
      description: 'Learn boxing techniques while getting a full body workout',
      equipment: 'Boxing Gloves, Heavy Bags, Speed Bags',
      level: 'Beginner to Advanced'
    }
  ])

  const [selectedClass, setSelectedClass] = useState(null)
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const timeSlots = Array.from({length: 14}, (_, i) => {
    const hour = 6 + i // Starting from 6 AM
    return `${hour.toString().padStart(2, '0')}:00`
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-primary-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-secondary-500">Class Schedule</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-secondary-500 text-white rounded-lg shadow-sm hover:bg-secondary-600"
          >
            Add New Class
          </motion.button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-auto relative">
          <div className="grid grid-cols-8 border-b">
            <div className="p-4 font-semibold text-secondary-600 border-r">Time</div>
            {days.map(day => (
              <div key={day} className="p-4 font-semibold text-secondary-600 border-r">
                {day}
              </div>
            ))}
          </div>

          <div className="divide-y">
            {timeSlots.map(time => (
              <div key={time} className="grid grid-cols-8">
                <div className="p-4 border-r text-sm text-gray-600">{time}</div>
                {days.map(day => (
                  <div key={`${day}-${time}`} className="p-2 border-r min-h-[100px]">
                    {classes
                      .filter(cls => cls.day === day && cls.time.includes(time.split(':')[0]))
                      .map(cls => (
                        <motion.div
                          key={cls.id}
                          className="bg-primary-100 p-2 rounded-lg mb-2 text-sm cursor-pointer hover:bg-primary-200 transition-colors"
                          onClick={() => setSelectedClass(cls)}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="font-medium text-primary-700">{cls.name}</div>
                          <div className="text-xs text-primary-600">
                            {cls.trainer} • {cls.room}
                          </div>
                          <div className="text-xs text-primary-600">
                            {cls.enrolled}/{cls.capacity} • {cls.duration}
                          </div>
                        </motion.div>
                      ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <AnimatePresence>
            {selectedClass && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedClass(null)}
              >
                <motion.div
                  className="bg-white rounded-xl p-6 max-w-lg w-full"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-secondary-700">{selectedClass.name}</h2>
                    <button 
                      onClick={() => setSelectedClass(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-primary-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedClass.time} • {selectedClass.duration}
                    </div>
                    <div className="flex items-center text-primary-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {selectedClass.trainer}
                    </div>
                    <div className="flex items-center text-primary-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {selectedClass.room}
                    </div>
                    <div className="flex items-center text-primary-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {selectedClass.enrolled}/{selectedClass.capacity} Enrolled
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
                      <p className="text-gray-600">{selectedClass.description}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Equipment Needed</h3>
                      <p className="text-gray-600">{selectedClass.equipment}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Level</h3>
                      <p className="text-gray-600">{selectedClass.level}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default ClassSchedule
