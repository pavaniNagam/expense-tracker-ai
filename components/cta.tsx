import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-linear-to-r from-emerald-600 to-teal-600 dark:from-emerald-900 dark:to-teal-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-300">
          Ready to Understand Your Customers?
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-500 dark:text-gray-300">
          Join thousands of businesses already using NPSCalc to measure and
          improve customer satisfaction.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-emerald-600 hover:bg-emerald-300 gap-2"
          >
            Get Started Free <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-gray-900 bg-emerald-300 gap-2"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
