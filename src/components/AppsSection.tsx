import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LayoutDashboard, FileText, Timer, GraduationCap, Play, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AppsSection = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);
  
  const apps = [{
    id: "funnel",
    title: language === 'ar' ? 'قمعك التسويقي' : 'Your Funnel',
    icon: <LayoutDashboard className="h-5 w-5" />,
    color: 'bg-blue-100',
    description: language === 'ar' ? 'حول زوار موقعك إلى عملاء يدفعون مع أفضل منشئ قمع تسويقي على الإطلاق. سهل الاستخدام وسريع بشكل لا يصدق ومُحسّن لتحويل النقرات إلى مبيعات.' : 'Convert your online visitors into paying customers with the best funnel builder on the planet. Easy to use, incredibly fast, and optimized to turn clicks into cash.',
    cta: language === 'ar' ? 'جرّب مجاناً' : 'Try for Free',
    features: [language === 'ar' ? 'سهل الاستخدام' : 'Easy to use', language === 'ar' ? 'سريع بشكل مذهل' : 'Incredibly fast', language === 'ar' ? 'محسن للتحويل' : 'Optimized for conversions']
  }, {
    id: "store",
    title: language === 'ar' ? 'متجرك الإلكتروني' : 'Your Store',
    icon: <FileText className="h-5 w-5" />,
    color: 'bg-olive-100',
    description: language === 'ar' ? 'قم بإنشاء متجر إلكتروني احترافي بسهولة تامة. بيع المنتجات الرقمية أو المادية، وإدارة المخزون، واستلام المدفوعات مباشرة. المتجر الذي ينمو مع نمو أعمالك.' : 'Create a professional e-commerce store with complete ease. Sell digital or physical products, manage inventory, and receive payments directly. A store that grows as your business grows.',
    cta: language === 'ar' ? 'أنشئ متجرك' : 'Create Your Store',
    features: [language === 'ar' ? 'بيع المنتجات الرقمية والمادية' : 'Sell digital and physical products', language === 'ar' ? 'إدارة المخزون بسهولة' : 'Easy inventory management', language === 'ar' ? 'معالجة الدفع المباشر' : 'Direct payment processing']
  }, {
    id: "crm",
    title: language === 'ar' ? 'إدارة علاقات العملاء' : 'Your CRM',
    icon: <Timer className="h-5 w-5" />,
    color: 'bg-orange-100',
    description: language === 'ar' ? 'تتبع وإدارة جميع تفاعلات العملاء في مكان واحد. تعرف على عملائك بشكل أفضل، وحسّن اتصالاتك، وزد من المبيعات من خلال فهم احتياجات عملائك بشكل أعمق.' : 'Track and manage all customer interactions in one place. Get to know your customers better, improve your communications, and increase sales by understanding your customers\' needs more deeply.',
    cta: language === 'ar' ? 'ابدأ التتبع' : 'Start Tracking',
    features: [language === 'ar' ? 'تتبع تفاعلات العملاء' : 'Track customer interactions', language === 'ar' ? 'تحسين التواصل' : 'Improve communications', language === 'ar' ? 'زيادة المبيعات' : 'Increase sales']
  }, {
    id: "email",
    title: language === 'ar' ? 'التسويق عبر البريد الإلكتروني' : 'Your Email Marketing',
    icon: <FileText className="h-5 w-5" />,
    color: 'bg-green-100',
    description: language === 'ar' ? 'أرسل رسائل بريد إلكتروني مستهدفة للجمهور المناسب في الوقت المناسب. قم بإنشاء حملات بريد إلكتروني تلقائية، وقياس النتائج، وتحسين معدلات الفتح والنقر.' : 'Send targeted emails to the right audience at the right time. Create automated email campaigns, measure results, and improve open and click-through rates.',
    cta: language === 'ar' ? 'أرسل حملتك الأولى' : 'Send Your First Campaign',
    features: [language === 'ar' ? 'رسائل بريد إلكتروني مستهدفة' : 'Targeted emails', language === 'ar' ? 'حملات تلقائية' : 'Automated campaigns', language === 'ar' ? 'تحليلات مفصلة' : 'Detailed analytics']
  }, {
    id: "courses",
    title: language === 'ar' ? 'دوراتك التعليمية' : 'Your Online Courses',
    icon: <GraduationCap className="h-5 w-5" />,
    color: 'bg-red-100',
    description: language === 'ar' ? 'حول معرفتك وخبرتك إلى دورات تعليمية عبر الإنترنت. قم بإنشاء وبيع الدورات التدريبية، وتتبع تقدم الطلاب، وبناء مجتمع تعليمي حول خبرتك.' : 'Turn your knowledge and experience into online courses. Create and sell training courses, track student progress, and build an educational community around your expertise.',
    cta: language === 'ar' ? 'أنشئ دورتك' : 'Create Your Course',
    features: [language === 'ar' ? 'إنشاء وبيع الدورات' : 'Create and sell courses', language === 'ar' ? 'تتبع تقدم الطلاب' : 'Track student progress', language === 'ar' ? 'بناء مجتمع تعليمي' : 'Build a learning community']
  }];
  
  const testimonials = [
    {
      id: 1,
      name: language === 'ar' ? 'تنتور شيلتون' : 'Trent Shelton',
      role: language === 'ar' ? 'مدير تسويق' : 'Marketing Director',
      content: language === 'ar' 
        ? 'منذ أن وضعنا القمع في مكانه، لم أستطع حتى القول أنه ضاعف أداءنا 10 مرات، بل ضاعفه 20 مرة، وغيّر عملنا بشكل كامل.'
        : 'Since we implemented the funnel, I couldn\'t even say it 10x\'d our results - it actually 20x\'d them and completely transformed our business model from the ground up.',
      avatar: '',
    },
    {
      id: 2,
      name: language === 'ar' ? 'بيس موربي' : 'Pace Morby',
      role: language === 'ar' ? 'صاحب أعمال' : 'Business Owner',
      content: language === 'ar' 
        ? 'بفضل القمع التسويقي، تمكّنت من بناء مجتمع من 20,000 شخص. ولم يكن ليأتوا من خلالي، لولا وجود القمع.'
        : 'Because of the funnels I\'ve been able to build a thriving community of over 20,000 people. They simply wouldn\'t have found me if it wasn\'t for having a proper marketing funnel in place.',
      avatar: '',
    },
    {
      id: 3,
      name: language === 'ar' ? 'إيلين وايلدر' : 'Eileen Wilder',
      role: language === 'ar' ? 'رائدة أعمال' : 'Entrepreneur',
      content: language === 'ar' 
        ? 'تعمقت في برنامج فنل كليك. وبعد بضعة أشهر، حققت عائلتنا أموالًا في يوم واحد أكثر مما حققناه من قبل. لا نستطيع تصديق أننا تمكنا ليس فقط من كسب المال، بل من تغيير العالم.'
        : 'I dove deep into the ClickFunnels software. Just a few months later, our family made more money in one single day than we had ever made before in our entire lives. We\'re still in disbelief.',
      avatar: '',
    },
    {
      id: 4,
      name: language === 'ar' ? 'لامار تايلر' : 'Lamar Tyler',
      role: language === 'ar' ? 'مدير تنفيذي' : 'CEO',
      content: language === 'ar' 
        ? 'باستخدام فنل كليك، أحد الأشياء الرئيسية التي تمكنا من تحقيقها ��ي إطلاق المزيد والمزيد من المنتجات بشكل أسرع وأكثر فاعلية مما كنا نتوقع.'
        : 'By using ClickFunnels, one of the main advantages we\'ve experienced is the ability to launch more products and do it FASTER than we ever thought possible. The ROI has been incredible.',
      avatar: '',
    },
    {
      id: 5,
      name: language === 'ar' ? 'ريموند جون' : 'Raymond John',
      role: language === 'ar' ? 'مطور أعمال' : 'Business Developer',
      content: language === 'ar' 
        ? 'بفضل هذه المنصة، تمكنت من زيادة عدد العملاء وتوسيع نطاق أعمالي بأكثر من 400%. النتائج مذهلة وأكثر مما توقعت.'
        : 'Thanks to this platform, I was able to increase my customer base and scale my business by over 400%. The results have been amazing and beyond what I expected.',
      avatar: '',
    }
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };
  
  return (
    <section id="apps" className="pt-0 -mt-16 bg-[#0a0b2e] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block mb-2 px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            {language === 'ar' ? 'تطبيقاتنا' : 'Our Apps'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white w-full max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            {language === 'ar' ? 'كل ما تحتاج لتنمية عملك' : 'Everything You Need To Grow Your Business'}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'ar' ? 'مجموعة متكاملة من الأدوات المصممة خصيصًا لمساعدتك في إدارة وتنمية عملك عبر الإنترنت بسهولة.' : 'A complete set of tools specially designed to help you manage and grow your online business with ease.'}
          </p>
        </div>
        
        <Tabs defaultValue="funnel" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-8 bg-transparent">
            {apps.map((app) => (
              <TabsTrigger 
                key={app.id}
                value={app.id}
                className="py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <div className="flex items-center gap-2">
                  {app.icon}
                  <span className="hidden md:inline">{app.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {apps.map((app) => (
            <TabsContent key={app.id} value={app.id} className="focus-visible:outline-none focus-visible:ring-0">
              <Card className="p-6 md:p-8 border-none shadow-lg bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`${app.color} w-12 h-12 flex items-center justify-center rounded-lg mb-4`}>
                      {app.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      {app.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{app.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {app.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span className="text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="rounded-lg">
                      {app.cta} <ArrowRight className={`${language === 'ar' ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                    </Button>
                  </div>
                  
                  <div className="hidden md:flex justify-center">
                    <div className="w-full max-w-sm aspect-video bg-gray-800/40 rounded-lg flex items-center justify-center">
                      <Play className="h-12 w-12 text-primary opacity-70" />
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 mb-16">
          <div className="text-center mb-12">
            <span className="inline-block mb-2 px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              {language === 'ar' ? 'آراء العملاء' : 'Testimonials'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white w-full max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              {language === 'ar' ? 'ماذا يقول عملاؤنا عن خدماتنا' : 'What Our Customers Say About Us'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#151642]/60 backdrop-blur-sm p-6 rounded-lg border border-blue-900/20 hover:border-blue-700/30 transition-all hover:-translate-y-1 group">
                <div className="h-full flex flex-col">
                  <Quote className="h-8 w-8 text-blue-300/50 mb-2" />
                  <p className="text-sm md:text-base text-gray-300 mb-4 flex-grow group-hover:text-white transition-colors">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center mt-4">
                    <Avatar className="h-10 w-10 border border-blue-600/50">
                      <AvatarFallback className="bg-blue-900 text-blue-200">
                        {getInitials(testimonial.name)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="ml-3">
                      <div className="font-medium text-sm text-white">{testimonial.name}</div>
                      <div className="text-xs text-blue-300">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
