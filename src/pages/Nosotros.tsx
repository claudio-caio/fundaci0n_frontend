import logo from "../assets/logo_fundacion.jpg";


function Nosotros() {
  return (
    <div className="bg-white">
      {/* Hero interno - Página Nosotros */}
      <section className="relative bg-linear-to-br from-white to-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-opacity-10" 
                 style={{ backgroundColor: "#34A12C", color: "#34A12C" }}>
              Conócenos
            </div>
            
            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#012AAA" }}>
              Sobre <span style={{ color: "#34A12C" }}>Nosotros</span>
            </h1>
            
            {/* Descripción principal */}
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#3F3F3F" }}>
              En <span className="font-semibold" style={{ color: "#012AAA" }}>Fundación Incluir Valor</span>, 
              creemos que todas las personas merecen oportunidades para desarrollar su máximo potencial.
            </p>
          </div>
        </div>
      </section>

      {/* Fundador - Inicio */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Información del Fundador */}
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#012AAA" }}>
                Nuestro Fundador
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#3F3F3F" }}>
                El profesor Juan Pérez, experto en oratoria y liderazgo, ha dedicado su vida a transformar la comunicación y el desarrollo personal de miles de personas. Su visión y experiencia son el motor de nuestra fundación.
              </p>
              <a
                href="/media/cv_profesor.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#34A12C] text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-[#2a8f24] transition-colors"
              >
                Descargar CV
              </a>
            </div>

            {/* Video de YouTube */}
            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-md"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Conferencia del Profesor"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Misión */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-t-4"
                 style={{ borderTopColor: "#34A12C" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                   style={{ backgroundColor: "#34A12C", opacity: 0.1 }}>
                <svg className="w-8 h-8" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#012AAA" }}>Misión</h3>
              <p className="leading-relaxed" style={{ color: "#3F3F3F" }}>
                Empoderar a personas y comunidades a través de programas de capacitación, 
                inclusión laboral y desarrollo social, generando oportunidades reales de 
                transformación.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-t-4"
                 style={{ borderTopColor: "#012AAA" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                   style={{ backgroundColor: "#012AAA", opacity: 0.1 }}>
                <svg className="w-8 h-8" style={{ color: "#012AAA" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#012AAA" }}>Visión</h3>
              <p className="leading-relaxed" style={{ color: "#3F3F3F" }}>
                Ser la fundación líder en inclusión y desarrollo social de Latinoamérica, 
                reconocida por transformar vidas y construir una sociedad más justa e 
                igualitaria para todos.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-t-4"
                 style={{ borderTopColor: "#34A12C" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                   style={{ backgroundColor: "#34A12C", opacity: 0.1 }}>
                <svg className="w-8 h-8" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#012AAA" }}>Valores</h3>
              <ul className="space-y-2" style={{ color: "#3F3F3F" }}>
                <li>✨ Inclusión y diversidad</li>
                <li>🤝 Compromiso social</li>
                <li>🌟 Excelencia educativa</li>
                <li>💚 Transparencia</li>
                <li>🌱 Sostenibilidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra historia */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#012AAA" }}>
                Nuestra <span style={{ color: "#34A12C" }}>Historia</span>
              </h2>
              <div className="space-y-4" style={{ color: "#3F3F3F" }}>
                <p className="leading-relaxed">
                  Fundada en <span className="font-semibold" style={{ color: "#34A12C" }}>2010</span>, 
                  la Fundación Incluir Valor nació de un sueño compartido por un grupo de profesionales 
                  comprometidos con la inclusión social y el desarrollo de comunidades vulnerables.
                </p>
                <p className="leading-relaxed">
                  Lo que comenzó como pequeños talleres comunitarios en una sola ciudad, hoy se ha 
                  convertido en una organización con presencia en <span className="font-semibold" style={{ color: "#34A12C" }}>5 regiones del país</span>, 
                  impactando positivamente a más de <span className="font-semibold" style={{ color: "#34A12C" }}>5,000 personas</span> anualmente.
                </p>
                <p className="leading-relaxed">
                  Nuestro compromiso con la excelencia y la transparencia nos ha permitido establecer 
                  alianzas estratégicas con más de <span className="font-semibold" style={{ color: "#34A12C" }}>120 empresas</span> y organizaciones internacionales.
                </p>
              </div>

            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={logo} 
                  alt="Historia de la fundación"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Tarjeta flotante */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 hidden lg:block"
                   style={{ borderLeft: `4px solid #34A12C` }}>
                <p className="text-sm font-semibold" style={{ color: "#012AAA" }}>
                  🏆 +14 años de impacto
                </p>
                <p className="text-xs" style={{ color: "#3F3F3F" }}>Transformando vidas desde 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo / Estadísticas */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#012AAA" }}>
              Impacto en <span style={{ color: "#34A12C" }}>números</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#3F3F3F" }}>
              Resultados que hablan por sí mismos y reflejan nuestro compromiso con la sociedad
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#34A12C" }}>+5,000</div>
              <p className="text-sm font-semibold" style={{ color: "#012AAA" }}>Personas capacitadas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#34A12C" }}>+120</div>
              <p className="text-sm font-semibold" style={{ color: "#012AAA" }}>Empresas aliadas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#34A12C" }}>+15</div>
              <p className="text-sm font-semibold" style={{ color: "#012AAA" }}>Programas activos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#34A12C" }}>+8</div>
              <p className="text-sm font-semibold" style={{ color: "#012AAA" }}>Premios recibidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#012AAA" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Quieres ser parte del cambio?
          </h2>
          <p className="text-lg mb-8 text-white text-opacity-90">
            Si prefieres clases presenciales o quieres información directa, escribinos por correo y te contactamos.
          </p>
          <a
            href="mailto:info@fundacionincluirvalor.cl"
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 bg-white hover:shadow-lg hover:scale-105"
            style={{ color: "#012AAA" }}
          >
            Contactar por correo
          </a>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;
