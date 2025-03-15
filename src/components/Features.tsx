
import { useState, useEffect } from 'react';
import { 
  MousePointer, 
  Layers, 
  Palette, 
  Globe, 
  Smartphone, 
  Zap, 
  Code, 
  LineChart
} from 'lucide-react';

const Features = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);

  const features = [
    {
      icon: <MousePointer className="h-6 w-6" />,
      title: language === 'ar' ? 'سحب وإفلات' : 'Drag & Drop',
      description: language === 'ar' 
        ? 'اسحب العناصر وأفلتها لتصميم صفحتك بسهولة دون الحاجة لأي مهارات تقنية.' 
        : 'Drag and drop elements to design your page easily without any technical skills.'
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: language === 'ar' ? 'قوالب جاهزة' : 'Ready Templates',
      description: language === 'ar' 
        ? 'اختر من بين مجموعة من القوالب الاحترافية المصممة لتحقيق أعلى معدلات التحويل.' 
        : 'Choose from a collection of professional templates designed for highest conversion rates.'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: language === 'ar' ? 'تخصيص سهل' : 'Easy Customization',
      description: language === 'ar' 
        ? 'خصص الألوان والخطوط والصور وكل التفاصيل لتناسب علامتك التجارية بدقة.' 
        : 'Customize colors, fonts, images and all details to match your brand precisely.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: language === 'ar' ? 'دعم اللغة العربية' : 'Arabic Support',
      description: language === 'ar' 
        ? 'دعم كامل للغة العربية والتصميم من اليمين إلى اليسار للوصول إلى جمهورك المحلي.' 
        : 'Full support for Arabic language and RTL design to reach your local audience.'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: language === 'ar' ? 'متجاوب مع كل الأجهزة' : 'Fully Responsive',
      description: language === 'ar' 
        ? 'تظهر صفحاتك بشكل مثالي على جميع الأجهزة، من الهواتف الذكية إلى أجهزة الكمبيوتر.' 
        : 'Your pages look perfect on all devices, from smartphones to desktop computers.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: language === 'ar' ? 'سرعة تحميل فائقة' : 'Lightning Fast',
      description: language === 'ar' 
        ? 'صفحات سريعة التحميل مما يساعد على تحسين تجربة المستخدم ومعدلات التحويل.' 
        : 'Fast loading pages that help improve user experience and conversion rates.'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: language === 'ar' ? 'بدون برمجة' : 'No Coding',
      description: language === 'ar' 
        ? 'أنشئ صفحات مذهلة دون الحاجة لكتابة سطر برمجي واحد.' 
        : 'Create stunning pages without needing to write a single line of code.'
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: language === 'ar' ? 'تحليلات متقدمة' : 'Advanced Analytics',
      description: language === 'ar' 
        ? 'تتبع أداء صفحتك مع إحصائيات تفصيلية وبيانات الزوار في الوقت الفعلي.' 
        : 'Track your page performance with detailed statistics and real-time visitor data.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent/30 to-transparent -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="inline-block mb-2 px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            {language === 'ar' ? 'ميزات قوية' : 'Powerful Features'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' 
              ? 'كل ما تحتاجه لإنشاء صفحات هبوط مثالية' 
              : 'Everything you need to create perfect landing pages'}
          </h2>
          <p className="text-gray-600 text-lg">
            {language === 'ar' 
              ? 'مجموعة شاملة من الميزات المصممة لجعل عملية إنشاء صفحات الهبوط سهلة وفعالة ومثمرة.' 
              : 'A comprehensive set of features designed to make the process of creating landing pages easy, efficient, and productive.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="hover-lift glass-card rounded-xl p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
