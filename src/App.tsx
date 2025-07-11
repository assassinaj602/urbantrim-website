import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const navigateTo = (view: string) => {
    setCurrentView(view);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'services':
        return <ServicesPage onNavigate={navigateTo} />;
      case 'gallery':
        return <GalleryPage onNavigate={navigateTo} />;
      case 'booking':
        return <BookingPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="App">
      <Navigation currentView={currentView} onNavigate={navigateTo} />
      {renderCurrentView()}
      <Footer />
    </div>
  );
}

export default App;
