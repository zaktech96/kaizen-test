import { memo } from "react";
import { Link } from "react-router";
import { LogoIcon } from "~/components/logo";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { Navbar } from "./navbar";
import { Coffee, MapPin, Clock, Star } from "lucide-react";

export default function IntegrationsSection({
  loaderData,
}: {
  loaderData?: { isSignedIn: boolean; hasActiveSubscription: boolean };
}) {
  return (
    <section id="hero">
      <Navbar loaderData={loaderData} />
      <div className="bg-muted dark:bg-background py-24 md:py-32 relative overflow-hidden">
        {/* Coffee Bean Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-10 left-10 text-6xl">☕</div>
          <div className="absolute top-32 right-20 text-4xl">🫘</div>
          <div className="absolute bottom-20 left-32 text-5xl">☕</div>
          <div className="absolute bottom-40 right-10 text-3xl">🫘</div>
          <div className="absolute top-60 left-1/2 text-4xl">☕</div>
        </div>
        
        <div className="flex justify-center mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 shadow-sm">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              ☕ Freshly Roasted Daily Since 2019
            </span>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-6 mt-[2rem] relative z-10">
          <div className="grid items-center sm:grid-cols-2">
            <div className="dark:bg-muted/50 relative mx-auto w-fit">
              <div className="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"></div>
              <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                <CoffeeCard>
                  <div className="text-amber-600 text-2xl">☕</div>
                </CoffeeCard>
                <CoffeeCard>
                  <div className="text-yellow-500 text-2xl">⭐</div>
                </CoffeeCard>
              </div>
              <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                <CoffeeCard>
                  <div className="text-blue-600 text-2xl">📍</div>
                </CoffeeCard>
                <CoffeeCard
                  borderClassName="shadow-black-950/10 shadow-xl border-amber-600/50 dark:border-amber-400/50"
                  className="dark:bg-amber-900/20 bg-amber-50"
                >
                  <div className="text-4xl">🫘</div>
                </CoffeeCard>
                <CoffeeCard>
                  <div className="text-green-600 text-2xl">🕐</div>
                </CoffeeCard>
              </div>

              <div className="mx-auto flex w-fit justify-center gap-2">
                <CoffeeCard>
                  <div className="text-amber-800 text-2xl">🔥</div>
                </CoffeeCard>

                <CoffeeCard>
                  <div className="text-red-500 text-2xl">❤️</div>
                </CoffeeCard>
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-2xl space-y-6 text-center sm:mt-0 sm:text-left">
              <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                ☕ Brew & Beans
              </h2>
              <p className="text-muted-foreground text-3xl">
                Where coffee lovers unite. From first sip to last drop, <em>every moment matters</em>. ☕✨
              </p>

              <div className="flex gap-2 justify-center sm:justify-start">
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <Link to="/menu">
                    <span>📖</span>
                    <span>View Our Menu</span>
                  </Link>
                </Button>

                <Button variant="outline" size="sm" asChild className="gap-2">
                  <Link to="/location">
                    <span>🗺️</span>
                    <span>Visit Us Today</span>
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
                <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                  🎉 "Best Coffee in the City" - Downtown Food Critics 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        "bg-background relative flex size-20 rounded-xl dark:bg-transparent hover:scale-105 transition-transform duration-200",
        className
      )}
    >
      <div
        role="presentation"
        className={cn(
          "absolute inset-0 rounded-xl border border-black/20 dark:border-white/25",
          borderClassName
        )}
      />
      <div className="relative z-20 m-auto size-fit">{children}</div>
    </div>
  );
});
