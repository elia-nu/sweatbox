import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'

const Sidebar = ({ isOpen, onToggle }) => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const menuItems = [
    {
      title: 'Dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      path: '/dashboard/dashboard'
    },
    {
      title: 'Members',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      path: '/dashboard/members'
    },
    {
      title: 'Classes',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      submenu: [
        { name: 'Class Schedule', path: '/dashboard/classes/schedule' },
        { name: 'Trainers', path: '/dashboard/classes/trainers' }
      ]
    },
    {
      title: 'Billing',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      submenu: [
        { name: 'Payments', path: '/dashboard/billing/payments' },
        { name: 'Invoices', path: '/dashboard/billing/invoices' },
        { name: 'Plans', path: '/dashboard/billing/plans' }
      ]
    },
    {
      title: 'Equipment',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      submenu: [
        { name: 'Inventory', path: '/dashboard/equipment/inventory' },
        { name: 'Maintenance', path: '/dashboard/equipment/maintenance' },
        { name: 'Add Equipment', path: '/dashboard/equipment/add' }
      ]
    }
  ]

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <div className={`h-full flex flex-col justify-between bg-gradient-to-b from-secondary-900 to-secondary-800 text-white transition-all duration-300 shadow-2xl ${
      isOpen ? 'w-72' : 'w-20'
    }`}>
      <div className='flex flex-col'>
        {/* Logo */}
        <div className="flex items-center justify-center h-20 bg-gradient-to-r from-secondary-900 to-secondary-800 border-b border-secondary-700/50">
          {isOpen ? (
            <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">SWEAT BOX</h1>
          ) : (
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">SB</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          {menuItems.map((item, index) => (
            <div key={item.title} className="mb-2">
              {item.submenu ? (
                <div>
                  <button
                    data-tooltip-id="nav-tooltip"
                    data-tooltip-content={!isOpen ? item.title : ''}
                    onClick={() => toggleDropdown(index)}
                    className={`flex items-center w-full p-3 rounded-lg hover:bg-secondary-700/50 backdrop-blur-sm transition-all duration-200 ${
                      activeDropdown === index ? 'bg-secondary-700/50' : ''
                    }`}
                  >
                    <div className="flex items-center flex-1">
                      <span className={`${!isOpen ? 'mx-auto' : 'mr-3'} text-primary-400`}>{item.icon}</span>
                      {isOpen && (
                        <span className="font-medium">{item.title}</span>
                      )}
                    </div>
                    {isOpen && (
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  {activeDropdown === index && (
                    <div className={`mt-2 space-y-1 ${!isOpen ? 'absolute left-20 top-auto min-w-[200px] bg-secondary-800 rounded-lg shadow-xl p-2' : 'ml-4'}`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          data-tooltip-id={!isOpen ? "nav-tooltip" : ""}
                          data-tooltip-content={!isOpen ? subItem.name : ""}
                          className={`block px-4 py-2 rounded-md text-sm hover:bg-secondary-600/50 transition-all duration-200 ${
                            location.pathname === subItem.path ? 'bg-primary-500/10 text-primary-400 font-medium' : 'text-gray-300'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  data-tooltip-id="nav-tooltip"
                  data-tooltip-content={!isOpen ? item.title : ''}
                  className={`flex items-center p-3 rounded-lg hover:bg-secondary-700/50 backdrop-blur-sm transition-all duration-200 ${
                    location.pathname === item.path ? 'bg-primary-500/10 text-primary-400' : ''
                  }`}
                >
                  <span className={`${!isOpen ? 'mx-auto' : 'mr-3'} text-primary-400`}>{item.icon}</span>
                  {isOpen && <span className="font-medium">{item.title}</span>}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="p-4 space-y-3 border-t border-secondary-700/50">
        {/* Toggle Button */}
        <button
          onClick={onToggle}
          data-tooltip-id="nav-tooltip"
          data-tooltip-content={!isOpen ? 'Expand Sidebar' : ''}
          className="flex items-center w-full p-2 text-sm bg-secondary-700/50 hover:bg-secondary-600/50 rounded-lg transition-all duration-200"
        >
          <svg 
            className={`w-5 h-5 ${isOpen ? 'mr-2' : 'mx-auto'} transform transition-transform duration-300 ${
              !isOpen ? 'rotate-0' : 'rotate-180'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          {isOpen && <span className="font-medium">Collapse</span>}
        </button>

        {/* Logout Button */}
        <button
          onClick={() => {/* Add logout logic here */}}
          data-tooltip-id="nav-tooltip"
          data-tooltip-content={!isOpen ? 'Logout' : ''}
          className="flex items-center w-full p-2 text-sm bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all duration-200"
        >
          <svg className={`w-5 h-5 ${isOpen ? 'mr-2' : 'mx-auto'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {isOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>

      <Tooltip id="nav-tooltip" place="right" />
    </div>
  )
}

export default Sidebar
