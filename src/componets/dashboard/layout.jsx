import { useState } from 'react'
import Sidebar from './sidebar'
import Body from './body'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} />
      <Body />
    </div>
  )
}

export default Layout
