"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// ---- Mock data — swap with real data from your API later ----
const MOCK_TOP_PRODUCTS = [
  { name: "Vintage Wooden Chair", unitsSold: 126, revenue: 37800 },
  { name: "Samsung Galaxy S22", unitsSold: 104, revenue: 62400 },
  { name: "Leather Backpack", unitsSold: 89, revenue: 17800 },
  { name: "Canon EOS Camera", unitsSold: 71, revenue: 56800 },
  { name: "Ceramic Dinner Set", unitsSold: 58, revenue: 11600 },
];

const BAR_COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--primary) / 0.85)",
  "hsl(var(--primary) / 0.7)",
  "hsl(var(--primary) / 0.55)",
  "hsl(var(--primary) / 0.4)",
];

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="rounded-lg border bg-background px-3 py-2 shadow-sm">
      <p className="text-sm font-medium">{item.name}</p>
      <p className="text-sm text-muted-foreground">
        Units sold: <span className="font-semibold text-foreground">{item.unitsSold}</span>
      </p>
      <p className="text-sm text-muted-foreground">
        Revenue: <span className="font-semibold text-foreground">${item.revenue.toLocaleString()}</span>
      </p>
    </div>
  );
}

export default function TopSellingProducts({ data = MOCK_TOP_PRODUCTS }) {
  const sorted = [...data].sort((a, b) => b.unitsSold - a.unitsSold);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
        <CardDescription>Ranked by units sold &middot; this month</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart
            data={sorted}
            layout="vertical"
            margin={{ top: 8, right: 16, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} className="stroke-muted" />
            <XAxis type="number" tickLine={false} axisLine={false} className="text-xs fill-muted-foreground" />
            <YAxis
              type="category"
              dataKey="name"
              width={140}
              tickLine={false}
              axisLine={false}
              className="text-xs fill-muted-foreground"
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted))" }} />
            <Bar dataKey="unitsSold" radius={[0, 4, 4, 0]}>
              {sorted.map((_, i) => (
                <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Ranked list */}
        <ul className="divide-y">
          {sorted.map((product, i) => (
            <li key={product.name} className="flex items-center justify-between py-2.5">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="w-6 h-6 flex items-center justify-center p-0 rounded-full">
                  {i + 1}
                </Badge>
                <span className="text-sm font-medium">{product.name}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">{product.unitsSold} units</p>
                <p className="text-xs text-muted-foreground">${product.revenue.toLocaleString()}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}