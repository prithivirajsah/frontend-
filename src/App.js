import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthPage from './pages/auth/page';
import ForgotPasswordPage from './pages/forgot-password/page';
import ResetPasswordPage from './pages/reset-password/page';
import ContactPage from './pages/contact';
import HomePage from './pages/home';

const queryClient = new QueryClient();

function App() {
  return (
    <GoogleOAuthProvider clientId="326718165385-n4p24fog5f4t7da6s6jnok18j0mph801.apps.googleusercontent.com">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default App;