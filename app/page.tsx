"use client";

import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Calculator } from "@/components/calculator";
import { Benefits } from "@/components/benefits";
import { CTA } from "@/components/cta";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<
    { id: number; email: string; name?: string }[]
  >([]);

  useEffect(() => {
    // Fetch users on client side
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleTryCalculator = () => {
    // Scroll to calculator section
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLearnMore = () => {
    // Scroll to features section
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white dark:bg-black font-sans">
      {/* Hero Section */}
      <Hero
        userCount={users.length}
        onTryCalculator={handleTryCalculator}
        onLearnMore={handleLearnMore}
      />

      {/* Features Section */}
      <Features />

      {/* Calculator Section
      <Calculator /> */}

      {/* Benefits Section */}
      <Benefits />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
