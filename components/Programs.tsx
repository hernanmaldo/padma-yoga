import ProgramCard from './ProgramCard'

export default function Programs() {
  const programs = [
    {
      title: "Yoga para Principiantes",
      description: "Aprende los fundamentos del yoga con posturas básicas y técnicas de respiración. Perfecto para comenzar tu viaje hacia el bienestar.",
      image: "https://images.unsplash.com/photo-1506629905607-c319f54b1ab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "30 min",
      level: "Principiante"
    },
    {
      title: "Vinyasa Flow",
      description: "Secuencias dinámicas que conectan respiración y movimiento. Fortalece tu cuerpo mientras encuentras fluidez y gracia.",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "45 min",
      level: "Intermedio"
    },
    {
      title: "Meditación Mindfulness",
      description: "Practica la atención plena y reduce el estrés con técnicas de meditación guiada. Encuentra paz mental en tu día a día.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "20 min",
      level: "Todos los niveles"
    },
    {
      title: "Yoga Restaurativo",
      description: "Relájate profundamente con posturas suaves y sostenidas. Ideal para liberar tensiones y restaurar tu energía.",
      image: "https://images.unsplash.com/photo-1506629905607-c319f54b1ab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "60 min",
      level: "Todos los niveles"
    },
    {
      title: "Power Yoga",
      description: "Desafía tu fuerza y resistencia con secuencias intensas. Construye músculos mientras mejoras tu flexibilidad.",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "50 min",
      level: "Avanzado"
    },
    {
      title: "Yin Yoga",
      description: "Mantén posturas durante varios minutos para trabajar los tejidos conectivos. Perfecta para la flexibilidad y la introspección.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "75 min",
      level: "Todos los niveles"
    }
  ]

  return (
    <section id="programas" className="py-20 bg-gradient-to-b from-sage-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-sage-800 mb-6">
            Nuestros <span className="text-sage-600">Programas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra variedad de clases diseñadas para todos los niveles. 
            Desde principiantes hasta practicantes avanzados, tenemos el programa perfecto para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              image={program.image}
              duration={program.duration}
              level={program.level}
            />
          ))}
        </div>
      </div>
    </section>
  )
}