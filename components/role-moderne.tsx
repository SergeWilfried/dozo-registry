import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageWithFallback } from "./ImageWithFallback"

const roleModerne = [
  {
    title: "Gardiens de la Sécurité",
    description: "Face aux défis sécuritaires actuels, notamment au Burkina Faso, les Dozos jouent un rôle crucial. Nous collaborons avec les forces de défense et de sécurité pour protéger nos communautés, en nous appuyant sur notre connaissance du terrain et nos traditions.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Préservation des Traditions",
    description: "Tout en nous adaptant aux enjeux modernes, nous maintenons nos pratiques traditionnelles. Nos cérémonies et nos croyances restent au cœur de notre identité, nous donnant force et courage face aux défis contemporains.",
    image: "/placeholder.svg?height=200&width=300"
  }
]

export function RoleModerne() {
  return (
    <section id="role-moderne" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Notre Rôle Moderne</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
          {roleModerne.map((role, index) => (
            <Card key={index}>
              <CardHeader className="p-0">
                <ImageWithFallback
                  src={role.image}
                  alt={`Illustration de ${role.title}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-2">{role.title}</CardTitle>
                <p>{role.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}