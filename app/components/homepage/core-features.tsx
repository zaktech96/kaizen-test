import { CpuArchitecture } from "~/components/ui/cpu-architecture";
import { Coffee, MapPin, Users, Leaf, Clock, Heart } from "lucide-react";

export default function CoreFeaturesSection() {
  const features = [
    {
      icon: <div className="text-2xl">🌱</div>,
      title: "Premium Beans",
      description: "Single-origin coffee sourced from sustainable farms worldwide. We know our farmers by name!",
    },
    {
      icon: <div className="text-2xl">📍</div>,
      title: "Prime Location",
      description: "Heart of downtown with ample seating. Perfect for people watching while you sip!",
    },
    {
      icon: <div className="text-2xl">👥</div>,
      title: "Community Hub",
      description: "Where remote workers, students, and coffee lovers unite. WiFi is fast, vibes are immaculate.",
    },
    {
      icon: <div className="text-2xl">🌍</div>,
      title: "Sustainable",
      description: "Eco-friendly practices with compostable cups. Mother Earth approves! ♻️",
    },
    {
      icon: <div className="text-2xl">🌅</div>,
      title: "Fresh Daily",
      description: "Beans roasted fresh every morning at 5 AM. Our roaster is basically a morning person superhero.",
    },
    {
      icon: <div className="text-2xl">💝</div>,
      title: "Crafted with Love",
      description: "Every drink made with care by our skilled baristas. They're basically coffee wizards! ✨",
    },
  ];
  return (
    <section id="features" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Coffee Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-8xl rotate-12">☕</div>
        <div className="absolute bottom-20 right-20 text-8xl -rotate-12">🫘</div>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <h3 className="text-center text-xl font-medium mb-12 text-muted-foreground">
          Everything brewed to <em>perfection</em> with a side of good vibes ✨
        </h3>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Graphic */}
          <div className="mx-auto w-full max-w-md">
            <div className="relative">
              <CpuArchitecture
                text="☕"
                className="w-full h-auto"
              />
              {/* Fun floating elements around the graphic */}
              <div className="absolute -top-4 -right-4 text-3xl animate-bounce">💨</div>
              <div className="absolute -bottom-4 -left-4 text-3xl animate-pulse">🫘</div>
              <div className="absolute top-1/2 -left-8 text-2xl animate-ping">⭐</div>
            </div>
          </div>
          {/* Feature list */}
          <ul className="grid gap-6 sm:grid-cols-2">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-start gap-3 p-4 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors group">
                <div className="group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold leading-none mb-1">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {f.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Coffee stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
            <div className="text-2xl font-bold text-amber-700">500+</div>
            <div className="text-sm text-muted-foreground">☕ Cups Daily</div>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-2xl font-bold text-green-700">15+</div>
            <div className="text-sm text-muted-foreground">🌱 Bean Origins</div>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-2xl font-bold text-blue-700">2019</div>
            <div className="text-sm text-muted-foreground">📅 Since</div>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="text-2xl font-bold text-purple-700">100%</div>
            <div className="text-sm text-muted-foreground">💝 Love</div>
          </div>
        </div>
      </div>
    </section>
  );
} 