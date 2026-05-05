const ContactoMapa = () => {
  return (
    <div className="border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold" style={{ color: "#012AAA" }}>
            Encuéntranos
          </h2>
          <p className="text-gray-600 mt-2">
            Visítanos en nuestras oficinas
          </p>
        </div>
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-64 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.543634685044!2d-70.64837068480037!3d-33.43739148077701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c59a6e6c6f6d%3A0x8e5c8c5c5c5c5c5c!2sPlaza%20de%20Armas%2C%20Santiago%2C%20Chile!5e0!3m2!1ses!2scl!4v1699999999999!5m2!1ses!2scl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Ubicación de la fundación"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactoMapa;
