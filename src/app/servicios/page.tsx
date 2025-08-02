import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ServiciosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ofrecemos soluciones integrales en tres áreas principales de especialización ambiental
            </p>
          </div>
        </section>

        {/* Service 1: Consultoría y Servicios Sociales y Ambientales */}
        <section id="consultoria" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Consultoría y Servicios Sociales y Ambientales
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Brindamos asesoramiento especializado en evaluaciones ambientales y sociales, 
                  garantizando el cumplimiento de normativas nacionales e internacionales.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Servicios que ofrecemos:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Estudios de Impacto Ambiental (EIA)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Evaluaciones de Impacto Social (EIS)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Planes de Manejo Ambiental
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Consultoría en Normativas Ambientales
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Participación Ciudadana y Consultas Públicas
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Evaluaciones de Riesgo Ambiental
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Auditorías Ambientales
                  </li>
                </ul>
              </div>
              
              <div>
                <img 
                  src="https://placehold.co/800x600?text=Detailed+overview+of+Consultoría+y+Servicios+sociales+y+Ambientales+with+modern+layout+Panama" 
                  alt="Detailed overview image displaying modern layout for Consultoría y Servicios sociales y Ambientales"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Gestión Ambiental */}
        <section id="gestion-ambiental" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://placehold.co/800x600?text=Detailed+overview+of+Gestión+Ambiental+with+modern+environmental+management+layout+Panama" 
                  alt="Detailed overview image displaying modern layout for Gestión Ambiental"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Gestión Ambiental
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Implementamos sistemas de gestión ambiental efectivos que permiten a las organizaciones 
                  optimizar su desempeño ambiental y cumplir con las regulaciones vigentes.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Servicios que ofrecemos:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Implementación de Sistemas de Gestión Ambiental ISO 14001
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Monitoreo y Control de Emisiones
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Gestión de Residuos Sólidos y Peligrosos
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Tratamiento de Aguas Residuales
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Programas de Eficiencia Energética
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Certificaciones Ambientales
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Capacitación en Gestión Ambiental
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Gestión de Proyectos */}
        <section id="gestion-proyectos" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Gestión de Proyectos
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Dirigimos proyectos ambientales desde su concepción hasta su implementación exitosa, 
                  utilizando metodologías probadas y mejores prácticas internacionales.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Servicios que ofrecemos:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Planificación y Diseño de Proyectos Ambientales
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Gestión de Permisos y Licencias Ambientales
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Supervisión y Control de Proyectos
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Evaluación y Seguimiento de Resultados
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Proyectos de Restauración Ecológica
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Desarrollo de Proyectos Sostenibles
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Gestión de Stakeholders y Comunicación
                  </li>
                </ul>
              </div>
              
              <div>
                <img 
                  src="https://placehold.co/800x600?text=Detailed+overview+of+Gestión+de+Proyectos+with+modern+project+management+layout+Panama" 
                  alt="Detailed overview image displaying modern layout for Gestión de Proyectos"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">¿Necesitas Nuestros Servicios?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contáctanos para una consulta personalizada y descubre cómo podemos ayudarte 
              a alcanzar tus objetivos ambientales.
            </p>
            <a 
              href="/contacto" 
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contáctanos Ahora
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
