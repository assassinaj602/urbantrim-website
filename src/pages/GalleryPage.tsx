import { useState } from 'react';

interface GalleryPageProps {
  onNavigate: (view: string) => void;
}

const GalleryPage = ({ onNavigate }: GalleryPageProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work', icon: '🎨' },
    { id: 'haircuts', name: 'Haircuts', icon: '✂️' },
    { id: 'beards', name: 'Beard Work', icon: '🧔' },
    { id: 'shaves', name: 'Shaves', icon: '🪒' },
    { id: 'shop', name: 'Our Shop', icon: '🏪' },
  ];

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleBooking = () => {
    onNavigate('booking');
  };
  
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Modern fade haircut with sharp lines",
      category: "haircuts",
      title: "Modern Fade Cut",
      description: "Precision fade with clean lines"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Professional beard trimming and shaping",
      category: "beards",
      title: "Beard Sculpting",
      description: "Expert beard trimming and styling"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1588778331859-9ea1c3a5e4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Traditional hot towel shave experience",
      category: "shaves",
      title: "Hot Towel Shave",
      description: "Luxurious traditional shaving experience"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Modern barber shop interior with vintage touches",
      category: "shop",
      title: "Shop Interior",
      description: "Our welcoming and modern space"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Professional hair washing and treatment",
      category: "haircuts",
      title: "Hair Treatment",
      description: "Premium hair washing and conditioning"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Complete grooming transformation",
      category: "haircuts",
      title: "Full Makeover",
      description: "Complete transformation service"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Vintage barber shop atmosphere",
      category: "shop",
      title: "Classic Atmosphere",
      description: "Traditional barbering environment"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Relaxing scalp treatment and massage",
      category: "haircuts",
      title: "Scalp Treatment",
      description: "Therapeutic scalp massage and treatment"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Classic gentleman's haircut",
      category: "haircuts",
      title: "Gentleman's Cut",
      description: "Timeless classic styling"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Mustache and beard grooming",
      category: "beards",
      title: "Mustache Styling",
      description: "Detailed mustache and beard work"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1588778331859-9ea1c3a5e4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Straight razor precision shaving",
      category: "shaves",
      title: "Straight Razor",
      description: "Master-level straight razor technique"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Barber station setup with premium tools",
      category: "shop",
      title: "Professional Setup",
      description: "Premium tools and workspace"
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-neutral-50 to-secondary-50/20">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-neutral-900 mb-4">
            Our <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Take a look at our craftsmanship and the welcoming atmosphere of our shop. 
            Each cut tells a story of precision, artistry, and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-secondary-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-neutral-700 hover:bg-secondary-50 hover:text-secondary-600 shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              onClick={() => openImageModal(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <p className="font-semibold">View Full Size</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <p className="text-neutral-600">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-600 mb-2">1000+</div>
            <p className="text-neutral-600">Haircuts Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">15+</div>
            <p className="text-neutral-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-warning-600 mb-2">4.9/5</div>
            <p className="text-neutral-600">Customer Rating</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Experience Our Craftsmanship?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Book your appointment today and join our gallery of satisfied customers.
            </p>
            <button 
              onClick={handleBooking}
              className="bg-white text-secondary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              📅 Book Your Appointment
            </button>
          </div>
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4"
            onClick={closeImageModal}
          >
            <div className="relative max-w-6xl max-h-full">
              <img 
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button 
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all"
                onClick={closeImageModal}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
