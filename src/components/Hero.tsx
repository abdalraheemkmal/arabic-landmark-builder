
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);

  return (
    <div className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <span className="inline-block mb-2 px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            {language === 'ar' ? '🚀 الحل الأمثل لصفحات الهبوط' : '🚀 The Ultimate Landing Page Solution'}
          </span>
          
          <h1 className="max-w-4xl text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            {language === 'ar' 
              ? 'أنشئ صفحات هبوط تحول الزوار إلى عملاء' 
              : 'Create Landing Pages That Convert Visitors Into Customers'}
          </h1>
          
          <p className="mt-6 max-w-2xl text-center text-lg text-muted-foreground">
            {language === 'ar' 
              ? 'منصتنا تتيح لك إنشاء صفحات هبوط احترافية بسرعة ودون الحاجة إلى معرفة البرمجة، مع واجهة سهلة الاستخدام وعناصر قابلة للسحب والإفلات.' 
              : 'Our platform allows you to create professional landing pages quickly without any coding knowledge, with an easy-to-use interface and drag-and-drop elements.'}
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="px-8 rounded-full shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all" asChild>
              <Link to="/builder">
                {language === 'ar' ? 'أنشئ صفحتك الآن' : 'Create Your Page Now'} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 rounded-full hover:bg-primary/5" asChild>
              <a href="#features">
                {language === 'ar' ? 'تعرف على الميزات' : 'Explore Features'}
              </a>
            </Button>
          </div>
          
          <div className="mt-16 relative w-full max-w-5xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-400 rounded-lg blur opacity-30"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Landing Page Builder Preview" 
                className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.3),transparent)]"></div>
    </div>
  );
}
