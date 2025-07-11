import { useState } from 'react';

interface ServicesPageProps {
  onNavigate: (view: string) => void;
}

const ServicesPage = ({ onNavigate }: ServicesPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: '✨' },
    { id: 'haircuts', name: 'Haircuts', icon: '✂️' },
    { id: 'shaving', name: 'Shaving', icon: '🪒' },
    { id: 'treatments', name: 'Treatments', icon: '💆‍♂️' },
    { id: 'packages', name: 'Packages', icon: '📦' },
  ];

  const handleServiceBooking = (serviceName: string) => {
    onNavigate('booking');
  };

  const services = [
    {
      id: 1,
      name: "Classic Haircut",
      description: "Traditional cut with modern styling techniques. Includes consultation, wash, cut, and basic styling.",
      price: "$35",
      duration: "45 min",
      category: "haircuts",
      features: ["Hair consultation", "Wash & conditioning", "Precision cutting", "Basic styling"],
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      name: "Modern Fade Cut",
      description: "Contemporary fade cut with sharp lines and modern styling. Perfect for the professional look.",
      price: "$40",
      duration: "50 min",
      category: "haircuts",
      features: ["Consultation", "Precision fade", "Line-up", "Styling gel application"],
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      name: "Beard Trim & Shape",
      description: "Precise beard trimming and styling to complement your facial structure and personal style.",
      price: "$25",
      duration: "30 min",
      category: "shaving",
      features: ["Beard consultation", "Precision trimming", "Edge definition", "Moisturizing treatment"],
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      name: "Hot Towel Shave",
      description: "Luxurious traditional straight razor shave with hot towel treatment for the ultimate experience.",
      price: "$45",
      duration: "60 min",
      category: "shaving",
      features: ["Hot towel preparation", "Pre-shave oil", "Straight razor shave", "Aftershave treatment"],
      image: "https://images.unsplash.com/photo-1588778331859-9ea1c3a5e4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      name: "Hair Wash & Style",
      description: "Professional hair washing and styling service with premium products for a fresh, clean look.",
      price: "$20",
      duration: "30 min",
      category: "treatments",
      features: ["Deep cleansing wash", "Conditioning treatment", "Scalp massage", "Professional styling"],
      image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      name: "Scalp Treatment",
      description: "Relaxing scalp massage and treatment to promote healthy hair growth and reduce stress.",
      price: "$30",
      duration: "30 min",
      category: "treatments",
      features: ["Scalp analysis", "Deep massage", "Nourishing oils", "Steam treatment"],
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 7,
      name: "The Full Package",
      description: "Complete grooming experience including haircut, beard trim, and hot towel shave.",
      price: "$85",
      duration: "90 min",
      category: "packages",
      features: ["Complete haircut", "Beard trim & shape", "Hot towel shave", "Styling & aftercare"],
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 8,
      name: "Executive Package",
      description: "Premium package for the busy professional including priority booking and premium products.",
      price: "$95",
      duration: "75 min",
      category: "packages",
      features: ["Priority booking", "Consultation", "Haircut & styling", "Hot towel shave", "Premium products"],
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/20">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-neutral-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From classic cuts to modern styles, we offer a comprehensive range of grooming services 
            tailored to meet your individual needs and lifestyle.
          </p>
        </div>

        {/* Service Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-neutral-700 hover:bg-primary-50 hover:text-primary-600 shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="card group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  {service.price}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-neutral-700">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {service.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-2">What's Included:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-neutral-600">
                        <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => handleServiceBooking(service.name)}
                  className="w-full btn-primary hover:scale-105 transition-transform"
                >
                  Book {service.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h2 className="font-display text-3xl font-bold mb-4">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Our expert barbers are here to help you choose the perfect service for your style and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('booking')}
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
              >
                📞 Call for Consultation
              </button>
              <button 
                onClick={() => handleServiceBooking('Consultation')}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                📅 Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
