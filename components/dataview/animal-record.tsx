'use client'

import { useState } from 'react'
import { ArrowLeft, Calendar, Syringe, Stethoscope, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'

export default function AnimalHealthRecord() {
  const [newTreatment, setNewTreatment] = useState({ date: '', type: '', notes: '' })

  const animalData = {
    id: "CT001",
    name: "Bessie",
    breed: "Angus",
    dateOfBirth: "2020-05-15",
    weight: "550 kg",
    lastCheckup: "2023-10-20"
  }

  const vaccinationHistory = [
    { date: "2020-06-15", vaccine: "BVD", nextDue: "2021-06-15" },
    { date: "2020-06-15", vaccine: "IBR", nextDue: "2021-06-15" },
    { date: "2021-06-20", vaccine: "BVD", nextDue: "2022-06-20" },
    { date: "2021-06-20", vaccine: "IBR", nextDue: "2022-06-20" },
    { date: "2022-07-01", vaccine: "BVD", nextDue: "2023-07-01" },
    { date: "2022-07-01", vaccine: "IBR", nextDue: "2023-07-01" },
  ]

  const treatmentHistory = [
    { date: "2021-03-10", type: "Vermifuge", notes: "Traitement vermifuge de routine" },
    { date: "2022-01-15", type: "Parage des sabots", notes: "Entretien régulier" },
    { date: "2022-09-05", type: "Traitement antibiotique", notes: "Traitement pour une infection respiratoire" },
  ]

  const handleNewTreatment = () => {
    console.log("Nouveau traitement:", newTreatment)
    setNewTreatment({ date: '', type: '', notes: '' })
  }

  return (
    <div className="container mx-auto p-4">
      <Link href={'/cattle'}>
        <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour à tous les animaux
        </Button>
      </Link>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Informations sur l'animal</CardTitle>
            <CardDescription>Détails de base sur {animalData.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-2">
              <dt className="font-semibold">ID :</dt>
              <dd>{animalData.id}</dd>
              <dt className="font-semibold">Nom :</dt>
              <dd>{animalData.name}</dd>
              <dt className="font-semibold">Race :</dt>
              <dd>{animalData.breed}</dd>
              <dt className="font-semibold">Date de naissance :</dt>
              <dd>{animalData.dateOfBirth}</dd>
              <dt className="font-semibold">Poids :</dt>
              <dd>{animalData.weight}</dd>
              <dt className="font-semibold">Dernier contrôle :</dt>
              <dd>{animalData.lastCheckup}</dd>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Résumé de santé</CardTitle>
            <CardDescription>État de santé actuel et soins à venir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Prochain contrôle prévu : 20/01/2024</span>
              </div>
              <div className="flex items-center">
                <Syringe className="mr-2 h-4 w-4" />
                <span>Prochain vaccin prévu : 01/07/2023 (BVD, IBR)</span>
              </div>
              <div className="flex items-center">
                <Stethoscope className="mr-2 h-4 w-4" />
                <span>État de santé général : Bon</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="vaccinations" className="mt-4">
        <TabsList>
          <TabsTrigger value="vaccinations">Historique des vaccinations</TabsTrigger>
          <TabsTrigger value="treatments">Historique des traitements</TabsTrigger>
        </TabsList>
        <TabsContent value="vaccinations">
          <Card>
            <CardHeader>
              <CardTitle>Historique des vaccinations</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Vaccin</TableHead>
                    <TableHead>Prochain</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vaccinationHistory.map((vac, index) => (
                    <TableRow key={index}>
                      <TableCell>{vac.date}</TableCell>
                      <TableCell>{vac.vaccine}</TableCell>
                      <TableCell>{vac.nextDue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="treatments">
          <Card>
            <CardHeader>
              <CardTitle>Historique des traitements</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Remarques</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {treatmentHistory.map((treatment, index) => (
                    <TableRow key={index}>
                      <TableCell>{treatment.date}</TableCell>
                      <TableCell>{treatment.type}</TableCell>
                      <TableCell>{treatment.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Ajouter un nouveau traitement
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Ajouter un nouveau traitement</DialogTitle>
                    <DialogDescription>
                      Saisissez les détails du nouveau traitement. Cliquez sur sauvegarder lorsque vous avez terminé.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="treatment-date" className="text-right">
                        Date
                      </Label>
                      <Input
                        id="treatment-date"
                        type="date"
                        className="col-span-3"
                        value={newTreatment.date}
                        onChange={(e) => setNewTreatment({...newTreatment, date: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="treatment-type" className="text-right">
                        Type
                      </Label>
                      <Input
                        id="treatment-type"
                        className="col-span-3"
                        value={newTreatment.type}
                        onChange={(e) => setNewTreatment({...newTreatment, type: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="treatment-notes" className="text-right">
                        Remarques
                      </Label>
                      <Textarea
                        id="treatment-notes"
                        className="col-span-3"
                        value={newTreatment.notes}
                        onChange={(e) => setNewTreatment({...newTreatment, notes: e.target.value})}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleNewTreatment}>Sauvegarder</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
