"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function Benefits() {
  const router = useRouter();

  const handleStartMeasuring = () => {
    router.push("/pricing");
  };

  return (
    <section
      id="benefits"
      className="relative w-full py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unlock Growth with NPS
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              The Net Promoter Score is the gold standard for measuring customer
              loyalty. Our calculator makes it easy to understand your position
              and track improvements.
            </p>

            <ul className="space-y-4">
              {[
                "Identify your most loyal customers",
                "Discover areas for improvement",
                "Benchmark against industry standards",
                "Create data-driven action plans",
                "Increase customer retention",
                "Drive business growth",
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="mt-8 bg-emerald-600 hover:bg-emerald-700 gap-2"
              onClick={handleStartMeasuring}
            >
              Start Measuring Now <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-emerald-400/20 to-teal-400/20 dark:from-emerald-600/10 dark:to-teal-600/10 rounded-2xl blur-2xl"></div>
            <Card className="relative border-neutral-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle>Understanding NPS Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600 dark:text-red-400 font-bold shrink-0">
                    0-6
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Detractors</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Unhappy customers who may harm your brand
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/40 flex items-center justify-center text-yellow-600 dark:text-yellow-400 font-bold shrink-0">
                    7-8
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Passives</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Satisfied but not enthusiastic customers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400 font-bold shrink-0">
                    9-10
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Promoters</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Loyal customers who will recommend you
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
