import React, { useState } from 'react';

const Plans = () => {
  const [plans, setPlans] = useState([
    {
      id: '1',
      name: 'Solo Plan',
      description: 'Perfect for individual training',
      price: 99.99,
      duration: '1 Month',
      features: [
        'Full gym access',
        'Personal trainer consultation', 
        'Locker access',
        'Fitness assessment'
      ],
      active: true
    },
    {
      id: '2', 
      name: 'Duo Plan',
      description: 'Great for couples or workout partners',
      price: 179.99,
      duration: '1 Month',
      features: [
        'Full gym access for 2 people',
        'Shared personal trainer sessions',
        'Locker access',
        'Fitness assessments'
      ],
      active: true
    },
    {
      id: '3',
      name: 'Family Plan', 
      description: 'Best value for families',
      price: 249.99,
      duration: '1 Month',
      features: [
        'Full gym access for up to 4 family members',
        'Group training sessions',
        'Multiple locker access',
        'Family fitness programs'
      ],
      active: true
    }
  ]);

  const [showAddPlan, setShowAddPlan] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);

  const handleAddPlan = (newPlan) => {
    setPlans([...plans, { ...newPlan, id: (plans.length + 1).toString(), active: true }]);
    setShowAddPlan(false);
  };

  const handleEditPlan = (updatedPlan) => {
    setPlans(plans.map(plan => 
      plan.id === updatedPlan.id ? updatedPlan : plan
    ));
    setEditingPlan(null);
  };

  const handleToggleActive = (planId) => {
    setPlans(plans.map(plan =>
      plan.id === planId ? { ...plan, active: !plan.active } : plan
    ));
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-orange-500">Membership Plans</h1>
          <button 
            onClick={() => setShowAddPlan(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-sm transition-colors duration-150 ease-in-out"
          >
            Add New Plan
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden border ${plan.active ? 'border-gray-700' : 'border-red-800'}`}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-orange-500">{plan.name}</h3>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setEditingPlan(plan)}
                      className="text-orange-500 hover:text-orange-400"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleToggleActive(plan.id)}
                      className={`${plan.active ? 'text-red-500 hover:text-red-400' : 'text-green-500 hover:text-green-400'}`}
                    >
                      {plan.active ? 'Deactivate' : 'Activate'}
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-orange-500">${plan.price}</span>
                  <span className="text-gray-400">/{plan.duration.toLowerCase()}</span>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Plan Modal */}
      {showAddPlan && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-orange-500">Add New Plan</h3>
              <button onClick={() => setShowAddPlan(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleAddPlan({
                name: formData.get('name'),
                description: formData.get('description'),
                price: parseFloat(formData.get('price')),
                duration: formData.get('duration'),
                features: formData.get('features').split('\n').filter(f => f.trim())
              });
            }}>
              <div className="space-y-4">
                <input name="name" placeholder="Plan Name" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <input name="description" placeholder="Description" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <input name="price" type="number" step="0.01" placeholder="Price" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <select name="duration" className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required>
                  <option value="1 Month">1 Month</option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="1 Year">1 Year</option>
                </select>
                <textarea 
                  name="features" 
                  placeholder="Features (one per line)" 
                  className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" 
                  rows="4"
                  required 
                />
                <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                  Add Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Plan Modal */}
      {editingPlan && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-orange-500">Edit Plan</h3>
              <button onClick={() => setEditingPlan(null)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleEditPlan({
                ...editingPlan,
                name: formData.get('name'),
                description: formData.get('description'),
                price: parseFloat(formData.get('price')),
                duration: formData.get('duration'),
                features: formData.get('features').split('\n').filter(f => f.trim())
              });
            }}>
              <div className="space-y-4">
                <input name="name" defaultValue={editingPlan.name} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <input name="description" defaultValue={editingPlan.description} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <input name="price" type="number" step="0.01" defaultValue={editingPlan.price} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required />
                <select name="duration" defaultValue={editingPlan.duration} className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" required>
                  <option value="1 Month">1 Month</option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="1 Year">1 Year</option>
                </select>
                <textarea 
                  name="features" 
                  defaultValue={editingPlan.features.join('\n')}
                  className="w-full p-2 bg-gray-700 border-gray-600 rounded text-white" 
                  rows="4"
                  required 
                />
                <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                  Update Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;