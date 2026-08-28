import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedDiv";

const stories = [
  {
    quote:
      "I discovered a vintage camera I had been searching for, at an amazing price. The seller was friendly and explained everything before I bought it.",
    name: "Hannah T.",
    role: "Buyer • Boston, MA",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    quote:
      "Selling my unused furniture was quick and simple. The trusted-seller badge helped me connect with genuine buyers who were ready to purchase.",
    name: "Marcus K.",
    role: "Seller • Austin, TX",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote:
      "I decorated my entire new apartment for less than $600 using pre-owned items. The quality was much better than what I could find new.",
    name: "Elena S.",
    role: "Buyer • Portland, OR",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-5 overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeUp>
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#7B6A58]">Success Stories</p>
            <h2 className="section-title text-[#181818]">From the community</h2>
          </div>
        </FadeUp>

        <StaggerContainer>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <StaggerItem key={story.name}>
                <div className="rounded-[32px] border border-[#E7E1D9] bg-[#FCFBF8] p-8 transition-all duration-300 hover:-translate-y-1">
                  <Quote className="h-6 w-6 text-[#D97745]" />

                  <p className="mt-8 text-[18px] leading-10 text-[#2B2B2B]">
                    &ldquo;{story.quote}&rdquo;
                  </p>

                  <div className="my-8 h-px bg-[#ECE7E0]" />

                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={story.image} />
                      <AvatarFallback>{story.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>

                    <div>
                      <h4 className="text-xl font-medium text-[#1A1A1A]">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
