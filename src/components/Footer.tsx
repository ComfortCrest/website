import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img
              src="/lovable-uploads/2f619d33-dd96-4fb0-8e5d-b63ab8361c71.png"
              alt="Comfort Crest Adult Family Home"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 leading-relaxed">
              Providing compassionate, personalized care in a beautiful home environment. 
              Our mission is to enhance the quality of life for our residents with dignity, 
              respect, and professional excellence.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-secondary" />
                <div>
                  <p>(201) 920-7621</p>
                  <p>(360) 990-2377</p>
                  <p>(360) 999-6009</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-secondary" />
                <p>info@comfortcrest.com</p>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-secondary" />
                <p>6318 Shady Ln SE<br />Lacey, WA</p>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Quick Links</h3>
            <div className="space-y-2 mb-6">
              <Link to="/about" className="block hover:text-secondary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block hover:text-secondary transition-colors">
                Our Services
              </Link>
              <Link to="/our-home" className="block hover:text-secondary transition-colors">
                Our Home
              </Link>
              <Link to="/contact" className="block hover:text-secondary transition-colors">
                Contact Us
              </Link>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-secondary">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-secondary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Comfort Crest Adult Family Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;