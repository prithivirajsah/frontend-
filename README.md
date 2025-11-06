# Frontend Application

A modern React-based authentication application with Google OAuth integration, built with React 19, Tailwind CSS, and Framer Motion.

## Features

- **Authentication System**: Complete user authentication with login/register functionality
- **Google OAuth Integration**: One-click Google sign-in using `@react-oauth/google`
- **Password Reset**: Forgot password and reset password functionality
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Toast Notifications**: User-friendly notifications with React Toastify
- **Routing**: Client-side routing with React Router DOM
- **API Integration**: Centralized API service for backend communication

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Styling**: Tailwind CSS 3.4.14
- **Authentication**: Google OAuth (@react-oauth/google)
- **Routing**: React Router DOM 6.30.1
- **Animations**: Framer Motion 12.23.24
- **Notifications**: React Toastify 11.0.5
- **Icons**: Lucide React 0.552.0
- **Build Tool**: Create React App
- **Testing**: Jest, React Testing Library

## Project Structure

```
src/
├── App.js                 # Main application component with routing
├── App.css               # Global styles
├── index.js              # Application entry point
├── index.css             # Base CSS with Tailwind imports
├── assets/               # Static assets
├── components/           # Reusable components
│   └── base/
│       ├── AuthCard.jsx  # Authentication card wrapper
│       ├── Button.jsx    # Custom button component
│       └── Input.jsx     # Custom input component
├── pages/                # Page components
│   ├── auth/
│   │   └── page.jsx      # Main authentication page (login/register)
│   ├── contact.jsx       # Contact page
│   ├── forgot-password/
│   │   └── page.jsx      # Forgot password page
│   └── reset-password/
│       └── page.jsx      # Reset password page
└── services/
    └── api.js            # API service layer
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Update the Google OAuth client ID in `src/App.js`:
   ```javascript
   <GoogleOAuthProvider clientId="your-google-client-id">
   ```

4. **Configure API endpoint**
   
   Update the API base URL in `src/services/api.js`:
   ```javascript
   const API_BASE_URL = 'http://localhost:5001/api';
   ```

### Running the Application

1. **Start the development server**
   ```bash
   npm start
   ```

2. **Open your browser**
   
   Navigate to `http://localhost:3000` to view the application.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Configuration

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Proxy Configuration

The application is configured to proxy API requests to `http://localhost:3000` as specified in `package.json`.

## Pages and Features

### Authentication Page (`/auth`)
- Dual-mode login/register form
- Email and password authentication
- Google OAuth integration
- Form validation and error handling
- Responsive design with gradient background

### Forgot Password (`/forgot-password`)
- Password reset request functionality
- Email input validation

### Reset Password (`/reset-password`)
- New password creation
- Password confirmation

### Contact Page (`/contact`)
- Contact form or information

## API Integration

The application uses a centralized API service (`src/services/api.js`) that provides:

- **Health Check**: Server status verification
- **User Registration**: New user account creation
- **User Login**: Authentication with email/password
- **Password Reset**: Forgot password functionality
- **Generic Request Handler**: Centralized error handling and request management

## UI Components

### Base Components

- **AuthCard**: Reusable authentication wrapper component
- **Button**: Custom styled button component
- **Input**: Form input component with validation

### Styling Features

- Modern gradient backgrounds
- Smooth hover transitions
- Responsive design for all screen sizes
- Consistent color scheme and typography
- Loading states and visual feedback

## Testing

Run the test suite:

```bash
npm test
```

The project includes testing utilities:
- Jest for unit testing
- React Testing Library for component testing
- Testing utilities for DOM manipulation

## Dependencies

### Core Dependencies
- `react` & `react-dom`: React framework
- `react-router-dom`: Client-side routing
- `@react-oauth/google`: Google authentication
- `react-toastify`: Toast notifications
- `framer-motion`: Animations
- `lucide-react`: Icons

### Development Dependencies
- `tailwindcss`: CSS framework
- `autoprefixer` & `postcss`: CSS processing
- Testing libraries for React components

## Deployment

The application can be deployed to various platforms:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting platform of choice (Netlify, Vercel, AWS S3, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Author

**Prithivi raj Sah**

---

*Built with using React and modern web technologies*