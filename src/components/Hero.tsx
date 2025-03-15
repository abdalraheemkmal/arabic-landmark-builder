
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointer, Layers, Move } from 'lucide-react';

const Hero = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-0 bg-gradient-to-b from-accent/50 to-transparent -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-floating" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-floating" style={{ animationDelay: '-1s' }} />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col md:flex-row items-center ${language === 'ar' ? 'md:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={`md:w-1/2 space-y-6 md:space-y-8 ${isLoaded ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <div className="inline-block">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
                {language === 'ar' ? 'الأفضل لصفحات الهبوط' : 'Best for Landing Pages'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {language === 'ar'
                ? 'أنشئ صفحات هبوط مذهلة بأقل من دقيقة'
                : 'Create stunning landing pages in less than a minute'}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 md:pr-10">
              {language === 'ar'
                ? 'منصة سهلة الاستخدام لإنشاء صفحات هبوط احترافية دون الحاجة لمعرفة البرمجة، مع قوالب جاهزة وأدوات سحب وإفلات.'
                : 'An easy-to-use platform for creating professional landing pages without coding, with ready-to-use templates and drag-and-drop tools.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="btn-primary rounded-full text-base">
                <Link to="/builder">
                  {language === 'ar' ? 'أنشئ صفحتك الآن' : 'Create Your Page Now'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary/5 text-base">
                <Link to="/#features">
                  {language === 'ar' ? 'تعرف على المزيد' : 'Learn More'}
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className={`md:w-1/2 mt-12 md:mt-0 ${isLoaded ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto max-w-lg">
              <div className="glass-card rounded-2xl p-2 shadow-xl transform hover:scale-[1.02] transition-all duration-700 ease-elastic">
                <div className="relative rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  {/* Mockup Header */}
                  <div className="bg-gray-50 px-4 py-2 flex items-center justify-between border-b border-gray-100">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="h-5 w-32 bg-gray-200 rounded-full"></div>
                    <div className="h-5 w-5"></div>
                  </div>
                  
                  {/* Builder Mockup */}
                  <div className="bg-white aspect-[4/3] relative">
                    {/* Sidebar */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gray-50 border-r border-gray-100 flex flex-col items-center py-3 gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <MousePointer className="h-5 w-5 text-primary" />
                      </div>
                      <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center">
                        <Layers className="h-5 w-5 text-gray-500" />
                      </div>
                      <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center">
                        <Move className="h-5 w-5 text-gray-500" />
                      </div>
                    </div>
                    
                    {/* Canvas */}
                    <div className="absolute left-16 right-0 top-0 bottom-0 p-3">
                      {/* Header Element */}
                      <div className="w-full h-14 mb-2 bg-gray-100 rounded-md animate-pulse"></div>
                      
                      {/* Hero Element */}
                      <div className="w-full h-28 mb-2 bg-primary/10 rounded-md flex items-center justify-center">
                        <div className="w-20 h-8 bg-primary rounded-md animate-bounce-subtle"></div>
                      </div>
                      
                      {/* Features Elements */}
                      <div className="w-full flex gap-2 mb-2">
                        <div className="flex-1 h-14 bg-gray-100 rounded-md"></div>
                        <div className="flex-1 h-14 bg-gray-100 rounded-md"></div>
                        <div className="flex-1 h-14 bg-gray-100 rounded-md"></div>
                      </div>
                      
                      {/* Content Element */}
                      <div className="w-full h-16 bg-gray-100 rounded-md mb-2"></div>
                      
                      {/* Call to Action */}
                      <div className="w-full h-10 bg-primary/20 rounded-md"></div>
                    </div>
                    
                    {/* Cursor */}
                    <div className="absolute w-5 h-5 animate-floating" style={{ top: '40%', left: '60%' }}>
                      <MousePointer className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-xl rotate-12 flex items-center justify-center shadow-lg">
                <div className="text-lg font-bold">
                  {language === 'ar' ? 'سهل' : 'Easy'}
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                <div className="text-sm font-bold">
                  {language === 'ar' ? 'سريع' : 'Fast'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
