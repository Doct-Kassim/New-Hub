import React from 'react';

import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="bg-dark text-white p-3" style={{ width: '220px', minHeight: '100vh' }}>
      <h5 className="text-white mb-4">Admin Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
  <Link className="nav-link" to="/admin/add-crop">
    Add Crop Technique
  </Link>
</li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/add-livestock">
            Add Livestock Info
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/add-pest">
            Add Pest Control
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/add-training">
            Add Training
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/add-market">
            Add Market Prices
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
