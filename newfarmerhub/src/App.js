import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from 'react-router-dom';

import AddCropTechnique from './admin/AddCropTechnique';
import AddLivestockInfo from './admin/AddLivestockInfo';
import AddMarketPrice from './admin/AddMarketPrice';
import AddPestDiseaseControl from './admin/AddPestDiseaseControl';
import AddTrainingTutorials from './admin/AddTrainingTutorials';
import AdminDashboard from './admin/AdminDashboard';
import AdminLayout from './admin/AdminLayout';
import CropsKnowledge from './components/CropsKnowledge';
import DiseasesKnowledge from './components/DiseasesKnowledge';
import Footer from './components/Footer';
import Header from './components/Header';
import LivestockKnowledge from './components/LivestockKnowledge';
import Sidebar from './components/Sidebar';
import CropDetails from './pages/CropDetails';
import Dashboard from './pages/Dashboard';
import Forum from './pages/Forum';
import Home from './pages/Home';
import KnowledgeHub from './pages/KnowledgeHub';
import LivestockDetail from './pages/LivestockDetail';
import MarketPrices from './pages/MarketPrices';
import './styles/main.css';
import Login from './pages/Auth/LoginPage';
import Register from './pages/Auth/Register';
// Farmer layout with sidebar, header, footer
function FarmerLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);
  const openRegisterModal = () => setShowRegisterModal(true);
  const closeRegisterModal = () => setShowRegisterModal(false);

  const switchToLoginModal = () => {
    setShowRegisterModal(false);
    setTimeout(() => setShowLoginModal(true), 200);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onToggleSidebar={toggleSidebar} />

      <div className="d-flex flex-grow-1">
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
            <Route path="/crop/:id" element={<CropDetails />} />
            <Route path="/Livestock/:id" element={<LivestockDetail />} />
           
          </Routes>
        </div>
      </div>

      <Footer />

      {/* Modals */}
      <Login show={showLoginModal} onHide={closeLoginModal} />
      <Register
        show={showRegisterModal}
        onHide={closeRegisterModal}
        switchToLogin={switchToLoginModal}
      />
    </div>
  );
}

// Admin layout routing with sidebar + main content
function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="add-crop" element={<AddCropTechnique />} />
        <Route path="add-livestock" element={<AddLivestockInfo />} />
        <Route path="add-pest" element={<AddPestDiseaseControl />} />
        <Route path="add-training" element={<AddTrainingTutorials />} />
        <Route path="add-market" element={<AddMarketPrice />} />
      </Route>
    </Routes>
  );
}

// Main app component decides which layout to show based on route
function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return isAdmin ? <AdminRoutes /> : <FarmerLayout />;
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
