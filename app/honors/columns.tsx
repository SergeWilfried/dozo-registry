'use client'
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge";
import { Decoration } from "@/lib/validations";
import { membres } from "@/lib/db";



export const columns: ColumnDef<Decoration>[] = [
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
      accessorKey: "member_id",
      header: "Membre",
      cell: ({ row }) => {
        const id = row.getValue("member_id") as string;
        const member = membres.find((d) => d.id === id)!;
        const fullname = member.nom + ' ' + member.prenoms
        return fullname;
      },
    },
    {
      accessorKey: "medaille",
      header: "Medaille",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "lieu",
      header: "Ville",
      cell: ({ row }) => {
        const lieu_residence = row.getValue("lieu") as string;
        return <Badge variant='outline'>{lieu_residence}</Badge>
      },
    },
    {
      accessorKey: "est_decore",
      header: "Decoree",
      cell: ({ row }) => (row.getValue("est_decore") ? "Oui" : "Non"),
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
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(member.member_id)}>
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
  