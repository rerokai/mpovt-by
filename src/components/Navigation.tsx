
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const companyMenuItems = [
    { name: "Электронное обращение", path: "/company/electronic-appeal" },
    { name: "Система менеджмента качества", path: "/company/quality-management" },
    { name: "Кооперация", path: "/company/cooperation" },
    { name: "Вакансии", path: "/company/vacancies" },
    { name: "Арендные площади", path: "/company/rental-areas" },
    { name: "Противодействие коррупции", path: "/company/anti-corruption" },
    { name: "Продажа неликвидов", path: "/company/asset-sales" }
  ];

  const productMenuItems = [
    { name: "Блоки для автомобилей", path: "/products/car-blocks" },
    { name: "Блоки для тракторов", path: "/products/tractor-blocks" },
    { name: "Блоки для комбайнов", path: "/products/combine-blocks" },
    { name: "Блоки для карьерных самосвалов", path: "/products/dump-truck-blocks" },
    { name: "Ноутбуки", path: "/products/laptops" },
    { name: "Домофоны", path: "/products/intercoms" },
    { name: "Специальная связь", path: "/products/special-communication" },
    { name: "Информационные системы", path: "/products/information-systems" },
    { name: "Металлические шкафы", path: "/products/metal-cabinets" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownClick = (e: React.MouseEvent, dropdown: string) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
      scrolled 
        ? "bg-white/10 dark:bg-black/10 backdrop-blur-xl border-b border-white/20 dark:border-white/10 py-3 shadow-2xl" 
        : "bg-white/5 dark:bg-black/5 backdrop-blur-md py-5"
    )}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-primary/50">
            <span className="text-white font-bold text-lg">М</span>
          </div>
          <span className="font-bold text-xl transition-all duration-300 group-hover:text-primary">МПОВТ</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-2">
          <li>
            <Link 
              to="/" 
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary hover:scale-105 hover:shadow-lg"
            >
              Главная
            </Link>
          </li>
          
          {/* Company Dropdown */}
          <li className="relative">
            <button
              onClick={(e) => handleDropdownClick(e, 'company')}
              className="flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary hover:scale-105 hover:shadow-lg"
            >
              О компании 
              <ChevronDown className={cn(
                "ml-1 h-4 w-4 transition-transform duration-300",
                activeDropdown === 'company' && "rotate-180"
              )} />
            </button>
            
            <div className={cn(
              "absolute top-full left-0 mt-2 min-w-[320px] transition-all duration-500 ease-out origin-top",
              activeDropdown === 'company' 
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            )}>
              <div className="bg-white/15 dark:bg-black/15 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-2 shadow-2xl">
                {companyMenuItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "block px-4 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-white/20 hover:text-primary hover:translate-x-2 opacity-0 translate-x-4",
                      activeDropdown === 'company' && "animate-fade-in-left"
                    )}
                    style={{ 
                      animationDelay: activeDropdown === 'company' ? `${index * 50}ms` : '0ms',
                      animationFillMode: 'forwards'
                    }}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Products Dropdown */}
          <li className="relative">
            <button
              onClick={(e) => handleDropdownClick(e, 'products')}
              className="flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary hover:scale-105 hover:shadow-lg"
            >
              Продукция 
              <ChevronDown className={cn(
                "ml-1 h-4 w-4 transition-transform duration-300",
                activeDropdown === 'products' && "rotate-180"
              )} />
            </button>
            
            <div className={cn(
              "absolute top-full left-0 mt-2 min-w-[360px] transition-all duration-500 ease-out origin-top",
              activeDropdown === 'products' 
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            )}>
              <div className="bg-white/15 dark:bg-black/15 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-2 shadow-2xl">
                {productMenuItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "block px-4 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-white/20 hover:text-primary hover:translate-x-2 opacity-0 translate-x-4",
                      activeDropdown === 'products' && "animate-fade-in-left"
                    )}
                    style={{ 
                      animationDelay: activeDropdown === 'products' ? `${index * 50}ms` : '0ms',
                      animationFillMode: 'forwards'
                    }}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <Link 
              to="/services" 
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary hover:scale-105 hover:shadow-lg"
            >
              Услуги
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary hover:scale-105 hover:shadow-lg"
            >
              Контакты
            </Link>
          </li>
          <li>
            <Link 
              to="/support" 
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary hover:scale-105 hover:shadow-lg"
            >
              Поддержка и сервис
            </Link>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <ThemeToggle />
          <Button asChild className="bg-primary/90 hover:bg-primary text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50">
            <Link to="/contact">Связаться с нами</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-40 lg:hidden transition-all duration-500",
        mobileMenuOpen ? "opacity-100 backdrop-blur-sm" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white/10 dark:bg-black/10 backdrop-blur-xl border-l border-white/20 dark:border-white/10 shadow-2xl p-6 transition-all duration-500 ease-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full">
            <div className="flex justify-end mb-8">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="space-y-6 flex-1 overflow-y-auto">
              <Link 
                to="/" 
                className="block text-lg font-medium py-2 transition-all duration-300 hover:text-primary hover:translate-x-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Главная
              </Link>
              
              <div>
                <div className="text-lg font-medium py-2 text-muted-foreground">О компании</div>
                <div className="ml-4 space-y-2">
                  {companyMenuItems.map(item => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className="block py-1 text-sm transition-all duration-300 hover:text-primary hover:translate-x-2" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-lg font-medium py-2 text-muted-foreground">Продукция</div>
                <div className="ml-4 space-y-2">
                  {productMenuItems.map(item => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className="block py-1 text-sm transition-all duration-300 hover:text-primary hover:translate-x-2" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/services" 
                className="block text-lg font-medium py-2 transition-all duration-300 hover:text-primary hover:translate-x-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                to="/contact" 
                className="block text-lg font-medium py-2 transition-all duration-300 hover:text-primary hover:translate-x-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </Link>
              <Link 
                to="/support" 
                className="block text-lg font-medium py-2 transition-all duration-300 hover:text-primary hover:translate-x-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Поддержка и сервис
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
