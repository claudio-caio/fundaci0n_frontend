const ContactoHero = () => {
  return (
    <section className="relative bg-linear-to-r from-[#012AAA] to-[#34A12C] py-16 md:py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Contáctanos
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Estamos aquí para ayudarte. Completa el formulario y te responderemos a la brevedad.
        </p>
      </div>
    </section>
  );
};

export default ContactoHero;
