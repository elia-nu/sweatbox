import { Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard'
import AllMembers from './members'
import Payments from './payments'

const Body = () => {
  return (
    <div className="flex-1 overflow-auto">
      <Routes>
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

const ClassSchedule = () => <div className="p-6">Class Schedule Calendar</div>
const AddClass = () => <div className="p-6">Add New Class Form</div>
const Trainers = () => <div className="p-6">Trainers List</div>

const Invoices = () => <div className="p-6">Invoices List</div>
const Plans = () => <div className="p-6">Billing Plans</div>

const Inventory = () => <div className="p-6">Equipment Inventory</div>
const Maintenance = () => <div className="p-6">Maintenance Schedule</div>
const AddEquipment = () => <div className="p-6">Add New Equipment Form</div>

export default Body
