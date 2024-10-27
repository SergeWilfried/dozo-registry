'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, Plus, PhoneCall, ShoppingCart, Check, Minus, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from '@/components/mode-toggle'

type CattleListing = {
  id: string
  breed: string
  age: number
  weight: string
  price: string
  description: string
  imageUrl: string
}

export default function CattleMarketplace() {
  const [searchQuery, setSearchQuery] = useState('')
  const [breedFilter, setBreedFilter] = useState('all')
  const [newListing, setNewListing] = useState<CattleListing>({ 
    id: '', 
    breed: '', 
    age: 0, 
    weight: '', 
    price: '', 
    description: '',
    imageUrl: '/placeholder.svg?height=150&width=150'
  })
  const [orderStates, setOrderStates] = useState<{[key: string]: { isOrdering: boolean, quantity: number }}>({})

  // Placeholder data - replace with actual data in a real application
  const cattleListings: CattleListing[] = [
    { id: "CT001", breed: "Angus", age: 2, weight: "550 kg", price: "$2,000", description: "Healthy, Angus, bull, great for breeding", imageUrl: "/placeholder.svg?height=150&width=150" },
    { id: "CT002", breed: "Hereford", age: 3, weight: "600 kg", price: "$2,200", description: "milk production", imageUrl: "/placeholder.svg?height=150&width=150" },
    { id: "CT003", breed: "Simmental", age: 1, weight: "450 kg", price: "$1,800", description: "excellent genetics", imageUrl: "/placeholder.svg?height=150&width=150" },
    { id: "CT004", breed: "Charolais", age: 4, weight: "700 kg", price: "$2,500", description: "Strong Charolais bull", imageUrl: "/placeholder.svg?height=150&width=150" },
    { id: "CT005", breed: "Limousin", age: 2, weight: "525 kg", price: "$2,100", description: "Limousin cow, calm", imageUrl: "/placeholder.svg?height=150&width=150" },
  ]

  const handleNewListing = () => {
    console.log("New listing:", newListing)
    setNewListing({ 
      id: '', 
      breed: '', 
      age: 0, 
      weight: '', 
      price: '', 
      description: '',
      imageUrl: '/placeholder.svg?height=150&width=150'
    })
  }

  const filteredListings = useMemo(() => cattleListings.filter(cattle => 
    (breedFilter === 'all' || cattle.breed.toLowerCase() === breedFilter) &&
    (cattle.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
     cattle.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
     cattle.description.toLowerCase().includes(searchQuery.toLowerCase()))
  ), [cattleListings, breedFilter, searchQuery])

  const handleOrderClick = (id: string) => {
    setOrderStates(prev => ({
      ...prev,
      [id]: { isOrdering: true, quantity: 1 }
    }))
  }

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setOrderStates(prev => ({
      ...prev,
      [id]: { ...prev[id], quantity: Math.max(1, newQuantity) }
    }))
  }

  const handleConfirmOrder = (id: string) => {
    const quantity = orderStates[id]?.quantity || 0
    console.log(`Confirmed order for cattle ${id}: ${quantity} units`)
    setOrderStates(prev => ({
      ...prev,
      [id]: { isOrdering: false, quantity: 0 }
    }))
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cattle Marketplace</h1>
        <ModeToggle />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex w-full sm:w-auto items-center space-x-2">
          <Input
            type="search"
            placeholder="Search listings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-[200px]"
          />
          <Button variant="secondary" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex w-full sm:w-auto items-center space-x-2">
          <Select value={breedFilter} onValueChange={setBreedFilter}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Filter by breed" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Breeds</SelectItem>
              <SelectItem value="angus">Angus</SelectItem>
              <SelectItem value="hereford">Hereford</SelectItem>
              <SelectItem value="simmental">Simmental</SelectItem>
              <SelectItem value="charolais">Charolais</SelectItem>
              <SelectItem value="limousin">Limousin</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="secondary" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" /> List Cattle
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>List Cattle for Sale</DialogTitle>
              <DialogDescription>
                Enter the details of the cattle you want to sell. Click list when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {Object.entries(newListing).map(([key, value]) => (
                key !== 'imageUrl' && (
                  <div key={key} className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor={`cattle-${key}`} className="text-right">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Label>
                    {key === 'description' ? (
                      <Textarea
                        id={`cattle-${key}`}
                        className="col-span-3"
                        value={value}
                        onChange={(e) => setNewListing({...newListing, [key]: e.target.value})}
                      />
                    ) : (
                      <Input
                        id={`cattle-${key}`}
                        type={key === 'age' ? 'number' : 'text'}
                        className="col-span-3"
                        value={value}
                        onChange={(e) => setNewListing({...newListing, [key]: e.target.value})}
                      />
                    )}
                  </div>
                )
              ))}
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleNewListing}>List for Sale</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredListings.map((cattle) => (
          <Card key={cattle.id} className="flex flex-col h-full">
            <CardContent className="flex-grow p-4">
              <div className="flex flex-col items-center mb-4">
                <Avatar className="w-full h-36 rounded-lg">
                  <AvatarImage src={cattle.imageUrl} alt={`${cattle.breed} cattle`} className="object-cover" />
                  <AvatarFallback className="text-4xl font-bold">
                    {cattle.breed.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-center mt-2">{cattle.breed}</h3>
                <p className="text-sm text-muted-foreground">ID: {cattle.id}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                <p><strong>Age:</strong> {cattle.age} years</p>
                <p><strong>Weight:</strong> {cattle.weight}</p>
                <p><strong>Price:</strong> {cattle.price}</p>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {cattle.description.split(',').map((desc, index) => (
                  <Badge variant="secondary" key={index} className="text-xs">
                    {desc.trim()}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="w-full h-[36px] relative overflow-hidden">
                <div 
                  className={`absolute inset-0 flex justify-between transition-transform duration-300 ease-in-out ${
                    orderStates[cattle.id]?.isOrdering ? '-translate-y-full' : 'translate-y-0'
                  }`}
                >
                  <Button variant="outline" size="sm" className="w-full mr-2">
                    <PhoneCall className="mr-2 h-3 w-3" />
                    Contact
                  </Button>
                  <Button size="sm" className="w-full" onClick={() => handleOrderClick(cattle.id)}>
                    <ShoppingCart className="mr-2 h-3 w-3" />
                    Order
                  </Button>
                </div>
                <div 
                  className={`absolute inset-0 flex items-center justify-between transition-transform duration-300 ease-in-out ${
                    orderStates[cattle.id]?.isOrdering ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  <div className="flex items-center flex-grow mr-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(cattle.id, (orderStates[cattle.id]?.quantity || 1) - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={orderStates[cattle.id]?.quantity || 1}
                      onChange={(e) => handleQuantityChange(cattle.id, parseInt(e.target.value) || 1)}
                      className="w-16 mx-2 text-center"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(cattle.id, (orderStates[cattle.id]?.quantity || 1) + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button size="icon" onClick={() => handleConfirmOrder(cattle.id)}>
                    <Check className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}