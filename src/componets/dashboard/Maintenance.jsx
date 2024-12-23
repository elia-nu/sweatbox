import React, { useState } from 'react';

const Maintenance = () => {
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
      name: 'Elliptical',
      brand: 'Precor',
      model: 'EFX 885',
      status: 'Operational',
      location: 'Cardio Area',
      lastMaintenance: '2024-02-01',
      nextMaintenance: '2024-05-01',
      quantity: 6,
      condition: 'Good',
      units: [
        { id: 'E1', serialNumber: 'PR-001', status: 'Operational' },
        { id: 'E2', serialNumber: 'PR-002', status: 'Operational' },
        { id: 'E3', serialNumber: 'PR-003', status: 'Under Maintenance' },
        { id: 'E4', serialNumber: 'PR-004', status: 'Operational' },
        { id: 'E5', serialNumber: 'PR-005', status: 'Out of Order' },
        { id: 'E6', serialNumber: 'PR-006', status: 'Operational' }
      ]
    },
    {
      id: '3',
      name: 'Bench Press',
      brand: 'Hammer Strength',
      model: 'Olympic Flat Bench',
      status: 'Operational',
      location: 'Weight Area',
      lastMaintenance: '2024-01-20',
      nextMaintenance: '2024-04-20',
      quantity: 5,
      condition: 'Excellent',
      units: [
        { id: 'B1', serialNumber: 'HS-001', status: 'Operational' },
        { id: 'B2', serialNumber: 'HS-002', status: 'Operational' },
        { id: 'B3', serialNumber: 'HS-003', status: 'Operational' },
        { id: 'B4', serialNumber: 'HS-004', status: 'Under Maintenance' },
        { id: 'B5', serialNumber: 'HS-005', status: 'Operational' }
      ]
    },
    {
      id: '4',
      name: 'Rowing Machine',
      brand: 'Concept2',
      model: 'Model D',
      status: 'Operational',
      location: 'Cardio Area',
      lastMaintenance: '2024-02-05',
      nextMaintenance: '2024-05-05',
      quantity: 7,
      condition: 'Good',
      units: [
        { id: 'R1', serialNumber: 'C2-001', status: 'Operational' },
        { id: 'R2', serialNumber: 'C2-002', status: 'Under Maintenance' },
        { id: 'R3', serialNumber: 'C2-003', status: 'Operational' },
        { id: 'R4', serialNumber: 'C2-004', status: 'Operational' },
        { id: 'R5', serialNumber: 'C2-005', status: 'Out of Order' },
        { id: 'R6', serialNumber: 'C2-006', status: 'Operational' },
        { id: 'R7', serialNumber: 'C2-007', status: 'Operational' }
      ]
    },
    {
      id: '5',
      name: 'Cable Machine',
      brand: 'Life Fitness',
      model: 'Dual Adjustable Pulley',
      status: 'Operational',
      location: 'Weight Area',
      lastMaintenance: '2024-01-25',
      nextMaintenance: '2024-04-25',
      quantity: 9,
      condition: 'Good',
      units: [
        { id: 'C1', serialNumber: 'LF-C001', status: 'Operational' },
        { id: 'C2', serialNumber: 'LF-C002', status: 'Operational' },
        { id: 'C3', serialNumber: 'LF-C003', status: 'Under Maintenance' },
        { id: 'C4', serialNumber: 'LF-C004', status: 'Operational' },
        { id: 'C5', serialNumber: 'LF-C005', status: 'Out of Order' },
        { id: 'C6', serialNumber: 'LF-C006', status: 'Operational' },
        { id: 'C7', serialNumber: 'LF-C007', status: 'Under Maintenance' },
        { id: 'C8', serialNumber: 'LF-C008', status: 'Operational' },
        { id: 'C9', serialNumber: 'LF-C009', status: 'Operational' }
      ]
    },
    {
      id: '6',
      name: 'Spin Bike',
      brand: 'Peloton',
      model: 'Bike+',
      status: 'Operational',
      location: 'Spin Studio',
      lastMaintenance: '2024-02-10',
      nextMaintenance: '2024-05-10',
      quantity: 8,
      condition: 'Excellent',
      units: [
        { id: 'S1', serialNumber: 'PL-001', status: 'Operational' },
        { id: 'S2', serialNumber: 'PL-002', status: 'Operational' },
        { id: 'S3', serialNumber: 'PL-003', status: 'Under Maintenance' },
        { id: 'S4', serialNumber: 'PL-004', status: 'Operational' },
        { id: 'S5', serialNumber: 'PL-005', status: 'Operational' },
        { id: 'S6', serialNumber: 'PL-006', status: 'Out of Order' },
        { id: 'S7', serialNumber: 'PL-007', status: 'Operational' },
        { id: 'S8', serialNumber: 'PL-008', status: 'Under Maintenance' }
      ]
    },
    {
      id: '7',
      name: 'Smith Machine',
      brand: 'Matrix',
      model: 'G7',
      status: 'Operational',
      location: 'Weight Area',
      lastMaintenance: '2024-01-30',
      nextMaintenance: '2024-04-30',
      quantity: 6,
      condition: 'Good',
      units: [
        { id: 'M1', serialNumber: 'MX-001', status: 'Operational' },
        { id: 'M2', serialNumber: 'MX-002', status: 'Under Maintenance' },
        { id: 'M3', serialNumber: 'MX-003', status: 'Operational' },
        { id: 'M4', serialNumber: 'MX-004', status: 'Out of Order' },
        { id: 'M5', serialNumber: 'MX-005', status: 'Operational' },
        { id: 'M6', serialNumber: 'MX-006', status: 'Operational' }
      ]
    }
  ]);

  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'operational':
        return 'bg-green-100 text-green-800';
      case 'under maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'out of order':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const equipmentTypes = ['all', ...new Set(equipment.map(item => item.name))];
  const locations = ['all', ...new Set(equipment.map(item => item.location))];
  const statuses = ['all', 'Operational', 'Under Maintenance', 'Out of Order'];

  const filteredEquipment = equipment.filter(item => {
    const matchesType = selectedType === 'all' || item.name === selectedType;
    const matchesLocation = selectedLocation === 'all' || item.location === selectedLocation;
    const matchesStatus = selectedStatus === 'all' || item.units.some(unit => unit.status === selectedStatus);
    return matchesType && matchesLocation && matchesStatus;
  });

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-orange-500 mb-6">Maintenance Status</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded-lg border border-gray-700"
          >
            {equipmentTypes.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Equipment Types' : type}
              </option>
            ))}
          </select>

          <select 
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded-lg border border-gray-700"
          >
            {locations.map(location => (
              <option key={location} value={location}>
                {location === 'all' ? 'All Locations' : location}
              </option>
            ))}
          </select>

          <select 
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded-lg border border-gray-700"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Statuses' : status}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-6">
          {filteredEquipment.map(item => (
            <div key={item.id} className="bg-gray-800 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">
                  {item.name} - {item.brand} {item.model}
                </h2>
                <span className="text-gray-400">{item.location}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.units
                  .filter(unit => selectedStatus === 'all' || unit.status === selectedStatus)
                  .map(unit => (
                    <div 
                      key={unit.id} 
                      className="bg-gray-700 p-4 rounded-lg"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">
                          SN: {unit.serialNumber}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(unit.status)}`}>
                          {unit.status}
                        </span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;