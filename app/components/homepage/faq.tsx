import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Remote Developer",
    avatar: "👩‍💻",
    rating: 5,
    review: "This place has become my second office! The WiFi is lightning fast, the coffee is incredible, and the atmosphere is perfect for deep work sessions. Plus, their oat milk cappuccinos are *chef's kiss* 👌",
    favorite: "Oat Milk Cappuccino"
  },
  {
    name: "Marcus Rodriguez",
    role: "Coffee Enthusiast",
    avatar: "☕",
    rating: 5,
    review: "I've tried coffee shops all over the city, and Brew & Beans is hands down the best. Their Ethiopian single-origin is a revelation - bright, floral, absolutely perfect. The baristas really know their craft!",
    favorite: "Ethiopian Pour-over"
  },
  {
    name: "Emma Thompson",
    role: "Local Artist",
    avatar: "🎨",
    rating: 5,
    review: "Such a welcoming community space! I love bringing my sketchbook here on weekends. The pastries are freshly baked every morning, and the chai latte is like a warm hug. Perfect creative sanctuary! ✨",
    favorite: "Chai Latte & Almond Croissant"
  },
  {
    name: "David Park",
    role: "Graduate Student",
    avatar: "📚",
    rating: 5,
    review: "Brew & Beans got me through grad school! Great study environment, reasonable prices, and the baristas remember your order after a few visits. Their cold brew is perfect for those long study sessions.",
    favorite: "Cold Brew (Large)"
  },
  {
    name: "Lisa Wong",
    role: "Morning Runner",
    avatar: "🏃‍♀️",
    rating: 5,
    review: "Best part of my morning routine! I stop by after my run and they have my flat white ready before I even order. The consistency and quality here is unmatched. Plus, they open early which is perfect!",
    favorite: "Flat White (Extra Shot)"
  },
  {
    name: "James Mitchell",
    role: "Local Business Owner",
    avatar: "💼",
    rating: 5,
    review: "I host all my client meetings here. Professional atmosphere, excellent coffee, and the avocado toast is genuinely amazing. The team always makes sure we have a quiet corner. Highly recommend for business meetings!",
    favorite: "Espresso & Avocado Toast"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ☕ What Our Coffee Community Says
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the amazing people who make our café a community ❤️
          </p>
          <div className="mt-6 flex justify-center items-center gap-2">
            <div className="flex text-yellow-400">
              {"★".repeat(5)}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-gray-600 dark:text-gray-400">• 247 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <Card key={idx} className="p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-amber-400">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  <div className="flex text-yellow-400 text-sm mt-1">
                    {"★".repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "{testimonial.review}"
              </blockquote>
              
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
                  ☕ Favorite: {testimonial.favorite}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Coffee Community! ☕</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ready to become part of the Brew & Beans family? Come discover what makes our coffee shop special.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full">
                <span>🕒</span>
                <span className="text-sm font-medium">Mon-Fri: 6:30 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full">
                <span>📍</span>
                <span className="text-sm font-medium">123 Downtown Coffee St.</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-full">
                <span>📱</span>
                <span className="text-sm font-medium">(555) 123-BREW</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fun community stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold text-amber-700">2,500+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-2">💻</div>
            <div className="text-2xl font-bold text-blue-700">150+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Remote Workers Daily</div>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-2">📚</div>
            <div className="text-2xl font-bold text-green-700">200+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Students Served</div>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-2">🎉</div>
            <div className="text-2xl font-bold text-purple-700">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Community Events</div>
          </div>
        </div>
      </div>
    </section>
  );
} 