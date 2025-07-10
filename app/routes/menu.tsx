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
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-[0.03] dark:opacity-[0.15] will-change-transform">☕</div>
          <div className="absolute top-32 right-20 text-4xl animate-pulse opacity-[0.03] dark:opacity-[0.15] will-change-opacity">🫘</div>
          <div className="absolute bottom-20 left-32 text-5xl animate-bounce opacity-[0.03] dark:opacity-[0.15] will-change-transform">☕</div>
          <div className="absolute bottom-40 right-10 text-3xl animate-pulse opacity-[0.03] dark:opacity-[0.15] will-change-opacity">🫘</div>
          <div className="absolute top-60 left-1/2 text-4xl animate-bounce opacity-[0.03] dark:opacity-[0.15] will-change-transform" style={{ animationDelay: '1s' }}>☕</div>
          <div className="absolute top-40 right-1/3 text-3xl animate-pulse opacity-[0.03] dark:opacity-[0.15] will-change-opacity" style={{ animationDelay: '2s' }}>🫘</div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/30 dark:via-slate-800/30 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-slate-800 to-stone-900 dark:from-amber-600 dark:to-orange-700 text-white px-8 py-3 mb-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm will-change-transform">
              <span className="mr-2">☕</span>
              <span>Handcrafted Daily - Fresh Roasted Beans</span>
            </Badge>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-br from-slate-900 via-stone-800 to-slate-900 dark:from-amber-200 dark:via-orange-100 dark:to-amber-200 bg-clip-text text-transparent">
                Our Coffee Menu
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-4xl mx-auto font-light leading-relaxed">
              From bold espressos to creamy lattes - every cup tells a story of passion, quality, and craftsmanship
            </p>
            
            {/* Coffee Quality Indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-stone-800/80 rounded-full backdrop-blur-sm">
                <span className="text-2xl">🌱</span>
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">Single Origin</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-stone-800/80 rounded-full backdrop-blur-sm">
                <span className="text-2xl">🔥</span>
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">Fresh Roasted</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-stone-800/80 rounded-full backdrop-blur-sm">
                <span className="text-2xl">👨‍🍳</span>
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">Expert Baristas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            {/* Category Navigation */}
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-gradient-to-br from-white via-slate-50/80 to-stone-50 dark:from-slate-800/80 dark:via-stone-800/80 dark:to-slate-700/80 backdrop-blur-xl p-2 rounded-2xl shadow-lg mb-12">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center gap-2 py-4 px-6 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-900 data-[state=active]:via-stone-900 data-[state=active]:to-slate-800 data-[state=active]:text-white data-[state=active]:shadow-lg text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-200 dark:data-[state=active]:from-amber-600 dark:data-[state=active]:via-orange-700 dark:data-[state=active]:to-amber-600 will-change-transform"
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span>{category.label}</span>
                  <Badge variant="secondary" className="text-xs bg-gradient-to-r from-stone-200 to-slate-200 dark:from-stone-700 dark:to-slate-700 text-stone-700 dark:text-stone-300">
                    {category.count} items
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Menu Items */}
            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {currentItems.map((item) => (
                  <Card key={item.id} className="group bg-gradient-to-br from-white via-slate-50/80 to-stone-50 dark:from-slate-800/90 dark:via-stone-800/80 dark:to-slate-700/90 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 overflow-hidden will-change-transform cursor-pointer">
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-stone-100 to-slate-200 dark:from-stone-700 dark:to-slate-600">
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
                      <div className="absolute inset-0 hidden items-center justify-center text-8xl text-stone-600 dark:text-stone-400">
                        ☕
                      </div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-white/95 dark:bg-stone-800/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-bold text-stone-900 dark:text-stone-100">{item.rating}</span>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {item.badges.slice(0, 2).map((badge, idx) => (
                          <Badge key={idx} className="bg-white/95 dark:bg-stone-800/95 text-stone-900 dark:text-stone-100 text-xs px-3 py-1 rounded-full backdrop-blur-sm shadow-lg font-medium transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 100}ms` }}>
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-6 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                      {/* Item Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-colors duration-300">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-stone-700 dark:text-stone-300">
                            <div className="flex items-center gap-1 group-hover:text-stone-600 dark:group-hover:text-stone-400 transition-colors duration-300">
                              <Clock size={14} className="text-stone-600 dark:text-stone-400" />
                              <span>{item.preparationTime}</span>
                            </div>
                            <div className="px-2 py-1 bg-stone-200 dark:bg-stone-700 rounded-md text-xs font-medium text-stone-800 dark:text-stone-200 group-hover:bg-stone-300 dark:group-hover:bg-stone-600 transition-colors duration-300">
                              {item.category}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black text-stone-900 dark:text-stone-100 group-hover:scale-105 transition-transform duration-300">{item.price}</div>
                          {item.originalPrice && (
                            <div className="text-sm text-stone-600 dark:text-stone-400 line-through">{item.originalPrice}</div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-stone-800 dark:text-stone-200 mb-4 leading-relaxed font-medium group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors duration-300">{item.description}</p>

                      {/* Customizations */}
                      {item.customizations && (
                        <div className="mb-4">
                          <p className="text-xs text-stone-700 dark:text-stone-300 mb-2 font-medium">Customizable:</p>
                          <div className="flex flex-wrap gap-1">
                            {item.customizations.map((customization, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700 font-medium hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors duration-200">
                                {customization}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.allergens && (
                        <div className="mb-4">
                          <p className="text-xs text-stone-700 dark:text-stone-300 mb-2 font-medium">Contains:</p>
                          <div className="flex flex-wrap gap-1">
                            {item.allergens.map((allergen, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs px-2 py-1 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800 font-medium">
                                {allergen}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Order Button */}
                      <Button className="w-full bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-amber-600 dark:via-orange-700 dark:to-amber-600 dark:hover:from-amber-700 dark:hover:via-orange-800 dark:hover:to-amber-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group/btn will-change-transform">
                        <Link to="/order" prefetch="intent" className="flex items-center justify-center gap-2">
                          <span className="group-hover/btn:rotate-12 transition-transform duration-200 will-change-transform">🛒</span>
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
          <div className="bg-gradient-to-br from-white via-slate-50/90 to-stone-50 dark:from-slate-800/90 dark:via-stone-800/80 dark:to-slate-700/90 backdrop-blur-xl p-12 rounded-3xl shadow-lg border border-white/60 dark:border-slate-700/50">
            <div className="text-5xl mb-6">🎉</div>
            <h2 className="text-4xl font-black mb-6 bg-gradient-to-br from-slate-900 via-stone-800 to-slate-900 dark:from-amber-200 dark:via-orange-100 dark:to-amber-200 bg-clip-text text-transparent">
              Ready to Order?
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 mb-8">
              Order ahead for pickup or enjoy in our cozy café space
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-amber-600 dark:via-orange-700 dark:to-amber-600 dark:hover:from-amber-700 dark:hover:via-orange-800 dark:hover:to-amber-700 text-white px-12 py-4 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 will-change-transform">
                <Link to="/order" prefetch="intent">🚀 Order Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-stone-300 dark:border-amber-600 bg-gradient-to-r from-stone-100/50 to-slate-100/50 dark:from-stone-800/50 dark:to-slate-800/50 hover:from-stone-200 hover:to-slate-200 dark:hover:from-stone-700 dark:hover:to-slate-700 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 px-12 py-4 text-xl font-bold rounded-full transition-all duration-200 hover:scale-105 backdrop-blur-sm will-change-transform">
                <Link to="/visit" prefetch="intent">📍 Visit Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 