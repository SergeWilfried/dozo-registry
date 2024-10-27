"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Calendar,
  Users,
  Briefcase,
  Monitor,
  ClipboardList,
  ClipboardPlusIcon,
  FileText,
  Heart,
} from "lucide-react";

// Sample fraternity-specific data
const data = {
  user: {
    name: "Frederic Traore",
    email: "fredTr@example.com",
    avatar: "/avatars/johndoe.jpg",
  },
  chapters: [
    {
      name: "Orodara",
      logo: Heart,
      plan: "Administrateur",
    },
    {
      name: "Bobo Dioulasso",
      logo: Heart,
      plan: "Administrateur",
    },
  ],
  navMain: [
    {
      title: "Tableau de bord",
      url: "/dashboard",
      icon: Monitor,
      isActive: true,
    },
    {
      title: "Membres",
      icon: Users,
      url: "#",
      items: [
        {
          title: "Tous les membres",
          url: "#",
          icon: Users,
        },
        {
          title: "Candidatures",
          url: "#",
          icon: ClipboardList,
        },
      ],
    },
    {
      title: "Honneurs",
      url: "#",
      icon: Heart,
    },
    {
      title: "Sanctions",
      url: "#",
      icon: FileText,
    },
    {
      title: "Événements",
      icon: Calendar,
      url: "#",
      items: [
        {
          title: "A venir",
          url: "#",
          icon: Calendar,
        },
        {
          title: "Calendrier",
          url: "#",
          icon: ClipboardPlusIcon,
        },
      ],
    },
  ],
  projects: [
    {
      name: "Collecte de fonds",
      url: "#",
      icon: Heart,
    },
    {
      name: "Rapports",
      url: "#",
      icon: Monitor,
    },
    {
      name: "Ressources",
      url: "#",
      icon: Briefcase,
    },
    {
      name: "Assistance",
      url: "#",
      icon: Heart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.chapters} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
