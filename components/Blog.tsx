import { Calendar, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'

export default function Blog() {
  const blogPosts = [
    {
      title: "5 Posturas de Yoga para Comenzar tu Día con Energía",
      excerpt: "Descubre las mejores asanas matutinas que te ayudarán a activar tu cuerpo y mente para afrontar el día con vitalidad.",
      date: "15 Dic 2024",
      image: "https://images.unsplash.com/photo-1506629905607-c319f54b1ab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Práctica"
    },
    {
      title: "Meditación: Tu Refugio en Momentos de Estrés",
      excerpt: "Aprende técnicas simples de meditación que puedes aplicar en cualquier momento para encontrar calma y claridad mental.",
      date: "12 Dic 2024",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Meditación"
    },
    {
      title: "La Respiración Consciente: Fundamento del Bienestar",
      excerpt: "Explora cómo una respiración adecuada puede transformar tu estado físico y emocional en cuestión de minutos.",
      date: "10 Dic 2024",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Técnicas"
    }
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-sage-800 mb-6">
            Últimas <span className="text-sage-600">novedades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mantente al día con consejos, técnicas y reflexiones sobre yoga, 
            meditación y bienestar integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-sage-600 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-semibold text-sage-800 mb-3 group-hover:text-sage-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="text-sage-600 hover:text-sage-800 p-0 h-auto group-hover:translate-x-1 transition-transform duration-200"
                  onClick={() => console.log(`Leer artículo: ${post.title}`)}
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            className="border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-8 py-3 rounded-full"
            onClick={() => console.log('Ver todos los artículos')}
          >
            Ver todos los artículos
          </Button>
        </div>
      </div>
    </section>
  )
}