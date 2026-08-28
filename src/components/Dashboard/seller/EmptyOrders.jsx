import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EmptyOrders() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>

        <h2 className="text-2xl font-bold">No Orders Yet</h2>

       <p className="mt-3 text-muted-foreground">
  No orders have been placed yet. Once customers purchase your products,
  their orders will appear here for you to manage.
</p>

        <Button
          asChild
          className="mt-6 rounded-full bg-[#3E5F47] hover:bg-[#304B38]"
        >
          <Link href="/dashboard/seller">
            Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}