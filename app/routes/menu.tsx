import type { MetaFunction } from "react-router";
import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Navbar } from "~/components/homepage/navbar";
import { Clock, Star, Flame, Leaf, Coffee, Cake, Sandwich, Milk } from "lucide-react";
import { Link } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Menu - Brew & Beans | Artisanal Coffee Experience" },
    { name: "description", content: "Explore our premium coffee menu featuring single-origin espresso, pour-over specialties, fresh pastries, and healthy options. Order online for pickup or delivery." },
  ];
};

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("coffee");

  const menuCategories = [
    { id: "coffee", label: "Coffee", icon: "☕", count: 12 },
    { id: "specialty", label: "Specialty Drinks", icon: "🌟", count: 8 },
    { id: "pastries", label: "Fresh Pastries", icon: "🥐", count: 10 },
    { id: "healthy", label: "Healthy Options", icon: "🥗", count: 6 },
    { id: "seasonal", label: "Seasonal", icon: "🍂", count: 4 },
  ];

  const coffeeItems = [
    {
      id: 1,
      name: "Signature Espresso",
      description: "Rich Ethiopian single-origin with notes of dark chocolate and citrus",
      price: "$3.50",
      originalPrice: "$4.20",
      image: "☕",
      badges: ["🔥 Popular", "🌱 Organic"],
      category: "Espresso",
      preparationTime: "2-3 min",
      rating: 4.9,
      customizations: ["Extra Shot", "Decaf", "Oat Milk"],
      allergens: ["None"]
    },
    {
      id: 2,
      name: "Perfect Cappuccino",
      description: "Double shot with microfoam art, steamed to perfection",
      price: "$5.25",
      originalPrice: "$6.25",
      image: "🥛",
      badges: ["📸 Instagram Worthy"],
      category: "Milk-based",
      preparationTime: "4-5 min",
      rating: 4.8,
      customizations: ["Size Options", "Milk Choice", "Foam Level"],
      allergens: ["Dairy"]
    },
    {
      id: 3,
      name: "Flat White Perfection",
      description: "Double shot with velvety microfoam, Australian-style",
      price: "$5.75",
      originalPrice: "$6.75",
      image: "🤍",
      badges: ["🇦🇺 Authentic"],
      category: "Milk-based",
      preparationTime: "4-5 min",
      rating: 4.9,
      customizations: ["Milk Type", "Temperature", "Strength"],
      allergens: ["Dairy"]
    },
    {
      id: 4,
      name: "V60 Pour-over",
      description: "Single-origin Colombian, floral notes, hand-brewed perfection",
      price: "$6.50",
      originalPrice: "$7.80",
      image: "🌸",
      badges: ["🏆 Award Winner", "⏱️ 6 min"],
      category: "Pour-over",
      preparationTime: "6-8 min",
      rating: 5.0,
      customizations: ["Grind Size", "Water Temp", "Bloom Time"],
      allergens: ["None"]
    }
  ];

  const specialtyItems = [
    {
      id: 5,
      name: "16-Hour Cold Brew",
      description: "Smooth, low-acid, concentrated perfection over ice",
      price: "$4.75",
      originalPrice: "$5.75",
      image: "🧊",
      badges: ["❄️ Refreshing"],
      category: "Cold",
      preparationTime: "Ready now",
      rating: 4.7,
      customizations: ["Ice Level", "Milk Addition", "Flavor Shots"],
      allergens: ["None"]
    },
    {
      id: 6,
      name: "Lavender Honey Latte",
      description: "House-made lavender syrup with local wildflower honey",
      price: "$6.25",
      originalPrice: "$7.50",
      image: "💜",
      badges: ["🌸 Floral", "🍯 Local Honey"],
      category: "Flavored",
      preparationTime: "5-6 min",
      rating: 4.6,
      customizations: ["Sweetness Level", "Milk Choice", "Extra Lavender"],
      allergens: ["Dairy"]
    },
    {
      id: 7,
      name: "Maple Cinnamon Macchiato",
      description: "Espresso with maple syrup, steamed milk, and cinnamon dust",
      price: "$5.95",
      originalPrice: "$7.20",
      image: "🍁",
      badges: ["🍂 Autumn Vibes"],
      category: "Seasonal",
      preparationTime: "4-5 min",
      rating: 4.8,
      customizations: ["Maple Level", "Extra Cinnamon", "Whipped Cream"],
      allergens: ["Dairy"]
    },
    {
      id: 8,
      name: "Matcha White Chocolate",
      description: "Premium ceremonial matcha with white chocolate and oat milk",
      price: "$6.75",
      originalPrice: "$8.25",
      image: "🍵",
      badges: ["💚 Superfood", "🌱 Plant-based"],
      category: "Alternative",
      preparationTime: "3-4 min",
      rating: 4.5,
      customizations: ["Matcha Strength", "Sweetness", "Milk Type"],
      allergens: ["None"]
    }
  ];

  const pastryItems = [
    {
      id: 9,
      name: "Butter Croissant",
      description: "Flaky, buttery layers baked fresh every morning",
      price: "$3.25",
      originalPrice: "$4.50",
      image: "🥐",
      badges: ["🌅 Fresh Daily"],
      category: "Classic",
      preparationTime: "Ready now",
      rating: 4.9,
      customizations: ["Temperature", "Butter Amount"],
      allergens: ["Gluten", "Dairy"]
    },
    {
      id: 10,
      name: "Almond Pain au Chocolat",
      description: "Classic chocolate croissant with toasted almonds",
      price: "$4.75",
      originalPrice: "$6.00",
      image: "🍫",
      badges: ["🥜 Nutty", "🍫 Premium Chocolate"],
      category: "Sweet",
      preparationTime: "Ready now",
      rating: 4.8,
      customizations: ["Warming", "Extra Almonds"],
      allergens: ["Gluten", "Dairy", "Nuts"]
    },
    {
      id: 11,
      name: "Avocado Toast Supreme",
      description: "Smashed avocado, cherry tomatoes, hemp seeds on sourdough",
      price: "$8.50",
      originalPrice: "$11.00",
      image: "🥑",
      badges: ["🌱 Vegan", "💪 Protein"],
      category: "Healthy",
      preparationTime: "5-7 min",
      rating: 4.7,
      customizations: ["Spice Level", "Extra Toppings"],
      allergens: ["Gluten"]
    },
    {
      id: 12,
      name: "Blueberry Lemon Scone",
      description: "Fresh blueberries with lemon zest and vanilla glaze",
      price: "$4.25",
      originalPrice: "$5.75",
      image: "🫐",
      badges: ["🍋 Zesty", "🫐 Fresh Berries"],
      category: "Sweet",
      preparationTime: "Ready now",
      rating: 4.6,
      customizations: ["Warming", "Extra Glaze"],
      allergens: ["Gluten", "Dairy", "Eggs"]
    }
  ];

  const getCurrentItems = () => {
    switch (selectedCategory) {
      case "coffee":
        return coffeeItems;
      case "specialty":
        return specialtyItems;
      case "pastries":
        return pastryItems.slice(0, 4);
      case "healthy":
        return pastryItems.filter(item => item.badges.some(badge => badge.includes("Vegan") || badge.includes("Protein")));
      case "seasonal":
        return [...coffeeItems.filter(item => item.category === "Seasonal"), ...specialtyItems.filter(item => item.category === "Seasonal")];
      default:
        return coffeeItems;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50/80 dark:from-gray-900 dark:via-gray-800/60 dark:to-gray-850/80">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-[0.03] dark:opacity-[0.08]">☕</div>
          <div className="absolute top-32 right-20 text-4xl animate-pulse opacity-[0.03] dark:opacity-[0.08]">🥐</div>
          <div className="absolute bottom-20 left-32 text-5xl animate-bounce opacity-[0.03] dark:opacity-[0.08]">🌟</div>
          <div className="absolute bottom-40 right-10 text-3xl animate-pulse opacity-[0.03] dark:opacity-[0.08]">🫐</div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/30 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-slate-800 to-stone-900 dark:from-slate-100 dark:to-stone-50 text-white dark:text-stone-900 px-8 py-3 mb-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <span className="mr-2">🍽️</span>
              <span>Grand Opening - 20% Off Everything!</span>
            </Badge>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-br from-slate-900 via-stone-800 to-slate-900 dark:from-slate-100 dark:via-stone-50 dark:to-slate-100 bg-clip-text text-transparent">
                Our Menu
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 max-w-4xl mx-auto font-light leading-relaxed">
              Handcrafted beverages, fresh pastries, and healthy options made with love and premium ingredients
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            {/* Category Navigation */}
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-gradient-to-br from-white via-slate-50/80 to-stone-50 dark:from-stone-800/80 dark:via-stone-700/80 dark:to-stone-800/80 backdrop-blur-xl p-2 rounded-2xl shadow-lg mb-12">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center gap-2 py-4 px-6 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-900 data-[state=active]:via-stone-900 data-[state=active]:to-slate-800 data-[state=active]:text-white data-[state=active]:shadow-lg"
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span>{category.label}</span>
                  <Badge variant="secondary" className="text-xs bg-gradient-to-r from-stone-200 to-slate-200 dark:from-stone-600 dark:to-slate-600">
                    {category.count} items
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Menu Items */}
            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getCurrentItems().map((item) => (
                  <Card
                    key={item.id}
                    className="group bg-gradient-to-br from-white via-slate-50/80 to-stone-50 dark:from-stone-800/90 dark:via-stone-700/80 dark:to-stone-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-white/60 dark:border-stone-700/50"
                  >
                    {/* Item Image */}
                    <div className="h-48 bg-gradient-to-br from-slate-100 via-stone-100 to-slate-200 dark:from-stone-700/80 dark:via-stone-600/80 dark:to-slate-600/80 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                        {item.image}
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {item.badges.slice(0, 2).map((badge, idx) => (
                          <Badge
                            key={idx}
                            className="bg-gradient-to-r from-white/95 via-slate-50/95 to-stone-50/95 dark:from-stone-700/95 dark:via-stone-600/95 dark:to-stone-700/95 text-stone-800 dark:text-stone-200 text-xs px-2 py-1 rounded-full shadow-md backdrop-blur-sm"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Rating */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-white/95 to-slate-50/95 dark:from-stone-700/95 dark:to-stone-600/95 rounded-full px-3 py-1 flex items-center gap-1 backdrop-blur-sm">
                        <Star className="w-3 h-3 text-slate-500 dark:text-stone-400 fill-current" />
                        <span className="text-xs font-bold text-stone-800 dark:text-stone-200">{item.rating}</span>
                      </div>
                    </div>
                    
                    {/* Item Details */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-stone-900 to-slate-800 dark:from-stone-100 dark:to-slate-200 bg-clip-text text-transparent group-hover:from-slate-700 group-hover:to-stone-600 transition-all duration-300">
                          {item.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-lg line-through text-stone-400 dark:text-stone-500 text-sm">
                            {item.originalPrice}
                          </div>
                          <div className="text-2xl font-black bg-gradient-to-r from-slate-800 to-stone-700 dark:from-slate-200 dark:to-stone-300 bg-clip-text text-transparent">
                            {item.price}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-stone-600 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Category & Prep Time */}
                      <div className="flex items-center gap-4 mb-4 text-xs text-stone-500 dark:text-stone-400">
                        <div className="flex items-center gap-1">
                          <Coffee className="w-3 h-3" />
                          <span>{item.category}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{item.preparationTime}</span>
                        </div>
                      </div>
                      
                      {/* Customizations */}
                      {item.customizations && (
                        <div className="mb-4">
                          <p className="text-xs text-stone-500 dark:text-stone-400 mb-2">Customizations:</p>
                          <div className="flex flex-wrap gap-1">
                            {item.customizations.slice(0, 3).map((custom, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs px-2 py-1 bg-gradient-to-r from-stone-100 to-slate-100 dark:from-stone-700 dark:to-slate-700 border-stone-300 dark:border-stone-600">
                                {custom}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Allergens */}
                      {item.allergens && (
                        <div className="mb-4">
                          <p className="text-xs text-stone-500 dark:text-stone-400 mb-2">Contains:</p>
                          <div className="flex flex-wrap gap-1">
                            {item.allergens.map((allergen, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs px-2 py-1 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 text-red-700 dark:text-red-300">
                                {allergen}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Order Button */}
                      <Button className="w-full bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-slate-100 dark:via-stone-50 dark:to-slate-100 dark:hover:from-white dark:hover:via-slate-50 dark:hover:to-white text-white dark:text-stone-900 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/btn">
                        <Link to="/order" className="flex items-center justify-center gap-2">
                          <span className="group-hover/btn:rotate-12 transition-transform duration-300">🛒</span>
                          <span>Add to Order</span>
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="bg-gradient-to-br from-white via-slate-50/90 to-stone-50 dark:from-stone-800/90 dark:via-stone-700/80 dark:to-stone-800/90 backdrop-blur-xl p-12 rounded-3xl shadow-lg border border-white/60 dark:border-stone-700/50">
            <div className="text-5xl mb-6">🎉</div>
            <h2 className="text-4xl font-black mb-6 bg-gradient-to-br from-slate-900 via-stone-800 to-slate-900 dark:from-slate-100 dark:via-stone-100 dark:to-slate-100 bg-clip-text text-transparent">
              Ready to Order?
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 mb-8">
              Order ahead for pickup or enjoy in our cozy café space
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-slate-100 dark:via-stone-50 dark:to-slate-100 dark:hover:from-white dark:hover:via-slate-50 dark:hover:to-white text-white dark:text-stone-900 px-12 py-4 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link to="/order">🚀 Order Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-transparent bg-gradient-to-r from-stone-300/50 to-slate-300/50 dark:from-stone-600/50 dark:to-slate-600/50 hover:from-stone-200 hover:to-slate-200 dark:hover:from-stone-700 dark:hover:to-slate-700 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 px-12 py-4 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <Link to="/visit">📍 Visit Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 