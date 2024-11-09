import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './sidebar'
import Body from './body'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const location = useLocation()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {location. pathname.startsWith('/dashboard') && (
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      )}
      <Body />
    </div>
  )
}

export default Layout
