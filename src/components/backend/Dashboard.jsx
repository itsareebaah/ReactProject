import React, {useContext} from 'react';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { FaHome, FaUsers, FaCog, FaProjectDiagram, FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from './context/Auth';

export const Dashboard = () => {
  const {logout} = useContext(AuthContext)
  return (
    <>
      <Header />
      <main className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar shadow">
          <h3 className="sidebar-title">Admin Panel</h3>
          <ul className="sidebar-menu">
            <li><FaHome className="me-2" /> Dashboard</li>
            <li><FaUsers className="me-2" /> Users</li>
            <li><FaProjectDiagram className="me-2" /> Projects</li>
            <li><FaCog className="me-2" /> Settings</li>
            <li><button className='btn btn-warning' onClick={logout}><FaSignOutAlt className="me-2" /> Logout</button></li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="dashboard-content">
          <div className="card shadow border-0 p-4">
            <h4 className="fw-bold mb-3">Dashboard</h4>
            <p className="text-muted">Welcome back! Here’s an overview of your system.</p>

            <div className="row g-4 mt-2">
              <div className="col-md-4">
                <div className="stats-card shadow-sm">
                  <h5>Total Users</h5>
                  <p className="stats-number">1,245</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stats-card shadow-sm">
                  <h5>Active Projects</h5>
                  <p className="stats-number">58</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stats-card shadow-sm">
                  <h5>Revenue</h5>
                  <p className="stats-number">$34,200</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
