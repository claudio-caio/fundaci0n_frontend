function SomosIguales() {
  return (
    <div className="bg-white">
      <section className="relative bg-linear-to-br from-white to-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-opacity-10" 
                 style={{ backgroundColor: "#34A12C", color: "#34A12C" }}>
              Somos Iguales
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#012AAA" }}>
              Juntos por una sociedad <span style={{ color: "#34A12C" }}>igualitaria</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#3F3F3F" }}>
              En Fundación Incluir Valor creemos que la igualdad es el pilar para el desarrollo.
              Trabajamos para que todas las personas tengan acceso a aprendizaje, empleo y participación.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#012AAA" }}>
                Nuestra forma de <span style={{ color: "#34A12C" }}>trabajar</span>
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#3F3F3F" }}>
                Creamos espacios de capacitación inclusiva, alianzas con empresas y acompañamiento
                social para que cada persona encuentre su propia oportunidad.
              </p>
              <div className="space-y-4">
                <div className="rounded-2xl p-6 border border-gray-200 shadow-sm" style={{ backgroundColor: "#F8FAFC" }}>
                  <h3 className="font-semibold text-xl mb-2" style={{ color: "#012AAA" }}>Igualdad de oportunidades</h3>
                  <p style={{ color: "#3F3F3F" }}>
                    Nos enfocamos en eliminar barreras y abrir puertas a la formación y al empleo.
                  </p>
                </div>
                <div className="rounded-2xl p-6 border border-gray-200 shadow-sm" style={{ backgroundColor: "#F8FAFC" }}>
                  <h3 className="font-semibold text-xl mb-2" style={{ color: "#012AAA" }}>Respeto y diversidad</h3>
                  <p style={{ color: "#3F3F3F" }}>
                    Promovemos el valor de cada persona y celebramos la diversidad como fuerza social.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-[#012AAA] p-10 text-white">
                <p className="text-sm uppercase tracking-[0.25em] mb-4">Bajo el lema</p>
                <h3 className="text-3xl font-bold mb-4">"Somos Iguales"</h3>
                <p className="text-base leading-relaxed">
                  Una campaña que visibiliza el valor de la inclusión, la empatía y la justicia social.
                </p>
              </div>
              <div className="p-10 bg-white">
                <ul className="space-y-4" style={{ color: "#3F3F3F" }}>
                  <li>✅ Programas educativos accesibles</li>
                  <li>✅ Talleres de sensibilización comunitaria</li>
                  <li>✅ Redes de apoyo para empleo inclusivo</li>
                  <li>✅ Acompañamiento personalizado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#012AAA" }}>
            Únete a la campaña
          </h2>
          <p className="text-lg mb-8" style={{ color: "#3F3F3F" }}>
            Si quieres apoyar la igualdad y ser parte del cambio, participa en nuestras iniciativas
            o contacta a nuestro equipo para saber cómo colaborar.
          </p>
          <a
            href="mailto:info@fundacionincluirvalor.cl"
            className="inline-flex px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 bg-[#34A12C] text-white hover:shadow-lg"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  );
}

export default SomosIguales;
