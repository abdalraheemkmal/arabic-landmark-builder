import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppsSection from "@/components/AppsSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPlan = ({
  title,
  price,
  features,
  buttonText,
  isPopular = false
}: {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}) => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);
  return <div className={`flex flex-col h-full p-6 rounded-2xl ${isPopular ? 'bg-primary/10 border-primary shadow-lg' : 'bg-white border-gray-200'} border-2 relative hover-lift transition-all duration-300`}>
      {isPopular && <div className="absolute -top-4 inset-x-0 flex justify-center">
          <span className="px-3 py-1 text-sm font-medium bg-primary text-white rounded-full">
            {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
          </span>
        </div>}
      
      <div className="mb-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-end">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'مجاناً' && price !== 'Free' && <span className="text-gray-500 ml-1 mb-1">/{language === 'ar' ? 'شهرياً' : 'month'}</span>}
        </div>
      </div>
      
      <ul className="mb-8 flex-grow space-y-3">
        {features.map((feature, index) => <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>)}
      </ul>
      
      <Button className={`w-full mt-auto ${isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-white border-2 border-primary text-primary hover:bg-primary/5'}`} variant={isPopular ? "default" : "outline"} size="lg" asChild>
        <Link to="/builder">
          {buttonText}
        </Link>
      </Button>
    </div>;
};

