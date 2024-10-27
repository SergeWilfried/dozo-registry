'use client';
import {
  ChevronLeft,
  Upload,
  Download,
  CalendarIcon
} from "lucide-react"
import { useRouter } from 'next/navigation';

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { useState } from "react"

import { Cattle, medicalRecords } from "@/lib/db";

/// Should be flexible to accept User | teacher | staff and Parent type
export default function EditCattle({ cattle, type }: { cattle: Cattle, type: string }) {
    const router = useRouter();

    const [birthDate, setBirthDate] = useState<Date>(
        typeof cattle.lastCheckup === 'string' ? new Date(cattle.lastCheckup) : cattle.lastCheckup
    );

  return (
    <div className="flex min-h-screen w-full flex-col mt-6">
      <div className="flex flex-col">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid w-full flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button onClick={() => router.back()} variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Retour</span>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Modifier  {cattle.id}
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                {cattle.status}
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Annuler
                </Button>
                <Button size="sm">Sauvegarder</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card className="rounded-md border-none">
                  <CardHeader>
                    <CardTitle>Informations Personnelles</CardTitle>
                    <CardDescription>
                      Modifier les informations personnelles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="firstName">Nom</Label>
                          <Input
                            id="firstName"
                            type="text"
                            className="w-full"
                            defaultValue={cattle.breed}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="lastName">Prenom</Label>
                          <Input
                            id="lastName"
                            type="text"
                            className="w-full"
                            defaultValue={cattle.health}
                          />
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="middleName">Surnom (Optionnel)</Label>
                        <Input
                          id="middleName"
                          type="text"
                          className="w-full"
                          defaultValue={cattle.age.toString()}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="birthDate">Date de Naissance</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                id="birthDate"
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !cattle.lastCheckup && "text-muted-foreground"
                                )}
                              >
                                {cattle.lastCheckup ? (
                                  format(new Date(cattle.lastCheckup), "PPP")
                                ) : (
                                  <span>Choisissez une date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={birthDate}
                                onSelect={(f) => {}}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1900-01-01")
                                }
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="status">Status</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue defaultValue={cattle.status} placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="breeding">Breeding</SelectItem>
                              <SelectItem value="pregnant">Pregnant</SelectItem>
                              <SelectItem value="calving">Calving</SelectItem>
                              <SelectItem value="weaning">Weaning</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <Select defaultValue={cattle.status}>
                          <SelectTrigger id="status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Actif</SelectItem>
                            <SelectItem value="inactive">Inactif</SelectItem>
                            <SelectItem value="suspended">Suspendu</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-md border-none">
                  <CardHeader>
                    <CardTitle>Documents</CardTitle>
                    <CardDescription>
                      Importer et gerer des documents
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {medicalRecords && medicalRecords.find(d => d.cattle_id === cattle.id) ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Nom</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {medicalRecords.map((document, index) => (
                            <TableRow key={index}>
                              <TableCell>{document.cattle_id}</TableCell>
                              <TableCell>{new Date(document.last_vaccination_date).toLocaleDateString()}</TableCell>
                              <TableCell>
                                <Button variant="outline" size="sm">
                                  <Download className="mr-2 h-4 w-4" />
                                  Telecharger
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="flex justify-center">
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Importer des documents
                        </Button>
                      </div>
                    )}
                    
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card></Card>
                <Card></Card>
                <Card className="rounded-md border-none">
                  <CardHeader>
                    <CardTitle>Commentaires</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Label htmlFor="notes">Notes</Label>
                      <Textarea
                        id="notes"
                        placeholder="Ajouter des notes supplementaire au dossier"
                      />
                    </div>
                  </CardContent>
                </Card>

            
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Annuler
              </Button>
              <Button size="sm">Sauvegarder</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
