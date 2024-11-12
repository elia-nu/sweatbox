import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './sidebar'
import Body from './body'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {location.pathname.startsWith('/dashboard') && (
        <>
          <div 
            className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 lg:hidden ${
              isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleSidebar}
          />
          <div className={`fixed lg:static inset-y-0 left-0 z-30 transition-transform duration-300 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}>
            <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
          </div>
        </>
      )}
      <div className="flex-1 overflow-auto">
        <Body />
      </div>
    </div>
  )
}

export default Layout
