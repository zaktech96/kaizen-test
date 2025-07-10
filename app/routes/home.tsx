import { isFeatureEnabled, isServiceEnabled } from "../../config";
import ContentSection from "~/components/homepage/content";
import CoreFeaturesSection, { CoffeeMakingProcess, CoffeeBeanToCupDiagram, SustainabilitySection } from "~/components/homepage/core-features";
import { ConvexComparison } from "~/components/homepage/convex-comparison";
import Footer from "~/components/homepage/footer";
import Integrations from "~/components/homepage/integrations";
import Pricing from "~/components/homepage/pricing";
import Team from "~/components/homepage/team";
import Testimonials from "~/components/homepage/faq";
import { api } from "../../convex/_generated/api";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Brew & Beans - Artisanal Coffee Experience";
  const description =
    "Discover exceptional coffee at Brew & Beans. From single-origin beans to expertly crafted beverages, we bring you the finest coffee experience in the city.";
  const keywords = "Coffee, Artisanal, Beans, Espresso, Cafe, Local Coffee Shop";
  const siteUrl = "https://www.brewandbeans.coffee/";
  const imageUrl =
    "https://jdj14ctwppwprnqu.public.blob.vercel-storage.com/rsk-image-FcUcfBMBgsjNLo99j3NhKV64GT2bQl.png";

  return [
    { title },
    {
      name: "description",
      content: description,
    },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:url", content: siteUrl },
    { property: "og:site_name", content: "Brew & Beans" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    {
      name: "twitter:description",
      content: description,
    },
    { name: "twitter:image", content: imageUrl },
    {
      name: "keywords",
      content: keywords,
    },
    { name: "author", content: "Brew & Beans" },
    { name: "favicon", content: imageUrl },
  ];
}

export async function loader(args: Route.LoaderArgs) {
  const authEnabled = isFeatureEnabled("auth") && isServiceEnabled("clerk");
  const convexEnabled = isFeatureEnabled("convex") && isServiceEnabled("convex");
  const paymentsEnabled = isFeatureEnabled("payments") && isServiceEnabled("polar");

  // 1. Auth: get userId if auth enabled, else null
  let userId: string | null = null;
  if (authEnabled) {
    const { getAuth } = await import("@clerk/react-router/ssr.server");
    ({ userId } = await getAuth(args));
  }

  // 2. Fetch subscription status & plans only if Convex enabled
  let subscriptionData: { hasActiveSubscription: boolean } | null = null;
  let plans: any = null;

  if (convexEnabled) {
    const { fetchQuery, fetchAction } = await import("convex/nextjs");

    const promises: Promise<any>[] = [
      userId
        ? fetchQuery(api.subscriptions.checkUserSubscriptionStatus, {
            userId,
          }).catch((error: unknown) => {
            console.error("Failed to fetch subscription data:", error);
            return null;
          })
        : Promise.resolve(null),
    ];

    // Only fetch plans if payments are enabled
    if (paymentsEnabled) {
      promises.push(fetchAction(api.subscriptions.getAvailablePlans));
    } else {
      promises.push(Promise.resolve(null));
    }

    [subscriptionData, plans] = await Promise.all(promises);
  }

  return {
    isSignedIn: !!userId,
    hasActiveSubscription: subscriptionData?.hasActiveSubscription || false,
    plans,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Integrations loaderData={loaderData} />
      <ContentSection />
      <CoreFeaturesSection />
      <CoffeeBeanToCupDiagram />
      <CoffeeMakingProcess />
      <SustainabilitySection />
      <ConvexComparison />
      <Pricing loaderData={loaderData} />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
