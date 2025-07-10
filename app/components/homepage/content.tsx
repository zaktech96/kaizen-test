import { Button } from "~/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function ContentSection() {
  return (
    <section id="content" className="py-16 md:py-32 relative">
      {/* Coffee Steam Animation */}
      <div className="absolute top-20 right-10 opacity-20 dark:opacity-30">
        <div className="animate-pulse">
          <div className="text-6xl">☕</div>
          <div className="text-sm mt-2 text-center">💨</div>
        </div>
      </div>
      
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-medium">
              🌱 Single-origin, expertly roasted.
            </h2>
            
            {/* Coffee Origin Visual */}
            <div className="flex gap-2 my-6">
              <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full text-sm">
                <span>🇪🇹</span>
                <span>Ethiopia</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/20 px-3 py-1 rounded-full text-sm">
                <span>🇨🇴</span>
                <span>Colombia</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 px-3 py-1 rounded-full text-sm">
                <span>🇬🇹</span>
                <span>Guatemala</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="flex items-start gap-2">
              <span className="text-xl">🌍</span>
              <span>Sourced directly from small farms around the world - because great coffee starts with great relationships.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-xl">🔥</span>
              <span>Every bean is carefully selected and roasted <em>in-house</em> to bring out its unique flavor profile. From the bright acidity of Ethiopian highlands to the rich body of Colombian mountains.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-xl">👨‍🍳</span>
              <span>Our master roasters have over <span className="font-bold">15 years</span> of experience crafting the perfect roast for each origin. Light, medium, or dark—we know exactly how to unlock each bean's potential.</span>
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
              <p className="flex items-start gap-2">
                <span className="text-xl">☕</span>
                <span className="italic">"That perfect moment when the aroma hits you and you know it's going to be an amazing day." - Every coffee lover ever</span>
              </p>
            </div>

            <p className="flex items-start gap-2">
              <span className="text-xl">💫</span>
              <span>Whether you prefer a delicate pour-over that highlights subtle notes, or a bold espresso that energizes your morning, our baristas create each cup with precision and passion.</span>
            </p>

            <p className="text-center p-4 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg">
              <span className="font-bold text-lg">☕ One passion, one craft. ☕</span><br/>
              <span className="text-sm">Every cup tells a story.</span>
            </p>
            
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link to="/our-story">
                <span>📖 Learn About Our Coffee Journey</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
