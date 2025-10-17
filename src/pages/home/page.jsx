import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white shadow rounded-2xl p-8 text-center space-y-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <p className="text-gray-600">Home page content placeholder.</p>
        <div className="flex gap-3 justify-center">
          <Link to="/auth" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Go to Auth
          </Link>
          <Link to="/forgot-password" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
}


