import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, isLogin });
  };

  const handleGoogleAuth = () => {
    console.log('Google auth clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 flex items-center justify-center p-4">
      {/* Sign Up Button - Top Right */}
      <div className="absolute top-8 right-8">
        <button
          onClick={() => setIsLogin(false)}
          className="px-6 py-2 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
        >
          SIGN UP
        </button>
      </div>

      {/* Login Form */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Prithvirajsah584@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              PASSWORD
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <i className={`ri-eye${showPassword ? '-off' : ''}-line text-lg`}></i>
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          {isLogin && (
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors whitespace-nowrap"
          >
            {isLogin ? 'Login Now' : 'Sign Up Now'}
          </button>

          {/* Toggle Login/Signup */}
          <div className="text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR USE</span>
            </div>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-google-fill text-lg text-red-500"></i>
            </div>
            <span className="text-gray-700 font-medium">Continue with Google</span>
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-white/70 text-sm text-center">
          Exclusive rights PrithviRajSah © 2025
        </p>
      </div>
    </div>
  );
}


