import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ApiService from '../../services/api';

export default function ResetPassword() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1); // 1: OTP, 2: New Password
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || 'your email';
  const inputRefs = useRef([]);

  useEffect(() => {
    if (step === 1) {
      inputRefs.current[0]?.focus();
    }
  }, [step]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');
    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');

    if (otpValue.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Verify the OTP with backend
      const response = await ApiService.verifyEmail(email, otpValue);
      console.log('OTP verified:', response);
      setStep(2);
    } catch (error) {
      console.error('OTP verification error:', error);
      setError(error.message || 'Invalid verification code');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await ApiService.resetPassword(email, newPassword);
      console.log('Password reset successful:', response);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Password reset error:', error);
      setError(error.message || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = () => {
    navigate('/forgot-password', { state: { email } });
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

        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-2xl text-green-600"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Password Reset Successfully!
            </h1>
            <p className="text-gray-600 mb-6">
              Your password has been updated successfully.
            </p>
            <button
              onClick={() => navigate('/auth')}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors whitespace-nowrap"
            >
              Continue to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
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
              <i className="ri-shield-check-line text-2xl text-purple-600"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Enter Reset Code
            </h1>
            <p className="text-gray-600">
              Enter the 6-digit code sent to {email}
            </p>
          </div>
          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-4 text-center">
                VERIFICATION CODE
              </label>
              <div className="flex justify-center space-x-3 mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  />
                ))}
              </div>
              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Verify Code'}
            </button>
            <div className="text-center space-y-3">
              <button
                type="button"
                onClick={handleResend}
                className="text-purple-600 hover:text-purple-700 text-sm font-medium cursor-pointer"
              >
                Resend Code
              </button>
            </div>
          </form>
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
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Create New Password
          </h1>
          <p className="text-gray-600">
            Enter your new password below
          </p>
        </div>
        <form onSubmit={handlePasswordSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              NEW PASSWORD
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              required
            />
            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors whitespace-nowrap disabled:opacity-50"
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
}