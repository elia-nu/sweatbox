import { useState } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { motion } from 'framer-motion'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import CountUp from 'react-countup'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard = () => {
  const [stats] = useState([
    {
      id: 1,
      title: 'Total Members',
      value: 12847,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      trend: '+12%',
      trendColor: 'text-green-500'
    },
    {
      id: 2,
      title: 'Active Users', 
      value: 9238,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      trend: '+8%',
      trendColor: 'text-green-500'
    },
    {
      id: 3,
      title: 'Revenue',
      value: 284729,
      prefix: '$',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      trend: '+15%',
      trendColor: 'text-green-500'
    },
    {
      id: 4,
      title: 'Growth',
      value: 23.4,
      suffix: '%',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      bgColor: 'bg-amber-100',
      textColor: 'text-amber-600',
      trend: '+5%',
      trendColor: 'text-green-500'
    }
  ])

  const recentActivities = [
    { id: 1, title: 'New user registration', time: '2 minutes ago', type: 'notification', user: 'John Smith', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, title: 'Sales milestone reached', time: '15 minutes ago', type: 'achievement', user: 'Sarah Johnson', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, title: 'System update completed', time: '1 hour ago', type: 'system', user: 'System', avatar: null },
    { id: 4, title: 'New feature deployed', time: '2 hours ago', type: 'deployment', user: 'Dev Team', avatar: null }
  ]

  const quickActions = [
    { id: 1, title: 'Add User', description: 'Create new user account', icon: '👤', bgColor: 'bg-blue-50', hoverColor: 'hover:bg-blue-100' },
    { id: 2, title: 'Create Report', description: 'Generate analytics report', icon: '📊', bgColor: 'bg-purple-50', hoverColor: 'hover:bg-purple-100' },
    { id: 3, title: 'View Analytics', description: 'Check performance metrics', icon: '📈', bgColor: 'bg-green-50', hoverColor: 'hover:bg-green-100' },
    { id: 4, title: 'Update Settings', description: 'Modify system preferences', icon: '⚙️', bgColor: 'bg-amber-50', hoverColor: 'hover:bg-amber-100' }
  ]

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [30000, 45000, 42000, 50000, 48000, 60000],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true
      },
    ],
  }

  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active Users',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(139, 92, 246, 0.6)',
        borderRadius: 8,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: window.innerWidth < 640 ? 11 : 13,
            family: "'Inter', sans-serif"
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          family: "'Inter', sans-serif"
        },
        bodyFont: {
          size: 13,
          family: "'Inter', sans-serif"
        },
        cornerRadius: 8
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false
        },
        ticks: {
          font: {
            size: window.innerWidth < 640 ? 11 : 13,
            family: "'Inter', sans-serif"
          },
          padding: 8
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: window.innerWidth < 640 ? 11 : 13,
            family: "'Inter', sans-serif"
          },
          padding: 8
        }
      }
    },
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-4 sm:gap-0"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 sm:px-5 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-400 text-gray-700 text-sm sm:text-base w-full sm:w-auto font-medium transition-all duration-200"
            >
              <span className="mr-2">📅</span>
              Last 30 Days
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 sm:px-5 py-2.5 bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700 text-sm sm:text-base w-full sm:w-auto font-medium transition-all duration-200"
            >
              Generate Report
            </motion.button>
          </div>
        </motion.div>
      
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8 sm:mb-10">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.bgColor} ${stat.textColor} p-3 rounded-xl`}>
                  {stat.icon}
                </div>
                <span className={`${stat.trendColor} text-sm font-semibold flex items-center`}>
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {stat.trend}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1.5">{stat.title}</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                {stat.prefix}
                <CountUp
                  end={stat.value}
                  duration={2}
                  separator=","
                  decimals={stat.suffix === '%' ? 1 : 0}
                />
                {stat.suffix}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Trend</h2>
            <div className="h-[300px] sm:h-[400px]">
              <Line data={lineChartData} options={chartOptions} />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly User Activity</h2>
            <div className="h-[300px] sm:h-[400px]">
              <Bar data={barChartData} options={chartOptions} />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
              >
                View All
              </motion.button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div 
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 cursor-pointer border border-gray-100 hover:border-gray-200 hover:shadow-md"
                >
                  {activity.avatar ? (
                    <img src={activity.avatar} alt={activity.user} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4" />
                  ) : (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="font-semibold text-gray-900 text-base sm:text-lg truncate">{activity.title}</p>
                      <span className="text-sm text-gray-500 ml-2 whitespace-nowrap">{activity.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 truncate">by {activity.user}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
              >
                Customize
              </motion.button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <motion.button
                  key={action.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                  whileHover={{ scale: 1.03, translateY: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 ${action.bgColor} ${action.hoverColor} rounded-xl transition-all duration-300 text-left border border-gray-100 hover:border-gray-200 hover:shadow-lg`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl sm:text-3xl">{action.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-base sm:text-lg">{action.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Dashboard
