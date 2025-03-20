
import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);
  
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
        ? 'باستخدام فنل كليك، أحد الأشياء الرئيسية التي تمكنا من تحقيقها هي إطلاق المزيد والمزيد من المنتجات بشكل أسرع وأكثر فاعلية مما كنا نتوقع.'
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
    <section className="py-20 bg-[#0a0b2e] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16">
          {/* Testimonial logos - brands that trust us */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <img src="/lovable-uploads/bdcdda72-677d-49e1-b289-8c4b40089af3.png" alt="Trusted companies" className="max-w-full h-auto" />
          </div>
          
          {/* Testimonial quotes */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#151642]/60 backdrop-blur-sm p-6 rounded-lg border border-blue-900/20 hover:border-blue-700/30 transition-all hover:-translate-y-1 group">
                <div className="h-full flex flex-col">
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

export default Testimonials;
