import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('首页');

  const navigationItems = [
    { name: '首页', href: '#home' },
    { name: '项目展示', href: '#projects' },
    { name: '业务范围', href: '#services' },
    { name: '新闻资讯', href: '#news' },
    { name: '关于我们', href: '#about' },
    { name: '联系方式', href: '#contact' },
    { name: '加入我们', href: '#careers' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (itemName: string) => {
    setActiveMenuItem(itemName);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
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
                  handleMenuClick(item.name);
                }}
                className={`menu-item block px-4 py-3 rounded-lg relative ${
                  activeMenuItem === item.name
                    ? 'text-[#01ae81] active'
                    : 'hover:text-[#01ae81]'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

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
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold tracking-wider text-gray-800">TANZO</h1>
          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className="text-gray-800" />}
          </button>
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
                      handleMenuClick(item.name);
                    }}
                    className={`block px-4 py-4 rounded-lg transition-all duration-200 text-lg ${
                      activeMenuItem === item.name
                        ? 'bg-[#01ae81] text-white'
                        : 'text-gray-600 hover:bg-[#01ae81] hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
              <p className="text-gray-600">13901189015</p>
              <p className="text-gray-600 mt-1">tanzozhuangzhe@126.com</p>
            </div>
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
              Naqu costume experience space
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90">
              那曲服饰馆 / 那曲品牌体验
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60">
            <div className="animate-bounce">
              <div className="w-1 h-8 bg-white rounded-full mx-auto"></div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-50 text-gray-800 py-12 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">TANZO</h3>
                <p className="text-gray-600">
                  专业的设计与体验空间解决方案提供商
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">联系信息</h4>
                <p className="text-gray-600">电话: 13901189015</p>
                <p className="text-gray-600">邮箱: tanzozhuangzhe@126.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">快速链接</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-600 hover:text-[#01ae81] transition-colors">关于我们</a></li>
                  <li><a href="#services" className="text-gray-600 hover:text-[#01ae81] transition-colors">业务范围</a></li>
                  <li><a href="#contact" className="text-gray-600 hover:text-[#01ae81] transition-colors">联系方式</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
              <p>&copy; 2024 TANZO SPACE DESIGN. 版权所有 京ICP备10017292号</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;