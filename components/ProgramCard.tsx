import { Button } from './ui/button'
import { Card, CardContent, CardFooter } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface ProgramCardProps {
  title: string
  description: string
  image: string
  duration?: string
  level?: string
}

export default function ProgramCard({ title, description, image, duration, level }: ProgramCardProps) {
  return (
    <Card className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {level && (
          <div className="absolute top-4 right-4 bg-sage-600 text-white px-3 py-1 rounded-full text-sm">
            {level}
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-sage-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        {duration && (
          <p className="text-sm text-sage-600 mb-4">
            <span className="inline-block w-2 h-2 bg-sage-400 rounded-full mr-2"></span>
            Duración: {duration}
          </p>
        )}
      </CardContent>
      
      <CardFooter className="px-6 pb-6">
        <Button 
          className="w-full bg-sage-100 hover:bg-sage-600 text-sage-800 hover:text-white border border-sage-300 hover:border-sage-600 transition-all duration-300"
          onClick={() => console.log(`Ver más detalles de ${title}`)}
        >
          Ver más detalles
        </Button>
      </CardFooter>
    </Card>
  )
}