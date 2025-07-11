const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceBooking = (serviceName: string) => {
    // Pre-fill the booking form with the selected service
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      
      // Small delay to ensure scrolling is complete
      setTimeout(() => {
        const serviceSelect = document.getElementById('service') as HTMLSelectElement;
        if (serviceSelect) {
          serviceSelect.value = serviceName;
          serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 500);
    }
  };

  const services = [
    {
      id: 1,
      name: "Classic Haircut",
      description: "Traditional cut with modern styling techniques",
      price: "$35",
      duration: "45 min",
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      name: "Beard Trim & Shape",
      description: "Precise beard trimming and styling",
      price: "$25",
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      name: "Hot Towel Shave",
      description: "Luxurious traditional straight razor shave",
      price: "$45",
      duration: "60 min",
      image: "https://images.unsplash.com/photo-1588778331859-9ea1c3a5e4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      name: "Hair Wash & Style",
      description: "Professional wash and styling service",
      price: "$20",
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      name: "The Full Package",
      description: "Haircut, beard trim, and hot towel shave",
      price: "$85",
      duration: "90 min",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      name: "Scalp Treatment",
      description: "Relaxing scalp massage and treatment",
      price: "$30",
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            From classic cuts to modern styles, we offer a full range of grooming services 
            tailored to meet your individual needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full font-semibold shadow-lg">
                  {service.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.duration}
                  </span>
                  <button 
                    onClick={() => handleServiceBooking(service.name)}
                    className="text-primary-500 hover:text-primary-600 font-semibold hover:underline transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection('booking')}
            className="btn-primary hover:scale-105 transition-transform"
          >
            Book Any Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
