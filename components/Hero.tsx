import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Mujer practicando yoga en un ambiente sereno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
          Encuentra tu <span className="text-sage-300">equilibrio</span> interior
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Descubre el poder transformador del yoga y la meditación. 
          Un viaje hacia el bienestar físico y mental que cambiará tu vida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => console.log('Unirse ahora clicked')}
          >
            Unirse ahora
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-sage-800 hover:bg-white hover:text-sage-800 px-8 py-4 rounded-full text-lg transition-all duration-300"
            onClick={() => console.log('Ver programas clicked')}
          >
            Ver programas
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}