import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import ProjectsPage from './pages/ProjectsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import CareersPage from './pages/CareersPage';
import JobApplicationPage from './pages/JobApplicationPage';
import ScrollToTop from './components/utils/ScrollToTop';
export function App() {
  return <Router>
    <ScrollToTop />
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/apply/:jobId" element={<JobApplicationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>;
}