import { useState, useEffect, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Hero() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [email, setEmail] = useState('');

  // Set language based on document's lang attribute
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error(language === 'ar' ? 'يرجى إدخال البريد الإلكتروني' : 'Please enter your email');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(language === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email');
      return;
    }
    
    toast.success(language === 'ar' ? 'تم التسجيل بنجاح!' : 'Successfully registered!');
    setEmail('');
  };

  return (
    <div className="relative min-h-[70vh] overflow-hidden bg-[#0a0b2e] flex flex-col items-center">
      {/* Decorative gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-1/3 h-screen bg-gradient-to-b from-blue-400/20 to-transparent transform -rotate-30 opacity-40"></div>
        <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-blue-400/20 to-transparent transform rotate-30 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-screen bg-gradient-to-b from-red-400/20 to-transparent transform -rotate-30 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-screen bg-gradient-to-b from-amber-400/20 to-transparent transform rotate-30 opacity-30"></div>
      </div>

      {/* Main hero section */}
      <div className="container mx-auto px-4 py-16 md:py-24 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            {language === 'ar' ? (
              <>
                <span className="block mb-4">أنت على بُعد قمع واحد</span>
                <span className="block text-[#8babd8]">من تحقيق أهدافك</span>
              </>
            ) : (
              <>
                <span className="block mb-4">You're one funnel away</span>
                <span className="block text-[#8babd8]">from reaching your goals</span>
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'ابدأ اليوم مجانًا وأنشئ صفحات قمع تسويقية احترافية لزيادة مبيعاتك.' 
              : 'Start for free today and create professional marketing funnels to increase your sales.'}
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-10">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
              <Input
                type="email"
                placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your Email Address'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button 
                type="submit"
                className="h-12 bg-[#8babd8] hover:bg-[#7a9bc8] text-black font-semibold px-6"
              >
                {language === 'ar' ? 'ابدأ الآن' : 'Get Started'} 
                <ArrowRight className="ms-2 h-5 w-5" />
              </Button>
            </div>
          </form>
          
          <p className="text-gray-400 text-sm mb-16">
            {language === 'ar' 
              ? 'غير جاهز للبدء؟ ' 
              : 'Not ready to get started? '}
            <Link to="#learn-more" className="text-[#8babd8] hover:underline">
              {language === 'ar' ? 'تعرف على المزيد' : 'Learn More'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
