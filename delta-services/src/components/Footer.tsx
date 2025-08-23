import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { logo } from "../assets/index";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  const services = [
    "Technical Services",
    "Staffing Solutions",
    "Pest Control",
    "Payroll Management",
    "Security Services",
    "Software Solutions",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                <img src={logo} alt="Delta Services Logo" className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-blue-900">D</span>
                  <span className="text-xl font-bold text-blue-900">elta</span>
                  <span className="text-3xl font-bold text-blue-900 ml-2">
                    S
                  </span>
                  <span className="text-xl font-bold text-blue-900">
                    ervices
                  </span>
                </div>
              </div>
            </Link>

            {/* Company Description */}
            <p className="text-orange-100 leading-relaxed max-w-md">
              Delta Services Management Proprietorship Pvt. Ltd. - Your trusted
              partner for comprehensive facility management solutions across
              diverse business sectors.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-200 mt-1 flex-shrink-0" />
                <div className="text-orange-100">
                  <p className="font-medium text-white mb-1">Head Office</p>
                  <p className="text-sm leading-relaxed">
                    1st Floor, Vishnu Avenue, Plot No-17 Kartika Layout,
                    <br />
                    Jai Hind Enclave Madhapur, Hyderabad-500081
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-200 flex-shrink-0" />
                <a
                  href="mailto:amarnath.maddala@deltaservices.co.in"
                  className="text-orange-100 hover:text-white transition-colors duration-300"
                >
                  amarnath.maddala@deltaservices.co.in
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-200 flex-shrink-0" />
                <a
                  href="tel:+919390285875"
                  className="text-orange-100 hover:text-white transition-colors duration-300"
                >
                  +91 93902 85875
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-200 flex-shrink-0" />
                <span className="text-orange-100">24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center text-orange-100 hover:text-white transition-colors duration-300 group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="flex items-center text-orange-100 hover:text-white transition-colors duration-300 cursor-pointer group">
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup
        <div className="mt-12 pt-8 border-t border-orange-400/30">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:mx-0">
            <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-orange-100 mb-6">
              Subscribe to our newsletter for the latest updates on facility
              management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-orange-400/30 text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-800/50 backdrop-blur-sm border-t border-orange-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-orange-100 text-sm">
                © {currentYear} Delta Services. All rights reserved.
              </p>
              <p className="text-orange-200 text-xs mt-1">
                Powered by: Error Technologies
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a
                href="#"
                className="text-orange-100 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-orange-100 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
