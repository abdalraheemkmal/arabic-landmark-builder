
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Quote, BadgeCheck, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

type Testimonial = {
  id: number;
  name: string;
  image: string;
  quote: string;
  rating?: number;
  position?: string;
};

const TestimonialCarousel = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [activeIndex, setActiveIndex] = useState(0);
  
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
        quote: "منذ أن وضعنا القمع في مكانه، لم أستطع حتى القول أنه ضاعف أداءنا 10 مرات، بل ضاعفه 20 مرة، وغيّر عملنا بشكل كامل.",
        position: "مدير تسويق",
        rating: 5
      },
      {
        id: 2,
        name: "نورا الفارس",
        image: "",
        quote: "بفضل القمع التسويقي، تمكّنت من بناء مجتمع من 20,000 شخص. ولم يكن ليأتوا من خلالي، لولا وجود القمع.",
        position: "صاحبة أعمال",
        rating: 5
      },
      {
        id: 3,
        name: "هدى سليم",
        image: "",
        quote: "تعمقت في برنامج فنل كليك. وبعد بضعة أشهر، حققت عائلتنا أموالًا في يوم واحد أكثر مما حققناه من قبل. لا نستطيع تصديق أننا تمكنا ليس فقط من كسب المال، بل من تغيير العالم.",
        position: "رائدة أعمال",
        rating: 5
      },
      {
        id: 4,
        name: "فؤاد خالد",
        image: "",
        quote: "باستخدام فنل كليك، أحد الأشياء الرئيسية التي تمكنا من تحقيقها هي إطلاق المزيد والمزيد من المنتجات بشكل أسرع وأكثر فاعلية مما كنا نتوقع.",
        position: "مدير تنفيذي",
        rating: 4
      },
      {
        id: 5,
        name: "ليلى المهندس",
        image: "",
        quote: "كنت متخوفة في البداية، لكن واجهة فنل كليك سهلة وبديهية للغاية. خلال أسبوع واحد فقط، تمكنت من إنشاء صفحة هبوط حولت زوار موقعي إلى عملاء بنسبة تجاوزت 30%.",
        position: "مصممة مواقع",
        rating: 5
      }
    ],
    en: [
      {
        id: 1,
        name: "Trent Shelton",
        image: "",
        quote: "Since we implemented the funnel, I couldn't even say it 10x'd our results - it actually 20x'd them and completely transformed our business model from the ground up.",
        position: "Marketing Director",
        rating: 5
      },
      {
        id: 2,
        name: "Pace Morby",
        image: "",
        quote: "Because of the funnels I've been able to build a thriving community of over 20,000 people. They simply wouldn't have found me if it wasn't for having a proper marketing funnel in place.",
        position: "Business Owner",
        rating: 5
      },
      {
        id: 3,
        name: "Eileen Wilder",
        image: "",
        quote: "I dove deep into the ClickFunnels software. Just a few months later, our family made more money in one single day than we had ever made before in our entire lives. We're still in disbelief.",
        position: "Entrepreneur",
        rating: 5
      },
      {
        id: 4,
        name: "Lamar Tyler",
        image: "",
        quote: "By using ClickFunnels, one of the main advantages we've experienced is the ability to launch more products and do it FASTER than we ever thought possible. The ROI has been incredible.",
        position: "CEO",
        rating: 4
      },
      {
        id: 5,
        name: "Sarah Johnson",
        image: "",
        quote: "I was skeptical at first, but the ClickFunnel interface is incredibly intuitive. Within just one week, I created a landing page that converted site visitors to customers at a rate over 30%.",
        position: "Web Designer",
        rating: 5
      }
    ]
  };

  const activeTestimonials = language === 'ar' ? testimonials.ar : testimonials.en;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a0b2e] to-[#1f1f4d] text-white overflow-hidden relative">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            {language === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Customers Say'}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'اكتشف كيف ساعدت منصتنا الآلاف من أصحاب الأعمال على تحقيق النجاح' 
              : 'Discover how our platform has helped thousands of business owners achieve success'}
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className={language === 'ar' ? 'rtl' : 'ltr'}>
              {activeTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-1/1">
                  <div className="px-4">
                    <Card className="bg-gradient-to-br from-[#151642] to-[#272a6e] border-none p-8 md:p-10 rounded-xl shadow-2xl relative overflow-hidden mx-auto max-w-4xl">
                      <div className="absolute top-6 right-6 text-indigo-400/20">
                        <Quote size={120} />
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl font-medium mb-8 relative z-10 max-w-4xl mx-auto text-white leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center mt-8">
                        <Avatar className="h-14 w-14 border-2 border-blue-400 ring-2 ring-blue-600/50">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="bg-blue-900 text-blue-200">
                            {getInitials(testimonial.name)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="ml-4">
                          <div className="font-bold text-lg text-white">{testimonial.name}</div>
                          {testimonial.position && (
                            <div className="text-blue-300 text-sm">{testimonial.position}</div>
                          )}
                          <div className="flex items-center text-blue-300 mt-1">
                            <BadgeCheck className="h-4 w-4 mr-1 text-blue-400" />
                            <span className="text-sm">
                              {language === 'ar' ? 'مستخدم موثق' : 'Verified User'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="ml-auto flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={cn(
                                "h-5 w-5", 
                                i < (testimonial.rating || 5) 
                                  ? "text-yellow-400 fill-yellow-400" 
                                  : "text-gray-400"
                              )} 
                            />
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static h-10 w-10 bg-white/10 hover:bg-white/20 text-white border-none" />
              <CarouselNext className="static h-10 w-10 bg-white/10 hover:bg-white/20 text-white border-none" />
            </div>
          </Carousel>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {activeTestimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-blue-500 w-6" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
