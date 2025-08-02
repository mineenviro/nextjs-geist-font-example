'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="https://placehold.co/80x60?text=Osiris+Logo+Environmental+Company+Modern+Clean+Design" 
                alt="Osiris environmental company logo displayed in a modern and clean style"
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-green-800">Osiris</h1>
                <p className="text-sm text-green-600">Consultoría Ambiental</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Servicios
            </Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Acerca de Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Contáctenos
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                Inicio
              </Link>
              <Link href="/servicios" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                Servicios
              </Link>
              <Link href="/nosotros" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                Acerca de Nosotros
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                Contáctenos
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
