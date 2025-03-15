
import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);

  const testimonials = [
    {
      id: 1,
      name: language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohamed',
      role: language === 'ar' ? 'مالك متجر إلكتروني' : 'E-commerce Store Owner',
      content: language === 'ar' 
        ? 'لقد غيرت هذه المنصة طريقة عملي بالكامل. أستطيع الآن إنشاء صفحات هبوط احترافية في دقائق بدلاً من أيام. النتائج كانت مذهلة، وارتفعت معدلات التحويل بنسبة 35%.' 
        : 'This platform completely changed the way I work. I can now create professional landing pages in minutes instead of days. The results have been amazing, with conversion rates increasing by 35%.',
      rating: 5
    },
    {
      id: 2,
      name: language === 'ar' ? 'سارة علي' : 'Sara Ali',
      role: language === 'ar' ? 'مسوقة رقمية' : 'Digital Marketer',
      content: language === 'ar' 
        ? 'كمسوقة، أحتاج إلى إنشاء صفحات هبوط مختلفة لحملاتي باستمرار. هذه المنصة وفرت علي الكثير من الوقت والجهد، وأصبحت الآن أداة أساسية في عملي اليومي.' 
        : 'As a marketer, I need to create different landing pages for my campaigns constantly. This platform has saved me so much time and effort, and has now become an essential tool in my daily work.',
      rating: 5
    },
    {
      id: 3,
      name: language === 'ar' ? 'محمد أحمد' : 'Mohamed Ahmed',
      role: language === 'ar' ? 'صاحب شركة ناشئة' : 'Startup Founder',
      content: language === 'ar' 
        ? 'بدأت شركتي الناشئة قبل عام، ولم أكن أملك ميزانية لتوظيف مصمم. هذه المنصة مكنتني من إنشاء صفحات هبوط احترافية بنفسي، مما ساهم في نجاح شركتي وتوفير الكثير من المال.' 
        : 'I started my startup a year ago, and I didn\'t have a budget to hire a designer. This platform enabled me to create professional landing pages myself, which contributed to the success of my company and saved a lot of money.',
      rating: 4
    },
    {
      id: 4,
      name: language === 'ar' ? 'فاطمة خالد' : 'Fatima Khaled',
      role: language === 'ar' ? 'مدربة أعمال' : 'Business Coach',
      content: language === 'ar' 
        ? 'أنا أعمل كمدربة أعمال وأقدم دورات عبر الإنترنت. هذه المنصة ساعدتني في إنشاء صفحات هبوط جذابة لدوراتي، مما أدى إلى زيادة عدد المشتركين بشكل كبير.' 
        : 'I work as a business coach and offer online courses. This platform helped me create attractive landing pages for my courses, which led to a significant increase in the number of subscribers.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block mb-2 px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            {language === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'قصص نجاح حقيقية' : 'Real Success Stories'}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'اكتشف كيف ساعدت منصتنا الآلاف من رواد الأعمال والشركات في تحقيق أهدافهم.' 
              : 'Discover how our platform has helped thousands of entrepreneurs and businesses achieve their goals.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group hover-lift"
            >
              <div className="absolute top-6 right-6 text-primary opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote size={48} />
              </div>
              
              <div className="flex space-x-1 mb-4 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < testimonial.rating ? "currentColor" : "none"} 
                  />
                ))}
              </div>
              
              <blockquote className="mb-6 text-lg relative z-10">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
