
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Hero() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [email, setEmail] = useState('');

  // Set language based on document's lang attribute
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white flex flex-col items-center">
      {/* Main hero section */}
      <div className="container mx-auto px-4 z-10 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left content section */}
          <div className="w-full md:w-1/2 text-right">
            <div className="inline-block mb-6 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              {language === 'ar' 
                ? '🚀 الحل الشامل لتحويل الزوار إلى عملاء' 
                : '🚀 Complete solution to convert visitors to customers'}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-purple-700 leading-tight mb-6">
              {language === 'ar' ? (
                <>
                  <span className="block mb-2">أنشئ صفحات قمع</span>
                  <span className="block mb-2">تسويقي تضاعف</span>
                  <span>مبيعاتك!</span>
                </>
              ) : (
                <>
                  <span className="block mb-2">Create marketing</span>
                  <span className="block mb-2">funnel pages that</span>
                  <span>multiply your sales!</span>
                </>
              )}
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              {language === 'ar' 
                ? 'منصة متكاملة لتصميم صفحات القمع التسويقي التي تحول الزائرين إلى عملاء دون الحاجة لخبرة برمجية.' 
                : 'An integrated platform for designing marketing funnel pages that convert visitors into customers without programming experience.'}
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-8">
              {[
                language === 'ar' ? 'منشئ صفحات بالسحب والإفلات' : 'Drag and drop page builder',
                language === 'ar' ? 'أكثر من 500 قالب احترافي جاهز' : 'Over 500 ready professional templates',
                language === 'ar' ? 'تكامل مع بوابات الدفع الإلكتروني' : 'Integration with payment gateways',
                language === 'ar' ? 'تحليلات متقدمة للمبيعات والتحويل' : 'Advanced sales and conversion analytics'
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-end gap-2">
                  <span className="text-gray-700">{feature}</span>
                  <div className="flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-end gap-4">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                size="lg"
                asChild
              >
                <Link to="/register">
                  {language === 'ar' ? 'ابدأ مجاناً الآن' : 'Start for free now'} 
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
                size="lg"
              >
                <Link to="#features">
                  {language === 'ar' ? 'تعرف على الميزات' : 'Learn about features'}
                </Link>
              </Button>
            </div>
            
            <p className="mt-4 text-sm text-gray-500">
              {language === 'ar' 
                ? 'لا حاجة لبطاقة ائتمان • إلغاء الاشتراك في أي وقت • دعم فني على مدار الساعة' 
                : 'No credit card required • Cancel anytime • 24/7 support'}
            </p>
          </div>
          
          {/* Right image section */}
          <div className="w-full md:w-1/2 relative">
            <div className="bg-blue-500 rounded-3xl overflow-hidden relative">
              <img 
                src="/lovable-uploads/d16b7e96-431e-43d1-812b-3fccf244f0d8.png" 
                alt={language === 'ar' ? 'منصتنا تساعدك على إنشاء صفحات تسويقية فعالة' : 'Our platform helps you create effective marketing pages'} 
                className="w-full h-auto"
              />
              
              {/* Success rate overlay */}
              <div className="absolute top-6 left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-purple-600">480%+</div>
                <div className="text-sm text-gray-600">
                  {language === 'ar' ? 'متوسط زيادة المبيعات' : 'Average sales increase'}
                </div>
              </div>
              
              {/* Testimonial bubble */}
              <div className="absolute bottom-6 right-6 bg-white rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span key={star}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  {language === 'ar' 
                    ? '"زاد معدل التحويل لدي بنسبة 320% في أول شهرين من استخدام المنصة!"' 
                    : '"My conversion rate increased by 320% in the first two months of using the platform!"'}
                </p>
                <div className="flex items-center mt-2 justify-end">
                  <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold">م.ر</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
