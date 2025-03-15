
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="max-w-3xl text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            أنشئ صفحتك بسهولة وبدون أي خبرة برمجية
          </h1>
          <p className="mt-6 max-w-2xl text-center text-lg text-muted-foreground">
            منصتنا تتيح لك إنشاء صفحات ويب احترافية بسرعة ودون الحاجة إلى معرفة البرمجة،
            مع واجهة سهلة الاستخدام وعناصر قابلة للسحب والإفلات.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/builder">
              <Button size="lg" className="px-8">
                أنشئ صفحتك الآن
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8">
              تعلم المزيد
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.3),transparent)]"></div>
    </div>
  );
}
