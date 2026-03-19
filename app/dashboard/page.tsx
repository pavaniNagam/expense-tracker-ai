"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NPSCalculator } from "@/components/nps-calculator";
import { BarChart3, TrendingUp, Users, Zap } from "lucide-react";

export default function DashboardPage() {
  const { userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If user is not authenticated, redirect to home
    if (userId === null) {
      router.push("/");
    }
  }, [userId, router]);
  return (
    <div className="flex flex-col min-h-screen w-full bg-white dark:bg-black font-sans p-6 md:p-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Dashboard</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Welcome to your NPS Calculator Dashboard
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-neutral-200 dark:border-neutral-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              Total Calculations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              This month
            </p>
          </CardContent>
        </Card>

        <Card className="border-neutral-200 dark:border-neutral-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Users className="w-5 h-5" />
              </div>
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              +12% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="border-neutral-200 dark:border-neutral-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              Avg NPS Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72</div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              Excellent range
            </p>
          </CardContent>
        </Card>

        <Card className="border-neutral-200 dark:border-neutral-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/40 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                <Zap className="w-5 h-5" />
              </div>
              Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              System uptime
            </p>
          </CardContent>
        </Card>
      </div>

      {/* NPS Calculator Section */}
      <div className="grid grid-cols-1 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">NPS Returns Calculator</h2>
          <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 shadow-lg">
            <NPSCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}
