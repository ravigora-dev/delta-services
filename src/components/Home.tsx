import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import {
  Wrench,
  Users,
  Bug,
  CreditCard,
  Shield,
  Code,
  Building2,
  Factory,
  Home as HomeIcon,
  ShoppingBag,
  Heart,
  GraduationCap,
  Store,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import images from the assets index
import { banner, team1, companyTeam } from "../assets/index";

import {
  slick1,
  slick2,
  slick3,
  slick4,
  slick5,
  slick6,
  slick7,
  slick8,
  slick9,
  slick10,
  slick11,
  slick12,
  slick13,
  slick14,
  slick15,
  slick16,
  slick17,
  slick18,
  slick19,
} from "../assets/index";

const Home = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      name: "Technical",
      icon: Wrench,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "Staffing",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      name: "Pest Control",
      icon: Bug,
      color: "from-red-500 to-red-600",
    },
    {
      id: 4,
      name: "Payroll",
      icon: CreditCard,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 5,
      name: "Security",
      icon: Shield,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: 6,
      name: "Software",
      icon: Code,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const sectors = [
    {
      name: "Corporate / IT / ITES",
      icon: Building2,
      image:
        "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Comprehensive facility management for corporate environments",
    },
    {
      name: "Industrial",
      icon: Factory,
      image:
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Specialized services for manufacturing and industrial facilities",
    },
    {
      name: "Residential",
      icon: HomeIcon,
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premium residential facility management solutions",
    },
    {
      name: "Commercial",
      icon: ShoppingBag,
      image:
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete commercial property management services",
    },
    {
      name: "Healthcare",
      icon: Heart,
      image:
        "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Specialized healthcare facility management",
    },
    {
      name: "Education",
      icon: GraduationCap,
      image:
        "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Educational institution facility services",
    },
    {
      name: "Retail",
      icon: Store,
      image:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Retail space management and maintenance",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Pvt Ltd",
      text: "Delta Services has transformed our facility management. Their attention to detail and professional approach is unmatched.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Healthcare Plus",
      text: "Exceptional service quality and reliability. They understand our unique healthcare facility requirements perfectly.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Manufacturing Corp",
      text: "Cost-effective solutions with outstanding results. Our operational efficiency has improved significantly.",
      rating: 5,
    },
  ];

  const features = [
    "24/7 Support & Monitoring",
    "Certified Professional Staff",
    "Cost-Effective Solutions",
    "Customized Service Plans",
    "Quality Assurance",
    "Eco-Friendly Practices",
  ];

  // Work Gallery images array
  const galleryImages = [
    {
      src: slick1,
      alt: "Facility maintenance services",
      category: "Maintenance",
    },
    {
      src: slick2,
      alt: "Professional cleaning team",
      category: "Cleaning",
    },
    {
      src: slick3,
      alt: "Advanced security systems",
      category: "Security",
    },
    {
      src: slick4,
      alt: "Technical support services",
      category: "Technical",
    },
    {
      src: slick5,
      alt: "Corporate environment management",
      category: "Corporate",
    },
    {
      src: slick6,
      alt: "Pest control solutions",
      category: "Pest Control",
    },
    {
      src: slick7,
      alt: "Staff management services",
      category: "Staffing",
    },
    {
      src: slick8,
      alt: "Quality assurance inspection",
      category: "Quality",
    },
    {
      src: slick9,
      alt: "Residential facility management",
      category: "Residential",
    },
    {
      src: slick10,
      alt: "Commercial property maintenance",
      category: "Commercial",
    },
    {
      src: slick11,
      alt: "Healthcare facility solutions",
      category: "Healthcare",
    },
    {
      src: slick12,
      alt: "Industrial maintenance services",
      category: "Industrial",
    },
    {
      src: slick13,
      alt: "Educational institution management",
      category: "Education",
    },
    {
      src: slick14,
      alt: "Retail space management",
      category: "Retail",
    },
    {
      src: slick15,
      alt: "Professional team collaboration",
      category: "Team",
    },
    {
      src: slick16,
      alt: "Safety and compliance services",
      category: "Safety",
    },
    {
      src: slick17,
      alt: "Client consultation meeting",
      category: "Consultation",
    },
    {
      src: slick18,
      alt: "Infrastructure management",
      category: "Infrastructure",
    },
    {
      src: slick19,
      alt: "Specialized technical solutions",
      category: "Specialized",
    },
  ];

  // Carousel slides data
  const carouselSlides = [
    {
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Professional facility management team",
      title: "Transform Your Facility Management",
      description: "Comprehensive solutions for modern businesses",
      isAnimated: true,
    },
    {
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Team collaboration and planning",
      title: "Professional Excellence",
      description: "Trusted by leading organizations across India",
      isAnimated: true,
    },
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Quality service delivery",
      title: "Innovation Driven",
      description: "Cutting-edge facility management solutions",
      isAnimated: true,
    },
    {
      image:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Technical maintenance services",
      title: "Technical Expertise",
      description: "Advanced technical solutions for modern facilities",
      isAnimated: true,
    },
    {
      image:
        "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Security services and monitoring",
      title: "Secure Solutions",
      description: "Comprehensive security and safety management",
      isAnimated: true,
    },
    {
      // image:
      //   "https://images.pexels.com/photos/5847368/pexels-photo-5847368.jpeg?auto=compress&cs=tinysrgb&w=1920",
      image: banner,
      alt: "Pest control services",
      title: "Pest Control Excellence",
      description: "Effective and eco-friendly pest management solutions",
      isAnimated: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Carousel */}
      <section className="relative h-[calc(100vh-80px)] md:h-[80vh] overflow-hidden">
        <div className="relative h-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            className="h-full small-nav-buttons"
          >
            {carouselSlides.map((slide, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="relative h-full">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute inset-0 z-10 h-full flex items-center justify-center text-center text-white px-4">
                    <div className="max-w-4xl">
                      <h1
                        className={`text-5xl md:text-7xl font-bold mb-6 ${
                          slide.isAnimated ? "animate-fade-in-up" : ""
                        }`}
                      >
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 opacity-90">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why are we <span className="text-orange-500">different</span>?
                </h2>
                <div className="w-24 h-1 bg-orange-500 mb-8"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                At the core of our business is a single-minded vision: to
                transform the way facility management is perceived and delivered
                in India. We have meticulously built our systems and processes
                to support this mission, delivering a seamless experience across
                Integrated Facility Management services including{" "}
                <strong>Housekeeping, Security, and Technical Support</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach begins with a rigorous understanding of each
                client's unique requirements. By thoroughly researching and
                engaging with our clients, we design and implement tailored
                solutions that address their specific needs—whether for
                commercial or residential environments.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <blockquote className="text-xl font-medium text-gray-800 italic">
                  "A trusted integrated facility management partner who operates
                  as part of the client team."
                </blockquote>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional team"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-orange-500 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive facility management solutions tailored to your
              business needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className={`font-semibold text-lg transition-colors duration-300 ${
                        hoveredService === index
                          ? "text-green-500"
                          : "text-gray-800"
                      }`}
                    >
                      {service.name}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Sectors Carousel */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Business <span className="text-orange-500">Sectors</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We serve diverse industries with specialized facility management
              solutions
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <SwiperSlide key={index}>
                  <div className="group relative overflow-hidden rounded-xl shadow-2xl h-80">
                    <img
                      src={sector.image}
                      alt={sector.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                        <IconComponent className="w-8 h-8 mb-3 text-orange-400" />
                        <h3 className="text-xl font-bold mb-2">
                          {sector.name}
                        </h3>
                        <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {sector.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* Vertical Image Carousel */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Project Gallery</span>
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing our professional work across different sectors
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            direction="vertical"
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="h-96"
          >
            {[
              {
                src: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Technical Maintenance",
                desc: "HVAC and electrical systems",
              },
              {
                src: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Security Operations",
                desc: "24/7 monitoring and protection",
              },
              {
                src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Professional Team",
                desc: "Skilled workforce management",
              },
              {
                src: "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Pest Control",
                desc: "Comprehensive pest management",
              },
              {
                src: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Payroll Services",
                desc: "Complete HR solutions",
              },
              {
                src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Software Solutions",
                desc: "Digital facility management",
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-24 rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                    <div className="text-white p-4">
                      <h3 className="font-bold text-sm">{item.title}</h3>
                      <p className="text-xs opacity-90">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}

      {/* Card-based Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our most successful facility management implementations
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {[
              {
                src: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Corporate IT Campus",
                location: "Hyderabad Tech City",
                services: ["Technical", "Security", "Housekeeping"],
                desc: "Complete facility management for 50,000 sq ft IT campus with 2000+ employees",
              },
              {
                src: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Manufacturing Plant",
                location: "Industrial Zone, Medak",
                services: ["Technical", "Safety", "Maintenance"],
                desc: "24/7 technical support and maintenance for automotive manufacturing facility",
              },
              {
                src: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Healthcare Complex",
                location: "Banjara Hills, Hyderabad",
                services: ["Specialized Cleaning", "Security", "Technical"],
                desc: "Specialized facility management for multi-specialty hospital with 500 beds",
              },
              {
                src: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Shopping Mall",
                location: "Gachibowli, Hyderabad",
                services: ["Housekeeping", "Security", "Pest Control"],
                desc: "Comprehensive facility management for 3-level shopping complex",
              },
              {
                src: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Educational Institution",
                location: "Kukatpally, Hyderabad",
                services: ["Maintenance", "Security", "Landscaping"],
                desc: "Complete campus management for engineering college with 5000+ students",
              },
            ].map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-orange-500 text-sm font-medium mb-3">
                      {project.location}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Value & Quality Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image Gallery Carousel */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-orange-500">Work Gallery</span>
              </h2>
              <p className="text-xl text-gray-600">
                See our professional facility management in action
              </p>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
                1280: { slidesPerView: 5, spaceBetween: 30 },
              }}
              className="pb-12"
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative overflow-hidden rounded-xl shadow-lg h-64">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium capitalize">
                        {image.alt}
                      </p>
                      <span className="inline-block mt-1 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <img
                src={team1}
                alt="Team collaboration"
                className="rounded-lg shadow-2xl w-full h-96 object-cover border-l-8 border-t-8 border-orange-500"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900">
                Unparalleled <span className="text-green-500">Value</span>
              </h3>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                Delta Services Facility Management Pvt. Ltd. is a trusted,
                single window solutions provider offering excellent facility
                management services to various business sectors. Our strategic
                advantage comes from our deep understanding of facility
                management, and no other company serves our clients the way we
                do.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 lg:order-1">
              <h3 className="text-4xl font-bold text-gray-900">
                Better <span className="text-green-500">Quality</span>
              </h3>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                Delta Services Facility Management Pvt. Ltd. assures quality and
                excellence in every service we provide, customized precisely to
                your unique needs. We value long-term partnerships and align
                ourselves with your goals as trusted collaborators dedicated to
                delivering superior facility management solutions.
              </p>
            </div>
            <div className="relative lg:order-2">
              <img
                src={companyTeam}
                alt="Quality service"
                className="rounded-lg shadow-2xl w-full h-96 object-cover border-r-8 border-b-8 border-orange-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client <span className="text-orange-500">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600">
              What our clients say about us
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-orange-500 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials with Images Carousel */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success <span className="text-orange-500">Stories</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real testimonials from our valued clients
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop
            className="pb-12"
          >
            {[
              {
                name: "Rajesh Kumar",
                position: "Facility Manager",
                company: "Tech Solutions Pvt Ltd",
                image:
                  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
                text: "Delta Services has completely transformed our facility management operations. Their proactive approach and attention to detail have resulted in a 40% reduction in maintenance costs while significantly improving our workplace environment.",
                rating: 5,
                project: "IT Campus Management",
              },
              {
                name: "Dr. Priya Sharma",
                position: "Operations Director",
                company: "Healthcare Plus Hospital",
                image:
                  "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400",
                text: "Working with Delta Services has been exceptional. They understand the unique requirements of healthcare facilities and maintain the highest standards of cleanliness and safety. Our patient satisfaction scores have improved significantly.",
                rating: 5,
                project: "Hospital Facility Management",
              },
              {
                name: "Amit Patel",
                position: "Plant Manager",
                company: "Manufacturing Corp",
                image:
                  "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
                text: "The technical expertise and reliability of Delta Services is unmatched. Their 24/7 support has ensured zero downtime in our manufacturing operations. They truly operate as an extension of our team.",
                rating: 5,
                project: "Industrial Maintenance",
              },
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.company}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-8 md:p-12">
                        <div className="flex items-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-6 h-6 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <blockquote className="text-xl md:text-2xl text-gray-800 font-medium italic mb-8 leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="border-t pt-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-bold text-gray-900">
                                {testimonial.name}
                              </h4>
                              <p className="text-gray-600">
                                {testimonial.position}
                              </p>
                              <p className="text-orange-500 font-semibold">
                                {testimonial.company}
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                                {testimonial.project}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Facility Management?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust Delta Services for
            their facility management needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
