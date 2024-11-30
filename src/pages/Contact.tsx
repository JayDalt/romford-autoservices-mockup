import { Phone, Car } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-garage-blue">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-garage-blue">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-garage-red" />
                <span className="text-lg">020 1234 5678</span>
              </div>
              <div className="flex items-center space-x-4">
                <Car className="w-6 h-6 text-garage-red" />
                <span className="text-lg">123 Garage Street, Romford, RM1 1AA</span>
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
          <div className="bg-gray-200 h-[400px] rounded-lg">
            {/* Map placeholder */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map Integration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;