import { Wrench, Menu, X } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const services = [
    { title: "Clutches", description: "Complete clutch replacement and repairs" },
    { title: "Suspension", description: "Full suspension system maintenance" },
    { title: "Servicing", description: "Comprehensive vehicle servicing" },
    { title: "Brakes", description: "Brake system repairs and maintenance" },
    { title: "Diagnostics", description: "Advanced computer diagnostics" },
    { title: "Welding", description: "Professional welding services" },
    { title: "Tyres", description: "Tyre fitting and balancing" },
    { title: "Exhausts", description: "Exhaust system repairs and replacement" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-garage-blue text-white p-4 relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Wrench className="w-8 h-8 text-garage-yellow" />
            <span className="text-2xl font-bold">Romford Auto Services</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-garage-yellow transition-colors">Home</a>
            <a href="/about" className="hover:text-garage-yellow transition-colors">About</a>
            <a href="/contact" className="hover:text-garage-yellow transition-colors">Contact</a>
          </div>

          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-garage-blue md:hidden">
              <div className="flex flex-col items-center py-4 space-y-4">
                <a href="/" className="hover:text-garage-yellow transition-colors">Home</a>
                <a href="/about" className="hover:text-garage-yellow transition-colors">About</a>
                <a href="/contact" className="hover:text-garage-yellow transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-garage-blue">About Romford Auto Services</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-garage-blue mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-2 text-garage-blue">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-garage-blue rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-garage-blue">Why Choose Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-garage-yellow p-3 rounded-full">
                    <Clock className="w-6 h-6 text-garage-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Fast Service</h4>
                    <p className="text-gray-600">Quick turnaround without compromising quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-garage-yellow p-3 rounded-full">
                    <Wrench className="w-6 h-6 text-garage-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Expert Technicians</h4>
                    <p className="text-gray-600">Qualified professionals with years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
