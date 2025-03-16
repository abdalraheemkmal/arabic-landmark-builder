
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  FileText, 
  Timer, 
  GraduationCap,
  Play
} from "lucide-react";

const AppsSection = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);

  const apps = [
    {
      title: language === 'ar' ? 'صفحات الهبوط' : 'Landing Pages',
      description: language === 'ar' 
        ? 'إنشاء صفحات هبوط لموقعك أو قمعك التسويقي.' 
        : 'Create landing pages for your website or your funnels.',
      icon: <LayoutDashboard className="h-5 w-5" />,
      color: 'bg-blue-100',
      image: (
        <div className="bg-white rounded-md p-4 shadow-sm relative">
          <div className="flex space-x-2 rtl:space-x-reverse mb-3">
            <div className="w-24 h-20 bg-blue-200 rounded flex items-center justify-center">
              <Play className="h-8 w-8 text-white" />
            </div>
            <div className="space-y-2 flex-1">
              <div className="w-full h-3 bg-gray-100 rounded"></div>
              <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
              <div className="w-1/2 h-3 bg-gray-100 rounded"></div>
            </div>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded mb-2"></div>
          <div className="w-full h-3 bg-gray-100 rounded mb-2"></div>
          <div className="w-3/4 h-3 bg-gray-100 rounded mb-4"></div>
          <div className="w-full h-10 bg-blue-300 rounded-full flex items-center justify-center text-white font-medium">
            {language === 'ar' ? 'اشترك الآن' : 'Buy Now'}
          </div>
        </div>
      )
    },
    {
      title: language === 'ar' ? 'استبيانات تفاعلية' : 'Survey Workflows',
      description: language === 'ar' 
        ? 'احصل على البيانات واستفد منها لزيادة المبيعات والتحويلات.' 
        : 'Get data, and leverage that data to increase sales and conversions.',
      icon: <FileText className="h-5 w-5" />,
      color: 'bg-olive-100',
      image: (
        <div className="bg-white rounded-md p-4 shadow-sm">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="flex items-center mb-6">
              <div className="w-6 h-6 rounded-full bg-olive-300 flex items-center justify-center text-white mr-3 rtl:ml-3 rtl:mr-0">?</div>
              <div className="flex-1 h-3 bg-gray-200 rounded"></div>
            </div>
          ))}
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-olive-300 rounded flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      title: language === 'ar' ? 'عدادات تنازلية' : 'Countdown Funnels',
      description: language === 'ar' 
        ? 'أضف عداد تنازلي لأي عرض لتحفيز العملاء المحتملين على التصرف الآن.' 
        : 'Add a countdown timer to any offer to get prospects to act now.',
      icon: <Timer className="h-5 w-5" />,
      color: 'bg-orange-100',
      image: (
        <div className="flex flex-col items-center">
          <div className="bg-orange-100 p-4 rounded-lg mb-4">
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <div className="text-center text-orange-400 text-5xl font-bold">31</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 w-full">
            {['00', '23', '59', '43'].map((num, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white rounded p-2 w-12 h-12 flex items-center justify-center text-lg font-semibold shadow-sm">
                  {num}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {index === 0 ? (language === 'ar' ? 'أيام' : 'Days') : ''}
                  {index === 1 ? (language === 'ar' ? 'ساعات' : 'Hours') : ''}
                  {index === 2 ? (language === 'ar' ? 'دقائق' : 'Minutes') : ''}
                  {index === 3 ? (language === 'ar' ? 'ثواني' : 'Seconds') : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: language === 'ar' ? 'دورات تعليمية' : 'Courses',
      description: language === 'ar' 
        ? 'حول معرفتك وشغفك وخبرتك إلى إيرادات.' 
        : 'Turn your knowledge, passion or experience into revenue.',
      icon: <GraduationCap className="h-5 w-5" />,
      color: 'bg-red-100',
      image: (
        <div className="bg-white rounded-md p-4 shadow-sm relative">
          <div className="w-full h-40 bg-red-200 rounded-md flex items-center justify-center mb-4">
            <Play className="h-12 w-12 text-white" />
          </div>
          <div className="space-y-2">
            <div className="w-full h-3 bg-gray-100 rounded"></div>
            <div className="w-full h-3 bg-gray-100 rounded"></div>
            <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
            <div className="w-1/2 h-3 bg-gray-100 rounded"></div>
          </div>
          <div className="absolute bottom-6 right-6 rtl:left-6 rtl:right-auto">
            <div className="h-8 w-16 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === 'ar' ? 'جرّب تطبيقاتنا' : 'Try our apps'}
          </h2>
          <p className="text-gray-600">
            {language === 'ar' ? 'متضمنة مجاناً في كل الباقات.' : 'Included for free in every plan.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`p-6 ${app.color} bg-opacity-20`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{app.title}</h3>
                  <div className={`p-2 rounded-md ${app.color}`}>
                    {app.icon}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 h-12">
                  {app.description}
                </p>
                <CardContent className="p-0">
                  {app.image}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
