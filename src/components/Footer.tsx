import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://placehold.co/60x45?text=Osiris+Logo+White+Version+Environmental+Company" 
                alt="Osiris environmental company logo in white version for footer"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-green-400">Osiris</h3>
                <p className="text-sm text-gray-300">Consultoría Ambiental</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Empresa líder en consultoría ambiental en Panamá, especializada en servicios sociales y ambientales, 
              gestión ambiental y gestión de proyectos sostenibles.
            </p>
            <div className="text-gray-300">
              <p className="mb-2">📍 Panamá, República de Panamá</p>
              <p className="mb-2">📧 info@osiris-panama.com</p>
              <p>📞 +507 XXX-XXXX</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-green-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-green-400 transition-colors">
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contáctenos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Consultoría Ambiental</li>
              <li>Servicios Sociales</li>
              <li>Gestión Ambiental</li>
              <li>Gestión de Proyectos</li>
              <li>Estudios de Impacto</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Osiris Consultoría Ambiental. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
