import { memo } from "react";
import { Link } from "react-router";
import { LogoIcon } from "~/components/logo";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";
import { Navbar } from "./navbar";
import { Coffee, MapPin, Clock, Star } from "lucide-react";

export default function IntegrationsSection({
  loaderData,
}: {
  loaderData?: { isSignedIn: boolean; hasActiveSubscription: boolean };
}) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <Navbar loaderData={loaderData} />
      <div className="bg-gradient-to-br from-slate-50 via-white to-stone-50/80 dark:from-gray-900 dark:via-gray-800/60 dark:to-gray-850/80 py-32 md:py-40 relative">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-[0.03] dark:opacity-[0.08]">☕</div>
          <div className="absolute top-32 right-20 text-4xl animate-pulse opacity-[0.03] dark:opacity-[0.08] animation-delay-1000">🫘</div>
          <div className="absolute bottom-20 left-32 text-5xl animate-bounce opacity-[0.03] dark:opacity-[0.08] animation-delay-2000">☕</div>
          <div className="absolute bottom-40 right-10 text-3xl animate-pulse opacity-[0.03] dark:opacity-[0.08] animation-delay-500">🫘</div>
          <div className="absolute top-60 left-1/2 text-4xl animate-bounce opacity-[0.03] dark:opacity-[0.08] animation-delay-1500">☕</div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/30 to-transparent"></div>
        
        <div className="flex justify-center mb-12 relative z-10">
          <Badge className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-stone-900 dark:from-slate-100 dark:to-stone-50 text-white dark:text-stone-900 border-0 px-8 py-3 text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-stone-900 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white dark:bg-stone-900"></span>
            </div>
            Grand Opening Special - 20% Off Your First Week
          </Badge>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid items-center lg:grid-cols-2 gap-16">
            {/* Interactive Coffee Cards */}
            <div className="relative mx-auto w-fit order-2 lg:order-1">
              <div className="mx-auto mb-4 flex w-fit justify-center gap-3">
                <CoffeeCard className="animate-float">
                  <div className="text-stone-600 dark:text-stone-400 text-3xl">☕</div>
                </CoffeeCard>
                <CoffeeCard className="animate-float animation-delay-200">
                  <div className="text-stone-500 dark:text-stone-500 text-3xl">⭐</div>
                </CoffeeCard>
              </div>
              <div className="mx-auto my-4 flex w-fit justify-center gap-3">
                <CoffeeCard className="animate-float animation-delay-400">
                  <div className="text-stone-600 dark:text-stone-400 text-3xl">📍</div>
                </CoffeeCard>
                <CoffeeCard
                  borderClassName="shadow-lg border-stone-300/60 dark:border-stone-600/60 shadow-stone-200/50 dark:shadow-stone-800/50"
                  className="bg-gradient-to-br from-stone-50 via-white to-slate-100 dark:from-stone-800/50 dark:via-stone-700/50 dark:to-stone-600/50 animate-float animation-delay-100"
                >
                  <div className="text-5xl animate-pulse">🫘</div>
                </CoffeeCard>
                <CoffeeCard className="animate-float animation-delay-300">
                  <div className="text-stone-600 dark:text-stone-400 text-3xl">🕐</div>
                </CoffeeCard>
              </div>

              <div className="mx-auto flex w-fit justify-center gap-3">
                <CoffeeCard className="animate-float animation-delay-500">
                  <div className="text-stone-700 dark:text-stone-300 text-3xl">🔥</div>
                </CoffeeCard>
                <CoffeeCard className="animate-float animation-delay-600">
                  <div className="text-stone-600 dark:text-stone-400 text-3xl">❤️</div>
                </CoffeeCard>
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="space-y-8 text-center lg:text-left order-1 lg:order-2">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
                  <span className="bg-gradient-to-br from-slate-900 via-stone-800 to-slate-900 dark:from-slate-100 dark:via-stone-50 dark:to-slate-100 bg-clip-text text-transparent">
                    Brew & Beans
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-600 dark:text-stone-400 leading-relaxed">
                  Transform Your Daily Coffee Ritual Into an{' '}
                  <em className="bg-gradient-to-r from-stone-800 to-slate-700 dark:from-stone-200 dark:to-slate-300 bg-clip-text text-transparent font-medium not-italic">
                    Extraordinary Experience
                  </em>
                </h2>
              </div>
              
              {/* Value Props Card */}
              <div className="bg-gradient-to-br from-white via-slate-50/80 to-stone-50 dark:from-stone-800/90 dark:via-stone-700/80 dark:to-stone-800/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/60 dark:border-stone-700/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <p className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                  <span className="text-2xl">☕</span>
                  Why settle for ordinary when you can have exceptional?
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300">
                    <span className="text-stone-500">✓</span>
                    <span>Single-origin beans</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300">
                    <span className="text-stone-500">✓</span>
                    <span>Expert baristas</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300">
                    <span className="text-stone-500">✓</span>
                    <span>Perfect work space</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300">
                    <span className="text-stone-500">✓</span>
                    <span>2,500+ coffee lovers</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-slate-100 dark:via-stone-50 dark:to-slate-100 dark:hover:from-white dark:hover:via-slate-50 dark:hover:to-white text-white dark:text-stone-900 border-0 px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <Link to="/order-now" className="flex items-center gap-3">
                    <span className="group-hover:rotate-12 transition-transform duration-300">→</span>
                    <span>Order Now & Save 20%</span>
                  </Link>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-transparent bg-gradient-to-r from-stone-300/50 to-slate-300/50 dark:from-stone-600/50 dark:to-slate-600/50 hover:from-stone-200 hover:to-slate-200 dark:hover:from-stone-700 dark:hover:to-slate-700 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
                >
                  <Link to="/menu" className="flex items-center gap-3">
                    <span className="group-hover:rotate-12 transition-transform duration-300">📖</span>
                    <span>Explore Menu</span>
                  </Link>
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="bg-gradient-to-r from-slate-50 via-stone-50 to-slate-50 dark:from-stone-800/60 dark:via-stone-700/60 dark:to-stone-800/60 p-6 rounded-2xl border border-stone-200/50 dark:border-stone-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <p className="text-lg font-bold bg-gradient-to-r from-stone-800 to-slate-700 dark:from-stone-200 dark:to-slate-300 bg-clip-text text-transparent">
                      "Best Coffee Experience in Downtown"
                    </p>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Food & Wine Magazine 2024 • Join thousands who've already discovered us
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-8 text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
                  <div className="flex text-slate-400 dark:text-stone-500 text-lg">{"★".repeat(5)}</div>
                  <span className="font-medium">4.9/5</span>
                </div>
                <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">👥</span>
                  <span className="font-medium">2,500+ Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}

const CoffeeCard = memo(({
  children,
  className,
  borderClassName,
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-white via-slate-50/90 to-stone-50 dark:from-stone-800/80 dark:via-stone-700/80 dark:to-stone-800/80 backdrop-blur-xl relative flex size-24 rounded-2xl border border-white/60 dark:border-stone-700/50 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-110 cursor-pointer group",
        className
      )}
    >
      <div
        role="presentation"
        className={cn(
          "absolute inset-0 rounded-2xl border border-stone-200/60 dark:border-stone-600/60 group-hover:border-stone-400/80 dark:group-hover:border-stone-500/80 transition-colors duration-300",
          borderClassName
        )}
      />
      <div className="relative z-20 m-auto size-fit group-hover:scale-110 transition-transform duration-300">
        {children}
      </div>
    </div>
  );
});
