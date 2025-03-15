
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-bold text-primary flex items-center mb-4">
              <span className="mr-2 text-3xl">⚡</span>
              {language === 'ar' ? 'فنل كليك' : 'ClickFunnel'}
            </Link>
            <p className="text-gray-600 mb-6">
              {language === 'ar' 
                ? 'منصة سهلة الاستخدام لإنشاء صفحات هبوط احترافية وعالية التحويل.'
                : 'An easy-to-use platform for creating professional, high-converting landing pages.'}
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  {language === 'ar' ? 'الرئيسية' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-gray-600 hover:text-primary transition-colors">
                  {language === 'ar' ? 'الميزات' : 'Features'}
                </Link>
              </li>
              <li>
                <Link to="/builder" className="text-gray-600 hover:text-primary transition-colors">
                  {language === 'ar' ? 'منشئ الصفحات' : 'Page Builder'}
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-gray-600 hover:text-primary transition-colors">
                  {language === 'ar' ? 'الأسعار' : 'Pricing'}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                  {language === 'ar' ? 'المدونة' : 'Blog'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2 flex-shrink-0 text-primary" />
                <span>support@clickfunnel-ar.com</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2 flex-shrink-0 text-primary" />
                <span>+966 12 345 6789</span>
              </li>
              <li className="flex items-start text-gray-600">
                <MapPin size={18} className="mr-2 flex-shrink-0 text-primary mt-1" />
                <span>
                  {language === 'ar' 
                    ? 'الرياض، المملكة العربية السعودية، شارع الملك فهد، برج المملكة، الطابق 20'
                    : 'Riyadh, Saudi Arabia, King Fahd Road, Kingdom Tower, 20th Floor'}
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {language === 'ar' ? 'النشرة الإخبارية' : 'Newsletter'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'ar'
                ? 'اشترك ليصلك أحدث الأخبار والعروض.'
                : 'Subscribe to receive the latest news and offers.'}
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'} 
                className="bg-white"
              />
              <Button className="btn-primary flex-shrink-0">
                {language === 'ar' ? 'اشتراك' : 'Subscribe'}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} {language === 'ar' ? 'فنل كليك' : 'ClickFunnel'}. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </Link>
              <Link to="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                {language === 'ar' ? 'شروط الاستخدام' : 'Terms of Service'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
