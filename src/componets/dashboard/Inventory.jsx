import React, { useState } from 'react';

const Inventory = () => {
  const [equipment, setEquipment] = useState([
    {
      id: '1',
      name: 'Treadmill',
      brand: 'Life Fitness',
      model: 'T5',
      status: 'Operational',
      location: 'Cardio Area',
      lastMaintenance: '2024-01-15',
      nextMaintenance: '2024-04-15',
      quantity: 8,
      condition: 'Good',
      units: [
        { id: 'T1', serialNumber: 'LF-001', status: 'Operational' },
        { id: 'T2', serialNumber: 'LF-002', status: 'Under Maintenance' },
        { id: 'T3', serialNumber: 'LF-003', status: 'Operational' },
        { id: 'T4', serialNumber: 'LF-004', status: 'Operational' },
        { id: 'T5', serialNumber: 'LF-005', status: 'Operational' },
        { id: 'T6', serialNumber: 'LF-006', status: 'Out of Order' },
        { id: 'T7', serialNumber: 'LF-007', status: 'Operational' },
        { id: 'T8', serialNumber: 'LF-008', status: 'Operational' }
      ]
    },
    {
      id: '2',
      name: 'Dumbbells Set',
      brand: 'Rogue Fitness',
      model: 'Rubber Hex',
      status: 'Operational', 
      location: 'Free Weights Area',
      lastMaintenance: '2024-02-01',
      nextMaintenance: '2024-05-01',
      quantity: 20,
      condition: 'Excellent',
      units: [
        { id: 'D1', weight: '5lbs', status: 'Good' },
        { id: 'D2', weight: '10lbs', status: 'Good' },
        { id: 'D3', weight: '15lbs', status: 'Good' },
        { id: 'D4', weight: '20lbs', status: 'Good' },
        { id: 'D5', weight: '25lbs', status: 'Good' }
      ]
    },
    {
      id: '3',
      name: 'Cable Machine',
      brand: 'Technogym',
      model: 'Selection Pro',
      status: 'Under Maintenance',
      location: 'Strength Area',
      lastMaintenance: '2024-02-10',
      nextMaintenance: '2024-03-10',
      quantity: 2,
      condition: 'Fair',
      units: [
        { id: 'C1', serialNumber: 'TG-001', status: 'Under Maintenance' },
        { id: 'C2', serialNumber: 'TG-002', status: 'Operational' }
      ]
    },
    {
      id: '4',
      name: 'Rowing Machine',
      brand: 'Concept2',
      model: 'Model D',
      status: 'Operational',
      location: 'Cardio Area',
      lastMaintenance: '2024-01-20',
      nextMaintenance: '2024-04-20',
      quantity: 4,
      condition: 'Good',
      units: [
        { id: 'R1', serialNumber: 'C2-001', status: 'Operational' },
        { id: 'R2', serialNumber: 'C2-002', status: 'Operational' },
        { id: 'R3', serialNumber: 'C2-003', status: 'Under Maintenance' },
        { id: 'R4', serialNumber: 'C2-004', status: 'Operational' }
      ]
    },
    {
      id: '5',
      name: 'Smith Machine',
      brand: 'Hammer Strength',
      model: 'HD Elite',
      status: 'Operational',
      location: 'Strength Area',
      lastMaintenance: '2024-01-25',
      nextMaintenance: '2024-04-25',
      quantity: 2,
      condition: 'Excellent',
      units: [
        { id: 'S1', serialNumber: 'HS-001', status: 'Operational' },
        { id: 'S2', serialNumber: 'HS-002', status: 'Operational' }
      ]
    },
    {
      id: '6',
      name: 'Exercise Bike',
      brand: 'Precor',
      model: 'UBK 885',
      status: 'Operational',
      location: 'Cardio Area',
      lastMaintenance: '2024-02-05',
      nextMaintenance: '2024-05-05',
      quantity: 6,
      condition: 'Good',
      units: [
        { id: 'B1', serialNumber: 'PR-001', status: 'Operational' },
        { id: 'B2', serialNumber: 'PR-002', status: 'Out of Order' },
        { id: 'B3', serialNumber: 'PR-003', status: 'Operational' },
        { id: 'B4', serialNumber: 'PR-004', status: 'Operational' },
        { id: 'B5', serialNumber: 'PR-005', status: 'Operational' },
        { id: 'B6', serialNumber: 'PR-006', status: 'Under Maintenance' }
      ]
    },
    {
      id: '7',
      name: 'Leg Press',
      brand: 'Life Fitness',
      model: 'Signature Series',
      status: 'Operational',
      location: 'Strength Area',
      lastMaintenance: '2024-01-30',
      nextMaintenance: '2024-04-30',
      quantity: 2,
      condition: 'Good',
      units: [
        { id: 'LP1', serialNumber: 'LF-LP001', status: 'Operational' },
        { id: 'LP2', serialNumber: 'LF-LP002', status: 'Operational' }
      ]
    },
    {
      id: '8',
      name: 'Elliptical',
      brand: 'Precor',
      model: 'EFX 885',
      status: 'Operational',
      location: 'Cardio Area',
      lastMaintenance: '2024-02-15',
      nextMaintenance: '2024-05-15',
      quantity: 5,
      condition: 'Good',
      units: [
        { id: 'E1', serialNumber: 'PR-E001', status: 'Operational' },
        { id: 'E2', serialNumber: 'PR-E002', status: 'Operational' },
        { id: 'E3', serialNumber: 'PR-E003', status: 'Under Maintenance' },
        { id: 'E4', serialNumber: 'PR-E004', status: 'Operational' },
        { id: 'E5', serialNumber: 'PR-E005', status: 'Operational' }
      ]
    },
    {
      id: '9',
      name: 'Bench Press',
      brand: 'Rogue Fitness',
      model: 'Monster Utility Bench 2.0',
      status: 'Operational',
      location: 'Free Weights Area',
      lastMaintenance: '2024-02-20',
      nextMaintenance: '2024-05-20',
      quantity: 4,
      condition: 'Excellent',
      units: [
        { id: 'BP1', serialNumber: 'RF-BP001', status: 'Operational' },
        { id: 'BP2', serialNumber: 'RF-BP002', status: 'Operational' },
        { id: 'BP3', serialNumber: 'RF-BP003', status: 'Operational' },
        { id: 'BP4', serialNumber: 'RF-BP004', status: 'Under Maintenance' }
      ]
    }
  ]);

  const [showAddEquipment, setShowAddEquipment] = useState(false);
  const [editingEquipment, setEditingEquipment] = useState(null);

  const handleAddEquipment = (newEquipment) => {
    setEquipment([...equipment, { ...newEquipment, id: (equipment.length + 1).toString() }]);
    setShowAddEquipment(false);
  };

  const handleEditEquipment = (updatedEquipment) => {
    setEquipment(equipment.map(item => 
      item.id === updatedEquipment.id ? updatedEquipment : item
    ));
    setEditingEquipment(null);
  };

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'operational':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'under maintenance':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'out of order':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getConditionColor = (condition) => {
    switch(condition.toLowerCase()) {
      case 'excellent':
        return 'text-green-500';
      case 'good':
        return 'text-blue-500';
      case 'fair':
        return 'text-yellow-500';
      case 'poor':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-orange-500">Gym Equipment Inventory</h1>
          <button 
            onClick={() => setShowAddEquipment(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-sm transition-colors duration-150 ease-in-out"
          >
            Add New Equipment
          </button>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Equipment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Brand/Model</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Condition</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Maintenance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {equipment.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-750 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{item.brand}</div>
                      <div className="text-sm text-gray-400">{item.model}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`font-medium ${getConditionColor(item.condition)}`}>
                        {item.condition}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">Last: {item.lastMaintenance}</div>
                      <div className="text-sm text-gray-400">Next: {item.nextMaintenance}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setEditingEquipment(item)}
                        className="text-orange-500 hover:text-orange-400 mr-3"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Equipment Modal */}
      {showAddEquipment && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-orange-500">Add New Equipment</h3>
              <button onClick={() => setShowAddEquipment(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleAddEquipment({
                name: formData.get('name'),
                brand: formData.get('brand'),
                model: formData.get('model'),
                status: formData.get('status'),
                location: formData.get('location'),
                quantity: parseInt(formData.get('quantity')),
                condition: formData.get('condition'),
                lastMaintenance: formData.get('lastMaintenance'),
                nextMaintenance: formData.get('nextMaintenance'),
                units: []
              });
            }}>
              <div className="space-y-4">
                <input name="name" placeholder="Equipment Name" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <input name="brand" placeholder="Brand" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <input name="model" placeholder="Model" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <select name="status" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required>
                  <option value="Operational">Operational</option>
                  <option value="Under Maintenance">Under Maintenance</option>
                  <option value="Out of Order">Out of Order</option>
                </select>
                <input name="location" placeholder="Location" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <input name="quantity" type="number" placeholder="Quantity" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <select name="condition" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
                <input name="lastMaintenance" type="date" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <input name="nextMaintenance" type="date" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                  Add Equipment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Equipment Modal */}
      {editingEquipment && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-orange-500">Edit Equipment</h3>
              <button onClick={() => setEditingEquipment(null)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleEditEquipment({
                ...editingEquipment,
                name: formData.get('name'),
                brand: formData.get('brand'),
                model: formData.get('model'),
                status: formData.get('status'),
                location: formData.get('location'),
                quantity: parseInt(formData.get('quantity')),
                condition: formData.get('condition'),
                lastMaintenance: formData.get('lastMaintenance'),
                nextMaintenance: formData.get('nextMaintenance')
              });
            }}>
              <div className="space-y-4">
                <input name="name" defaultValue={editingEquipment.name} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <input name="brand" defaultValue={editingEquipment.brand} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <input name="model" defaultValue={editingEquipment.model} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <select name="status" defaultValue={editingEquipment.status} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required>
                  <option value="Operational">Operational</option>
                  <option value="Under Maintenance">Under Maintenance</option>
                  <option value="Out of Order">Out of Order</option>
                </select>
                <input name="location" defaultValue={editingEquipment.location} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <input name="quantity" type="number" defaultValue={editingEquipment.quantity} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <select name="condition" defaultValue={editingEquipment.condition} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
                <input name="lastMaintenance" type="date" defaultValue={editingEquipment.lastMaintenance} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <input name="nextMaintenance" type="date" defaultValue={editingEquipment.nextMaintenance} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                  Update Equipment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;