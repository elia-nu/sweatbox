import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

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
      path: '/dashboard'
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
    if (!isOpen) {
      onToggle()
    }
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <div className={`h-full flex flex-col justify-between bg-secondary-800 text-white transition-all duration-300  ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className='flex flex-col justify-between '>
        {/* Logo */}
        <div className="flex items-center justify-center h-16 bg-secondary-900">
          {isOpen ? (
            <h1 className="py-10 text-3xl font-bold text-primary-500">SWEAT BOX</h1>
          ) : (
            <span className="text-xl font-bold">Gym</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-4  ">
          {menuItems.map((item, index) => (
            <div key={item.title}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`flex items-center w-full px-4 py-3 hover:bg-secondary-700 transition-colors ${
                      activeDropdown === index ? 'bg-secondary-700' : ''
                    }`}
                  >
                    <span className="mr-4">{item.icon}</span>
                    {isOpen && (
                      <>
                        <span className={location.pathname.startsWith(item.path) ? 'font-bold text-primary-400' : ''}>
                          {item.title}
                        </span>
                        <svg
                          className={`w-4 h-4 ml-auto transform transition-transform ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                  {isOpen && activeDropdown === index && (
                    <div className="bg-gray-700">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`block px-12 py-2 hover:bg-gray-600 transition-colors ${
                            location.pathname === subItem.path ? 'font-bold text-primary-400 bg-secondary-600' : ''
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
                  className={`flex items-center px-4 py-3 hover:bg-gray-700 transition-colors ${
                    location.pathname === item.path ? 'font-bold text-primary-400 bg-secondary-600' : ''
                  }`}
                >
                  <span className="mr-4">{item.icon}</span>
                  {isOpen && <span>{item.title}</span>}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="p-4 space-y-3">
        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="flex items-center w-full px-4 py-2 text-sm bg-secondary-700 hover:bg-secondary-600 rounded transition-colors"
        >
          <svg 
            className={`w-5 h-5 ${isOpen ? 'mr-2' : 'mx-auto'} transform transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          {isOpen && <span>Collapse Sidebar</span>}
        </button>

        {/* Logout Button */}
        <button
          onClick={() => {/* Add logout logic here */}}
          className="flex items-center w-full px-4 py-2 text-sm bg-red-600 hover:bg-red-700 rounded transition-colors"
        >
          <svg className={`w-5 h-5 ${isOpen ? 'mr-2' : 'mx-auto'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  )
}

export default Sidebar
