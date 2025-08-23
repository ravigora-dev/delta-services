import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Award, Users, Target, Heart } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { team6 } from "../assets/index";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Client Satisfaction", icon: Target },
    { number: "24/7", label: "Support Available", icon: Heart },
  ];

  const values = [
    {
      title: "Professional Excellence",
      description:
        "We maintain the highest standards of professionalism in all our services, ensuring quality delivery every time.",
      icon: Award,
    },
    {
      title: "Client-Centric Approach",
      description:
        "Our clients are at the heart of everything we do. We tailor our services to meet their unique requirements.",
      icon: Users,
    },
    {
      title: "Innovation & Technology",
      description:
        "We leverage cutting-edge technology and innovative solutions to deliver superior facility management services.",
      icon: Target,
    },
    {
      title: "Sustainable Practices",
      description:
        "We are committed to environmentally responsible practices that contribute to a sustainable future.",
      icon: Heart,
    },
  ];

  const milestones = [
    {
      year: "2015",
      event: "Company Founded",
      description:
        "Delta Services was established with a vision to transform facility management in India.",
    },
    {
      year: "2017",
      event: "First Major Contract",
      description:
        "Secured our first major corporate facility management contract, marking our entry into the enterprise market.",
    },
    {
      year: "2019",
      event: "Service Expansion",
      description:
        "Expanded our service portfolio to include technical, security, and specialized facility management solutions.",
    },
    {
      year: "2021",
      event: "Digital Transformation",
      description:
        "Implemented advanced digital solutions and IoT-based monitoring systems for enhanced service delivery.",
    },
    {
      year: "2023",
      event: "Market Leadership",
      description:
        "Achieved recognition as a leading facility management provider across multiple industry sectors.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-orange-400">Delta Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Transforming facility management through innovation, excellence,
              and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Gallery Carousel */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our{" "}
                <span className="text-orange-500">Professional Team</span>
              </h2>
              <p className="text-xl text-gray-600">
                Dedicated professionals committed to excellence
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
              {[
                {
                  src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Management Team",
                  desc: "Strategic leadership and vision",
                },
                {
                  src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Technical Experts",
                  desc: "Specialized technical knowledge",
                },
                {
                  src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Quality Assurance",
                  desc: "Ensuring service excellence",
                },
                {
                  src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Project Managers",
                  desc: "Coordinating seamless delivery",
                },
                {
                  src: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Client Relations",
                  desc: "Building lasting partnerships",
                },
                {
                  src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Operations Team",
                  desc: "Day-to-day excellence",
                },
                {
                  src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Support Staff",
                  desc: "24/7 customer support",
                },
                {
                  src: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Field Specialists",
                  desc: "On-site service delivery",
                },
              ].map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
                    <img
                      src={member.src}
                      alt={member.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-lg font-bold mb-2">{member.title}</h3>
                      <p className="text-sm text-gray-200">{member.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our <span className="text-orange-500">Story</span>
                </h2>
                <div className="w-24 h-1 bg-orange-500 mb-8"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Delta Services Facility Management Pvt. Ltd. was founded with a
                singular vision: to revolutionize the facility management
                industry in India. Since our inception, we have been dedicated
                to providing comprehensive, integrated facility management
                solutions that exceed client expectations.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began with a commitment to excellence and has
                evolved into a trusted partnership with leading organizations
                across various sectors. We understand that every facility is
                unique, and we pride ourselves on delivering customized
                solutions that address specific operational challenges.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <blockquote className="text-xl font-medium text-gray-800 italic">
                  "Excellence is not a destination; it's a continuous journey of
                  improvement and innovation."
                </blockquote>
                <cite className="text-orange-500 font-semibold mt-2 block">
                  - Delta Services Team
                </cite>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={team6}
                  alt="Professional team"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-orange-500 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Carousel */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-orange-400">Achievements</span>
            </h2>
            <p className="text-xl text-blue-200">
              Milestones that define our excellence
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {[
              {
                number: "500+",
                label: "Projects Completed",
                icon: "🏆",
                image:
                  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
                desc: "Successfully delivered projects across various sectors",
              },
              {
                number: "50+",
                label: "Happy Clients",
                icon: "🤝",
                image:
                  "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
                desc: "Long-term partnerships with leading organizations",
              },
              {
                number: "99%",
                label: "Client Satisfaction",
                icon: "⭐",
                image:
                  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
                desc: "Consistently high satisfaction ratings from clients",
              },
              {
                number: "24/7",
                label: "Support Available",
                icon: "🔧",
                image:
                  "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400",
                desc: "Round-the-clock technical support and maintenance",
              },
              {
                number: "10+",
                label: "Years Experience",
                icon: "📅",
                image:
                  "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
                desc: "Decade of expertise in facility management",
              },
              {
                number: "1000+",
                label: "Skilled Professionals",
                icon: "👥",
                image:
                  "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400",
                desc: "Trained and certified workforce across all services",
              },
            ].map((achievement, index) => (
              <SwiperSlide key={index}>
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                  <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-2 right-2 text-2xl">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">
                      {achievement.number}
                    </div>
                    <div className="font-semibold mb-2">
                      {achievement.label}
                    </div>
                    <p className="text-sm text-blue-200 opacity-90">
                      {achievement.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="text-orange-500 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 text-white">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To provide exceptional facility management services that enhance
                operational efficiency, reduce costs, and create safe,
                comfortable environments for our clients and their stakeholders.
                We are committed to delivering innovative solutions that exceed
                expectations and build lasting partnerships.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To be India's most trusted and innovative facility management
                company, setting industry standards for excellence,
                sustainability, and client satisfaction. We envision a future
                where our integrated solutions transform how organizations
                manage their facilities and focus on their core business
                objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
