import { useState } from 'react'
import { motion } from 'framer-motion'
import 'react-calendar/dist/Calendar.css'

const Trainers = () => {
  const [trainers, setTrainers] = useState([
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
        { date: '2024-01-15', time: '09:00', client: 'John Doe', type: 'Strength Training' },
        { date: '2024-01-15', time: '11:00', client: 'Sarah Parker', type: 'Personal Training' },
        { date: '2024-01-16', time: '15:30', client: 'Jane Smith', type: 'Weight Training' },
        { date: '2024-01-16', time: '17:00', client: 'Mike Ross', type: 'Strength Training' },
        { date: '2024-01-17', time: '10:00', client: 'Emma Wilson', type: 'Personal Training' },
        { date: '2024-01-18', time: '14:00', client: 'Chris Evans', type: 'Strength Training' }
      ],
      bio: 'Specializing in strength and conditioning with focus on proper form and technique.'
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
        { date: '2024-01-15', time: '14:00', client: 'Mike Johnson', type: 'Yoga' },
        { date: '2024-01-17', time: '16:00', client: 'Sarah Lee', type: 'Pilates' }
      ],
      bio: 'Dedicated to bringing mindfulness and body awareness through yoga and pilates.'
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
        { date: '2024-01-16', time: '10:00', client: 'Tom Wilson', type: 'Sports Conditioning' },
        { date: '2024-01-18', time: '11:30', client: 'Amy Chen', type: 'Sports Conditioning' }
      ],
      bio: 'Elite sports performance specialist focused on developing speed and power.'
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
        { date: '2024-01-15', time: '08:00', client: 'Lisa Brown', type: 'Nutrition' },
        { date: '2024-01-17', time: '09:30', client: 'David Park', type: 'Nutrition' }
      ],
      bio: 'Nutrition and fitness coach specializing in sustainable weight loss.'
    }
  ])

  const [selectedTrainer, setSelectedTrainer] = useState(null)
  const [showSchedule, setShowSchedule] = useState(false)
  const [showAddTrainer, setShowAddTrainer] = useState(false)
  const [showEditTrainer, setShowEditTrainer] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedDate, setSelectedDate] = useState(new Date())

  const filterTrainers = (filter) => {
    setActiveFilter(filter)
  }

  const filteredTrainers = trainers.filter(trainer => {
    if (activeFilter === 'all') return true
    return trainer.specialization.toLowerCase().includes(activeFilter.toLowerCase())
  })

  const formatDate = (date) => date.toISOString().split('T')[0]

  const handleEditSession = (session, trainer) => {
    const updatedClient = prompt('Update client name:', session.client)
    const updatedType = prompt('Update session type:', session.type)

    if (updatedClient && updatedType) {
      const updatedTrainers = trainers.map(t => {
        if (t.id === trainer.id) {
          return {
            ...t,
            sessions: t.sessions.map(s => {
              if (s.date === session.date && s.time === session.time) {
                return { ...s, client: updatedClient, type: updatedType }
              }
              return s
            })
          }
        }
        return t
      })
      setTrainers(updatedTrainers)
    }
  }

  const handleDeleteSession = (session, trainer) => {
    if (confirm('Delete this session?')) {
      const updatedTrainers = trainers.map(t => {
        if (t.id === trainer.id) {
          return {
            ...t,
            sessions: t.sessions.filter(s => 
              s.date !== session.date || s.time !== session.time
            )
          }
        }
        return t
      })
      setTrainers(updatedTrainers)
    }
  }

  const handleAddTrainer = (newTrainer) => {
    setTrainers([...trainers, { ...newTrainer, id: trainers.length + 1 }])
    setShowAddTrainer(false)
  }

  const handleEditTrainer = (updatedTrainer) => {
    setTrainers(trainers.map(t => 
      t.id === updatedTrainer.id ? updatedTrainer : t
    ))
    setShowEditTrainer(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-orange-500 mb-2">Our Trainers</h1>
            <p className="text-gray-400">Find your perfect fitness match</p>
          </div>
          <button
            onClick={() => setShowAddTrainer(true)}
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded"
          >
            Add Trainer
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {['all', 'strength', 'yoga', 'sports', 'weight loss'].map(filter => (
            <button
              key={filter}
              onClick={() => filterTrainers(filter)}
              className={`px-4 py-2 rounded ${
                activeFilter === filter 
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrainers.map(trainer => (
            <div key={trainer.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-orange-500">{trainer.name}</h3>
                    <p className="text-gray-400">{trainer.specialization}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedTrainer(trainer)
                        setShowEditTrainer(true)
                      }}
                      className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <span className="bg-gray-900 px-2 py-1 rounded text-orange-500">
                      ⭐ {trainer.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{trainer.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.certifications.map((cert, i) => (
                    <span key={i} className="bg-gray-700 px-2 py-1 rounded text-sm">
                      {cert}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setSelectedTrainer(trainer)
                    setShowSchedule(true)
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition-colors"
                >
                  View Schedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Modal */}
      {showSchedule && selectedTrainer && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-orange-500">
                  {selectedTrainer.name}'s Schedule
                </h3>
                <button 
                  onClick={() => setShowSchedule(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4">
              {selectedTrainer.sessions.map((session, i) => (
                <div 
                  key={i}
                  className="bg-gray-700 rounded p-3 mb-2 flex justify-between items-center"
                >
                  <div>
                    <p className="text-orange-500">{session.client}</p>
                    <p className="text-sm text-gray-400">
                      {session.date} at {session.time} - {session.type}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditSession(session, selectedTrainer)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSession(session, selectedTrainer)}
                      className="text-red-400 hover:text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Add Trainer Modal */}
      {showAddTrainer && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-orange-500">Add New Trainer</h3>
              <button 
                onClick={() => setShowAddTrainer(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              handleAddTrainer({
                name: formData.get('name'),
                specialization: formData.get('specialization'),
                experience: formData.get('experience'),
                bio: formData.get('bio'),
                image: formData.get('image'),
                certifications: formData.get('certifications').split(','),
                rating: 0,
                clients: 0,
                sessions: []
              })
            }}>
              <div className="space-y-4">
                <input name="name" placeholder="Name" className="w-full bg-gray-700 p-2 rounded" required />
                <input name="specialization" placeholder="Specialization" className="w-full bg-gray-700 p-2 rounded" required />
                <input name="experience" placeholder="Experience" className="w-full bg-gray-700 p-2 rounded" required />
                <textarea name="bio" placeholder="Bio" className="w-full bg-gray-700 p-2 rounded" required />
                <input name="image" placeholder="Image URL" className="w-full bg-gray-700 p-2 rounded" required />
                <input name="certifications" placeholder="Certifications (comma-separated)" className="w-full bg-gray-700 p-2 rounded" required />
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 p-2 rounded">
                  Add Trainer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Trainer Modal */}
      {showEditTrainer && selectedTrainer && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-orange-500">Edit Trainer</h3>
              <button 
                onClick={() => setShowEditTrainer(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              handleEditTrainer({
                ...selectedTrainer,
                name: formData.get('name'),
                specialization: formData.get('specialization'),
                experience: formData.get('experience'),
                bio: formData.get('bio'),
                image: formData.get('image'),
                certifications: formData.get('certifications').split(',')
              })
            }}>
              <div className="space-y-4">
                <input name="name" defaultValue={selectedTrainer.name} className="w-full bg-gray-700 p-2 rounded" required />
                <input name="specialization" defaultValue={selectedTrainer.specialization} className="w-full bg-gray-700 p-2 rounded" required />
                <input name="experience" defaultValue={selectedTrainer.experience} className="w-full bg-gray-700 p-2 rounded" required />
                <textarea name="bio" defaultValue={selectedTrainer.bio} className="w-full bg-gray-700 p-2 rounded" required />
                <input name="image" defaultValue={selectedTrainer.image} className="w-full bg-gray-700 p-2 rounded" required />
                <input name="certifications" defaultValue={selectedTrainer.certifications.join(',')} className="w-full bg-gray-700 p-2 rounded" required />
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 p-2 rounded">
                  Update Trainer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Trainers
