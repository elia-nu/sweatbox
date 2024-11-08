import { Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard'
import AllMembers from './members'
import Payments from './payments'
import Trainers from './trainers'
import ClassSchedule from './classSchedule'
import Home from '../home'
import Home2 from '../home2'
import About from '../about'
import Navbar from '../commen/navbar'
import { useLocation } from 'react-router-dom'
import Gallery from '../Gallery'
import Services from '../services'
import AboutOwner from '../about-owner'
const Body = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <div className="flex-1 overflow-auto bg-secondary-900 bg-cover bg-center z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),url('https://sweatboxapg.com/wp-content/uploads/2021/12/13.jpg')",
            backgroundAttachment: "fixed"
          }} >

      <Routes>
        
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/2" element={<Home2 />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Trainers" element={<AboutOwner />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members/*" element={
          <Routes>
            <Route path="/" element={<AllMembers />} />
            <Route path="add" element={<AddMember />} />
            <Route path="memberships" element={<Memberships />} />
          </Routes>
        } />
        <Route path="/classes/*" element={
          <Routes>
            <Route path="schedule" element={<ClassSchedule />} />
            <Route path="add" element={<AddClass />} />
            <Route path="trainers" element={<Trainers />} />
          </Routes>
        } />
        <Route path="/billing/*" element={
          <Routes>
            <Route path="payments" element={<Payments />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="plans" element={<Plans />} />

          </Routes>
        } />
        <Route path="/equipment/*" element={
          <Routes>
            <Route path="inventory" element={<Inventory />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="add" element={<AddEquipment />} />
          </Routes>
        } />
      </Routes>
    </div>
  )
}

// Placeholder components - these should be replaced with actual components

const AddMember = () => <div className="p-6">Add New Member Form</div>
const Memberships = () => <div className="p-6">Membership Plans</div>


const AddClass = () => <div className="p-6">Add New Class Form</div>

const Invoices = () => <div className="p-6">Invoices List</div>
const Plans = () => <div className="p-6">Billing Plans</div>

const Inventory = () => <div className="p-6">Equipment Inventory</div>
const Maintenance = () => <div className="p-6">Maintenance Schedule</div>
const AddEquipment = () => <div className="p-6">Add New Equipment Form</div>

export default Body
