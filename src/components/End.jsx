import { useEffect } from "react";
import { CheckCircle } from "react-feather"; // Using Feather Icons for a modern look
import { useNavigate } from "react-router-dom"; // For navigation

const End = () => {
  const navigate = useNavigate();

  // Redirect to home after 5 seconds (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to the homepage
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform transition-all duration-500 hover:scale-105">
        {/* Icon */}
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mt-6">
          Thank You for Your Purchase!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mt-4">
          Your order has been successfully placed. We’ve sent you an email with
          the details of your purchase.
        </p>

        {/* Order Details (Example) */}
        <div className="mt-6 text-left bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900">Order Details</h2>
          <p className="text-gray-600 mt-2">
            <strong>Order ID:</strong> #123456
          </p>
          <p className="text-gray-600">
            <strong>Estimated Delivery:</strong> 3-5 Business Days
          </p>
        </div>

        {/* Call-to-Action Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Continue Shopping
        </button>

        {/* Social Sharing */}
        <div className="mt-6">
          <p className="text-gray-600">Share your purchase:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://twitter.com/intent/tweet?text=Just%20made%20a%20purchase%20on%20this%20awesome%20store!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=yourstore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;