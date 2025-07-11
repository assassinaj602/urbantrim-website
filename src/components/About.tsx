const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="UrbanTrim Barber Shop Interior"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl border-4 border-white">
                <span className="text-center">
                  <div className="text-2xl">15+</div>
                  <div className="text-sm">Years</div>
                </span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Crafting Excellence Since 
              <span className="text-gradient"> 2008</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              At UrbanTrim, we believe that a great haircut is more than just a service—it's an art form. 
              Our master barbers combine traditional techniques with modern styling to deliver cuts that 
              complement your lifestyle and personality.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Located in the heart of the city, our shop provides a relaxed atmosphere where you can 
              unwind while receiving premium grooming services. We use only the finest products and 
              maintain the highest standards of hygiene and professionalism.
            </p>
            
            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Expert Barbers</h3>
                  <p className="text-neutral-600">Skilled professionals with years of experience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secondary-100 to-accent-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Premium Products</h3>
                  <p className="text-neutral-600">High-quality grooming products and tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
