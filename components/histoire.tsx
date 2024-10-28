export function Histoire() {
    return (
      <section id="histoire" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Notre Histoire</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Origines Anciennes</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Les Dozo sont des chasseurs traditionnels originaires du nord de la Côte d&apos;Ivoire, du sud-est du Mali et du Burkina Faso. Notre confrérie, le Donzo Ton, rassemble des chasseurs initiés et leurs fils, perpétuant une tradition séculaire.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Héritage Mandé</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Bien que nous ne soyons pas un groupe ethnique distinct, les Dozo sont principalement issus des communautés parlant le Mandé, mais on nous trouve également parmi les Dyula, les Dogon et la plupart des autres groupes ethniques de Côte d&apos;Ivoire.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }