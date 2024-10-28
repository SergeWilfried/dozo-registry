import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Award } from "lucide-react"
import { ImageWithFallback } from "./ImageWithFallback"

const members = [
  {
    name: "Amadou Diallo",
    image: "/placeholder.svg?height=400&width=300",
    grade: "Maître Chasseur",
    honors: ["Protecteur de la Communauté", "Expert en Herbes Médicinales"]
  },
  {
    name: "Fatoumata Koné",
    image: "/placeholder.svg?height=400&width=300",
    grade: "Chasseuse Émérite",
    honors: ["Gardien des Traditions", "Maître des Rituels"]
  },
  {
    name: "Ibrahim Touré",
    image: "/placeholder.svg?height=400&width=300",
    grade: "Apprenti Avancé",
    honors: ["Grand Maitre"]
  },
  {
    name: "Blaise Koné",
    image: "/placeholder.svg?height=400&width=300",
    grade: "Chasseuse Émérite",
    honors: ["Gardien des Traditions", "Maître des Rituels"]
  },
  {
    name: "Ibrahim Sanou",
    image: "/placeholder.svg?height=400&width=300",
    grade: "Apprenti Avancé",
    honors: ["Chef de la Confrérie"]
  },
  {
    name: "Brahima Sylla",
    image: "/placeholder.svg?height=400&width=300",
    grade: "Chasseuse Expérimentée",
    honors: ["Guérisseur"]
  }
]

export function Membres() {
  return (
    <section id="membres" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Nos Membres Distingués</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {members.map((member, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden w-[250px] h-[200px]">
                  <CardHeader className="p-0">
                    <ImageWithFallback
                      src={member.image}
                      alt={`Photo de ${member.name}`}
                      width={250}
                      height={250}
                      className="w-full h-[250px] object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{member.grade}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.honors.map((honor, honorIndex) => (
                        <Badge key={honorIndex} variant="secondary">
                          <Award className="w-3 h-3 mr-1" />
                          {honor}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}