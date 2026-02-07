export default function PageWrapper({ children, className = "" }) {
  return (
    <div className={`min-h-screen ${className}`}>
      {/* Add top spacing to account for sticky navbar */}
      <div className="pt-5">
        {children}
      </div>
    </div>
  );
}