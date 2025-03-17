
import { useState, useEffect, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Hero() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState('funnel');

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

  const tabs = [
    { 
      id: 'funnel', 
      label: language === 'ar' ? 'القمع التسويقي' : 'Your Funnel',
      title: language === 'ar' ? 'القمع التسويقي' : 'Your Funnel',
      description: language === 'ar' 
        ? 'بناء قمع تسويقي احترافي لتحويل الزوار إلى عملاء — سواء كنت تبني من الصفر أو تبدأ بسرعة باستخدام قوالب جاهزة.'
        : 'Build a professional funnel to convert visitors into customers — whether you build from scratch or start fast with pre-built templates.',
      image: '/lovable-uploads/f24e7ac9-69c7-419f-96ca-04e449edc1b8.png'
    },
    { 
      id: 'store', 
      label: language === 'ar' ? 'المتجر' : 'Your Store',
      title: language === 'ar' ? 'المتجر' : 'Your Store',
      description: language === 'ar' 
        ? 'بناء متجر احترافي لبيع المنتجات الفعلية — سواء كنت تبني من الصفر أو تبدأ بسرعة باستخدام قوالب جاهزة.'
        : 'Build a professional store to sell physical products — whether you build from scratch or start fast with pre-built templates.',
      image: '/lovable-uploads/f24e7ac9-69c7-419f-96ca-04e449edc1b8.png'
    },
    { 
      id: 'crm', 
      label: language === 'ar' ? 'إدارة العملاء' : 'Your CRM',
      title: language === 'ar' ? 'إدارة العملاء' : 'Your CRM',
      description: language === 'ar' 
        ? 'إدارة علاقات العملاء بشكل فعال لتنمية أعمالك — تتبع التفاعلات ومعرفة احتياجات عملائك بشكل أفضل.'
        : 'Effectively manage customer relationships to grow your business — track interactions and better understand your customers\' needs.',
      image: '/lovable-uploads/f24e7ac9-69c7-419f-96ca-04e449edc1b8.png'
    },
    { 
      id: 'email', 
      label: language === 'ar' ? 'التسويق بالبريد' : 'Your Email Marketing',
      title: language === 'ar' ? 'التسويق بالبريد الإلكتروني' : 'Your Email Marketing',
      description: language === 'ar' 
        ? 'إنشاء حملات بريد إلكتروني فعالة للتواصل مع عملائك — أرسل رسائل مخصصة وتتبع النتائج بدقة.'
        : 'Create effective email campaigns to communicate with your customers — send personalized messages and track results accurately.',
      image: '/lovable-uploads/f24e7ac9-69c7-419f-96ca-04e449edc1b8.png'
    },
    { 
      id: 'courses', 
      label: language === 'ar' ? 'الدورات التدريبية' : 'Your Online Courses',
      title: language === 'ar' ? 'الدورات التدريبية عبر الإنترنت' : 'Your Online Courses',
      description: language === 'ar' 
        ? 'إنشاء وبيع دورات تدريبية عبر الإنترنت — شارك معرفتك وحقق دخلاً إضافياً من خلال التعليم الإلكتروني.'
        : 'Create and sell online courses — share your knowledge and generate additional income through e-learning.',
      image: '/lovable-uploads/f24e7ac9-69c7-419f-96ca-04e449edc1b8.png'
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="relative min-h-[80vh] overflow-hidden bg-[#0a0b2e] flex flex-col items-center">
        {/* Decorative gradient elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-1/3 h-screen bg-gradient-to-b from-blue-400/20 to-transparent transform -rotate-30 opacity-40"></div>
          <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-purple-400/20 to-transparent transform rotate-30 opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-screen bg-gradient-to-t from-red-400/20 to-transparent transform -rotate-30 opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-screen bg-gradient-to-t from-amber-400/20 to-transparent transform rotate-30 opacity-30"></div>
        </div>

        {/* Main hero section */}
        <div className="container mx-auto px-4 py-20 md:py-32 z-10 text-center">
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
                  className="h-12 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6"
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
              <Link to="#learn-more" className="text-blue-300 hover:underline">
                {language === 'ar' ? 'تعرف على المزيد' : 'Learn More'}
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Content Section */}
      <div className="bg-[#0a0b2e] border-b border-t border-blue-800/20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="funnel" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex justify-center bg-transparent gap-2 h-auto py-2 overflow-x-auto">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`px-6 py-3 rounded-md text-base font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <div className="bg-gray-100 rounded-b-lg">
                  <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 p-8">
                      <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#0a0b2e] mb-4">{tab.title}</h2>
                        <p className="text-gray-700 mb-8">{tab.description}</p>
                        <Button 
                          className="w-fit bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 h-auto text-base"
                        >
                          {language === 'ar' ? 'جرب مجاناً' : 'Try for Free'} 
                          <ArrowRight className="ms-2 h-5 w-5" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-center p-4">
                        {tab.id === 'store' && (
                          <Card className="w-full max-w-md shadow-lg border-gray-200">
                            <CardContent className="p-0">
                              <div className="bg-white p-4 rounded-t-lg">
                                <div className="flex items-center gap-3 text-slate-800 font-medium">
                                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">1</div>
                                  <span>Select Product</span>
                                </div>
                                <div className="border rounded-md mt-4 p-3">
                                  <div className="flex gap-3">
                                    <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                                      <img 
                                        src="/placeholder.svg" 
                                        alt="Kitchen Gloves"
                                        className="w-16 h-16 object-contain"
                                      />
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Kitchen Oven Gloves</h3>
                                      <p className="text-sm text-gray-500 mt-1">Stay safe and in style in the kitchen with our premium heat-resistant gloves.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="p-4">
                                <Button className="w-full py-6 bg-green-500 hover:bg-green-600">
                                  {language === 'ar' ? 'التالي' : 'Next'}
                                </Button>
                                <div className="mt-6 space-y-3">
                                  <div className="flex items-center gap-3 text-slate-600">
                                    <div className="bg-gray-100 text-slate-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">2</div>
                                    <span>Shipping</span>
                                  </div>
                                  <div className="flex items-center gap-3 text-slate-600">
                                    <div className="bg-gray-100 text-slate-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">3</div>
                                    <span>Payment</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        )}
                        {tab.id !== 'store' && (
                          <img 
                            src={tab.image} 
                            alt={tab.title}
                            className="w-full max-w-md h-auto rounded-lg shadow-lg object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
