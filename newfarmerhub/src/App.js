import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import CropsKnowledge from './components/CropsKnowledge';
import DiseasesKnowledge from './components/DiseasesKnowledge';
import Footer from './components/Footer';
import Header from './components/Header';
import LivestockKnowledge from './components/LivestockKnowledge';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Forum from './pages/Forum';
import Home from './pages/Home';
import KnowledgeHub from './pages/KnowledgeHub';
import MarketPrices from './pages/MarketPrices';
import './styles/main.css';
import Login from './pages/Auth/LoginPage';
import Register from './pages/Auth/Register';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminFooter from './pages/admin/AdminFooter';
import AdminHeader from './pages/admin/AdminHeader';
import AdminSidebar from './pages/admin/AdminSidebar';


// ------------------------------
// Admin layout component
function AdminLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AdminHeader />
      <div className="d-flex flex-grow-1">
        <div style={{ width: '220px' }}>
          <AdminSidebar />
        </div>
        <main className="flex-grow-1 p-3">
          {children}
        </main>
      </div>
      <AdminFooter />
    </div>
  );
}

// ------------------------------
// Farmer layout component
function FarmerLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  // Modal states
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Modal control functions
  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);
  const openRegisterModal = () => setShowRegisterModal(true);
  const closeRegisterModal = () => setShowRegisterModal(false);

  // After register, switch to login
  const switchToLoginModal = () => {
    setShowRegisterModal(false);
    setTimeout(() => setShowLoginModal(true), 200);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onToggleSidebar={toggleSidebar} />

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div
          className={`bg-light border-end transition-width ${
            isSidebarOpen ? 'd-block' : 'd-none'
          } d-md-block`}
          style={{
            width: isSidebarOpen ? '220px' : '0px',
            transition: 'width 0.3s ease',
            overflow: 'hidden',
          }}
        >
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            openLoginModal={openLoginModal}
            openRegisterModal={openRegisterModal}
          />
        </div>

        {/* Main farmer routes */}
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/Dashboard" element={<Navigate to="/farmer" />} />
            <Route path="/farmer" element={<Dashboard />} />
            <Route path="/knowledge" element={<KnowledgeHub />} />
            <Route path="/knowledge/crops" element={<CropsKnowledge />} />
            <Route path="/knowledge/livestock" element={<LivestockKnowledge />} />
            <Route path="/knowledge/diseases" element={<DiseasesKnowledge />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/market" element={<MarketPrices />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>

      <Footer />

      {/* Login/Register Modals */}
      <Login show={showLoginModal} onHide={closeLoginModal} />
      <Register
        show={showRegisterModal}
        onHide={closeRegisterModal}
        switchToLogin={switchToLoginModal}
      />
    </div>
  );
}

// ------------------------------
// Main router logic to switch layout
function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return isAdmin ? (
    <AdminLayout>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        {/* Add more admin routes here */}
      </Routes>
    </AdminLayout>
  ) : (
    <FarmerLayout />
  );
}

// ------------------------------
// Root of app
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
