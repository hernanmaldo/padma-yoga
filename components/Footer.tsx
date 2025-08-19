import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Twitter } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", href: "#" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", href: "#" },
    { icon: <Youtube className="w-5 h-5" />, name: "YouTube", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "#" }
  ]

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Programas", href: "#programas" },
    { name: "Blog", href: "#blog" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" }
  ]

  const programs = [
    { name: "Yoga para Principiantes", href: "#" },
    { name: "Vinyasa Flow", href: "#" },
    { name: "Meditación Mindfulness", href: "#" },
    { name: "Yoga Restaurativo", href: "#" }
  ]

  return (
    <footer id="contacto" className="bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-4">Padma Yoga</h3>
            <p className="text-sage-200 mb-6 leading-relaxed">
              Tu espacio de transformación y bienestar. Encuentra equilibrio, 
              fuerza y paz interior a través de la práctica del yoga y la meditación.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-sage-700 hover:bg-sage-600 p-2 rounded-full transition-colors duration-200"
                  onClick={() => console.log(`Navegando a ${social.name}`)}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sage-200 hover:text-white transition-colors duration-200"
                    onClick={() => console.log(`Navegando a ${link.name}`)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programas</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-sage-200 hover:text-white transition-colors duration-200"
                    onClick={() => console.log(`Ver programa: ${program.name}`)}
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-sage-400" />
                <a 
                  href="mailto:info@padmayoga.com" 
                  className="text-sage-200 hover:text-white transition-colors duration-200"
                >
                  info@padmayoga.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-sage-400" />
                <a 
                  href="tel:+34123456789" 
                  className="text-sage-200 hover:text-white transition-colors duration-200"
                >
                  +34 123 456 789
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-sage-400 mt-0.5" />
                <address className="text-sage-200 not-italic">
                  Calle de la Paz, 123<br />
                  28001 Madrid, España
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sage-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sage-300 text-sm">
            © 2024 Padma Yoga. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-sage-300 hover:text-white text-sm transition-colors duration-200"
              onClick={() => console.log('Ver política de privacidad')}
            >
              Política de Privacidad
            </a>
            <a 
              href="#" 
              className="text-sage-300 hover:text-white text-sm transition-colors duration-200"
              onClick={() => console.log('Ver términos de servicio')}
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}