import React from "react";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function ConvexComparison() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/40 via-white/30 to-stone-50/40 dark:from-stone-900/30 dark:via-stone-800/20 dark:to-stone-900/30"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-slate-800 to-stone-900 dark:from-slate-100 dark:to-stone-50 text-white dark:text-stone-900 px-8 py-3 mb-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            <span className="mr-2">💰</span>
            <span>Save 20% During Grand Opening Week</span>
          </Badge>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            Experience Premium Coffee{' '}
            <span className="bg-gradient-to-br from-slate-800 via-stone-700 to-slate-800 dark:from-slate-200 dark:via-stone-100 dark:to-slate-200 bg-clip-text text-transparent">
              Without Premium Prices
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 max-w-5xl mx-auto font-light leading-relaxed">
            Why pay $8+ at chain stores for mediocre coffee? Get exceptional quality, perfect atmosphere, and unbeatable value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Cards with gradients */}
          <Card className="group bg-gradient-to-br from-white via-slate-50/80 to-stone-50 dark:from-stone-800/95 dark:via-stone-700/80 dark:to-stone-800/95 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/60 dark:border-stone-700/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black flex items-center gap-3">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">☕</span>
                Espresso Perfection
              </h3>
              <Badge className="bg-gradient-to-r from-stone-600 to-slate-600 dark:from-stone-400 dark:to-slate-400 text-white dark:text-stone-900 px-4 py-2 rounded-full">
                🔥 Best Sellers
              </Badge>
            </div>
            
            <div className="mb-8 h-48 bg-gradient-to-br from-slate-100 via-stone-100 to-slate-200 dark:from-stone-700 dark:via-stone-600 dark:to-slate-600 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
              <div className="text-8xl">☕</div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-slate-100 dark:via-stone-50 dark:to-slate-100 text-white dark:text-stone-900 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/order-espresso">Order Your Perfect Espresso →</Link>
            </Button>
          </Card>

          <Card className="group bg-gradient-to-br from-white via-slate-50/80 to-stone-50 dark:from-stone-800/95 dark:via-stone-700/80 dark:to-stone-800/95 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/60 dark:border-stone-700/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black flex items-center gap-3">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🌟</span>
                Premium Experience
              </h3>
              <Badge className="bg-gradient-to-r from-stone-600 to-slate-600 dark:from-stone-400 dark:to-slate-400 text-white dark:text-stone-900 px-4 py-2 rounded-full">
                ✨ Exclusive
              </Badge>
            </div>
            
            <div className="mb-8 h-48 bg-gradient-to-br from-slate-100 via-stone-100 to-slate-200 dark:from-stone-700 dark:via-stone-600 dark:to-slate-600 rounded-2xl flex items-center justify-center relative group-hover:scale-[1.02] transition-transform duration-300">
              <div className="text-8xl">🌸</div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-slate-100 dark:via-stone-50 dark:to-slate-100 text-white dark:text-stone-900 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/order-specialty">Experience Premium Coffee →</Link>
            </Button>
          </Card>
        </div>

        {/* VIP Section with gradients */}
        <Card className="group bg-gradient-to-br from-slate-50 via-white to-stone-50 dark:from-stone-800/90 dark:via-stone-700/80 dark:to-stone-800/90 rounded-3xl p-10 shadow-lg border-2 border-white/70 dark:border-stone-700/60 hover:shadow-xl transition-all duration-500 hover:scale-[1.005] mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-black bg-gradient-to-r from-slate-900 to-stone-800 dark:from-slate-100 dark:to-stone-100 bg-clip-text text-transparent mb-8">VIP Membership</h3>
              <Button className="w-full bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-slate-100 dark:via-stone-50 dark:to-slate-100 text-white dark:text-stone-900 py-6 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link to="/join-membership">Start Your VIP Experience →</Link>
              </Button>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-white via-slate-50/90 to-stone-50 dark:from-stone-800/90 dark:via-stone-700/80 dark:to-stone-800/90 backdrop-blur-xl p-8 rounded-2xl shadow-lg mb-8">
                <div className="text-6xl font-black bg-gradient-to-r from-slate-800 to-stone-700 dark:from-slate-200 dark:to-stone-300 bg-clip-text text-transparent mb-2">$89</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Final CTA with gradients */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-white via-slate-50/90 to-stone-50 dark:from-stone-800/95 dark:via-stone-700/90 dark:to-stone-800/95 backdrop-blur-xl px-12 py-10 rounded-3xl shadow-lg max-w-5xl mx-auto border border-white/60 dark:border-stone-700/50">
            <h3 className="text-4xl font-black mb-6 bg-gradient-to-br from-slate-900 via-stone-800 to-slate-900 dark:from-slate-100 dark:via-stone-100 dark:to-slate-100 bg-clip-text text-transparent">
              Ready to Join the Coffee Revolution?
            </h3>
            
            <div className="flex gap-6 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-slate-100 dark:via-stone-50 dark:to-slate-100 text-white dark:text-stone-900 px-12 py-4 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link to="/order-now">🚀 Order Now & Save 20%</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 