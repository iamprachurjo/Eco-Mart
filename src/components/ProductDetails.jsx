"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Heart,
  ShoppingCart,
  ShieldCheck,
  Phone,
  User,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FadeLeft,
  FadeRight,
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedDiv";

export default function ProductDetailsPage({ product, user }) {
  const router = useRouter();

  const handleBuyNow = (e) => {
    if (!user) {
      e.preventDefault();
      router.push("/signIn");
    }
  };

  if (!product) {
    return (
      <div className="py-12 text-center text-muted-foreground">
        Loading product details...
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12 overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-2">
        <FadeLeft>
          <div>
            <div className="overflow-hidden rounded-3xl border bg-muted">
              {product.images && product.images.length > 0 ? (
                <Image
                  src={product.images[0]}
                  alt={product.title || "Product Image"}
                  width={900}
                  height={700}
                  className="h-[550px] w-full object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              ) : (
                <div className="flex h-[550px] w-full items-center justify-center text-muted-foreground">
                  No Image Available
                </div>
              )}
            </div>
          </div>
        </FadeLeft>

        <FadeRight>
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {product.category && (
                <span className="rounded-full bg-[#ECEAE5] px-4 py-1 text-sm font-medium text-[#3E5F47]">
                  {product.category}
                </span>
              )}
              {product.condition && (
                <span className="rounded-full bg-[#3E5F47]/10 px-4 py-1 text-sm font-medium text-[#3E5F47]">
                  Condition: {product.condition}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                {product.title}
              </h1>
              <p className="text-5xl font-extrabold text-primary">
                ৳{product.price ? product.price.toLocaleString() : "0"}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Description</h3>
              <p className="leading-8 text-muted-foreground whitespace-pre-line">
                {product.description}
              </p>
            </div>

            <div className="flex gap-4">
              <form
                className="w-full"
                action="/api/checkout_sessions"
                method="POST"
                onSubmit={handleBuyNow}
              >
                <input type="hidden" name="productId" value={product._id} />
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 w-full rounded-full bg-[#3E5F47] hover:bg-[#304B38] text-white text-sm font-medium transition-all duration-200"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now
                </Button>
              </form>
            </div>

            <FadeUp delay={0.1}>
              <div className="rounded-3xl border p-6 bg-card">
                <h3 className="mb-5 text-xl font-bold">Product Information</h3>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-semibold mt-0.5">{product.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Condition</p>
                    <p className="font-semibold mt-0.5">{product.condition}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-semibold capitalize mt-0.5 text-emerald-600">
                      {product.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Stocks</p>
                    <p className="font-semibold mt-0.5">
                      {product.stock ? product.stock : "1"}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </FadeRight>
      </div>
    </section>
  );
}
