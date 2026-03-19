import React from "react";
import Link from "next/link";
import { Search, Home as HomeIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function NPSHeroHeader() {
  return (
    <header className="relative w-full overflow-hidden text-white font-sans">
      {/* Background Layer: Deep Blue Gradient with Pattern */}
      <div className="absolute inset-0 z-0 bg-linear-to-r from-blue-900 via-blue-600 to-blue-800">
        {/* Decorative Circles and Lines (Simplified) */}
        <div className="absolute top-10 right-20 w-32 h-32 border-2 border-white/10 rounded-full" />
        <div className="absolute -bottom-10 left-1/4 w-48 h-48 border-2 border-white/5 rounded-full" />
        {/* Subtle radial overlay for the "web" effect */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* 1. Top Navigation Bar */}
        <div className="flex items-center justify-between py-6">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="text-4xl font-bold tracking-tighter">
              <span className="text-orange-400">N</span>
              <span className="text-pink-500">P</span>
              <span className="text-blue-400">S</span>
              <span className="block text-xs font-light tracking-[0.3em] -mt-2">
                TRUST
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-orange-300 transition-colors"
              >
                <HomeIcon className="w-4 h-4" /> Home
              </Link>

              <NavigationMenu>
                <NavigationMenuList className="gap-6">
                  {/* NPS Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent p-0 text-white hover:text-orange-300">
                      NPS
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>

                  {/* UPS Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent p-0 text-white hover:text-orange-300">
                      UPS
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      href="/apy"
                      className="hover:text-orange-300 transition-colors"
                    >
                      APY
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent p-0 text-white hover:text-orange-300">
                      NPS Architecture
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <button className="p-1 hover:text-orange-300 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </nav>
          </div>
        </div>

        {/* 2. Hero Content Area */}
        <div className="pt-16 pb-12 flex justify-between items-end">
          <div className="space-y-4">
            <h1 className="text-5xl font-light tracking-tight">
              Pension Calculator NPS
            </h1>

            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>&gt;</span>
              <Link href="/nps" className="hover:underline">
                NPS
              </Link>
              <span>&gt;</span>
              <span>Calculator</span>
            </nav>
          </div>

          {/* Call-to-action Button */}
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white mb-4"
          >
            Start Calculating
          </Button>
        </div>
      </div>
    </header>
  );
}
