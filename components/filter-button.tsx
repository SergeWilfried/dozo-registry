'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Filter, ChevronDown, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"


export interface FilterOption {
    id: string
    label: string
}
interface FilterButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  filterOptions: FilterOption[];
}

export function FilterButton({ className, filterOptions, ...props }: FilterButtonProps) {
  const [filters, setFilters] = useState<Record<string, boolean>>({})

  const handleFilterChange = (filterId: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterId]: !prevFilters[filterId]
    }))
  }

  const clearFilters = () => setFilters({})

  const activeFiltersCount = Object.values(filters).filter(Boolean).length

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <div className="flex items-center gap-2">
        <div className="flex flex-wrap gap-2 flex-grow">
          {Object.entries(filters).map(([key, value]) => 
            value && (
              <Badge key={key} variant="secondary" className="text-sm">
                {filterOptions.find(o => o.id === key)?.label}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleFilterChange(key)}
                  className="ml-1 h-4 w-4 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtres
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-2 px-1 py-0 text-xs">
                  {activeFiltersCount}
                </Badge>
              )}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Appliquer les filtres</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {filterOptions.map(option => (
              <DropdownMenuCheckboxItem
                key={option.id}
                checked={filters[option.id] || false}
                onCheckedChange={() => handleFilterChange(option.id)}
              >
                {option.label}
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuSeparator />
            <Button variant="ghost" onClick={clearFilters} className="w-full justify-start">
              Effacer tous les filtres
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
