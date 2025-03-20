
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
    document.documentElement.dir = language === 'ar' ? 'ltr' : 'rtl';
    document.documentElement.lang = language === 'ar' ? 'en' : 'ar';
    document.body.classList.toggle('rtl');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = language;
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  const navLinks = [
    { name: language === 'ar' ? 'تطبيقاتنا' : 'Our Apps', href: '/#apps' },
    { name: language === 'ar' ? 'تسجيل الدخول' : 'Login', href: '/login' },
    { name: language === 'ar' ? 'الأسعار' : 'Pricing', href: '/#pricing' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-white relative group flex items-center"
        >
          <span className="mr-2 text-3xl">⚡</span>
          <span className="relative">
            {language === 'ar' ? 'فنل كليك' : 'ClickFunnel'}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-0">
          <div className="flex space-x-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white hover:text-[#8babd8] transition-colors duration-300 font-medium relative group px-6"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8babd8] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
          
          <div className="relative group px-6">
            <button
              className="flex items-center text-white hover:text-[#8babd8] transition-colors duration-300 font-medium"
            >
              {language === 'ar' ? 'اللغة' : 'Language'} <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-elastic transform origin-top-right group-hover:translate-y-0 translate-y-2 z-30">
              <div className="p-2">
                <button
                  onClick={toggleLanguage}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-accent-foreground rounded-md"
                >
                  {language === 'ar' ? 'English' : 'العربية'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-white hover:text-[#8babd8] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-elastic overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block py-2 text-gray-700 hover:text-[#8babd8] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="block py-2 text-gray-700 hover:text-[#8babd8] transition-colors"
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
