
import { useEffect, useState, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  name: string;
  image: string;
  quote: string;
};

const TestimonialCarousel = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);

  const testimonials = {
    ar: [
      {
        id: 1,
        name: "سامي الحسن",
        image: "",
        quote: "منذ أن وضعنا القمع في مكانه، لم أستطع حتى القول أنه ضاعف أداءنا 10 مرات، بل ضاعفه 20 مرة، وغيّر عملنا بشكل كامل."
      },
      {
        id: 2,
        name: "نورا الفارس",
        image: "",
        quote: "بفضل القمع التسويقي، تمكّنت من بناء مجتمع من 20,000 شخص. ولم يكن ليأتوا من خلالي، لولا وجود القمع."
      },
      {
        id: 3,
        name: "هدى سليم",
        image: "",
        quote: "تعمقت في برنامج فنل كليك. وبعد بضعة أشهر، حققت عائلتنا أموالًا في يوم واحد أكثر مما حققناه من قبل. لا نستطيع تصديق أننا تمكنا ليس فقط من كسب المال، بل من تغيير العالم من خلال ممارسة ما نحب."
      },
      {
        id: 4,
        name: "فؤاد خالد",
        image: "",
        quote: "باستخدام فنل كليك، أحد الأشياء الرئيسية التي تمكنا من تحقيقها هي إطلاق المزيد والمزيد من المنتجات بشكل أسرع."
      },
      {
        id: 5,
        name: "ليلى المهندس",
        image: "",
        quote: "كنت متخوفة في البداية، لكن واجهة فنل كليك سهلة وبديهية للغاية. خلال أسبوع واحد فقط، تمكنت من إنشاء صفحة هبوط حولت زوار موقعي إلى عملاء بنسبة تجاوزت 30%."
      },
      {
        id: 6,
        name: "عمر الحكيم",
        image: "",
        quote: "أجد صعوبة في التعبير عن مدى تأثير فنل كليك على أعمالي. قبل استخدامه، كنت أكافح للوصول إلى العملاء المناسبين. الآن، أصبح لدي نظام تسويقي آلي يعمل 24 ساعة في اليوم ويجلب عملاء جدد حتى أثناء نومي."
      }
    ],
    en: [
      {
        id: 1,
        name: "Trent Shelton",
        image: "",
        quote: "Since we put a funnel in place, I couldn't even say it 10x'd, it 20x, and changed our business."
      },
      {
        id: 2,
        name: "Pace Morby",
        image: "",
        quote: "Because of funnels I've been able to build a community of 20,000 people. And they wouldn't have come through me, if it wasn't for a funnel."
      },
      {
        id: 3,
        name: "Eileen Wilder",
        image: "",
        quote: "I dove into the ClickFunnels software. A few months later, our family made more money in 1 day than we had ever made before. We cannot believe we get to not only make money, but we get to change the world doing what we love."
      },
      {
        id: 4,
        name: "Lamar Tyler",
        image: "",
        quote: "By using ClickFunnels one of the main things we've been able to do is launch more and launch more FASTER."
      },
      {
        id: 5,
        name: "Sarah Johnson",
        image: "",
        quote: "I was skeptical at first, but the ClickFunnel interface is incredibly intuitive. Within just one week, I created a landing page that converted site visitors to customers at a rate over 30%."
      },
      {
        id: 6,
        name: "Michael Chang",
        image: "",
        quote: "I struggle to express how much ClickFunnel has impacted my business. Before using it, I was struggling to reach the right customers. Now, I have an automated marketing system working 24 hours a day bringing in new customers even while I sleep."
      }
    ]
  };

  const activeTestimonials = language === 'ar' ? testimonials.ar : testimonials.en;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === activeTestimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? activeTestimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating, activeTestimonials.length]);

  return (
    <section className="py-16 bg-[#0a0b2e] text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block mb-2 px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full">
            {language === 'ar' ? 'قصص النجاح' : 'Success Stories'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Customers Say'}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'اكتشف كيف ساعدت منصتنا الآلاف من أصحاب الأعمال على تحقيق النجاح' 
              : 'Discover how our platform has helped thousands of business owners achieve success'}
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label={language === 'ar' ? 'السابق' : 'Previous'}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label={language === 'ar' ? 'التالي' : 'Next'}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Testimonial slider */}
          <div 
            ref={testimonialRef} 
            className="overflow-hidden relative"
            style={{ height: "auto", minHeight: "300px" }}
          >
            <div 
              className={cn(
                "flex transition-transform duration-500 ease-out",
                isAnimating ? "opacity-90" : "opacity-100"
              )}
              style={{ 
                transform: `translateX(${-activeIndex * 100}%)`,
                direction: language === 'ar' ? 'rtl' : 'ltr'
              }}
            >
              {activeTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full flex-shrink-0 px-4"
                >
                  <Card className="bg-[#151642] border-[#252975] p-8 md:p-10 rounded-sm shadow-xl relative overflow-hidden">
                    <div className="absolute top-6 right-6 text-indigo-400/20">
                      <Quote size={120} />
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl font-medium mb-6 relative z-10 max-w-4xl mx-auto text-white">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center mt-8">
                      <Avatar className="h-14 w-14 border-2 border-blue-400">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-blue-900 text-blue-200">
                          {getInitials(testimonial.name)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="ml-4">
                        <div className="font-bold text-lg text-white">{testimonial.name}</div>
                        <div className="flex items-center text-blue-300">
                          <BadgeCheck className="h-4 w-4 mr-1 text-blue-400" />
                          <span className="text-sm">
                            {language === 'ar' ? 'مستخدم موثق' : 'Verified User'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {activeTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-blue-500 w-6" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
