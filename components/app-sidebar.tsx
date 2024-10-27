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
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "/avatars/johndoe.jpg",
  },
  chapters: [
    {
      name: "Alpha Chapter",
      logo: Heart,
      plan: "Full Member",
    },
    {
      name: "Beta Chapter",
      logo: Heart,
      plan: "Associate",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Monitor,
      isActive: true,
    },
    {
      title: "Members",
      icon: Users,
      items: [
        {
          title: "All Members",
          url: "/members",
          icon: Users,
        },
        {
          title: "Applications",
          url: "/applications",
          icon: ClipboardList,
        },
        {
          title: "Honors",
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
      title: "Events",
      icon: Calendar,
      items: [
        {
          title: "Upcoming Events",
          url: "/events",
          icon: Calendar,
        },
        {
          title: "Event Planning",
          url: "/event-planning",
          icon: ClipboardPlusIcon,
        },
      ],
    },

  ],
  projects: [
    {
      name: "Fundraising",
      url: "/fundraising",
      icon: Heart,
    },
    {
      name: "Reports",
      url: "/reports",
      icon: Monitor,
    },
    {
      name: "Resources",
      url: "/resources",
      icon: Briefcase,
    },
    {
      name: "Help",
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
