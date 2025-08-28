import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'home', href: '#home' },
    { key: 'projects', href: '#projects' },
    { key: 'services', href: '#services' },
    { key: 'news', href: '#news' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
    { key: 'careers', href: '#careers' }
  ];

  const languages = [
    { code: 'zh-CN', name: t('language.zh-CN') },
    { code: 'en', name: t('language.en') },
    { code: 'ja', name: t('language.ja') }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (itemKey: string) => {
    setActiveMenuItem(itemKey);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLanguageMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Sidebar Navigation */}
      <nav className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-64 lg:flex lg:flex-col lg:bg-white lg:text-gray-800 lg:z-50" style={{borderRight: '1px solid #f8f8f8', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.06)'}}>
        <div className="p-6">
          <h1 className="text-2xl font-bold tracking-wider text-gray-800">TANZO</h1>
        </div>
        
        <ul className="flex-1 px-4 space-y-2">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.key);
                }}
                className={`menu-item block px-4 py-3 rounded-lg relative ${
                  activeMenuItem === item.key
                    ? 'text-[#01ae81] active'
                    : 'hover:text-[#01ae81]'
                }`}
              >
                {t(`nav.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Language Switcher - Desktop */}
        <div className="px-4 pb-6 relative">
          <button
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-[#01ae81] transition-colors duration-200 w-full"
          >
            <Globe size={18} />
            <span className="text-sm">{languages.find(lang => lang.code === i18n.language)?.name}</span>
          </button>
          
          {isLanguageMenuOpen && (
            <div className="absolute bottom-full left-4 right-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                    i18n.language === lang.code ? 'text-[#01ae81] bg-gray-50' : 'text-gray-700'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <style jsx>{`
          .menu-item {
            transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
            text-indent: 0px;
          }

          .menu-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 1px;
            width: 0px;
            background-color: #01ae81;
            transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
          }

          .menu-item:hover::before,
          .menu-item.active::before {
            width: 32px;
          }

          .menu-item:hover,
          .menu-item.active {
            text-indent: 40px;
          }
        `}</style>

      </nav>

      {/* Mobile Top Navigation */}
      <nav className="lg:hidden bg-white text-gray-800 shadow-lg" style={{boxShadow: '0 1px 6px rgba(0, 0, 0, 0.06)'}}>
        <div className="flex items-center justify-between px-4 py-4 relative">
          <h1 className="text-xl font-bold tracking-wider text-gray-800">TANZO</h1>
          <div className="flex items-center space-x-2">
            {/* Language Switcher - Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <Globe size={20} className="text-gray-800" />
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[120px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                        i18n.language === lang.code ? 'text-[#01ae81] bg-gray-50' : 'text-gray-700'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className="text-gray-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white bg-opacity-95 z-50">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <h1 className="text-xl font-bold tracking-wider text-gray-800">TANZO</h1>
              <button
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X size={24} className="text-gray-800" />
              </button>
            </div>
            
            <ul className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item.key);
                    }}
                    className={`block px-4 py-4 rounded-lg transition-all duration-200 text-lg ${
                      activeMenuItem === item.key
                        ? 'text-[#01ae81]'
                        : 'hover:text-[#01ae81]'
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="lg:ml-64">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1600')`
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90">
              {t('hero.subtitle')}
            </p>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="fixed bottom-0 right-0 z-10 bg-gray-50 text-['#999']">
            <p>&copy; 2024 TANZO SPACE DESIGN. {t('footer.copyright')}</p>
        </footer>
      </main>
    </div>
  );
}

export default App;