"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  userCount: number;
  onTryCalculator: () => void;
  onLearnMore: () => void;
}

export function Hero({ userCount, onTryCalculator, onLearnMore }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden pt-30 md:pb-32 lg:pb-40">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob dark:bg-emerald-600/10"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 dark:bg-blue-600/10"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 dark:bg-pink-600/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6 mb-12">
          <Badge className="px-4 py-2 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 font-medium">
            ✨ Understand Your Customer Better
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Measure Customer <br />
            <span className="bg-linear-to-r from-emerald-400 via-green-500 to-teal-600 dark:from-emerald-300 dark:via-green-400 dark:to-teal-500 bg-clip-text text-transparent">
              Satisfaction
            </span>
            <br /> Instantly
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Get actionable insights into your Net Promoter Score. Understand
            what your customers really think about your product or service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 gap-2 text-base h-12"
              onClick={onTryCalculator}
            >
              Try Calculator <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base h-12"
              onClick={onLearnMore}
            >
              Learn More
            </Button>
          </div>

          <div className="pt-8 text-sm text-neutral-600 dark:text-neutral-400">
            {userCount > 0 && <span>✓ Trusted by {userCount}+ users</span>}
          </div>
        </div>
      </div>
    </section>
  );
}
