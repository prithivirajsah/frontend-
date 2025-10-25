export default function Button({ 
  type = "button", 
  children, 
  loading = false, 
  disabled = false, 
  className = "",
  ...props 
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        w-full px-4 py-3 rounded-lg font-medium transition-colors
        ${disabled || loading 
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
          : 'bg-purple-600 text-white hover:bg-purple-700'
        }
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
}
