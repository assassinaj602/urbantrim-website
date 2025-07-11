import { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    barber: '',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { name: 'Classic Haircut', price: '$35', duration: '45 min' },
    { name: 'Modern Fade Cut', price: '$40', duration: '50 min' },
    { name: 'Beard Trim & Shape', price: '$25', duration: '30 min' },
    { name: 'Hot Towel Shave', price: '$45', duration: '60 min' },
    { name: 'Hair Wash & Style', price: '$20', duration: '30 min' },
    { name: 'Scalp Treatment', price: '$30', duration: '30 min' },
    { name: 'The Full Package', price: '$85', duration: '90 min' },
    { name: 'Executive Package', price: '$95', duration: '75 min' },
  ];

  const barbers = [
    { name: 'Marcus Thompson', specialty: 'Modern Cuts & Fades', experience: '8 years' },
    { name: 'David Rodriguez', specialty: 'Classic Cuts & Shaves', experience: '12 years' },
    { name: 'Alex Chen', specialty: 'Beard Styling', experience: '6 years' },
    { name: 'Any Available', specialty: 'All Services', experience: 'Varies' },
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to booking service
    console.log('Booking submitted:', formData);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setCurrentStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        barber: '',
        message: ''
      });
    }, 5000);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+15551234567';
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:info@urbantrim.com?subject=Booking Inquiry&body=Hi, I would like to schedule an appointment.';
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.service && formData.barber;
      case 2:
        return formData.date && formData.time;
      case 3:
        return formData.name && formData.email && formData.phone;
      default:
        return false;
    }
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-success-50 to-primary-50 flex items-center justify-center">
        <div className="container-custom section-padding text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display text-4xl font-bold text-neutral-900 mb-4">
              Booking Confirmed! 🎉
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Thank you for choosing UrbanTrim. We've received your booking request and will call you shortly to confirm your appointment.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h2 className="font-semibold text-lg mb-4">Booking Details:</h2>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Service:</span>
                  <span className="font-medium">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Barber:</span>
                  <span className="font-medium">{formData.barber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Date:</span>
                  <span className="font-medium">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Time:</span>
                  <span className="font-medium">{formData.time}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleCallNow}
                className="btn-primary"
              >
                📞 Call Us
              </button>
              <button 
                onClick={handleEmailContact}
                className="btn-secondary"
              >
                ✉️ Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-neutral-50 to-accent-50/20">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-neutral-900 mb-4">
            Book Your <span className="text-gradient">Appointment</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Schedule your grooming session in just a few simple steps. We'll take care of the rest.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-neutral-200 text-neutral-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-4 ${
                    currentStep > step ? 'bg-primary-500' : 'bg-neutral-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 max-w-sm mx-auto">
            <span className="text-sm text-neutral-600">Service</span>
            <span className="text-sm text-neutral-600">Date & Time</span>
            <span className="text-sm text-neutral-600">Contact</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">
                    Choose Your Service
                  </h2>
                  <p className="text-neutral-600">Select the service you'd like to book</p>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-lg font-semibold text-neutral-900 mb-4">
                    Select Service *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.name}
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.service === service.name
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300 bg-white'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, service: service.name }))}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-neutral-900">{service.name}</h3>
                          <span className="text-primary-600 font-bold">{service.price}</span>
                        </div>
                        <p className="text-sm text-neutral-600">{service.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Barber Selection */}
                <div>
                  <label className="block text-lg font-semibold text-neutral-900 mb-4">
                    Choose Your Barber *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {barbers.map((barber) => (
                      <div
                        key={barber.name}
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.barber === barber.name
                            ? 'border-secondary-500 bg-secondary-50'
                            : 'border-neutral-200 hover:border-secondary-300 bg-white'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, barber: barber.name }))}
                      >
                        <h3 className="font-semibold text-neutral-900 mb-1">{barber.name}</h3>
                        <p className="text-sm text-neutral-600 mb-1">{barber.specialty}</p>
                        <p className="text-xs text-neutral-500">{barber.experience}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">
                    Select Date & Time
                  </h2>
                  <p className="text-neutral-600">Choose your preferred appointment slot</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Date Selection */}
                  <div>
                    <label htmlFor="date" className="block text-lg font-semibold text-neutral-900 mb-4">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full px-4 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-lg font-semibold text-neutral-900 mb-4">
                      Preferred Time *
                    </label>
                    <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                          className={`p-3 text-sm rounded-lg font-medium transition-all duration-300 ${
                            formData.time === slot
                              ? 'bg-accent-500 text-white'
                              : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-accent-50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">
                    Contact Information
                  </h2>
                  <p className="text-neutral-600">Tell us how to reach you</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Any special requests or notes..."
                  />
                </div>

                {/* Booking Summary */}
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-100">
                  <h3 className="font-semibold text-lg mb-4">Booking Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Service:</span>
                      <span className="font-medium">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Barber:</span>
                      <span className="font-medium">{formData.barber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Date:</span>
                      <span className="font-medium">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Time:</span>
                      <span className="font-medium">{formData.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  currentStep === 1 
                    ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed' 
                    : 'bg-neutral-600 text-white hover:bg-neutral-700'
                }`}
              >
                ← Previous
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    !isStepValid()
                      ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                      : 'btn-primary hover:scale-105'
                  }`}
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !isStepValid()}
                  className="btn-primary flex items-center px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Booking...
                    </>
                  ) : (
                    'Complete Booking 🎉'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="font-display text-xl font-semibold mb-4">Need Help?</h3>
            <p className="text-neutral-600 mb-6">
              If you have any questions or need assistance, don't hesitate to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleCallNow}
                className="btn-secondary"
              >
                📞 Call (555) 123-4567
              </button>
              <button 
                onClick={handleEmailContact}
                className="btn-secondary"
              >
                ✉️ Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
