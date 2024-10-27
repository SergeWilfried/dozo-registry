import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Dinke
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Tableau de bord</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <ModeToggle />

            
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-2 p-2 pt-0">
          <div className="grid auto-rows-min gap-2 md:grid-cols-4">
            <div className="aspect-video rounded-md bg-muted/50" />
            <div className="aspect-video rounded-md bg-muted/50" />
            <div className="aspect-video rounded-md bg-muted/50" />
            <div className="aspect-video rounded-md bg-muted/50" />
          </div>
          <div className="flex flex-col flex-1 rounded-lg">
            <div className="grid grid-cols-4 gap-2 pb-2 flex-1">
              <div className="col-span-2 rounded-md bg-muted/50 p-4">
                Row 1, Column 1
              </div>
              <div className="rounded-md bg-muted/50 p-4">
                Row 1, Column 2
              </div>
              <div className="rounded-md bg-muted/50 p-4">
                Row 1, Column 3
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 flex-1 pb-2">
              <div className="col-span-3 rounded-md bg-muted/50 p-4">
                Row 2 (Full Width)
              </div>
            </div>
    
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
