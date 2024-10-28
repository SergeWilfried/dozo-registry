import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageWithFallback } from "./ImageWithFallback"

const traditions = [
  {
    title: "Vêtements et Amulettes",
    description: "Nos vêtements de chasse bruns distinctifs et nos amulettes gris-gris sont réputés pour leurs propriétés magiques de protection.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Rituels d'Initiation",
    description: "Les fils de Dozo et les nouveaux adhérents subissent une série de rituels secrets pour être initiés au Ton.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Sagesse et Force",
    description: "Les Dozo sont reconnus pour leur sagesse, leur force et leurs capacités spéciales, respectés par les communautés agricoles et pastorales.",
    image: "/placeholder.svg?height=200&width=300"
  }
]

export function Traditions() {
  return (
    <section id="traditions" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Nos Traditions</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {traditions.map((tradition, index) => (
            <Card key={index}>
              <CardHeader className="p-0">
                <ImageWithFallback
                  src={tradition.image}
                  alt={`Illustration de ${tradition.title}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-2">{tradition.title}</CardTitle>
                <p>{tradition.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}