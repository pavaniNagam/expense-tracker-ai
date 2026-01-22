import Image from "next/image";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import { NPSCalculator } from "@/components/nps-calculator";
import NPSHeroHeader from "@/components/nps-hero";
import { FooterBanner } from "@/components/footerBanner";
import { Footer } from "@/components/footer";

export default async function Home() {
  const users = await prisma.user.findMany();
  // console.log("users", users);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <FooterBanner />
      <Footer />
      {/* <NPSHeroHeader /> */}
    </div>
  );
}
