import { Phone, Car, Wrench, Menu, X } from "lucide-react";
import { useState } from "react";
import Map from "../components/Map";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <h1 className="text-4xl font-bold text-center mb-12 text-garage-blue">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-garage-blue">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-garage-red" />
                <span className="text-lg">01708 736555</span>
              </div>
              <div className="flex items-center space-x-4">
                <Car className="w-6 h-6 text-garage-red" />
                <span className="text-lg">55 Brentwood Rd, Hornchurch, Romford RM1 2EU</span>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-garage-blue">Opening Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 h-[400px] rounded-lg overflow-hidden">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
