import React, { useState } from 'react';

const Payments = () => {
  const [filters, setFilters] = useState({
    search: '',
    membership: '',
    subscription: '', 
    startDate: '',
    endDate: ''
  });

  // Example payment data - replace with your actual data source
  const payments = [
    {
      id: '1',
      name: 'John Doe',
      membershipType: 'Solo Plan', 
      subscriptionType: '1 Year',
      subscriptionFee: '$99.99',
      transactionId: 'TRX123456',
      status: 'Completed',
      date: '2023-07-01',
      startDate: '2023-07-01',
      endDate: '2024-07-01'
    },
    {
      id: '2', 
      name: 'Jane Smith',
      membershipType: 'Duo Plan',
      subscriptionType: '6 Months', 
      subscriptionFee: '$49.99',
      transactionId: 'TRX123457',
      status: 'Pending',
      date: '2023-07-02',
      startDate: '2023-07-02',
      endDate: '2024-01-02'
    },
    {
      id: '3',
      name: 'Mike Wilson',
      membershipType: 'Group Class',
      subscriptionType: '3 Months',
      subscriptionFee: '$99.99', 
      transactionId: 'TRX123458',
      status: 'Failed',
      date: '2023-07-03',
      startDate: '2023-07-03',
      endDate: '2023-10-03'
    }
  ];

  // Get unique membership and subscription types for filters
  const membershipTypes = [...new Set(payments.map(p => p.membershipType))];
  const subscriptionTypes = [...new Set(payments.map(p => p.subscriptionType))];

  // Filter payments based on all criteria
  const filteredPayments = payments.filter((payment) => {
    const matchesSearch = payment.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      payment.id.toLowerCase().includes(filters.search.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(filters.search.toLowerCase());
      
    const matchesMembership = !filters.membership || payment.membershipType === filters.membership;
    const matchesSubscription = !filters.subscription || payment.subscriptionType === filters.subscription;
    const matchesStartDate = !filters.startDate || payment.startDate >= filters.startDate;
    const matchesEndDate = !filters.endDate || payment.endDate <= filters.endDate;

    return matchesSearch && matchesMembership && matchesSubscription && matchesStartDate && matchesEndDate;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'Failed':
        return 'bg-red-100 text-red-800 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Payment History</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-sm transition-colors duration-150 ease-in-out">
            Export CSV
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 p-3 hover:border-blue-400 transition-colors duration-150">
            <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search payments..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full px-2 py-1 focus:outline-none text-gray-700"
            />
          </div>

          <select 
            value={filters.membership}
            onChange={(e) => handleFilterChange('membership', e.target.value)}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 focus:outline-none focus:border-blue-400 text-gray-700 transition-colors duration-150"
          >
            <option value="">All Memberships</option>
            {membershipTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <select
            value={filters.subscription}
            onChange={(e) => handleFilterChange('subscription', e.target.value)}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 focus:outline-none focus:border-blue-400 text-gray-700 transition-colors duration-150"
          >
            <option value="">All Subscriptions</option>
            {subscriptionTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <input
            type="date"
            value={filters.startDate}
            onChange={(e) => handleFilterChange('startDate', e.target.value)}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 focus:outline-none focus:border-blue-400 text-gray-700 transition-colors duration-150"
            placeholder="Start Date"
          />

          <input
            type="date"
            value={filters.endDate}
            onChange={(e) => handleFilterChange('endDate', e.target.value)}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 focus:outline-none focus:border-blue-400 text-gray-700 transition-colors duration-150"
            placeholder="End Date"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Membership</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">End Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Transaction ID</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{payment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">#{payment.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{payment.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {payment.membershipType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 text-sm rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                      {payment.subscriptionType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{payment.subscriptionFee}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{payment.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{payment.endDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{payment.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;