const Index = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);
  const pricingPlans = [{
    title: language === 'ar' ? 'المبتدئ' : 'Starter',
    price: language === 'ar' ? 'مجاناً' : 'Free',
    features: language === 'ar' ? ['صفحة هبوط واحدة', 'قوالب محدودة', 'نشر مجاني', 'بدون علامة مائية', 'تحليلات أساسية'] : ['One landing page', 'Limited templates', 'Free publishing', 'No watermark', 'Basic analytics'],
    buttonText: language === 'ar' ? 'ابدأ مجاناً' : 'Start for free'
  }, {
    title: language === 'ar' ? 'الاحترافي' : 'Professional',
    price: language === 'ar' ? '$49' : '$49',
    features: language === 'ar' ? ['صفحات هبوط غير محدودة', 'جميع القوالب', 'دعم للعملاء', 'أدوات متقدمة', 'تحليلات متقدمة'] : ['Unlimited landing pages', 'All templates', 'Customer support', 'Advanced tools', 'Advanced analytics'],
    buttonText: language === 'ar' ? 'اشترك الآن' : 'Subscribe now',
    isPopular: true
  }, {
    title: language === 'ar' ? 'فريق العمل' : 'Team',
    price: language === 'ar' ? '$99' : '$99',
    features: language === 'ar' ? ['كل مميزات الاحترافي', 'مستخدمين متعددين', 'لوحات تحكم للفريق', 'أولوية الدعم', 'API كامل'] : ['All Professional features', 'Multiple users', 'Team dashboards', 'Priority support', 'Full API'],
    buttonText: language === 'ar' ? 'اشترك للفريق' : 'Team subscription'
  }];
  const steps = [{
    number: "01",
    title: language === 'ar' ? 'اختر قالباً' : 'Choose a Template',
    description: language === 'ar' ? 'اختر من بين مجموعة متنوعة من القوالب المصممة مسبقاً لمختلف الأهداف.' : 'Select from a variety of pre-designed templates for different goals.'
  }, {
    number: "02",
    title: language === 'ar' ? 'خصص التصميم' : 'Customize Design',
    description: language === 'ar' ? 'عدّل النصوص والألوان والصور لتناسب هويتك التجارية باستخدام أدواتنا سهلة الاستخدام.' : 'Modify text, colors, and images to match your brand using our easy-to-use tools.'
  }, {
    number: "03",
    title: language === 'ar' ? 'انشر صفحتك' : 'Publish Your Page',
    description: language === 'ar' ? 'انشر صفحة الهبوط الخاصة بك بنقرة واحدة واحصل على رابط مخصص مباشرة.' : 'Publish your landing page with one click and get a custom link instantly.'
  }, {
    number: "04",
    title: language === 'ar' ? 'حلل النتائج' : 'Analyze Results',
    description: language === 'ar' ? 'تتبع أداء صفحتك واحصل على رؤى قيمة لتحسين معدلات التحويل.' : 'Track your page performance and get valuable insights to improve conversion rates.'
  }];
  return <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Stats Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</span>
                <p className="text-gray-600">
                  {language === 'ar' ? 'مستخدمين نشطين' : 'Active Users'}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</span>
                <p className="text-gray-600">
                  {language === 'ar' ? 'قالب متاح' : 'Available Templates'}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-primary mb-2">97%</span>
                <p className="text-gray-600">
                  {language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction'}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold mb-2 text-[#8babd8]">24/7</span>
                <p className="text-gray-600">
                  {language === 'ar' ? 'دعم فني' : 'Support'}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Apps Section */}
        <AppsSection />
        
        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="inline-block mb-2 px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {language === 'ar' ? 'كيف يعمل' : 'How It Works'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'ar' ? 'أربع خطوات بسيطة لإنشاء صفحتك' : 'Four Simple Steps to Create Your Page'}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {language === 'ar' ? 'نجعل عملية إنشاء صفحات الهبوط سهلة وسريعة، حتى تتمكن من التركيز على أعمالك.' : 'We make the process of creating landing pages easy and fast, so you can focus on your business.'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => <div key={index} className="flex flex-col items-center text-center group relative">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && <div className="hidden lg:block absolute top-8 left-[58%] w-[calc(100%-30px)] h-0.5 bg-gray-200">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                        <ChevronRight className="text-gray-300 w-6 h-6" />
                      </div>
                    </div>}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>)}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <Features />
        
        {/* New Testimonial Carousel Section */}
        <TestimonialCarousel />
        
        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-accent/30 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mx-auto max-w-3xl mb-16">
              <span className="inline-block mb-2 px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {language === 'ar' ? 'أسعار تنافسية' : 'Competitive Pricing'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'ar' ? 'خطط بسيطة تناسب احتياجاتك' : 'Simple plans that fit your needs'}
              </h2>
              <p className="text-gray-600 text-lg">
                {language === 'ar' ? 'اختر الباقة المناسبة لك وابدأ في إنشاء صفحات هبوط مذهلة اليوم.' : 'Choose the right package for you and start creating amazing landing pages today.'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => <PricingPlan key={index} title={plan.title} price={plan.price} features={plan.features} buttonText={plan.buttonText} isPopular={plan.isPopular} />)}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mx-auto max-w-3xl mb-16">
              <span className="inline-block mb-2 px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'ar' ? 'لديك أسئلة؟ نحن هنا للإجابة' : 'Got Questions? We Have Answers'}
              </h2>
              <p className="text-gray-600 text-lg">
                {language === 'ar' ? 'إليك بعض الأسئلة الشائعة التي قد تساعدك' : 'Here are some common questions that might help you'}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto divide-y divide-gray-200">
              {[{
              question: language === 'ar' ? 'هل أحتاج إلى معرفة البرمجة لاستخدام المنصة؟' : 'Do I need coding knowledge to use the platform?',
              answer: language === 'ar' ? 'لا، منصتنا مصممة لتكون سهلة الاستخدام للجميع. يمكنك إنشاء صفحات هبوط احترافية باستخدام واجهة السحب والإفلات البديهية دون أي معرفة بالبرمجة.' : 'No, our platform is designed to be user-friendly for everyone. You can create professional landing pages using our intuitive drag-and-drop interface without any coding knowledge.'
            }, {
              question: language === 'ar' ? 'هل يمكنني استخدام نطاقي الخاص؟' : 'Can I use my own domain?',
              answer: language === 'ar' ? 'نعم، يمكنك ربط صفحات الهبوط الخاصة بك بنطاقك الخاص. نحن نوفر خيارات لاستخدام نطاق فرعي مجاني أو ربط نطاقك المخصص.' : 'Yes, you can connect your landing pages to your own domain. We provide options to use a free subdomain or connect your custom domain.'
            }, {
              question: language === 'ar' ? 'هل أستطيع تصدير الكود الخاص بصفحتي؟' : 'Can I export the code of my page?',
              answer: language === 'ar' ? 'نعم، توفر خططنا المتقدمة خيار تصدير كود HTML لصفحة الهبوط الخاصة بك، مما يتيح لك استضافتها على أي خادم تفضله.' : 'Yes, our advanced plans provide the option to export the HTML code of your landing page, allowing you to host it on any server you prefer.'
            }, {
              question: language === 'ar' ? 'هل يمكنني تجربة المنصة قبل الشراء؟' : 'Can I try the platform before purchasing?',
              answer: language === 'ar' ? 'بالتأكيد! نحن نقدم خطة مجانية تتيح لك إنشاء صفحة هبوط واحدة واستكشاف ميزات المنصة. يمكنك الترقية في أي وقت إذا احتجت إلى ميزات أكثر.' : 'Absolutely! We offer a free plan that allows you to create one landing page and explore the platform features. You can upgrade anytime if you need more features.'
            }, {
              question: language === 'ar' ? 'هل صفحاتي متوافقة مع الأجهزة المحمولة؟' : 'Are my pages mobile-friendly?',
              answer: language === 'ar' ? 'نعم، جميع صفحات الهبوط التي تنشئها على منصتنا متجاوبة تمامًا مع جميع أحجام الشاشات بشكل افتراضي، مما يضمن تجربة مثالية لزوارك على أي جهاز.' : 'Yes, all landing pages you create on our platform are fully responsive to all screen sizes by default, ensuring a perfect experience for your visitors on any device.'
            }].map((faq, index) => <div key={index} className="py-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>)}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary rounded-full"></div>
            <div className="absolute top-40 right-20 w-20 h-20 bg-accent rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="bg-gradient-to-r from-primary/10 to-accent/30 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto glass-card">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {language === 'ar' ? 'جاهز لإنشاء صفحة الهبوط المثالية؟' : 'Ready to create your perfect landing page?'}
                  </h2>
                  <p className="text-gray-600">
                    {language === 'ar' ? 'ابدأ الآن واستمتع بتجربة إنشاء صفحات هبوط بسهولة تامة، دون الحاجة لأي خبرة تقنية.' : 'Get started now and enjoy the experience of creating landing pages with complete ease, without any technical experience.'}
                  </p>
                </div>
                <div>
                  <Button size="lg" className="rounded-full" asChild>
                    <Link to="/builder">
                      {language === 'ar' ? 'ابدأ الآن' : 'Get Started'} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="text-xl font-bold text-primary flex items-center">
                <span className="mr-2 text-2xl">⚡</span>
                {language === 'ar' ? 'فنل كليك' : 'ClickFunnel'}
              </Link>
              <p className="mt-2 text-gray-500 text-sm">
                {language === 'ar' ? '© 2023 فنل كليك. جميع الحقوق محفوظة.' : '© 2023 ClickFunnel. All rights reserved.'}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <Link to="/" className="text-gray-500 hover:text-primary transition-colors">
                {language === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
              <Link to="/#features" className="text-gray-500 hover:text-primary transition-colors">
                {language === 'ar' ? 'الميزات' : 'Features'}
              </Link>
              <Link to="/#pricing" className="text-gray-500 hover:text-primary transition-colors">
                {language === 'ar' ? 'الأسعار' : 'Pricing'}
              </Link>
              <Link to="/#contact" className="text-gray-500 hover:text-primary transition-colors">
                {language === 'ar' ? 'تواصل معنا' : 'Contact'}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
