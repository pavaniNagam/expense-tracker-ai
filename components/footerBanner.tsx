import Image from "next/image";
import Link from "next/link";
import { Search, Home } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function FooterBanner() {
  return (
    <header className="relative w-full text-white overflow-hidden bg-foreground">
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full border border-white/20" />
        <div className="absolute bottom-0 left-[20%] w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-400/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
        {/* Top Nav */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <Image
              src="/nps-logo.png"
              alt="NPS Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-orange-400 transition-colors"
            >
              <Home className="w-4 h-4" /> Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                {["NPS", "UPS", "APY", "NPS Architecture"].map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-white p-0 h-auto hover:text-orange-400">
                      {item}
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <button className="hover:text-orange-400 transition-colors">
              <Search className="w-5 h-5 cursor-pointer" />
            </button>
          </nav>
        </div>

        {/* Hero Title & Breadcrumbs */}
        <div className="flex justify-between items-end pb-8">
          <div>
            <h1 className="text-5xl font-light mb-6">Pension Calculator NPS</h1>
            <nav className="flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>{">"}</span>
              <Link href="/nps" className="hover:underline">
                NPS
              </Link>
              <span>{">"}</span>
              <span className="font-semibold text-white">
                Pension Calculator NPS
              </span>
            </nav>
          </div>
          <div className="bg-white p-1 rounded-sm">
            <Image
              src="/nps-mini-logo.png"
              alt="NPS System"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
