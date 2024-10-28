import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg?height=720&width=1280')] bg-cover bg-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Bienvenue dans la Confrérie Dozo
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-gray-400">
              Gardiens de la tradition, protecteurs de la communauté, et chasseurs légendaires d&apos;Afrique de l&apos;Ouest.
            </p>
          </div>
          <div className="space-x-4">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100">En savoir plus</Button>
          </div>
        </div>
      </div>
    </section>
  )
}