import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Acerca de Nosotros</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conoce nuestra trayectoria, valores y el equipo que hace posible nuestro compromiso con el medio ambiente
            </p>
          </div>
        </section>

        {/* Company Trajectory */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Trayectoria</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Osiris nació en Panamá con la visión de convertirse en la empresa líder en consultoría ambiental 
                  del país. Desde nuestros inicios, hemos trabajado incansablemente para ofrecer soluciones 
                  innovadoras y sostenibles que contribuyan al desarrollo responsable de nuestro país.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  A lo largo de los años, hemos participado en proyectos de gran envergadura, colaborando con 
                  empresas nacionales e internacionales, instituciones gubernamentales y organizaciones no 
                  gubernamentales para promover prácticas ambientales responsables.
                </p>
                <p className="text-lg text-gray-600">
                  Nuestro crecimiento constante y la confianza de nuestros clientes nos han posicionado como 
                  referentes en el sector ambiental panameño, manteniendo siempre nuestro compromiso con la 
                  excelencia y la sostenibilidad.
                </p>
              </div>
              
              <div>
                <img 
                  src="https://placehold.co/800x600?text=Company+trajectory+and+history+of+Osiris+environmental+consulting+Panama+office+building" 
                  alt="Company trajectory and history of Osiris environmental consulting showing Panama office building"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
                </div>
                <p className="text-gray-600 text-center">
                  Brindar servicios de consultoría ambiental de excelencia, promoviendo el desarrollo sostenible 
                  y la protección del medio ambiente en Panamá, mediante soluciones innovadoras y el compromiso 
                  con nuestros clientes y la sociedad.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
                </div>
                <p className="text-gray-600 text-center">
                  Ser la empresa de consultoría ambiental líder en Panamá y la región, reconocida por nuestra 
                  excelencia técnica, innovación y contribución al desarrollo sostenible del país.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Valores</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• <strong>Integridad:</strong> Actuamos con honestidad y transparencia</li>
                  <li>• <strong>Excelencia:</strong> Buscamos la calidad en todo lo que hacemos</li>
                  <li>• <strong>Sostenibilidad:</strong> Promovemos el equilibrio ambiental</li>
                  <li>• <strong>Innovación:</strong> Aplicamos soluciones creativas</li>
                  <li>• <strong>Compromiso:</strong> Dedicación total con nuestros clientes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Policy */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Política de Calidad</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://placehold.co/800x600?text=Quality+policy+and+standards+certification+environmental+consulting+Panama+ISO+standards" 
                  alt="Quality policy and standards certification for environmental consulting showing ISO standards"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  En Osiris, nos comprometemos a mantener los más altos estándares de calidad en todos nuestros 
                  servicios. Nuestra política de calidad se basa en:
                </p>
                
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span><strong>Mejora Continua:</strong> Evaluamos y mejoramos constantemente nuestros procesos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span><strong>Cumplimiento Normativo:</strong> Adherimos a todas las regulaciones nacionales e internacionales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span><strong>Capacitación Continua:</strong> Mantenemos a nuestro equipo actualizado con las últimas tendencias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span><strong>Satisfacción del Cliente:</strong> Priorizamos las necesidades y expectativas de nuestros clientes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span><strong>Responsabilidad Ambiental:</strong> Aplicamos prácticas sostenibles en nuestras operaciones</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Clients */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Clientes</h2>
              <p className="text-xl text-gray-600">
                Hemos tenido el privilegio de trabajar con organizaciones líderes en diversos sectores
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                <img 
                  src="https://placehold.co/200x100?text=Client+Logo+1+Government+Institution+Panama+Environmental+Ministry" 
                  alt="Client logo 1 - Government Institution Panama Environmental Ministry"
                  className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                <img 
                  src="https://placehold.co/200x100?text=Client+Logo+2+Mining+Company+Panama+Environmental+Services" 
                  alt="Client logo 2 - Mining Company Panama Environmental Services"
                  className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                <img 
                  src="https://placehold.co/200x100?text=Client+Logo+3+Construction+Company+Panama+Infrastructure+Projects" 
                  alt="Client logo 3 - Construction Company Panama Infrastructure Projects"
                  className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                <img 
                  src="https://placehold.co/200x100?text=Client+Logo+4+Energy+Company+Panama+Renewable+Energy+Projects" 
                  alt="Client logo 4 - Energy Company Panama Renewable Energy Projects"
                  className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                <img 
                  src="https://placehold.co/200x100?text=Client+Logo+5+NGO+Organization+Panama+Environmental+Conservation" 
                  alt="Client logo 5 - NGO Organization Panama Environmental Conservation"
                  className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                <img 
                  src="https://placehold.co/200x100?text=Client+Logo+6+International+Corporation+Panama+Sustainability+Projects" 
                  alt="Client logo 6 - International Corporation Panama Sustainability Projects"
                  className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Trabajamos con instituciones gubernamentales, empresas privadas, organizaciones no gubernamentales 
                y corporaciones internacionales, brindando soluciones ambientales adaptadas a sus necesidades específicas.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">¿Quieres Formar Parte de Nuestros Clientes?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Únete a las organizaciones que confían en Osiris para sus necesidades de consultoría ambiental.
            </p>
            <a 
              href="/contacto" 
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contáctanos
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
