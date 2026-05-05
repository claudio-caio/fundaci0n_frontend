const TestimoniosLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" style={{ color: "#34A12C" }}></div>
      <p className="mt-4 text-gray-500">Cargando testimonios...</p>
    </div>
  );
};

export default TestimoniosLoading;
