export default function PageWrapper({ children, className = "", removePadding = false }) {
  return (
    <div className={`min-h-screen ${className}`}>
      {/* Add top spacing to account for sticky navbar - can be disabled */}
      <div className={removePadding ? "" : "pt10"}>
        {children}
      </div>
    </div>
  );
}