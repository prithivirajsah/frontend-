const API_BASE_URL = 'http://localhost:5001/api';

class ApiService {
  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }

  // Get user info
  async getUser() {
    return this.request('/user');
  }

  // Register/Sign Up
  async register(userData) {
    return this.request('/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // Login
  async login(credentials) {
    return this.request('/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  // Send verification OTP
  async sendVerificationOtp(email) {
    return this.request('/send-verification-otp', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Verify email
  async verifyEmail(email, code) {
    return this.request('/verify-email', {
      method: 'POST',
      body: JSON.stringify({ email, code }),
    });
  }

  // Forgot password
  async forgotPassword(email) {
    return this.request('/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Reset password
  async resetPassword(email, newPassword) {
    return this.request('/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email, newPassword }),
    });
  }
}

export default new ApiService();
