'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Programas', href: '#programas' },
    { name: 'Blog', href: '#blog' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-sage-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/padma-yoga/logo-padma-yoga.png" className='h-12 w-auto object-contain'/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sage-700 hover:text-sage-900 transition-colors duration-200 py-2"
                onClick={() => console.log(`Navegando a ${item.name}`)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Button 
              className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 rounded-full transition-all duration-200"
              onClick={() => console.log('Probar gratis clicked')}
            >
              Probar gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-sage-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-sage-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sage-700 hover:text-sage-900 hover:bg-sage-50 rounded-md transition-colors duration-200"
                  onClick={() => {
                    console.log(`Navegando a ${item.name}`)
                    setIsMenuOpen(false)
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white py-2 rounded-full"
                  onClick={() => {
                    console.log('Probar gratis clicked')
                    setIsMenuOpen(false)
                  }}
                >
                  Probar gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}