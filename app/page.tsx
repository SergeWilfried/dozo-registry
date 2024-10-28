import { Contact } from "@/components/contact";
import { Engagement } from "@/components/engagement";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Histoire } from "@/components/histoire";
import { Membres } from "@/components/membres";
import { RoleModerne } from "@/components/role-moderne";
import { Traditions } from "@/components/traditions";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Histoire />
        <Traditions />
        <RoleModerne />
        <Membres />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}