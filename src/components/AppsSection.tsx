import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LayoutDashboard, FileText, Timer, GraduationCap, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    description: language === 'ar' ? 'أرسل رسائل بريد إلكتروني مستهدفة لجمهورك المناسب في الوقت المناسب. قم بإنشاء حملات بريد إلكتروني تلقائية، وقياس النتائج، وتحسين معدلات الفتح والنقر.' : 'Send targeted emails to the right audience at the right time. Create automated email campaigns, measure results, and improve open and click-through rates.',
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
  return;
};
export default AppsSection;