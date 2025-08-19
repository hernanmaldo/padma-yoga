import { Heart, Brain, Zap, Leaf } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-sage-600" />,
      title: "Bienestar Físico",
      description: "Mejora tu fuerza, flexibilidad y postura mientras cuidas tu cuerpo de manera integral."
    },
    {
      icon: <Brain className="w-12 h-12 text-sage-600" />,
      title: "Claridad Mental",
      description: "Desarrolla concentración y reduce el estrés a través de la práctica mindful del yoga."
    },
    {
      icon: <Zap className="w-12 h-12 text-sage-600" />,
      title: "Energía Vital",
      description: "Activa tu energía interna y siente cómo tu vitalidad se renueva día tras día."
    },
    {
      icon: <Leaf className="w-12 h-12 text-sage-600" />,
      title: "Conexión Natural",
      description: "Reconecta contigo mismo y encuentra armonía con la naturaleza que te rodea."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-sage-800 mb-6">
            ¿Por qué elegir <span className="text-sage-600">nuestro yoga</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            El yoga es mucho más que ejercicio físico. Es un camino hacia la transformación 
            integral que toca todos los aspectos de tu vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-sage-100 rounded-full group-hover:bg-sage-200 transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 bg-sage-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-light text-sage-800 mb-6">
              Nuestra Filosofía
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              "El yoga no es sobre tocar los dedos de los pies. Es sobre lo que aprendes 
              en el camino hacia abajo."
            </p>
            <p className="text-gray-600 leading-relaxed">
              Creemos que cada persona tiene el potencial de encontrar equilibrio y paz interior. 
              Nuestro enfoque combina la sabiduría ancestral del yoga con técnicas modernas 
              de bienestar, creando un espacio seguro donde puedes explorar, crecer y transformarte 
              a tu propio ritmo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}