import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthCard from '../../components/base/AuthCard';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';

export default function VerifyEmailPage() {
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      // Add your verification logic here
      // const response = await ApiService.verifyEmail({ code: verificationCode });
      setMessage('Email verified successfully!');
      setTimeout(() => {
        navigate('/auth');
      }, 2000);
    } catch (error) {
      setError(error.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard 
      title="Verify Your Email" 
      subtitle="Enter the verification code sent to your email"
    >
      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
          {message}
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Verification Code"
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          placeholder="Enter 6-digit code"
          required
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Verifying...' : 'Verify Email'}
        </Button>

        <div className="text-center">
          <button
            type="button"
            onClick={() => navigate('/auth')}
            className="text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Back to Login
          </button>
        </div>
      </form>
    </AuthCard>
  );
}
