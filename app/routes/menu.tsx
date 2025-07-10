import type { MetaFunction } from "react-router";
import { useState, useMemo } from "react";
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

  const menuCategories = useMemo(() => [
    { id: "coffee", label: "Coffee", icon: "☕", count: 12 },
    { id: "specialty", label: "Specialty Drinks", icon: "🌟", count: 8 },
    { id: "pastries", label: "Fresh Pastries", icon: "🥐", count: 10 },
    { id: "healthy", label: "Healthy Options", icon: "🥗", count: 6 },
    { id: "seasonal", label: "Seasonal", icon: "🍂", count: 4 },
  ], []);

  const coffeeItems = useMemo(() => [
    {
      id: 1,
      name: "Signature Espresso",
      description: "Rich Ethiopian single-origin with notes of dark chocolate and citrus",
      price: "$3.50",
      originalPrice: "$4.20",
      image: "https://images.unsplash.com/photo-1521302200778-33500795e128?w=400&h=400&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=400&h=400&fit=crop&crop=center",
      badges: ["🏆 Award Winner", "⏱️ 6 min"],
      category: "Pour-over",
      preparationTime: "6-8 min",
      rating: 5.0,
      customizations: ["Grind Size", "Water Temp", "Bloom Time"],
      allergens: ["None"]
    }
  ], []);

  const specialtyItems = useMemo(() => [
    {
      id: 5,
      name: "16-Hour Cold Brew",
      description: "Smooth, low-acid, concentrated perfection over ice",
      price: "$4.75",
      originalPrice: "$5.75",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=400&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop&crop=center",
      badges: ["💚 Superfood", "🌱 Plant-based"],
      category: "Alternative",
      preparationTime: "3-4 min",
      rating: 4.5,
      customizations: ["Matcha Strength", "Sweetness", "Milk Type"],
      allergens: ["None"]
    }
  ], []);

  const pastryItems = useMemo(() => [
    {
      id: 9,
      name: "Butter Croissant",
      description: "Flaky, buttery layers baked fresh every morning",
      price: "$3.25",
      originalPrice: "$4.50",
      image: "https://images.unsplash.com/photo-1555507036-ab794f0eeeed?w=400&h=400&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=400&fit=crop&crop=center",
      badges: ["🍋 Zesty", "🫐 Fresh Berries"],
      category: "Sweet",
      preparationTime: "Ready now",
      rating: 4.6,
      customizations: ["Glazed", "Extra Berries"],
      allergens: ["Gluten", "Dairy"]
    }
  ], []);

  const healthyItems = useMemo(() => [
    {
      id: 13,
      name: "Quinoa Power Bowl",
      description: "Organic quinoa with roasted vegetables and tahini dressing",
      price: "$12.50",
      originalPrice: "$15.00",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop&crop=center",
      badges: ["🌱 Vegan", "💪 High Protein"],
      category: "Bowl",
      preparationTime: "8-10 min",
      rating: 4.8,
      customizations: ["Dressing", "Extra Veggies"],
      allergens: ["Sesame"]
    },
    {
      id: 14,
      name: "Green Goddess Smoothie",
      description: "Spinach, mango, coconut milk, and chia seeds",
      price: "$7.75",
      originalPrice: "$9.50",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop&crop=center",
      badges: ["🌿 Superfood", "🥭 Tropical"],
      category: "Smoothie",
      preparationTime: "3-4 min",
      rating: 4.5,
      customizations: ["Extra Protein", "Sweetness"],
      allergens: ["None"]
    }
  ], []);

  const seasonalItems = useMemo(() => [
    {
      id: 15,
      name: "Pumpkin Spice Latte",
      description: "House-made pumpkin spice with steamed milk and whipped cream",
      price: "$6.50",
      originalPrice: "$8.00",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop&crop=center",
      badges: ["🍂 Fall Special", "🌟 Limited Time"],
      category: "Seasonal",
      preparationTime: "4-5 min",
      rating: 4.7,
      customizations: ["Spice Level", "Milk Type", "Whipped Cream"],
      allergens: ["Dairy"]
    },
    {
      id: 16,
      name: "Gingerbread Cookie",
      description: "Soft-baked with warm spices and royal icing",
      price: "$3.75",
      originalPrice: "$4.50",
      image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=400&h=400&fit=crop&crop=center",
      badges: ["🎄 Holiday Special"],
      category: "Sweet",
      preparationTime: "Ready now",
      rating: 4.4,
      customizations: ["Icing", "Extra Spices"],
      allergens: ["Gluten", "Dairy", "Eggs"]
    }
  ], []);

  const getCurrentItems = () => {
    switch (selectedCategory) {
      case "coffee":
        return coffeeItems;
      case "specialty":
        return specialtyItems;
      case "pastries":
        return pastryItems;
      case "healthy":
        return healthyItems;
      case "seasonal":
        return seasonalItems;
      default:
        return coffeeItems;
    }
  };

  const currentItems = getCurrentItems();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50/80 dark:from-slate-900 dark:via-stone-900 dark:to-slate-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-4xl sm:text-5xl md:text-6xl animate-bounce opacity-[0.03] dark:opacity-[0.15] will-change-transform">☕</div>
          <div className="absolute top-32 right-20 text-2xl sm:text-3xl md:text-4xl animate-pulse opacity-[0.03] dark:opacity-[0.15] will-change-opacity">🫘</div>
          <div className="absolute bottom-20 left-32 text-3xl sm:text-4xl md:text-5xl animate-bounce opacity-[0.03] dark:opacity-[0.15] will-change-transform">☕</div>
          <div className="absolute bottom-40 right-10 text-2xl sm:text-3xl animate-pulse opacity-[0.03] dark:opacity-[0.15] will-change-opacity">🫘</div>
          <div className="absolute top-60 left-1/2 text-2xl sm:text-3xl md:text-4xl animate-bounce opacity-[0.03] dark:opacity-[0.15] will-change-transform" style={{ animationDelay: '1s' }}>☕</div>
          <div className="absolute top-40 right-1/3 text-2xl sm:text-3xl animate-pulse opacity-[0.03] dark:opacity-[0.15] will-change-opacity" style={{ animationDelay: '2s' }}>🫘</div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/30 dark:via-slate-800/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge className="bg-gradient-to-r from-slate-800 to-stone-900 dark:from-amber-600 dark:to-orange-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 mb-6 sm:mb-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm will-change-transform">
              <span className="mr-2">☕</span>
              <span className="text-sm sm:text-base">Handcrafted Daily - Fresh Roasted Beans</span>
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight px-4">
              <span className="bg-gradient-to-br from-slate-900 via-stone-800 to-slate-900 dark:from-amber-200 dark:via-orange-100 dark:to-amber-200 bg-clip-text text-transparent">
                Our Coffee Menu
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
              From bold espressos to creamy lattes - every cup tells a story of passion, quality, and craftsmanship
            </p>
            
            {/* Coffee Quality Indicators */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 px-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-white/60 to-slate-50/60 dark:from-slate-800/60 dark:to-stone-800/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm">
                <Star className="text-amber-500 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium text-stone-700 dark:text-stone-300">Single Origin</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-white/60 to-slate-50/60 dark:from-slate-800/60 dark:to-stone-800/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm">
                <Flame className="text-red-500 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium text-stone-700 dark:text-stone-300">Fresh Roasted</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-white/60 to-slate-50/60 dark:from-slate-800/60 dark:to-stone-800/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm">
                <Leaf className="text-green-500 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium text-stone-700 dark:text-stone-300">Organic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            {/* Category Navigation */}
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 bg-gradient-to-br from-white via-slate-50/80 to-stone-50 dark:from-slate-800/80 dark:via-stone-800/80 dark:to-slate-700/80 backdrop-blur-xl p-2 sm:p-3 rounded-2xl shadow-lg mb-8 sm:mb-12">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center gap-1 sm:gap-2 py-3 sm:py-4 px-2 sm:px-4 lg:px-6 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-900 data-[state=active]:via-stone-900 data-[state=active]:to-slate-800 data-[state=active]:text-white data-[state=active]:shadow-lg text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-200 dark:data-[state=active]:from-amber-600 dark:data-[state=active]:via-orange-700 dark:data-[state=active]:to-amber-600 will-change-transform"
                >
                  <span className="text-xl sm:text-2xl">{category.icon}</span>
                  <span className="text-center leading-tight">{category.label}</span>
                  <Badge variant="secondary" className="text-xs bg-gradient-to-r from-stone-200 to-slate-200 dark:from-stone-700 dark:to-slate-700 text-stone-700 dark:text-stone-300 px-2 py-0.5">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Menu Items */}
            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {currentItems.map((item) => (
                  <Card key={item.id} className="group bg-gradient-to-br from-white via-slate-50/80 to-stone-50 dark:from-slate-800/90 dark:via-stone-800/80 dark:to-slate-700/90 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-[1.03] hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden will-change-transform cursor-pointer">
                    {/* Product Image */}
                    <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-stone-100 to-slate-200 dark:from-stone-700 dark:to-slate-600">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to a coffee bean icon if image fails to load
                          e.currentTarget.style.display = 'none';
                          const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallbackElement) {
                            fallbackElement.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback icon */}
                      <div className="absolute inset-0 hidden items-center justify-center text-6xl sm:text-8xl text-stone-600 dark:text-stone-400">
                        ☕
                      </div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 sm:px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                          <span className="text-xs sm:text-sm font-bold">{item.rating}</span>
                        </div>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1 sm:gap-2">
                        {item.badges.map((badge, index) => (
                          <Badge 
                            key={index} 
                            className="bg-gradient-to-r from-slate-900/90 to-stone-900/90 dark:from-amber-600/90 dark:to-orange-700/90 text-white backdrop-blur-sm text-xs px-2 py-1 shadow-md"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 mb-1 sm:mb-2 line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <span className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100">
                            {item.price}
                          </span>
                          <span className="text-xs sm:text-sm text-stone-500 dark:text-stone-500 line-through">
                            {item.originalPrice}
                          </span>
                        </div>
                      </div>
                      
                      {/* Meta Info */}
                      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{item.preparationTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Coffee className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{item.category}</span>
                        </div>
                      </div>
                      
                      {/* Customizations */}
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {item.customizations.slice(0, 3).map((customization, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="text-xs px-2 py-1 bg-gradient-to-r from-stone-50 to-slate-50 dark:from-stone-800 dark:to-slate-800 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700"
                          >
                            {customization}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Order Button */}
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-amber-600 dark:via-orange-700 dark:to-amber-600 dark:hover:from-amber-700 dark:hover:via-orange-800 dark:hover:to-amber-700 text-white font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl will-change-transform"
                      >
                        <span className="text-sm sm:text-base">Add to Cart</span>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="bg-gradient-to-br from-white via-slate-50/90 to-stone-50 dark:from-slate-800/90 dark:via-stone-800/80 dark:to-slate-700/90 backdrop-blur-xl p-8 sm:p-10 lg:p-12 rounded-3xl shadow-lg border border-white/60 dark:border-slate-700/50">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">🎉</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 bg-gradient-to-br from-slate-900 via-stone-800 to-slate-900 dark:from-amber-200 dark:via-orange-100 dark:to-amber-200 bg-clip-text text-transparent">
              Ready to Order?
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Order ahead for pickup or enjoy in our cozy café space
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-amber-600 dark:via-orange-700 dark:to-amber-600 dark:hover:from-amber-700 dark:hover:via-orange-800 dark:hover:to-amber-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 will-change-transform">
                <Link to="/order" prefetch="intent" className="flex items-center justify-center gap-2">
                  <span>🚀</span>
                  <span>Order Now</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-stone-300 dark:border-amber-600 bg-gradient-to-r from-stone-100/50 to-slate-100/50 dark:from-stone-800/50 dark:to-slate-800/50 hover:from-stone-200 hover:to-slate-200 dark:hover:from-stone-700 dark:hover:to-slate-700 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-full transition-all duration-200 hover:scale-105 backdrop-blur-sm will-change-transform">
                <Link to="/visit" prefetch="intent" className="flex items-center justify-center gap-2">
                  <span>📍</span>
                  <span>Visit Us</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 