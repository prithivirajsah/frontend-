import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthPage from './pages/auth/page';
import ForgotPasswordPage from './pages/forgot-password/page';
import VerifyEmailPage from './pages/verify-email/page.jsx';
import ResetPasswordPage from './pages/reset-password/page';

function App() {
  return (
    <GoogleOAuthProvider clientId="326718165385-n4p24fog5f4t7da6s6jnok18j0mph801.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
