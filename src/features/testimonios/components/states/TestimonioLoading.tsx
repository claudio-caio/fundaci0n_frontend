const TestimonioLoading = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" style={{ color: "#34A12C" }}></div>
        <p className="mt-4 text-gray-500">Cargando testimonio...</p>
      </div>
    </div>
  );
};

export default TestimonioLoading;
