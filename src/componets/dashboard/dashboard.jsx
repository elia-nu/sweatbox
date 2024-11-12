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
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      bgColor: 'bg-primary-100',
      textColor: 'text-primary-600',
      trend: '+12%'
    },
    {
      id: 2, 
      title: 'Active Users',
      value: 9238,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-secondary-100',
      textColor: 'text-secondary-600',
      trend: '+8%'
    },
    {
      id: 3,
      title: 'Revenue',
      value: 284729,
      prefix: '$',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-primary-100',
      textColor: 'text-primary-600',
      trend: '+15%'
    },
    {
      id: 4,
      title: 'Growth',
      value: 23.4,
      suffix: '%',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      bgColor: 'bg-secondary-100',
      textColor: 'text-secondary-600',
      trend: '+5%'
    }
  ])

  const recentActivities = [
    { id: 1, title: 'New user registration', time: '2 minutes ago', type: 'notification', user: 'John Smith', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, title: 'Sales milestone reached', time: '15 minutes ago', type: 'achievement', user: 'Sarah Johnson', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, title: 'System update completed', time: '1 hour ago', type: 'system', user: 'System', avatar: null },
    { id: 4, title: 'New feature deployed', time: '2 hours ago', type: 'deployment', user: 'Dev Team', avatar: null }
  ]

  const quickActions = [
    { id: 1, title: 'Add User', description: 'Create new user account', icon: '👤', bgColor: 'bg-primary-50', hoverColor: 'hover:bg-primary-100' },
    { id: 2, title: 'Create Report', description: 'Generate analytics report', icon: '📊', bgColor: 'bg-secondary-50', hoverColor: 'hover:bg-secondary-100' },
    { id: 3, title: 'View Analytics', description: 'Check performance metrics', icon: '📈', bgColor: 'bg-primary-50', hoverColor: 'hover:bg-primary-100' },
    { id: 4, title: 'Update Settings', description: 'Modify system preferences', icon: '⚙️', bgColor: 'bg-secondary-50', hoverColor: 'hover:bg-secondary-100' }
  ]

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [30000, 45000, 42000, 50000, 48000, 60000],
        borderColor: 'rgb(55, 65, 81)',
        tension: 0.4,
      },
    ],
  }

  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active Users',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 90, 31, 0.5)',
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
            size: window.innerWidth < 640 ? 10 : 12
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: window.innerWidth < 640 ? 10 : 12
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: window.innerWidth < 640 ? 10 : 12
          }
        }
      }
    },
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 lg:p-8 bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-primary-500 display-6">Dashboard Overview</h1>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 sm:px-4 py-2 bg-white border border-primary-300 rounded-lg shadow-sm hover:bg-primary-50 text-primary-600 text-sm sm:text-base w-full sm:w-auto"
            >
              <span className="mr-2">📅</span>
              Last 30 Days
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 sm:px-4 py-2 bg-secondary-500 text-white rounded-lg shadow-sm hover:bg-secondary-600 text-sm sm:text-base w-full sm:w-auto"
            >
              Generate Report
            </motion.button>
          </div>
        </motion.div>
      
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-primary-100 rounded-xl shadow-lg hover:shadow-lg transition-all duration-200 p-4 sm:p-6"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`${stat.bgColor} ${stat.textColor} p-2 sm:p-3 rounded-xl`}>
                  {stat.icon}
                </div>
                <span className="text-secondary-500 text-xs sm:text-sm font-semibold">{stat.trend}</span>
              </div>
              <p className="text-xs sm:text-sm text-primary-600 mb-1">{stat.title}</p>
              <p className="text-xl sm:text-2xl font-bold text-primary-900">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8"
        >
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-primary-900 mb-4">Revenue Trend</h2>
            <div className="h-[300px] sm:h-[400px]">
              <Line data={lineChartData} options={chartOptions} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-primary-900 mb-4">Weekly User Activity</h2>
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
            className="bg-white rounded-xl shadow-sm p-4 sm:p-6"
          >
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-primary-900">Recent Activity</h2>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="text-secondary-500 hover:text-secondary-600 text-xs sm:text-sm font-medium"
              >
                View All
              </motion.button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div 
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-3 sm:p-4 hover:bg-primary-50 rounded-xl transition-colors cursor-pointer border border-primary-100"
                >
                  {activity.avatar ? (
                    <img src={activity.avatar} alt={activity.user} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 sm:mr-4" />
                  ) : (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 sm:mr-4">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-primary-900 text-sm sm:text-base truncate">{activity.title}</p>
                      <span className="text-xs sm:text-sm text-primary-500 ml-2 whitespace-nowrap">{activity.time}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-primary-600 mt-1 truncate">by {activity.user}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-4 sm:p-6"
          >
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-primary-900">Quick Actions</h2>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="text-secondary-500 hover:text-secondary-600 text-xs sm:text-sm font-medium"
              >
                Customize
              </motion.button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {quickActions.map((action, index) => (
                <motion.button
                  key={action.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 sm:p-4 ${action.bgColor} ${action.hoverColor} rounded-xl transition-all duration-200 text-left border border-primary-100 hover:border-primary-200 shadow-sm`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl sm:text-2xl">{action.icon}</span>
                    <div>
                      <p className="font-medium text-primary-900 text-sm sm:text-base">{action.title}</p>
                      <p className="text-xs sm:text-sm text-primary-600">{action.description}</p>
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
