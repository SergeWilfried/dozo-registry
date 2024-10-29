'use client'
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge";
import { MembreDozo } from "@/lib/validations";
import { situationsMatrimoniales, statutsConfrerie } from "@/lib/db";

export const columns: ColumnDef<MembreDozo>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
    },
    {
      accessorKey: "nom",
      header: "Nom",
    },
    {
      accessorKey: "prenoms",
      header: "Prénoms",
    },
    {
      accessorKey: "date_naissance",
      header: "Date de Naissance",
    },
    {
      accessorKey: "id",
      header: "État Civil",
      cell: ({ row }) => {
        const id = row.getValue("id") as string;
        const member = situationsMatrimoniales.find((d) => d.member_id === id);
        const situation = member?.etat as string
        return <Badge variant='outline'>{situation}</Badge>
      },
    },
    {
      accessorKey: "id",
      header: "Enfants",
      cell: ({ row }) => {
        const id = row.getValue("id") as string;
        const member = situationsMatrimoniales.find((d) => d.member_id === id);
        const kids = member?.nombre_enfants as number
        return <Badge variant='outline'>{kids}</Badge>
      },
    },
    {
      accessorKey: "lieu_residence",
      header: "Ville",
      cell: ({ row }) => {
        const lieu_residence = row.getValue("lieu_residence") as string;
        return <Badge variant='outline'>{lieu_residence}</Badge>
      },
    },
    {
      accessorKey: "id",
      header: "Status",
      cell: ({ row }) => {
        const id = row.getValue("id") as string;
        const stats = statutsConfrerie.find((d) => d.member_id === id);
        return <Badge variant='outline'>{stats?.situation_cotisante}</Badge>
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const member = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(member.id!)}>
                Copy Member ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Member Details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  