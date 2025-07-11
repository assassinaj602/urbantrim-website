interface HomePageProps {
  onNavigate: (view: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')"
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-primary-900/20 to-secondary-900/40" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Urban</span>Trim
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90 text-primary-100">
            Where Style Meets Precision
          </p>
          <p className="text-lg md:text-xl mb-12 animate-slide-up delay-100 opacity-80 max-w-2xl mx-auto text-neutral-200">
            Experience the finest in modern barbering. Our skilled craftsmen deliver exceptional cuts, 
            classic shaves, and premium grooming services in a contemporary setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
            <button 
              onClick={() => onNavigate('booking')}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 
                         text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 
                         hover:scale-105 shadow-lg text-lg"
            >
              Book Your Appointment
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full 
                         font-semibold transition-all duration-300 hover:bg-white/30 hover:scale-105 text-lg"
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="card p-8">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-neutral-600">Happy Clients</p>
            </div>
            <div className="card p-8">
              <div className="text-4xl font-bold text-secondary-600 mb-2">15+</div>
              <p className="text-neutral-600">Years Experience</p>
            </div>
            <div className="card p-8">
              <div className="text-4xl font-bold text-accent-600 mb-2">4.9/5</div>
              <p className="text-neutral-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Featured <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Discover our most popular grooming services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✂️</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Classic Haircut</h3>
              <p className="text-neutral-600 mb-4">Traditional cuts with modern styling</p>
              <span className="text-2xl font-bold text-primary-600">$35</span>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧔</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Beard Trim</h3>
              <p className="text-neutral-600 mb-4">Precision beard trimming & styling</p>
              <span className="text-2xl font-bold text-secondary-600">$25</span>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Hot Towel Shave</h3>
              <p className="text-neutral-600 mb-4">Luxurious traditional shave experience</p>
              <span className="text-2xl font-bold text-accent-600">$45</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Crafting Excellence Since 
                <span className="text-gradient"> 2008</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                At UrbanTrim, we believe that a great haircut is more than just a service—it's an art form. 
                Our master barbers combine traditional techniques with modern styling.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-600">✓</span>
                  </div>
                  <span className="text-neutral-700">Expert Barbers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-secondary-600">✓</span>
                  </div>
                  <span className="text-neutral-700">Premium Products</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="UrbanTrim Barber Shop Interior"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Best Look?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who trust UrbanTrim for their grooming needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('booking')}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold 
                         transition-all duration-300 hover:bg-neutral-100 hover:scale-105 text-lg"
            >
              Book Now
            </button>
            <button 
              onClick={() => onNavigate('gallery')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full 
                         font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 text-lg"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
