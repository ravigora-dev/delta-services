import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { logo } from "../assets/index";

const NotFound = () => {
  return (
    <div className="bg-gray-50 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full mb-6">
            <span className="text-5xl text-orange-500">404</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Oops! The page you are looking for might have been removed, had its
          name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-gray-500">
            Need assistance? Contact our support team at{" "}
            <a
              href="mailto:krishna.yedupala@deltaservices.co.in"
              className="text-orange-500 hover:text-orange-600 underline"
            >
              krishna.yedupala@deltaservices.co.in
            </a>
          </p>
        </div>

        {/* Delta Services Logo */}
        <div className="mt-12 flex justify-center">
          <Link to="/" className="inline-flex items-center group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
              <img src={logo} alt="Delta Services Logo" className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-blue-900">D</span>
                <span className="text-xl font-bold text-blue-900">elta</span>
                <span className="text-3xl font-bold text-blue-900 ml-2">S</span>
                <span className="text-xl font-bold text-blue-900">ervices</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
