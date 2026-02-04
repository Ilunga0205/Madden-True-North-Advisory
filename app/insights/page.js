export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg p-8">
        
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-3xl">
            🚧
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          Page Under Construction
        </h1>

        <p className="text-gray-600 mb-6">
          We’re working on this page and will be live soon.
          <br />
          Thanks for your patience.
        </p>

        <span className="text-sm text-gray-400">
          © 2026 Abelilunga.com
        </span>

      </div>
    </div>
  );
}
