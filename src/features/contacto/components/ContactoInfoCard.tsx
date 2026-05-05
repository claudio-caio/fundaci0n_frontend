import ContactoInfoItem from "./ContactoInfoItem";
import ContactoRedesSociales from "./ContactoRedesSociales";

const ContactoInfoCard = () => {
  const infoItems = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "info@fundacionincluirvalor.cl",
      link: "mailto:info@fundacionincluirvalor.cl",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Teléfono",
      value: "+56 2 1234 5678",
      link: "tel:+56212345678",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Dirección",
      value: "Av. Principal 1234, Santiago, Chile",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Horario de atención",
      value: "Lunes a Viernes: 9:00 - 18:00 hrs",
    },
  ];

  return (
    <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
      <h2 className="text-2xl font-bold mb-6" style={{ color: "#012AAA" }}>
        Información de contacto
      </h2>
      <p className="text-gray-600 mb-8">
        ¿Prefieres contactarnos directamente? Aquí tienes nuestros datos.
      </p>

      <div className="space-y-6">
        {infoItems.map((item, index) => (
          <ContactoInfoItem key={index} {...item} />
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Síguenos en redes</h3>
        <ContactoRedesSociales />
      </div>
    </div>
  );
};

export default ContactoInfoCard;
