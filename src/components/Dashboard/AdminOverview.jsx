"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  ArrowRight,
  
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedDiv";

export default function AdminOverview({ dashboardData }) {
  const { totalOrder, totalProduct, totalRevenue, totalUser } = dashboardData;


  // Mock statistical data
const stats = [
  {
    title: "Active Members",
    value: totalUser,
    change: "+15.7% this month",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    title: "Listed Items",
    value: totalProduct,
    change: "+10.4% this month",
    icon: Package,
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    title: "Completed Sales",
    value: totalOrder,
    change: "+18.9% this month",
    icon: ShoppingCart,
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    title: "Total Earnings",
    value: totalRevenue,
    change: "+16.2% this month",
    icon: DollarSign,
    color: "text-green-600",
    bg: "bg-green-50 dark:bg-green-950/30",
  },
];

// Mock recent actions / logs
const [recentActivities, setRecentActivities] = useState([
  {
    id: 1,
    type: "user",
    message: "New member 'GreenMarket' successfully joined the marketplace.",
    time: "8 minutes ago",
    badge: "New Member",
    badgeColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  },
  {
    id: 2,
    type: "product",
    message: "Listing 'Vintage Wooden Desk' was reported for review.",
    time: "32 minutes ago",
    badge: "Review Needed",
    badgeColor:
      "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
  },
  {
    id: 3,
    type: "order",
    message: "Customer requested assistance with Order #5736.",
    time: "1 hour ago",
    badge: "Support",
    badgeColor:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
  },
  {
    id: 4,
    type: "product",
    message: "Listing 'Reusable Glass Bottle Set' is waiting for approval.",
    time: "2 hours ago",
    badge: "Awaiting Review",
    badgeColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
  },
  {
    id: 5,
    type: "user",
    message: "Member 'sarah.market' received a temporary account restriction.",
    time: "4 hours ago",
    badge: "Restricted",
    badgeColor:
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  },
]);

  return (
    <div className="space-y-8">
      {/* Welcome banner */}
      <FadeUp>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Overview</h1>
            <p className="mt-1 text-muted-foreground">
              Monitor systems status, user registrations, products moderation, and sales activity.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </FadeUp>

      {/* Grid of stats */}
      <StaggerContainer>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {item.title}
                    </CardTitle>
                    <div className={`rounded-2xl p-3 ${item.bg}`}>
                      <Icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold tracking-tight">{item.value}</div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-xs text-emerald-600 font-medium">{item.change}</span>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </div>
      </StaggerContainer>

      {/* Quick Navigation Panels */}
      <FadeUp delay={0.1}>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">User Management</CardTitle>
              <CardDescription>Control roles, verify sellers, and manage blocks.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full justify-between rounded-full bg-[#3E5F47] hover:bg-[#2F4A37] text-white">
                <Link href="/dashboard/admin/users">
                  Manage Users
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-600">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Product Moderation</CardTitle>
              <CardDescription>Approve catalog additions, review flags, delete listings.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full justify-between rounded-full bg-[#3E5F47] hover:bg-[#2F4A37] text-white">
                <Link href="/dashboard/admin/products">
                  Manage Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-emerald-600">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Order & Analytics</CardTitle>
              <CardDescription>Resolve order disputes and view platform progress.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button asChild className="w-full justify-between rounded-full bg-[#3E5F47] hover:bg-[#2F4A37] text-white">
                <Link href="/dashboard/admin/orders">
                  Manage Orders
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </FadeUp>

     
    </div>
  );
}
