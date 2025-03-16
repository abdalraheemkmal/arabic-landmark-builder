
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Hero() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10 bg-background [background:radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.3),transparent)]"></div>
      
      <div className="mx-auto px-4 py-12 md:py-20 lg:py-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block mb-2 px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {language === 'ar' ? '🚀 حل متكامل لتحويل الزوار إلى عملاء' : '🚀 Complete Solution to Convert Visitors to Customers'}
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                {language === 'ar' 
                  ? 'أنشئ صفحات قمع تسويقي تزيد المبيعات!' 
                  : 'Create Sales Funnels That Multiply Your Revenue!'}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {language === 'ar' 
                  ? 'منصة شاملة لتصميم صفحات القمع التسويقي التي تحول الزائرين إلى عملاء بسهولة. لا تحتاج لأي خبرة في البرمجة.' 
                  : 'All-in-one platform to design sales funnel pages that convert visitors into customers. No coding experience required.'}
              </p>
            </div>
            
            <div>
              <ul className="space-y-3">
                {[
                  language === 'ar' ? 'منشئ صفحات بالسحب والإفلات' : 'Drag & Drop Page Builder',
                  language === 'ar' ? 'قوالب احترافية جاهزة للاستخدام' : 'Professional Ready-to-Use Templates',
                  language === 'ar' ? 'تكامل مع أنظمة الدفع الإلكتروني' : 'Payment Processor Integration',
                  language === 'ar' ? 'تحليلات متقدمة للمبيعات والتحويل' : 'Advanced Sales & Conversion Analytics'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="flex-shrink-0 p-1 rounded-full bg-primary/10 text-primary mr-3">
                      <Check size={16} />
                    </span>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-8 rounded-full shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all" asChild>
                <Link to="/register">
                  {language === 'ar' ? 'ابدأ مجاناً الآن' : 'Start Free Now'} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 rounded-full hover:bg-primary/5" asChild>
                <a href="#features">
                  {language === 'ar' ? 'تعرف على الميزات' : 'Explore Features'}
                </a>
              </Button>
            </div>
            
            <div className="text-muted-foreground text-sm">
              {language === 'ar' 
                ? 'لا حاجة لبطاقة ائتمان • إلغاء الاشتراك في أي وقت • دعم فني على مدار الساعة' 
                : 'No credit card required • Cancel anytime • 24/7 support'}
            </div>
          </div>
          
          {/* Right column - Dashboard preview */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-400 rounded-lg blur opacity-30"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Dashboard Preview" 
                className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Testimonial badge */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-lg p-3 max-w-[250px] border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {language === 'ar' ? 'م.أ' : 'J.D'}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {language === 'ar' 
                      ? '"زاد معدل التحويل لدي بنسبة 320% في أول شهرين من استخدام المنصة!"' 
                      : '"Increased my conversion rate by 320% in the first two months of using the platform!"'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats badge */}
            <div className="absolute -top-6 -left-6 bg-white shadow-lg rounded-lg p-3 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">+480%</div>
                <div className="text-xs text-muted-foreground">
                  {language === 'ar' ? 'متوسط زيادة المبيعات' : 'Avg. Sales Increase'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
