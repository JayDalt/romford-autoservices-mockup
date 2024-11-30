import { Car, Wrench, Phone, Clock, CarFront, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    { icon: <CarFront className="w-8 h-8" />, title: "Diagnostics", description: "Computer-aided vehicle diagnostics" },
    { icon: <Wrench className="w-8 h-8" />, title: "Repairs", description: "Full service and repairs" },
    { icon: <Fuel className="w-8 h-8" />, title: "MOT", description: "MOT testing and certification" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-garage-blue text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-garage-yellow" />
            <span className="text-2xl font-bold">Romford Auto Services</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-garage-yellow transition-colors">Services</a>
            <a href="#about" className="hover:text-garage-yellow transition-colors">About</a>
            <a href="#contact" className="hover:text-garage-yellow transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-garage-blue to-blue-900 text-white py-20">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Expert Auto Services in Romford</h1>
          <p className="text-xl mb-8 text-gray-200">Professional car repairs and maintenance you can trust</p>
          <Button className="bg-garage-red hover:bg-red-700 text-white px-8 py-6 text-lg">
            Book Now
          </Button>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-garage-blue">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-garage-blue mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-garage-blue">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-garage-yellow p-3 rounded-full">
                  <Clock className="w-6 h-6 text-garage-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fast Service</h3>
                  <p className="text-gray-600">Quick turnaround without compromising quality</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-garage-yellow p-3 rounded-full">
                  <Wrench className="w-6 h-6 text-garage-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                  <p className="text-gray-600">Qualified professionals with years of experience</p>
                </div>
              </div>
            </div>
            <div className="bg-garage-blue rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-garage-blue">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-garage-red" />
                  <span>020 1234 5678</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Car className="w-6 h-6 text-garage-red" />
                  <span>123 Garage Street, Romford, RM1 1AA</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg">
              {/* Map placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map Integration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-garage-blue text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Romford Auto Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;