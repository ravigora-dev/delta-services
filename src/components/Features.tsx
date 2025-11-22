import { Smartphone, Zap, Palette, Code, Shield, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile First",
      description:
        "Designed with mobile users in mind, ensuring perfect functionality across all devices.",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance with smooth animations and instant interactions.",
      color: "yellow",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description:
        "Modern aesthetics with glassmorphism effects and gradient accents.",
      color: "purple",
    },
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Well-structured, maintainable code built with React and TypeScript.",
      color: "green",
    },
    {
      icon: Shield,
      title: "Accessible",
      description:
        "Built with accessibility in mind, ensuring usability for everyone.",
      color: "red",
    },
    {
      icon: Rocket,
      title: "Easy to Use",
      description: "Simple integration and customization for your projects.",
      color: "indigo",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      yellow: "bg-yellow-100 text-yellow-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      red: "bg-red-100 text-red-600",
      indigo: "bg-indigo-100 text-indigo-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a modern, professional navigation experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 ${getColorClasses(
                  feature.color
                )} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={32} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Integrate this beautiful navigation system into your project and
              enhance your user experience today.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
