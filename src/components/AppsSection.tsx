
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  LayoutDashboard, 
  FileText, 
  Timer, 
  GraduationCap,
  Play,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AppsSection = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);

  const apps = [
    {
      id: "funnel",
      title: language === 'ar' ? 'قمعك التسويقي' : 'Your Funnel',
      icon: <LayoutDashboard className="h-5 w-5" />,
      color: 'bg-blue-100',
      description: language === 'ar' 
        ? 'حول زوار موقعك إلى عملاء يدفعون مع أفضل منشئ قمع تسويقي على الإطلاق. سهل الاستخدام وسريع بشكل لا يصدق ومُحسّن لتحويل النقرات إلى مبيعات.' 
        : 'Convert your online visitors into paying customers with the best funnel builder on the planet. Easy to use, incredibly fast, and optimized to turn clicks into cash.',
      cta: language === 'ar' ? 'جرّب مجاناً' : 'Try for Free',
      features: [
        language === 'ar' ? 'سهل الاستخدام' : 'Easy to use',
        language === 'ar' ? 'سريع بشكل مذهل' : 'Incredibly fast',
        language === 'ar' ? 'محسن للتحويل' : 'Optimized for conversions'
      ]
    },
    {
      id: "store",
      title: language === 'ar' ? 'متجرك الإلكتروني' : 'Your Store',
      icon: <FileText className="h-5 w-5" />,
      color: 'bg-olive-100',
      description: language === 'ar' 
        ? 'قم بإنشاء متجر إلكتروني احترافي بسهولة تامة. بيع المنتجات الرقمية أو المادية، وإدارة المخزون، واستلام المدفوعات مباشرة. المتجر الذي ينمو مع نمو أعمالك.' 
        : 'Create a professional e-commerce store with complete ease. Sell digital or physical products, manage inventory, and receive payments directly. A store that grows as your business grows.',
      cta: language === 'ar' ? 'أنشئ متجرك' : 'Create Your Store',
      features: [
        language === 'ar' ? 'بيع المنتجات الرقمية والمادية' : 'Sell digital and physical products',
        language === 'ar' ? 'إدارة المخزون بسهولة' : 'Easy inventory management',
        language === 'ar' ? 'معالجة الدفع المباشر' : 'Direct payment processing'
      ]
    },
    {
      id: "crm",
      title: language === 'ar' ? 'إدارة علاقات العملاء' : 'Your CRM',
      icon: <Timer className="h-5 w-5" />,
      color: 'bg-orange-100',
      description: language === 'ar' 
        ? 'تتبع وإدارة جميع تفاعلات العملاء في مكان واحد. تعرف على عملائك بشكل أفضل، وحسّن اتصالاتك، وزد من المبيعات من خلال فهم احتياجات عملائك بشكل أعمق.' 
        : 'Track and manage all customer interactions in one place. Get to know your customers better, improve your communications, and increase sales by understanding your customers\' needs more deeply.',
      cta: language === 'ar' ? 'ابدأ التتبع' : 'Start Tracking',
      features: [
        language === 'ar' ? 'تتبع تفاعلات العملاء' : 'Track customer interactions',
        language === 'ar' ? 'تحسين التواصل' : 'Improve communications',
        language === 'ar' ? 'زيادة المبيعات' : 'Increase sales'
      ]
    },
    {
      id: "email",
      title: language === 'ar' ? 'التسويق عبر البريد الإلكتروني' : 'Your Email Marketing',
      icon: <FileText className="h-5 w-5" />,
      color: 'bg-green-100',
      description: language === 'ar' 
        ? 'أرسل رسائل بريد إلكتروني مستهدفة لجمهورك المناسب في الوقت المناسب. قم بإنشاء حملات بريد إلكتروني تلقائية، وقياس النتائج، وتحسين معدلات الفتح والنقر.' 
        : 'Send targeted emails to the right audience at the right time. Create automated email campaigns, measure results, and improve open and click-through rates.',
      cta: language === 'ar' ? 'أرسل حملتك الأولى' : 'Send Your First Campaign',
      features: [
        language === 'ar' ? 'رسائل بريد إلكتروني مستهدفة' : 'Targeted emails',
        language === 'ar' ? 'حملات تلقائية' : 'Automated campaigns',
        language === 'ar' ? 'تحليلات مفصلة' : 'Detailed analytics'
      ]
    },
    {
      id: "courses",
      title: language === 'ar' ? 'دوراتك التعليمية' : 'Your Online Courses',
      icon: <GraduationCap className="h-5 w-5" />,
      color: 'bg-red-100',
      description: language === 'ar' 
        ? 'حول معرفتك وخبرتك إلى دورات تعليمية عبر الإنترنت. قم بإنشاء وبيع الدورات التدريبية، وتتبع تقدم الطلاب، وبناء مجتمع تعليمي حول خبرتك.' 
        : 'Turn your knowledge and experience into online courses. Create and sell training courses, track student progress, and build an educational community around your expertise.',
      cta: language === 'ar' ? 'أنشئ دورتك' : 'Create Your Course',
      features: [
        language === 'ar' ? 'إنشاء وبيع الدورات' : 'Create and sell courses',
        language === 'ar' ? 'تتبع تقدم الطلاب' : 'Track student progress',
        language === 'ar' ? 'بناء مجتمع تعليمي' : 'Build a learning community'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-navy-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'كل ما تحتاجه لنمو أعمالك' : 'Everything You Need to Grow Your Business'}
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            {language === 'ar' ? 'منصة متكاملة توفر جميع الأدوات اللازمة لتنمية عملك عبر الإنترنت.' : 'An all-in-one platform providing all the tools you need to grow your business online.'}
          </p>
        </div>
        
        <Tabs defaultValue="funnel" className="w-full max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-navy-800/50 p-1 rounded-full">
              {apps.map((app) => (
                <TabsTrigger 
                  key={app.id} 
                  value={app.id}
                  className="px-4 py-2 md:px-6 text-sm md:text-base rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  {app.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {apps.map((app) => (
            <TabsContent key={app.id} value={app.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{app.title}</h3>
                  <p className="text-blue-100 text-lg mb-6">{app.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                          <svg 
                            width="12" 
                            height="12" 
                            viewBox="0 0 12 12" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path 
                              d="M10 3L4.5 8.5L2 6" 
                              stroke="white" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-8 py-6 h-auto text-base"
                  >
                    {app.cta} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <div className="order-1 md:order-2 bg-navy-800/40 p-6 rounded-xl shadow-2xl">
                  <div className="aspect-video bg-navy-700/50 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <Play className="w-16 h-16 text-blue-400" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                    <p className="absolute bottom-4 text-center w-full text-sm text-blue-200">
                      {language === 'ar' ? 'انقر لمشاهدة شرح مفصل' : 'Click to watch detailed explanation'}
                    </p>
                  </div>
                  
                  <div className="mt-6 border border-navy-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                          {app.icon}
                        </div>
                        <span className="font-semibold">{app.title}</span>
                      </div>
                      <Button variant="outline" size="sm" className="bg-transparent border-blue-700 text-blue-300 hover:bg-blue-900/20">
                        {language === 'ar' ? 'معاينة' : 'Preview'}
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-3 bg-navy-700/60 rounded-full w-full"></div>
                      <div className="h-3 bg-navy-700/60 rounded-full w-3/4"></div>
                      <div className="h-3 bg-navy-700/60 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AppsSection;
