import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ClassSchedule = () => {
  const [classes, setClasses] = useState([
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
      level: 'Intermediate',
      trainerImage: 'https://randomuser.me/api/portraits/women/1.jpg',
      color: 'bg-orange-100'
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
      level: 'All Levels',
      trainerImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      color: 'bg-blue-100'
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
      level: 'Beginner to Advanced',
      trainerImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      color: 'bg-green-100'
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
      level: 'All Levels',
      trainerImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      color: 'bg-purple-100'
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
      level: 'Intermediate',
      trainerImage: 'https://randomuser.me/api/portraits/women/3.jpg',
      color: 'bg-pink-100'
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
      level: 'Beginner to Advanced',
      trainerImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      color: 'bg-red-100'
    }
  ])

  const [selectedClass, setSelectedClass] = useState(null)
  const [viewMode, setViewMode] = useState('calendar') // 'calendar' or 'list'
  const [filterDay, setFilterDay] = useState('all')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const timeSlots = Array.from({length: 14}, (_, i) => {
    const hour = 6 + i
    return `${hour.toString().padStart(2, '0')}:00`
  })

  const handleAddClass = () => {
    setIsAddModalOpen(true)
  }

  const handleEditClass = (classData) => {
    setSelectedClass(classData)
    setIsEditModalOpen(true)
  }

  const handleCancelClass = (classId) => {
    if (window.confirm('Are you sure you want to cancel this class?')) {
      setClasses(classes.filter(c => c.id !== classId))
      setSelectedClass(null)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 lg:p-8 bg-gray-50 min-h-screen"
    >
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Class Schedule</h1>
            <p className="text-gray-600 mt-2">Manage your gym's class schedule and trainers</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 border border-gray-200"
              onClick={() => setViewMode(viewMode === 'calendar' ? 'list' : 'calendar')}
            >
              {viewMode === 'calendar' ? 'List View' : 'Calendar View'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700"
              onClick={handleAddClass}
            >
              Add New Class
            </motion.button>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            value={filterDay}
            onChange={(e) => setFilterDay(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Days</option>
            {days.map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:col-span-3">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-600">Total Classes</div>
              <div className="text-2xl font-bold text-gray-900">{classes.length}</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-600">Active Trainers</div>
              <div className="text-2xl font-bold text-gray-900">
                {new Set(classes.map(c => c.trainer)).size}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-600">Total Capacity</div>
              <div className="text-2xl font-bold text-gray-900">
                {classes.reduce((sum, c) => sum + parseInt(c.capacity), 0)}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-auto relative">
          <div className="grid grid-cols-8 border-b sticky top-0 bg-white z-10">
            <div className="p-4 font-semibold text-gray-700 border-r">Time</div>
            {days.map(day => (
              <div key={day} className="p-4 font-semibold text-gray-700 border-r">
                {day}
              </div>
            ))}
          </div>

          <div className="divide-y">
            {timeSlots.map(time => (
              <div key={time} className="grid grid-cols-8">
                <div className="p-4 border-r text-sm text-gray-600 sticky left-0 bg-white font-medium">
                  {time}
                </div>
                {days.map(day => (
                  <div key={`${day}-${time}`} className="p-2 border-r min-h-[140px]">
                    {classes
                      .filter(cls => (filterDay === 'all' || cls.day === filterDay) && 
                                   cls.day === day && 
                                   cls.time.includes(time.split(':')[0]))
                      .map(cls => (
                        <motion.div
                          key={cls.id}
                          className={`${cls.color} p-3 rounded-lg mb-2 cursor-pointer hover:shadow-md transition-all`}
                          onClick={() => setSelectedClass(cls)}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="font-medium text-gray-900">{cls.name}</div>
                          <div className="flex items-center gap-2 mt-2">
                            <img 
                              src={cls.trainerImage} 
                              alt={cls.trainer}
                              className="w-6 h-6 rounded-full"
                            />
                            <span className="text-sm text-gray-600">{cls.trainer}</span>
                          </div>
                          <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                            <span>{cls.room}</span>
                            <span>{cls.enrolled}/{cls.capacity}</span>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedClass(null)}
              >
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  className="bg-white rounded-xl p-6 max-w-lg w-full"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={selectedClass.trainerImage}
                        alt={selectedClass.trainer}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{selectedClass.name}</h2>
                        <p className="text-gray-600">with {selectedClass.trainer}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedClass(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Time</div>
                      <div className="font-medium text-gray-900">
                        {selectedClass.time} ({selectedClass.duration})
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Location</div>
                      <div className="font-medium text-gray-900">{selectedClass.room}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Capacity</div>
                      <div className="font-medium text-gray-900">
                        {selectedClass.enrolled}/{selectedClass.capacity} Enrolled
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Level</div>
                      <div className="font-medium text-gray-900">{selectedClass.level}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                      <p className="text-gray-600">{selectedClass.description}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Equipment Needed</h3>
                      <p className="text-gray-600">{selectedClass.equipment}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button 
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      onClick={() => handleEditClass(selectedClass)}
                    >
                      Edit Class
                    </button>
                    <button 
                      className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                      onClick={() => handleCancelClass(selectedClass.id)}
                    >
                      Cancel Class
                    </button>
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
