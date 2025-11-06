import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApiService from '../../services/api';
import { GoogleLogin } from "@react-oauth/google"
import { toast, ToastContainer } from 'react-toastify';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Login
        const response = await ApiService.login({ email, password });
        toast('Login successfully')
        console.log('Login response:', response);
        // Store token in localStorage
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
        }
        // Navigate to home or dashboard
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        // Register
        const response = await ApiService.register({ name, email, password });
        toast('Registration successful! You can now log in.');
        console.log('Registration response:', response);
        // Switch to login mode after successful registration
        setTimeout(() => {
          setIsLogin(true);
          setName('');
          setPassword('');
        }, 2000);
      }
    } catch (error) {
      toast(error.message || 'Something went wrong')
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    // Here you can send the credential to your backend
    // Example: ApiService.googleLogin(credentialResponse.credential)
    navigate('/');
  };

  const handleGoogleError = () => {
    console.log("Login Failed");
    toast("Google login failed. Please try again.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 flex items-center justify-center p-4">
      <ToastContainer/>
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
          {isLogin ? 'Login' : 'Create your account'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field - Only for Sign Up */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                FULL NAME
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          )}

          {/* Email Field */}
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
                placeholder="Enter your password"
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
            disabled={loading}
            className={`w-full py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700'
              } text-white`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {isLogin ? 'Logging in...' : 'Signing up...'}
              </div>
            ) : (
              isLogin ? 'Login Now' : 'Sign Up Now'
            )}
          </button>

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
          <div className="w-full flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme="outline"
              size="large"
              text="continue_with"
              shape="rectangular"
              locale="en"
            />
          </div>
          
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