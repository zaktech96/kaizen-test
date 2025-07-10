import React from "react";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export function ConvexComparison() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 relative overflow-hidden">
      {/* Background Coffee Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl rotate-12">☕</div>
        <div className="absolute bottom-10 right-10 text-8xl -rotate-12">🫘</div>
        <div className="absolute top-1/2 left-1/4 text-6xl rotate-45">💨</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ☕ Our Signature Menu ☕
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our carefully curated selection of artisanal coffee beverages, each crafted with precision and passion 🤎
          </p>
          <div className="mt-4 flex justify-center gap-4 text-2xl">
            <span>☕</span>
            <span>🥐</span>
            <span>🧁</span>
            <span>🍵</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Espresso-based Drinks */}
          <Card className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span>☕</span>
                Espresso Classics
              </h3>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800">🔥 Most Popular</Badge>
            </div>
            
            {/* Coffee Image Placeholder */}
            <div className="mb-6 h-32 bg-gradient-to-r from-amber-200 to-orange-300 rounded-lg flex items-center justify-center">
              <div className="text-6xl">☕</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span>🎯</span>
                    Signature Espresso
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Rich, bold shot with chocolate notes - the real deal!</p>
                </div>
                <span className="font-bold text-amber-700">$3.50</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span>🥛</span>
                    Cappuccino
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Silky microfoam perfection - Instagram worthy!</p>
                </div>
                <span className="font-bold">$5.25</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span>🤍</span>
                    Flat White
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Double shot, velvety smooth - Aussie approved!</p>
                </div>
                <span className="font-bold">$5.75</span>
              </div>
            </div>
            <div className="mt-6 text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                🌱 Made with our Ethiopian single-origin beans, roasted fresh daily for optimal flavor
              </p>
            </div>
          </Card>

          {/* Pour-over & Specialty */}
          <Card className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span>🌟</span>
                Pour-over & Specialty
              </h3>
              <Badge variant="outline" className="border-purple-300 text-purple-700">✨ Limited Edition</Badge>
            </div>
            
            {/* Pour-over Image Placeholder */}
            <div className="mb-6 h-32 bg-gradient-to-r from-purple-200 to-pink-300 rounded-lg flex items-center justify-center">
              <div className="text-6xl">🌸</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span>🌸</span>
                    V60 Pour-over
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Colombian with floral notes - slow coffee for fast lives</p>
                </div>
                <span className="font-bold text-purple-700">$6.50</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span>🧊</span>
                    Cold Brew
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">16-hour brew - patience pays off!</p>
                </div>
                <span className="font-bold">$4.75</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span>🎲</span>
                    Seasonal Blend
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Mystery origins - adventure in a cup!</p>
                </div>
                <span className="font-bold">$7.25</span>
              </div>
            </div>
            <div className="mt-6 text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                ⚡ Each cup brewed to order - because good things take time
              </p>
            </div>
          </Card>

          {/* Pastries & Light Bites */}
          <Card className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span>🥐</span>
                Fresh Pastries
              </h3>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">🌅 Baked Daily</Badge>
            </div>
            
            {/* Pastries Image Placeholder */}
            <div className="mb-6 h-32 bg-gradient-to-r from-yellow-200 to-orange-300 rounded-lg flex items-center justify-center">
              <div className="text-6xl">🥐</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span>🥐</span>
                    Almond Croissant
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Buttery, flaky, heavenly - basically edible clouds</p>
                </div>
                <span className="font-bold text-orange-700">$4.25</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span>🫐</span>
                    Blueberry Muffin
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Bursting with local berries - nature's candy!</p>
                </div>
                <span className="font-bold">$3.75</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span>🥑</span>
                    Avocado Toast
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Millennial approved - yes, we know you love it!</p>
                </div>
                <span className="font-bold">$8.50</span>
              </div>
            </div>
            <div className="mt-6 text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                🌱 Baked at 5 AM daily because perfection doesn't sleep
              </p>
            </div>
          </Card>

          {/* Non-Coffee Beverages */}
          <Card className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span>🍵</span>
                Alternative Beverages
              </h3>
              <Badge variant="outline" className="border-green-300 text-green-700">🌿 Caffeine-Free</Badge>
            </div>
            
            {/* Alternative Drinks Image Placeholder */}
            <div className="mb-6 h-32 bg-gradient-to-r from-green-200 to-teal-300 rounded-lg flex items-center justify-center">
              <div className="text-6xl">🍵</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span>🫖</span>
                    Chai Latte
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Spicy, cozy, like a hug in a mug</p>
                </div>
                <span className="font-bold text-orange-700">$5.25</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span>🍵</span>
                    Matcha Latte
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Zen in a cup - straight from Japan</p>
                </div>
                <span className="font-bold">$5.75</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span>🍫</span>
                    Hot Chocolate
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Childhood memories in liquid form</p>
                </div>
                <span className="font-bold">$4.50</span>
              </div>
            </div>
            <div className="mt-6 text-center p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                💝 Perfect for non-coffee lovers who still want the café experience
              </p>
            </div>
          </Card>
        </div>
        
        {/* Fun Coffee Facts */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl">📊</span>
            <span className="text-sm font-medium">Fun fact: We serve over 500 cups daily!</span>
            <span className="text-2xl">☕</span>
          </div>
        </div>
      </div>
    </section>
  );
} 