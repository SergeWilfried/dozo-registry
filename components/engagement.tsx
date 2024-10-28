import { Button } from "@/components/ui/button"

export function Engagement() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Notre Engagement</h2>
        <div  className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
            En tant que Dozos, nous nous engageons à œuvrer pour la paix et la sécurité de nos communautés. Notre force réside dans notre unité, notre connaissance du terrain, et notre respect des traditions. Nous collaborons étroitement avec les autorités tout en préservant nos valeurs et nos pratiques ancestrales.
          </p>
          <Button size="lg">En Savoir Plus sur Notre Engagement</Button>
        </div>
      </div>
    </section>
  )
}