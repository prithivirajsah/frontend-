import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthCard from '../../components/base/AuthCard';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import ApiService from '../../services/api';

export default function VerifyEmail() {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const email = location.state?.email || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) return;
    setLoading(true);
    
    try {
      const response = await ApiService.verifyEmail(email, otp);
      console.log('Email verified:', response);
      setVerified(true);
      // Navigate to auth page after 2 seconds
      setTimeout(() => {
        navigate('/auth');
      }, 2000);
    } catch (error) {
      console.error('Error verifying email:', error);
      alert('Error verifying email: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (verified) {
    return (
      <AuthCard
        title="Email Verified"
        subtitle="Your email has been successfully verified"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-check-line text-2xl text-green-600"></i>
          </div>
          <p className="text-gray-600 mb-6">
            Your email <strong>{email}</strong> has been verified successfully.
          </p>
          <p className="text-sm text-gray-500">
            Redirecting to auth page...
          </p>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Verify Email"
      subtitle={`Enter the verification code sent to ${email}`}
    >
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Verification Code"
          placeholder="Enter verification code"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          icon="ri-shield-check-line"
          required
        />
        <Button type="submit" loading={loading} disabled={!otp}>
          Verify Email
        </Button>
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => navigate('/send-verify-otp')}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer"
          >
            Resend Code
          </button>
        </div>
      </form>
    </AuthCard>
  );
}
