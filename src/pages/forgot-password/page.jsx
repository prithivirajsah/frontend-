import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 flex items-center justify-center p-4">
        <div className="absolute top-8 right-8">
          <Link
            to="/auth"
            className="px-6 py-2 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            BACK TO LOGIN
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line text-2xl text-green-600"></i>
          </div>
          <br />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Check Your Email
          </h1>
          <br />
          <p className="text-gray-600 mb-6">
            We've sent a password reset link to <strong>{email}</strong>
          </p>
          <br />
          <div className="space-y-4">
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors whitespace-nowrap"
            >
              Try Again
            </button>
            <br />
            <Link
              to="/auth"
              className="block w-full text-center py-3 text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 flex items-center justify-center p-4">
      <div className="absolute top-8 right-8">
        <Link
          to="/auth"
          className="px-6 py-2 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
        >
          BACK TO LOGIN
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-lock-line text-2xl text-purple-600"></i>
          </div>
          <br />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Forgot Password?
          </h1>
          <br />
          <p className="text-gray-600 text-sm">
            No worries! Enter your email address and we'll send you a reset link.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors whitespace-nowrap"
          >
            Send Reset Link
          </button>

          <div className="text-center">
            <Link
              to="/auth"
              className="text-sm text-gray-600 hover:text-purple-600 transition-colors flex items-center justify-center gap-2"
            >
              <i className="ri-arrow-left-line"></i>
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}


