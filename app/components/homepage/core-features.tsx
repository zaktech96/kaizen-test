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
      description: "Carbon-neutral cups, fair trade beans, and zero waste practices. Mother Earth approves! ♻️",
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
    <section id="features" className="py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 relative overflow-hidden">
      {/* Background Coffee Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-6 left-2 sm:top-10 sm:left-4 md:top-20 md:left-20 text-4xl sm:text-6xl md:text-8xl rotate-12">☕</div>
        <div className="absolute bottom-6 right-2 sm:bottom-10 sm:right-4 md:bottom-20 md:right-20 text-4xl sm:text-6xl md:text-8xl -rotate-12">🫘</div>
      </div>
      
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <h3 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-muted-foreground px-2">
          Everything brewed to <em>perfection</em> with a side of good vibes ✨
        </h3>
        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 lg:grid-cols-2 items-center">
          {/* Graphic */}
          <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl order-2 lg:order-1">
            <div className="relative">
              <CpuArchitecture
                text="☕"
                className="w-full h-auto scale-75 sm:scale-90 md:scale-100 lg:scale-110 xl:scale-125"
              />
              {/* Fun floating elements around the graphic - responsive sizes */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4 text-base sm:text-xl md:text-2xl lg:text-3xl animate-bounce">💨</div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 md:-bottom-4 md:-left-4 text-base sm:text-xl md:text-2xl lg:text-3xl animate-pulse">🫘</div>
              <div className="absolute top-1/2 -left-2 sm:-left-4 md:-left-6 lg:-left-8 text-sm sm:text-lg md:text-xl lg:text-2xl animate-ping">⭐</div>
            </div>
          </div>
          {/* Feature list */}
          <ul className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 order-1 lg:order-2">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors group">
                <div className="group-hover:scale-110 transition-transform shrink-0 text-lg sm:text-xl md:text-2xl">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold leading-none mb-1 text-xs sm:text-sm md:text-base lg:text-lg">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Coffee stats */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center">
          <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-amber-700">500+</div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground">☕ Cups Daily</div>
          </div>
          <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-green-50 dark:bg-green-900/20 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-700">15+</div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground">🌱 Bean Origins</div>
          </div>
          <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-700">2019</div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground">📅 Since</div>
          </div>
          <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-700">100%</div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground">💝 Love</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoffeeMakingProcess() {
  const steps = [
    {
      step: "1",
      icon: "🫘",
      title: "Bean Selection",
      description: "We source premium single-origin beans from sustainable farms worldwide",
      detail: "Each bean is hand-picked at peak ripeness for optimal flavor"
    },
    {
      step: "2", 
      icon: "🔥",
      title: "Expert Roasting",
      description: "Beans are roasted fresh daily at 5 AM using our signature roasting profile",
      detail: "Temperature and timing controlled to bring out unique flavor notes"
    },
    {
      step: "3",
      icon: "⚙️", 
      title: "Precision Grinding",
      description: "Each order is ground to the perfect consistency for your brewing method",
      detail: "Burr grinders ensure uniform particle size for optimal extraction"
    },
    {
      step: "4",
      icon: "💧",
      title: "Perfect Water",
      description: "Filtered water heated to the ideal temperature (195-205°F)",
      detail: "Water quality and temperature are crucial for perfect extraction"
    },
    {
      step: "5",
      icon: "⏱️",
      title: "Brewing Magic",
      description: "Our skilled baristas use precise timing and technique for each method",
      detail: "Whether espresso, pour-over, or cold brew - each method is mastered"
    },
    {
      step: "6",
      icon: "💨",
      title: "Steam & Texture",
      description: "Milk is steamed to silky perfection for lattes and cappuccinos",
      detail: "Creating microfoam that enhances both texture and taste"
    },
    {
      step: "7",
      icon: "🎨",
      title: "Artful Presentation",
      description: "Every cup is crafted with care and finished with latte art",
      detail: "Because coffee is not just a drink, it's an experience"
    },
    {
      step: "8",
      icon: "☕",
      title: "Perfect Cup",
      description: "Your coffee is served at the perfect temperature, ready to enjoy",
      detail: "From bean to cup in under 5 minutes - coffee perfection achieved!"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/10 dark:via-orange-900/10 dark:to-yellow-900/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-amber-900 dark:text-amber-100">
            From Bean to Cup
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-2">
            Follow the journey of your coffee from carefully selected beans to the perfect cup in your hands
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 ${idx % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}>
                {/* Step Content */}
                <div className="flex-1 text-center sm:text-left max-w-full sm:max-w-none">
                  <div className={`flex flex-col sm:flex-row items-center ${idx % 2 === 1 ? 'sm:justify-end' : 'sm:justify-start'} gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4`}>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-amber-600 dark:bg-amber-500 text-white rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                        {step.step}
                      </div>
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{step.icon}</div>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-amber-900 dark:text-amber-100">
                      {step.title}
                    </h3>
                  </div>
                  <div className={`space-y-2 sm:space-y-3 ${idx % 2 === 1 ? 'sm:text-right' : 'sm:text-left'}`}>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground italic leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-shrink-0 order-first sm:order-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-800 dark:to-orange-800 rounded-full flex items-center justify-center text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl shadow-md sm:shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Connecting Line for Mobile */}
              {idx < steps.length - 1 && (
                <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                  <div className="w-0.5 h-6 sm:h-8 md:h-10 bg-gradient-to-b from-amber-300 to-orange-300 dark:from-amber-600 dark:to-orange-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-amber-600 dark:bg-amber-500 text-white rounded-full font-semibold text-xs sm:text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-amber-700 dark:hover:bg-amber-600">
            <span>Experience the Perfect Cup</span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">☕</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoffeeBeanToCupDiagram() {
  const steps = [
    { emoji: "🫘", label: "Bean" },
    { emoji: "🔥", label: "Roast" },
    { emoji: "⚙️", label: "Grind" },
    { emoji: "💧", label: "Water" },
    { emoji: "⏱️", label: "Brew" },
    { emoji: "💨", label: "Steam" },
    { emoji: "🎨", label: "Art" },
    { emoji: "☕", label: "Coffee" }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Bean to Cup Journey
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Watch your coffee transform through each carefully crafted step
          </p>
        </div>

        {/* Desktop Flow - Horizontal */}
        <div className="hidden md:flex items-center justify-center gap-2 lg:gap-4 mb-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              {/* Step Circle */}
              <div className="group relative">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 rounded-full flex items-center justify-center text-2xl lg:text-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-amber-200 dark:border-amber-700">
                  {step.emoji}
                </div>
                {/* Label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  {step.label}
                </div>
                {/* Tooltip on hover */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Step {idx + 1}
                </div>
              </div>
              
              {/* Arrow */}
              {idx < steps.length - 1 && (
                <div className="flex items-center mx-2 lg:mx-4">
                  <div className="w-6 lg:w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                  <div className="w-0 h-0 border-l-4 border-l-amber-400 border-y-2 border-y-transparent ml-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Flow - Vertical */}
        <div className="md:hidden space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-4">
              {/* Step Number */}
              <div className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                {idx + 1}
              </div>
              
              {/* Step Circle */}
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 rounded-full flex items-center justify-center text-xl shadow-md border border-amber-200 dark:border-amber-700">
                {step.emoji}
              </div>
              
              {/* Label */}
              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white text-sm">
                  {step.label}
                </div>
              </div>
              
              {/* Vertical Arrow */}
              {idx < steps.length - 1 && (
                <div className="absolute left-8 mt-12 w-0.5 h-4 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></div>
              )}
            </div>
          ))}
        </div>

        {/* Fun Facts */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <div className="text-2xl mb-2">⏱️</div>
            <div className="text-sm text-muted-foreground">5 minutes from bean to cup</div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <div className="text-2xl mb-2">🌡️</div>
            <div className="text-sm text-muted-foreground">Perfect 200°F brewing temperature</div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <div className="text-2xl mb-2">💪</div>
            <div className="text-sm text-muted-foreground">15 bar pressure for espresso</div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <div className="text-2xl mb-2">❤️</div>
            <div className="text-sm text-muted-foreground">Made with love & expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SustainabilitySection() {
  const sustainabilityFeatures = [
    {
      icon: "🌱",
      title: "Fair Trade Beans",
      description: "100% certified fair trade coffee beans sourced directly from farmers",
      detail: "Supporting farming communities with fair wages and sustainable practices",
      color: "from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      icon: "🌍",
      title: "Carbon Neutral Cups",
      description: "Fully compostable cups made from plant-based materials",
      detail: "Zero carbon footprint with biodegradable lids and straws",
      color: "from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      icon: "♻️",
      title: "Zero Waste Goal",
      description: "Committed to eliminating waste through recycling and composting",
      detail: "95% of our waste is diverted from landfills through our green initiatives",
      color: "from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20"
    },
    {
      icon: "🌿",
      title: "Organic Practices",
      description: "Chemical-free growing methods that protect soil and water",
      detail: "Certified organic beans grown without harmful pesticides or fertilizers",
      color: "from-lime-100 to-green-100 dark:from-lime-900/20 dark:to-green-900/20"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/10 dark:via-emerald-900/10 dark:to-teal-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">🌍</span>
            <span className="text-sm sm:text-base font-medium text-green-700 dark:text-green-400 uppercase tracking-wide">
              Sustainability First
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-green-900 dark:text-green-100">
            Coffee That Cares for Our Planet
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every cup you enjoy supports sustainable farming, fair trade practices, and environmental protection. 
            Together, we're brewing a better future for coffee and our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {sustainabilityFeatures.map((feature, idx) => (
            <div key={idx} className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.color} p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-3xl sm:text-4xl md:text-5xl">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  {feature.detail}
                </p>
              </div>
              {/* Decorative background element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 dark:bg-black/20 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
              Our Environmental Impact
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Real numbers from our sustainability initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                10,000+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                🌱 Trees Planted
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50K+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                ♻️ Cups Composted
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                200+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                👥 Farmers Supported
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                95%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                🗑️ Waste Diverted
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Certified Sustainable
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="text-lg">🌱</span>
              <span className="text-xs sm:text-sm font-medium">Fair Trade Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="text-lg">🌍</span>
              <span className="text-xs sm:text-sm font-medium">Carbon Neutral</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="text-lg">♻️</span>
              <span className="text-xs sm:text-sm font-medium">100% Compostable</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="text-lg">🌿</span>
              <span className="text-xs sm:text-sm font-medium">USDA Organic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 