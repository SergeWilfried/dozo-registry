import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crosshair, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const members = [
    {
      name: "Amadou Diallo",
      image: "/placeholder.svg?height=100&width=100",
      grade: "Maître Chasseur",
      honors: ["Protecteur de la Communauté", "Expert en Herbes Médicinales"]
    },
    {
      name: "Fatoumata Koné",
      image: "/placeholder.svg?height=100&width=100",
      grade: "Chasseuse Émérite",
      honors: ["Gardienne des Traditions", "Maîtresse des Rituels"]
    },
    {
      name: "Ibrahim Touré",
      image: "/placeholder.svg?height=100&width=100",
      grade: "Apprenti Avancé",
      honors: ["Promesse de la Confrérie"]
    },
    {
      name: "Mariam Sylla",
      image: "/placeholder.svg?height=100&width=100",
      grade: "Chasseuse Expérimentée",
      honors: ["Guérisseuse Talentueuse", "Conteuse des Légendes Dozo"]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Crosshair className="h-6 w-6 mr-2" />
          <span className="font-bold">Confrérie Dozo</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#histoire">
            Histoire
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#traditions">
            Traditions
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#role-moderne">
            Rôle Moderne
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#membres">
            Membres
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
          <Button variant="outline" size="sm">
            S'inscrire
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg?height=720&width=1280')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Bienvenue dans la Confrérie Dozo
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-gray-400">
                  Gardiens de la tradition, protecteurs de la communauté, et chasseurs légendaires d'Afrique de l'Ouest.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="outline" className="bg-white text-black hover:bg-gray-100">En savoir plus</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="histoire" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Notre Histoire</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Origines Anciennes</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Les Dozo sont des chasseurs traditionnels originaires du nord de la Côte d'Ivoire, du sud-est du Mali et du Burkina Faso. Notre confrérie, le Donzo Ton, rassemble des chasseurs initiés et leurs fils, perpétuant une tradition séculaire.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Héritage Mandé</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Bien que nous ne soyons pas un groupe ethnique distinct, les Dozo sont principalement issus des communautés parlant le Mandé, mais on nous trouve également parmi les Dyula, les Dogon et la plupart des autres groupes ethniques de Côte d'Ivoire.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="traditions" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Nos Traditions</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Vêtements et Amulettes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Nos vêtements de chasse bruns distinctifs et nos amulettes gris-gris sont réputés pour leurs propriétés magiques de protection.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Rituels d'Initiation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Les fils de Dozo et les nouveaux adhérents subissent une série de rituels secrets pour être initiés au Ton.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sagesse et Force</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Les Dozo sont reconnus pour leur sagesse, leur force et leurs capacités spéciales, respectés par les communautés agricoles et pastorales.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="role-moderne" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Notre Rôle Moderne</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Gardiens de la Sécurité</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Face aux défis sécuritaires actuels, notamment au Burkina Faso, les Dozos jouent un rôle crucial. Nous collaborons avec les forces de défense et de sécurité pour protéger nos communautés, en nous appuyant sur notre connaissance du terrain et nos traditions.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Préservation des Traditions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tout en nous adaptant aux enjeux modernes, nous maintenons nos pratiques traditionnelles. Nos cérémonies et nos croyances restent au cœur de notre identité, nous donnant force et courage face aux défis contemporains.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="membres" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Nos Membres Distingués</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {members.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src={member.image}
                      alt={`Photo de ${member.name}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
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
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Notre Engagement</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
                En tant que Dozos, nous nous engageons à œuvrer pour la paix et la sécurité de nos communautés. Notre force réside dans notre unité, notre connaissance du terrain, et notre respect des traditions. Nous collaborons étroitement avec les autorités tout en préservant nos valeurs et nos pratiques ancestrales.
              </p>
              <Button size="lg">En Savoir Plus sur Notre Engagement</Button>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contactez la Confrérie Dozo
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Pour en savoir plus sur notre histoire, nos traditions ou notre rôle dans la société moderne, n'hésitez pas à nous contacter.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full">Nous Contacter</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Confrérie Dozo. Tous droits réservés.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Politique de confidentialité
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Conditions d'utilisation
          </Link>
        </nav>
      </footer>
    </div>
  )
}