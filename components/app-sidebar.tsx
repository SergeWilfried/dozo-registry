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
  DollarSign,
  Monitor,
  ClipboardList,
  ClipboardPlusIcon,
  MapIcon,
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
      plan: "Full Member",
    },
    {
      name: "Bobo",
      logo: Heart,
      plan: "Associate",
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
      items: [
        {
          title: "Tous les membres",
          url: "/members",
          icon: Users,
        },
        {
          title: "Candidatures",
          url: "/applications",
          icon: ClipboardList,
        },
        {
          title: "Honneurs",
          url: "/honors",
          icon: Heart,
        },
        {
          title: "Sanctions",
          url: "/sanctions",
          icon: FileText,
        },
      ],
    },
    {
      title: "Événements",
      icon: Calendar,
      items: [
        {
          title: "A venir",
          url: "/events",
          icon: Calendar,
        },
        {
          title: "Calendrier",
          url: "/event-planning",
          icon: ClipboardPlusIcon,
        },
      ],
    },
  ],
  projects: [
    {
      name: "Collecte de fonds",
      url: "/fundraising",
      icon: Heart,
    },
    {
      name: "Rapports",
      url: "/reports",
      icon: Monitor,
    },
    {
      name: "Ressources",
      url: "/resources",
      icon: Briefcase,
    },
    {
      name: "Assistance",
      url: "/help",
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
