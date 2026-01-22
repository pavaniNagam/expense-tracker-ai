import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex w-full overflow-hidden py-24 lg:py-32 justify-center -top-3">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-primary/30 to-primary blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
        <div className="bg-gradient-to-tl from-primary/20 via-primary/10 to-background blur-3xl w-[90rem] h-[50rem] origin-top-left -rotate-12 -translate-x-[15rem]" />
      </div>

      <div className="container relative z-10 text-center">
        <div className="flex justify-center">
          <Badge
            variant="secondary"
            className="px-3 py-1 mb-6 text-sm font-medium"
          >
            New: Next.js 15 Support is here
          </Badge>
        </div>

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl mb-6">
          Build your next idea <br />
          <span className="text-primary">faster than ever before</span>
        </h1>

        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground mb-10 md:text-xl">
          Beautifully designed components built with Radix UI and Tailwind CSS.
          Open source, customizable, and ready for production.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <PlayCircle className="h-4 w-4" /> Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
