'use client'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Crosshair, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { href: "#histoire", label: "Histoire" },
  { href: "#traditions", label: "Traditions" },
  { href: "#role-moderne", label: "Rôle Moderne" },
  { href: "#membres", label: "Membres" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link className="flex items-center justify-center" href="#">
        <Crosshair className="h-6 w-6 mr-2" />
        <span className="font-bold">Confrérie Dozo</span>
      </Link>
      <nav className="ml-auto items-center hidden md:flex">
        {navItems.map((item, index) => (
          <Link key={index} className="text-sm font-medium hover:underline underline-offset-4 mx-2" href={item.href}>
            {item.label}
          </Link>
        ))}
        <Button variant="outline" size="sm" className="ml-4">
          Me Connecter
        </Button>
      </nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden ml-auto">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-lg font-medium hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Me Connecter
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}