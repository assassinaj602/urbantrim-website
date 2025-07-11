const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
            onClick={() => scrollToSection('booking')}
            className="btn-primary text-lg px-12 py-4 hover:scale-105 transition-transform"
          >
            Book Your Appointment
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="btn-secondary text-lg px-12 py-4 hover:scale-105 transition-transform"
          >
            View Our Work
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center hover:border-primary-400 transition-colors">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
