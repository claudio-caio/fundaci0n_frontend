interface StatItem {
  value: string;
  label: string;
}

const StatsSection = () => {
  const stats: StatItem[] = [
    { value: "500+", label: "Personas capacitadas" },
    { value: "50+", label: "Empresas" },
    { value: "30+", label: "Instituciones" },
    { value: "98%", label: "Satisfacción" },
  ];

  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
      {stats.map((item, i) => (
        <div key={i} className="text-center p-4 sm:p-6 bg-linear-to-br from-[#34A12C] to-[#2a8a23] text-white rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{item.value}</div>
          <div className="text-xs sm:text-sm uppercase tracking-wider">{item.label}</div>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
