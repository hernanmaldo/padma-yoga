'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "Estudiante de yoga",
      content: "XuanLan ha transformado completamente mi vida. Las clases son increíbles y la comunidad es muy acogedora. He encontrado no solo fuerza física, sino también paz mental.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Carlos Rodríguez",
      role: "Practicante desde 2022",
      content: "Como principiante, me sentía intimidado, pero los instructores me hicieron sentir bienvenido desde el primer día. Ahora el yoga es parte esencial de mi rutina diaria.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ana Martínez",
      role: "Instructora certificada",
      content: "La metodología de enseñanza aquí es excepcional. No solo me ayudó a profundizar mi práctica, sino que también me inspiró a convertirme en instructora.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "David López",
      role: "Empresario",
      content: "Después de años de estrés laboral, el yoga me ha dado las herramientas para manejar la presión y encontrar equilibrio entre trabajo y vida personal.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Laura Fernández",
      role: "Madre de familia",
      content: "Las clases online me han permitido practicar desde casa cuando mis hijos duermen. Es perfecto para madres ocupadas como yo. ¡Recomendado 100%!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-sage-50 to-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-sage-800 mb-6">
            Lo que dicen nuestros <span className="text-sage-600">estudiantes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Historias reales de transformación y crecimiento personal a través del yoga.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <Avatar className="w-16 h-16 mr-4">
                <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                <AvatarFallback>{testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="font-semibold text-sage-800">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border-sage-300 hover:bg-sage-50"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border-sage-300 hover:bg-sage-50"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-sage-600' : 'bg-sage-300 hover:bg-sage-400'
                }`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}