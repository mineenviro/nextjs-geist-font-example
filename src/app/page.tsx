import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-800 to-green-600">
          <div className="absolute inset-0">
            <img 
              src="https://placehold.co/1920x1080?text=Large+hero+image+with+company+logo+and+name+centered+for+Osiris+environmental+landscape+Panama" 
              alt="Large hero image showing a modern environmental landscape with Osiris logo and company name centered"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <img 
              src="https://placehold.co/300x200?text=Osiris+Environmental+Company+Logo+Modern+Clean+design+white+version" 
              alt="Osiris environmental company logo displayed in a modern and clean style"
              className="mx-auto mb-6 h-32 w-auto"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Osiris</h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6">Consultoría Ambiental</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Especialistas en Consultoría y Servicios Sociales y Ambientales, Gestión Ambiental y Gestión de Proyectos
            </p>
          </div>
        </section>

        {/* Company Description */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Acerca de Osiris</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Somos una empresa líder en consultoría ambiental en Panamá, comprometida con el desarrollo sostenible 
                y la protección del medio ambiente. Nuestro equipo de expertos ofrece soluciones integrales para 
                empresas y organizaciones que buscan cumplir con las normativas ambientales y contribuir a un futuro más verde.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Servicios</h2>
              <p className="text-xl text-gray-600">Ofrecemos tres áreas principales de especialización</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Link href="/servicios#consultoria" className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://placehold.co/400x300?text=Consultoría+y+Servicios+sociales+y+Ambientales+modern+professional+presentation+Panama" 
                      alt="Button image for Consultoría y Servicios sociales y Ambientales"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Consultoría y Servicios Sociales y Ambientales
                    </h3>
                    <p className="text-gray-600">
                      Asesoramiento integral en servicios ambientales, estudios de impacto y evaluaciones sociales 
                      para proyectos sostenibles.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Service 2 */}
              <Link href="/servicios#gestion-ambiental" className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://placehold.co/400x300?text=Gestión+Ambiental+modern+professional+environmental+management+Panama" 
                      alt="Button image for Gestión Ambiental"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Gestión Ambiental
                    </h3>
                    <p className="text-gray-600">
                      Implementación de sistemas de gestión ambiental, monitoreo y control de procesos 
                      para el cumplimiento normativo.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Service 3 */}
              <Link href="/servicios#gestion-proyectos" className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://placehold.co/400x300?text=Gestión+de+Proyectos+modern+professional+project+management+Panama" 
                      alt="Button image for Gestión de Proyectos"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Gestión de Proyectos
                    </h3>
                    <p className="text-gray-600">
                      Planificación, ejecución y seguimiento de proyectos ambientales con metodologías 
                      probadas y resultados exitosos.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Consultants Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Equipo</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Contamos con un equipo de consultores y asesores altamente calificados con amplia experiencia 
                en el sector ambiental panameño e internacional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <img 
                  src="https://placehold.co/300x300?text=Professional+consultant+portrait+environmental+expert+Panama" 
                  alt="Professional consultant portrait of environmental expert"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">Consultores Especializados</h3>
                <p className="text-gray-600">Expertos en normativas ambientales</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://placehold.co/300x300?text=Professional+advisor+portrait+project+management+expert+Panama" 
                  alt="Professional advisor portrait of project management expert"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">Asesores de Proyectos</h3>
                <p className="text-gray-600">Gestión integral de proyectos</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://placehold.co/300x300?text=Professional+specialist+portrait+social+environmental+expert+Panama" 
                  alt="Professional specialist portrait of social environmental expert"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">Especialistas Sociales</h3>
                <p className="text-gray-600">Impacto social y comunitario</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/nosotros" 
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Conoce Más Sobre Nosotros
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
