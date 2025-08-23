import { Briefcase, Check, Users, Target, Mail, Phone } from "lucide-react";

const Career = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover exciting opportunities to grow your career with Delta
            Services, where innovation meets excellence in facility management.
          </p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join Delta Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe our people are our greatest asset. Here's why Delta
              Services is the perfect place to build your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-orange-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional Growth
              </h3>
              <p className="text-gray-600">
                Continuous learning opportunities and clear career advancement
                paths.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Competitive Benefits
              </h3>
              <p className="text-gray-600">
                Comprehensive health insurance, retirement plans, and
                performance bonuses.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Collaborative Culture
              </h3>
              <p className="text-gray-600">
                Work with talented professionals in a supportive team
                environment.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Meaningful Impact
              </h3>
              <p className="text-gray-600">
                Contribute to projects that make a real difference for our
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For any career inquiries, please reach out to our HR department.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                <a
                  href="mailto:krishna.yedupala@deltaservices.co.in"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
                >
                  krishna.yedupala@deltaservices.co.in
                </a>
              </div>
            </div>

            {/* <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                <a
                  href="tel:+919390285875"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
                >
                  +91 93902 85875
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
