import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Lightbulb,
  Zap,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export function Features() {
  return (
    <section
      id="features"
      className="relative w-full py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose NPSCalc?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Everything you need to measure and improve customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Real-time Analytics",
              description:
                "Get instant insights into your NPS scores with beautiful visualizations and detailed reports.",
            },
            {
              icon: <Lightbulb className="w-8 h-8" />,
              title: "Actionable Insights",
              description:
                "Identify detractors, passives, and promoters to understand what drives satisfaction.",
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Lightning Fast",
              description:
                "Built with Next.js for blazing fast performance and seamless user experience.",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Customer Feedback",
              description:
                "Collect valuable feedback directly from your users in minutes.",
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Track Progress",
              description:
                "Monitor your NPS trends over time and measure the impact of improvements.",
            },
            {
              icon: <CheckCircle2 className="w-8 h-8" />,
              title: "Easy to Use",
              description:
                "Simple, intuitive interface that requires no training or technical knowledge.",
            },
          ].map((feature, i) => (
            <Card
              key={i}
              className="border-neutral-200 dark:border-neutral-800 hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-emerald-500/10 transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800/50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
