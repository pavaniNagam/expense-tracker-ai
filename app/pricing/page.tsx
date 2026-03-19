"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Perfect for getting started",
    price: "Free",
    period: "Forever",
    features: [
      "Up to 100 NPS surveys",
      "Basic analytics dashboard",
      "Email support",
      "Real-time insights",
      "Export data as CSV",
    ],
    cta: "Get Started",
    ctaVariant: "outline" as const,
  },
  {
    name: "Professional",
    description: "For growing teams",
    price: "$49",
    period: "/month",
    features: [
      "Unlimited NPS surveys",
      "Advanced analytics & reporting",
      "Priority email & chat support",
      "Custom branding",
      "API access",
      "Team collaboration (up to 5 users)",
      "Advanced segmentation",
      "Monthly reports",
    ],
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "Contact us",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Dedicated account manager",
      "Custom integrations",
      "SSO & advanced security",
      "SLA guarantee",
      "On-premise options",
      "Custom training & onboarding",
    ],
    cta: "Schedule Demo",
    ctaVariant: "outline" as const,
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white dark:bg-black font-sans">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-30 md:pb-32 lg:pb-40">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob dark:bg-blue-600/10"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl animation-delay-2000 dark:bg-purple-600/10"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl animation-delay-4000 dark:bg-pink-600/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <Badge className="px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-medium">
              💳 Simple, Transparent Pricing
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Plans Built <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-600 dark:from-blue-300 dark:via-purple-400 dark:to-pink-500 bg-clip-text text-transparent">
                for Every Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Choose the perfect plan to measure and improve customer
              satisfaction. No credit card required to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="relative w-full py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card
                  className={`h-full flex flex-col transition-all duration-300 ${
                    plan.popular
                      ? "border-2 border-blue-500 dark:border-blue-400 shadow-2xl dark:shadow-blue-500/20 md:scale-105"
                      : "border-neutral-200 dark:border-neutral-800 hover:shadow-lg dark:hover:shadow-xl"
                  }`}
                >
                  <CardHeader>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-neutral-600 dark:text-neutral-400">
                          {plan.period}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-neutral-700 dark:text-neutral-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      size="lg"
                      variant={plan.ctaVariant}
                      className={`w-full gap-2 ${
                        plan.popular
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : ""
                      }`}
                    >
                      {plan.cta} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Have questions? We have answers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I try the professional plan for free?",
                answer:
                  "Yes! All plans come with a 14-day free trial. No credit card required.",
              },
              {
                question: "Can I change or cancel my plan anytime?",
                answer:
                  "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your account settings.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and bank transfers for enterprise customers.",
              },
              {
                question: "Do you offer discounts for annual billing?",
                answer:
                  "Yes! Save 20% when you pay annually instead of monthly.",
              },
              {
                question: "Is there a free plan?",
                answer:
                  "Yes, our Starter plan is completely free and includes up to 100 NPS surveys with basic analytics.",
              },
              {
                question: "Do you have API documentation?",
                answer:
                  "Yes, full API documentation is available for Professional and Enterprise plans.",
              },
            ].map((faq, i) => (
              <Card
                key={i}
                className="border-neutral-200 dark:border-neutral-800"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 md:py-28 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-50">
            Join thousands of teams using NPS Trust to measure customer
            satisfaction and drive business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 gap-2"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 gap-2"
              asChild
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
