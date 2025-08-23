import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { 
  Wrench, 
  Users, 
  Bug, 
  CreditCard, 
  Shield, 
  Code,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Headphones
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      name: "Technical Services",
      icon: Wrench,
      color: "from-blue-500 to-blue-600",
      description: "Comprehensive technical maintenance and support services for all your facility needs.",
      features: [
        "HVAC System Maintenance",
        "Electrical System Management",
        "Plumbing & Water Systems",
        "Fire Safety Systems",
        "Elevator Maintenance",
        "Building Automation"
      ],
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      name: "Staffing Solutions",
      icon: Users,
      color: "from-green-500 to-green-600",
      description: "Professional staffing solutions tailored to meet your organizational requirements.",
      features: [
        "Skilled Technical Staff",
        "Administrative Personnel",
        "Security Personnel",
        "Housekeeping Staff",
        "Specialized Contractors",
        "Temporary & Permanent Staffing"
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      name: "Pest Control",
      icon: Bug,
      color: "from-red-500 to-red-600",
      description: "Advanced pest management solutions to maintain hygienic and safe environments.",
      features: [
        "Integrated Pest Management",
        "Rodent Control",
        "Insect Control",
        "Termite Treatment",
        "Bird Control Solutions",
        "Eco-Friendly Methods"
      ],
      image: "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      name: "Payroll Management",
      icon: CreditCard,
      color: "from-purple-500 to-purple-600",
      description: "Comprehensive payroll and HR management services for seamless operations.",
      features: [
        "Payroll Processing",
        "Tax Compliance",
        "Employee Benefits Management",
        "Attendance Tracking",
        "Statutory Compliance",
        "HR Analytics & Reporting"
      ],
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      name: "Security Services",
      icon: Shield,
      color: "from-yellow-500 to-yellow-600",
      description: "Professional security solutions to protect your assets and ensure safety.",
      features: [
        "24/7 Security Guards",
        "Access Control Systems",
        "CCTV Monitoring",
        "Visitor Management",
        "Emergency Response",
        "Security Audits"
      ],
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      name: "Software Solutions",
      icon: Code,
      color: "from-indigo-500 to-indigo-600",
      description: "Cutting-edge software solutions for facility management and operational efficiency.",
      features: [
        "Facility Management Software",
        "Asset Management Systems",
        "Work Order Management",
        "Preventive Maintenance Scheduling",
        "Real-time Monitoring",
        "Custom Software Development"
      ],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support and emergency response services"
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Highly trained and certified staff with industry expertise"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality control processes and regular audits"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Dedicated account managers and customer support team"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-green-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Comprehensive facility management solutions designed to optimize your operations and enhance productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Images Carousel */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services in <span className="text-orange-500">Action</span>
              </h2>
              <p className="text-xl text-gray-600">Professional facility management across all sectors</p>
            </div>
            
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
              className="pb-12"
            >
              {[
                { src: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600", service: "Technical Services", desc: "HVAC, electrical, and mechanical maintenance" },
                { src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600", service: "Staffing Solutions", desc: "Professional and skilled workforce" },
                { src: "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=600", service: "Pest Control", desc: "Comprehensive pest management solutions" },
                { src: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600", service: "Payroll Management", desc: "Complete HR and payroll solutions" },
                { src: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600", service: "Security Services", desc: "24/7 security and monitoring" },
                { src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600", service: "Software Solutions", desc: "Digital facility management tools" },
                { src: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600", service: "Corporate Services", desc: "Office and corporate facility management" },
                { src: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600", service: "Industrial Services", desc: "Manufacturing facility maintenance" },
                { src: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600", service: "Residential Services", desc: "Home and residential complex management" },
                { src: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600", service: "Commercial Services", desc: "Retail and commercial space management" },
                { src: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600", service: "Healthcare Services", desc: "Medical facility specialized services" },
                { src: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600", service: "Education Services", desc: "School and university facility management" },
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative overflow-hidden rounded-xl shadow-lg h-72">
                    <img
                      src={item.src}
                      alt={item.service}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-lg font-bold mb-2">{item.service}</h3>
                      <p className="text-sm text-gray-200">{item.desc}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete <span className="text-orange-500">Service Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From technical maintenance to staffing solutions, we provide integrated services that keep your facility running smoothly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                  onClick={() => setActiveService(index)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-orange-500 font-semibold group-hover:text-orange-600 transition-colors duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={services[activeService].image}
                alt={services[activeService].name}
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-4 -right-4 w-full h-full bg-orange-500 rounded-lg -z-10"></div>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${services[activeService].color} flex items-center justify-center mb-6`}>
                  {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {services[activeService].name}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {services[activeService].description}
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-orange-500">Delta Services</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through our commitment to excellence, innovation, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600">Click on any service to learn more about our capabilities</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeService === index
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Carousel */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformation <span className="text-orange-400">Gallery</span>
            </h2>
            <p className="text-xl text-gray-300">See the difference our services make</p>
          </div>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            loop
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="pb-12"
          >
            {[
              {
                before: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
                after: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Office Space Renovation",
                service: "Technical Services",
                description: "Complete HVAC and electrical system upgrade"
              },
              {
                before: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
                after: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Security System Implementation",
                service: "Security Services",
                description: "Advanced surveillance and access control installation"
              },
              {
                before: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
                after: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Facility Deep Cleaning",
                service: "Housekeeping",
                description: "Professional deep cleaning and sanitization"
              },
              {
                before: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
                after: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Workspace Optimization",
                service: "Facility Management",
                description: "Complete workspace redesign and optimization"
              },
            ].map((transformation, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                  <div className="grid grid-cols-2 h-64">
                    <div className="relative group">
                      <img
                        src={transformation.before}
                        alt="Before"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">BEFORE</span>
                      </div>
                    </div>
                    <div className="relative group">
                      <img
                        src={transformation.after}
                        alt="After"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">AFTER</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{transformation.title}</h3>
                    <p className="text-orange-400 font-semibold mb-2">{transformation.service}</p>
                    <p className="text-gray-300 text-sm">{transformation.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 360° Service Showcase Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              360° Service <span className="text-orange-500">Showcase</span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive view of our service capabilities</p>
          </div>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            {[
              {
                images: [
                  "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=400"
                ],
                title: "Technical Excellence",
                subtitle: "Advanced Technical Services",
                description: "From HVAC maintenance to electrical systems, our technical team ensures optimal facility performance."
              },
              {
                images: [
                  "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400"
                ],
                title: "Digital Solutions",
                subtitle: "Smart Facility Management",
                description: "Leveraging technology for efficient payroll management and comprehensive software solutions."
              },
              {
                images: [
                  "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400"
                ],
                title: "Sector Expertise",
                subtitle: "Specialized Industry Solutions",
                description: "Tailored facility management solutions for healthcare, education, retail, and residential sectors."
              },
            ].map((showcase, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-96 bg-gradient-to-br from-blue-900 to-purple-900">
                  <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
                    {showcase.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative overflow-hidden group">
                        <img
                          src={image}
                          alt={`Service ${imgIndex + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white max-w-2xl px-6">
                      <h3 className="text-4xl font-bold mb-2">{showcase.title}</h3>
                      <p className="text-xl text-orange-400 mb-4">{showcase.subtitle}</p>
                      <p className="text-lg opacity-90">{showcase.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your facility management needs and discover how we can help optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;