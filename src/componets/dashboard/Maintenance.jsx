import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        return 'bg-green-500/20 text-green-500 border border-green-500/30';
      case 'under maintenance':
        return 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30';
      case 'out of order':
        return 'bg-red-500/20 text-red-500 border border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-500 border border-gray-500/30';
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-8"
        >
          Maintenance Status
        </motion.h1>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-gray-800/50 text-white p-3 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-orange-500/50 transition-colors duration-200 focus:outline-none focus:border-orange-500"
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
            className="bg-gray-800/50 text-white p-3 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-orange-500/50 transition-colors duration-200 focus:outline-none focus:border-orange-500"
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
            className="bg-gray-800/50 text-white p-3 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-orange-500/50 transition-colors duration-200 focus:outline-none focus:border-orange-500"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Statuses' : status}
              </option>
            ))}
          </select>
        </motion.div>

        <div className="space-y-6">
          {filteredEquipment.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 shadow-lg"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-400">
                    {item.brand} {item.model}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-4 py-2 rounded-lg bg-gray-700/50 text-gray-300 font-medium">
                    {item.location}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.units
                  .filter(unit => selectedStatus === 'all' || unit.status === selectedStatus)
                  .map((unit, unitIndex) => (
                    <motion.div 
                      key={unit.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + unitIndex * 0.05 }}
                      className="bg-gray-700/30 backdrop-blur-sm p-4 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200"
                    >
                      <div className="flex flex-col space-y-3">
                        <span className="text-gray-300 font-medium">
                          Serial: {unit.serialNumber}
                        </span>
                        <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${getStatusColor(unit.status)} text-center`}>
                          {unit.status}
                        </span>
                      </div>
                    </motion.div>
                  ))
                }
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Maintenance;