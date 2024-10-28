import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Contactez la Confrérie Dozo
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Pour en savoir plus sur notre histoire, nos traditions ou notre rôle dans la société moderne, n&apos;hésitez pas à nous contacter.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button className="w-full">Nous Contacter</Button>
          </div>
        </div>
      </div>
    </section>
  )
}