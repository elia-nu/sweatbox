import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './dashboard'
import AllMembers from './members'
import Payments from './payments'
import Plans from './Plans'
import Trainers from './trainers'
import ClassSchedule from './classSchedule'
import Inventory from './Inventory'
import Maintenance from './Maintenance'
import { useLocation } from 'react-router-dom'
import Login from './login'

const Body = () => {
  return (
    <div className="flex-1 overflow-auto bg-secondary-900 bg-cover bg-center z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),url('https://sweatboxapg.com/wp-content/uploads/2021/12/13.jpg')",
            backgroundAttachment: "fixed"
          }} >

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
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


const AddEquipment = () => <div className="p-6">Add New Equipment Form</div>

export default Body
