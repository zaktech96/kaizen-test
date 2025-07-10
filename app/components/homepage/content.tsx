import { Button } from "~/components/ui/button";
import { ChevronRight, Clock, Users, Award } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "~/components/ui/badge";

export default function ContentSection() {
  return (
    <section id="content" className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-white/20 to-stone-50/30 dark:from-stone-800/20 dark:via-stone-700/20 dark:to-stone-800/20"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge className="bg-gradient-to-r from-slate-800 to-stone-900 dark:from-slate-100 dark:to-stone-50 text-white dark:text-stone-900 px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            <span className="mr-2">🔥</span>
            <span className="text-sm sm:text-base">Limited Time: Grand Opening Celebration</span>
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight px-4">
            Why{' '}
            <span className="bg-gradient-to-br from-slate-800 via-stone-700 to-slate-800 dark:from-slate-200 dark:via-stone-100 dark:to-slate-200 bg-clip-text text-transparent">
              2,500+ Coffee Lovers
            </span>{' '}
            Choose Us
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-stone-600 dark:text-stone-400 max-w-4xl mx-auto font-light px-4">
            Don't settle for mediocre coffee. Experience the difference that authentic craftsmanship makes.
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 mb-12 sm:mb-16">
          {/* Value Prop Cards */}
          <div className="group bg-gradient-to-br from-white via-slate-50/80 to-stone-50 dark:from-stone-800/90 dark:via-stone-700/80 dark:to-stone-800/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/60 dark:border-stone-700/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 sm:hover:-translate-y-2">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">🌍</div>
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-stone-900 to-slate-800 dark:from-stone-100 dark:to-slate-200 bg-clip-text text-transparent">Direct Trade</h3>
                <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                  We work directly with <strong>15+ small farms</strong> across Ethiopia, Colombia, and Guatemala. Every cup supports sustainable farming.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white via-slate-50/80 to-stone-50 dark:from-stone-800/90 dark:via-stone-700/80 dark:to-stone-800/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/60 dark:border-stone-700/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 sm:hover:-translate-y-2">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">👨‍🍳</div>
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-stone-900 to-slate-800 dark:from-stone-100 dark:to-slate-200 bg-clip-text text-transparent">Master Roaster</h3>
                <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                  Our head roaster has <strong>15+ years perfecting the craft</strong>. Each origin is roasted to unlock its unique flavor profile.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white via-slate-50/80 to-stone-50 dark:from-stone-800/90 dark:via-stone-700/80 dark:to-stone-800/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/60 dark:border-stone-700/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 sm:hover:-translate-y-2">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">💻</div>
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-stone-900 to-slate-800 dark:from-stone-100 dark:to-slate-200 bg-clip-text text-transparent">Perfect Workspace</h3>
                <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                  <strong>150+ remote workers choose us daily.</strong> Lightning-fast WiFi, comfortable seating, perfect productivity vibes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Stats Dashboard */}
          <div className="bg-gradient-to-br from-white via-slate-50/90 to-stone-50 dark:from-stone-800/95 dark:via-stone-700/90 dark:to-stone-800/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-lg border border-white/60 dark:border-stone-700/50 hover:shadow-xl transition-all duration-500">
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-4xl sm:text-5xl mb-4">📊</div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-stone-900 to-slate-800 dark:from-stone-100 dark:to-slate-200 bg-clip-text text-transparent">The Numbers Don't Lie</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-stone-100 dark:from-stone-700/60 dark:to-stone-600/60 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-stone-700 to-slate-600 dark:from-stone-300 dark:to-slate-400 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-xs sm:text-sm font-medium text-stone-600 dark:text-stone-400">Cups Daily</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-stone-100 dark:from-stone-700/60 dark:to-stone-600/60 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-stone-700 to-slate-600 dark:from-stone-300 dark:to-slate-400 bg-clip-text text-transparent mb-2">4.9★</div>
                <div className="text-xs sm:text-sm font-medium text-stone-600 dark:text-stone-400">Rating</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-stone-100 dark:from-stone-700/60 dark:to-stone-600/60 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-stone-700 to-slate-600 dark:from-stone-300 dark:to-slate-400 bg-clip-text text-transparent mb-2">85%</div>
                <div className="text-xs sm:text-sm font-medium text-stone-600 dark:text-stone-400">Return Rate</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-stone-100 dark:from-stone-700/60 dark:to-stone-600/60 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-stone-700 to-slate-600 dark:from-stone-300 dark:to-slate-400 bg-clip-text text-transparent mb-2">2,500+</div>
                <div className="text-xs sm:text-sm font-medium text-stone-600 dark:text-stone-400">Members</div>
              </div>
            </div>
          </div>

          {/* Urgency CTA */}
          <div className="bg-gradient-to-br from-slate-50 via-white to-stone-50 dark:from-stone-800/90 dark:via-stone-700/80 dark:to-stone-800/90 p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/60 dark:border-stone-700/50 text-center shadow-lg hover:shadow-xl transition-all duration-500 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <Clock className="text-stone-600 dark:text-stone-400 w-6 h-6 sm:w-8 sm:h-8" />
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-stone-800 to-slate-700 dark:from-stone-200 dark:to-slate-300 bg-clip-text text-transparent">Limited Time!</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 bg-gradient-to-br from-stone-900 via-slate-800 to-stone-900 dark:from-stone-100 dark:via-slate-100 dark:to-stone-100 bg-clip-text text-transparent">
              Grand Opening Special
            </h3>
            
            <p className="text-base sm:text-lg lg:text-xl text-stone-700 dark:text-stone-300 mb-6 sm:mb-8 leading-relaxed">
              First 100 customers get <strong>20% off their entire first week</strong> + free premium pastry. Don't miss out!
            </p>
            
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-slate-100 dark:via-stone-50 dark:to-slate-100 dark:hover:from-white dark:hover:via-slate-50 dark:hover:to-white text-white dark:text-stone-900 px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group mb-3 sm:mb-4"
            >
              <Link to="/claim-offer" className="flex items-center justify-center gap-3">
                <span className="group-hover:rotate-12 transition-transform duration-300">→</span>
                <span>Claim Your Spot Now</span>
              </Link>
            </Button>
            
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
              ⏰ Offer expires in 5 days - Only 23 spots left!
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-slate-900 via-stone-900 to-slate-800 hover:from-slate-800 hover:via-stone-800 hover:to-slate-700 dark:from-slate-100 dark:via-stone-50 dark:to-slate-100 dark:hover:from-white dark:hover:via-slate-50 dark:hover:to-white text-white dark:text-stone-900 px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <Link to="/our-story" className="flex items-center justify-center gap-3">
              <span className="group-hover:rotate-12 transition-transform duration-300">📖</span>
              <span>Discover Our Coffee Journey</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300 w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
