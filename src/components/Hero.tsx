
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Hero() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [email, setEmail] = useState('');

  // Set language based on document's lang attribute
  useState(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-950 flex flex-col items-center justify-center">
      {/* Background gradient shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/4 h-screen bg-gradient-to-b from-blue-400/20 to-transparent transform rotate-12"></div>
        <div className="absolute top-0 right-0 w-1/4 h-screen bg-gradient-to-b from-amber-400/20 to-transparent transform -rotate-12"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-screen bg-gradient-to-t from-amber-500/20 to-transparent transform -rotate-12"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-screen bg-gradient-to-t from-red-500/20 to-transparent transform rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          {language === 'ar' ? (
            <>
              <span className="block mb-4">أنت على بعد قمع تسويقي واحد</span>
              <span className="text-blue-300">من النجاح</span>
            </>
          ) : (
            <>
              <span className="block mb-4">You're one funnel away</span>
              <span className="text-blue-300">from success</span>
            </>
          )}
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          {language === 'ar' ? 'ابدأ مجاناً اليوم.' : 'Start for free today.'}
        </p>

        <div className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your Email Address'}
              className="h-12 px-4 border-0 bg-white/90 text-gray-900 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium px-6 h-12 rounded-lg" 
              asChild
            >
              <Link to="/register">
                {language === 'ar' ? 'ابدأ الآن' : 'Get Started'} <ArrowRight className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-4 text-blue-200 text-sm">
            {language === 'ar' ? (
              <p>لست جاهزاً للبدء؟ <Link to="#learn-more" className="text-amber-400 hover:underline">تعلم المزيد</Link></p>
            ) : (
              <p>Not ready to get started? <Link to="#learn-more" className="text-amber-400 hover:underline">Learn More</Link></p>
            )}
          </div>
        </div>

        {/* App tabs */}
        <div className="mt-32 flex flex-wrap justify-center gap-3">
          {[
            { id: 'funnel', label: language === 'ar' ? 'قمعك التسويقي' : 'Your Funnel' },
            { id: 'store', label: language === 'ar' ? 'متجرك' : 'Your Store' },
            { id: 'crm', label: language === 'ar' ? 'إدارة علاقات العملاء' : 'Your CRM' },
            { id: 'email', label: language === 'ar' ? 'التسويق عبر البريد' : 'Your Email Marketing' },
            { id: 'courses', label: language === 'ar' ? 'دوراتك التعليمية' : 'Your Online Courses' }
          ].map((tab) => (
            <div 
              key={tab.id} 
              className={`px-4 py-2 rounded-lg text-sm cursor-pointer transition-colors 
                ${tab.id === 'store' ? 'bg-blue-400/20 text-white' : 'bg-transparent text-white/70 hover:text-white hover:bg-white/10'}`
              }
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
