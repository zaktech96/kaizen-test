"use client";
import { UserButton } from "@clerk/react-router";
import { Github, Menu, X, Loader2 } from "lucide-react";
import React, { useCallback, useState } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { ThemeToggle } from "~/components/ui/toggle";
import { cn } from "~/lib/utils";
import { config, isFeatureEnabled } from "../../../config";

const getMenuItems = () => {
  const items = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Menu", href: "/menu" },
  ];

  // Only show pricing if payments are enabled
  if (isFeatureEnabled('payments') && config.ui.showPricing) {
    items.push({ name: "Pricing", href: "#pricing" });
  }

  return items;
};

export const Navbar = ({
  loaderData,
}: {
  loaderData?: { isSignedIn: boolean; hasActiveSubscription: boolean };
}) => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isDashboardLoading, setIsDashboardLoading] = useState(false);
  const menuItems = getMenuItems();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrolled = scrollY > 20;
      setIsScrolled(scrolled);
    };
    
    // Set initial scroll state
    handleScroll();
    
    // Add multiple event listeners for better compatibility
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = useCallback((href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else if (href.startsWith("/")) {
      // For route links, let React Router handle navigation
      return;
    }
    setMenuState(false); // Close mobile menu
  }, []);

  const handleDashboardClick = useCallback(() => {
    setIsDashboardLoading(true);
  }, []);

  // Simple computations don't need useMemo
  const authEnabled = isFeatureEnabled('auth') && config.ui.showAuth;
  const paymentsEnabled = isFeatureEnabled('payments') && config.ui.showPricing;
  
  const dashboardLink = !authEnabled 
    ? "/dashboard" 
    : !loaderData?.isSignedIn 
    ? "/sign-up" 
      : loaderData.hasActiveSubscription || !paymentsEnabled 
        ? "/dashboard" 
        : "/pricing";

  const dashboardText = "Dashboard";

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-50 w-full px-2 sm:px-4"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-4 sm:px-6 lg:px-12 transition-all duration-300 relative",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg shadow-lg"
          )}
        >
          {/* Sticky Coffee Emoji - Hide on small screens */}
          <div className="absolute -left-16 sm:-left-20 lg:-left-24 top-1/2 transform -translate-y-1/2 text-4xl sm:text-5xl lg:text-6xl opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer group animate-bounce hidden sm:block">
            ☕
            {/* Steam effect */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-xs animate-bounce">💨</div>
            </div>
          </div>

          <div className="relative flex flex-wrap items-center justify-between gap-4 sm:gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                to="/"
                aria-label="home"
                className="flex items-center space-x-2 font-semibold text-xl sm:text-2xl text-muted-foreground"
                prefetch="viewport"
              >
                <div className="flex items-center space-x-2">
                  <div className="text-2xl sm:text-3xl">🫘</div>
                  <span className="hidden sm:inline">Brew & Beans</span>
                  <span className="sm:hidden">B&B</span>
                </div>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className={cn(
                  "m-auto size-6 duration-200 transition-all",
                  menuState && "rotate-180 scale-0 opacity-0"
                )} />
                <X className={cn(
                  "absolute inset-0 m-auto size-6 duration-200 transition-all",
                  menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
                )} />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-6 xl:gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.href.startsWith("/") ? (
                      <Link
                        to={item.href}
                        prefetch="intent"
                        className="hover:cursor-pointer text-muted-foreground block duration-150 transition-colors hover:text-foreground"
                      >
                        <span>{item.name}</span>
                      </Link>
                    ) : (
                      <div
                        onClick={() => handleNavClick(item.href)}
                        className="hover:cursor-pointer text-muted-foreground block duration-150 transition-colors hover:text-foreground"
                      >
                        <span>{item.name}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn(
              "mb-6 hidden w-full flex-wrap items-center justify-end space-y-6 sm:space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-4 xl:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
              "bg-background/95 backdrop-blur-xl",
              menuState && "in-data-[state=active]:block lg:in-data-[state=active]:flex"
            )}>
              <div className="lg:hidden">
                <ul className="space-y-4 sm:space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.href.startsWith("/") ? (
                        <Link
                          to={item.href}
                          prefetch="intent"
                          className="text-muted-foreground hover:text-foreground hover:cursor-pointer block duration-150 transition-colors w-full text-left py-2"
                          onClick={() => setMenuState(false)}
                        >
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className="text-muted-foreground hover:text-foreground hover:cursor-pointer block duration-150 transition-colors w-full text-left py-2"
                        >
                          <span>{item.name}</span>
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Link
                  to="https://github.com/zaktech96/kaizen-test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 hover:bg-muted rounded-md transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <ThemeToggle />
                {authEnabled && loaderData?.isSignedIn ? (
                  <div className="flex items-center gap-3">
                    <Button 
                      asChild 
                      size="sm" 
                      disabled={isDashboardLoading}
                      onClick={handleDashboardClick}
                      className="min-w-[90px]"
                    >
                      <Link to={dashboardLink} prefetch="viewport">
                        {isDashboardLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <span>{dashboardText}</span>
                        )}
                      </Link>
                    </Button>
                    <UserButton />
                  </div>
                ) : authEnabled ? (
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className={cn(
                        "w-full sm:w-auto",
                        isScrolled && "lg:hidden"
                      )}
                    >
                      <Link to="/sign-in" prefetch="viewport">
                        <span>Login</span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className={cn(
                        "w-full sm:w-auto",
                        isScrolled && "lg:hidden"
                      )}
                    >
                      <Link to="/sign-up" prefetch="viewport">
                        <span>Sign Up</span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className={cn(
                        "w-full sm:w-auto min-w-[90px]",
                        isScrolled ? "lg:inline-flex" : "hidden"
                      )}
                      disabled={isDashboardLoading}
                      onClick={handleDashboardClick}
                    >
                      <Link to={dashboardLink} prefetch="viewport">
                        {isDashboardLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <span>{dashboardText}</span>
                        )}
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <Button
                    asChild
                    size="sm"
                    className="w-full sm:w-auto min-w-[90px]"
                    disabled={isDashboardLoading}
                    onClick={handleDashboardClick}
                  >
                    <Link to={dashboardLink} prefetch="viewport">
                      {isDashboardLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <span>{dashboardText}</span>
                      )}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
