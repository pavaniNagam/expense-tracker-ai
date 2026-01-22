import Link from "next/link";
import { Search, Home, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function FooterBanner() {
  return (
    <header className="relative w-full text-white overflow-hidden bg-[#2b4299]">
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full border border-white/20" />
        <div className="absolute bottom-0 left-[20%] w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
        {/* Top Nav */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <img src="/nps-logo.png" alt="NPS Logo" className="h-12" />
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
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-white p-0 h-auto">
                      {item}
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Search className="w-5 h-5 cursor-pointer" />
          </nav>
        </div>

        {/* Hero Title & Breadcrumbs */}
        <div className="flex justify-between items-end pb-8">
          <div>
            <h1 className="text-5xl font-light mb-6">Pension Calculator NPS</h1>
            <nav className="flex items-center gap-2 text-sm text-gray-200">
              <Link href="/">Home</Link>
              <span>{">"}</span>
              <Link href="/nps">NPS</Link>
              <span>{">"}</span>
              <span className="font-semibold text-white">
                Pension Calculator NPS
              </span>
            </nav>
          </div>
          <div className="bg-white p-1 rounded-sm">
            <img src="/nps-mini-logo.png" alt="NPS System" className="h-16" />
          </div>
        </div>
      </div>
    </header>
  );
}
