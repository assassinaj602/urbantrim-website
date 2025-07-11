import { useState } from 'react';

interface NavigationProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Navigation = ({ currentView, onNavigate }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Services', icon: '✂️' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️' },
    { id: 'booking', label: 'Book Now', icon: '📅' },
    { id: 'about', label: 'About', icon: 'ℹ️' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="font-display text-2xl font-bold cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <span className="text-gradient">Urban</span>Trim
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                  currentView === item.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentView === item.id
                      ? 'bg-primary-500 text-white'
                      : 'text-neutral-700 hover:bg-primary-50'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
