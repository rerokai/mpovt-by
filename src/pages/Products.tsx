
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Car, 
  Tractor, 
  Truck, 
  Laptop,
  Monitor,
  Tablet,
  HardDrive,
  Radio,
  Archive,
  ArrowRight,
  Zap,
  Shield,
  Award,
  CheckCircle,
  Star,
  Crown
} from "lucide-react";

const Products = () => {
  // Priority products (main focus)
  const priorityProducts = [
    {
      title: "Промышленные ПК (H-PC)",
      description: "Высокопроизводительные промышленные компьютеры для критически важных задач",
      icon: Laptop,
      path: "/products/h-pc",
      color: "from-orange-500 to-red-500",
      features: ["Защищенные корпуса IP65", "Высокая вычислительная мощность", "Расширенная температурная стойкость", "Промышленные интерфейсы"],
      isPriority: true,
      badge: "Флагманская продукция"
    },
    {
      title: "Промышленные ноутбуки (H-Book)",
      description: "Мобильные защищенные решения для полевых условий и промышленного применения",
      icon: Laptop,
      path: "/products/h-book",
      color: "from-orange-600 to-amber-500",
      features: ["Ударопрочный дизайн", "Длительное время работы", "Полевая диагностика", "Военные стандарты защиты"],
      isPriority: true,
      badge: "Инновации"
    },
    {
      title: "Промышленные мониторы (H)",
      description: "Профессиональные дисплеи повышенной надежности для промышленного мониторинга",
      icon: Monitor,
      path: "/products/h-monitors",
      color: "from-orange-500 to-yellow-500",
      features: ["Сенсорные технологии", "Широкие углы обзора", "Высокая яркость", "Антибликовые покрытия"],
      isPriority: true,
      badge: "Премиум качество"
    },
    {
      title: "Промышленные планшеты (H-Tab)",
      description: "Компактные мобильные решения для управления производством и мониторинга",
      icon: Tablet,
      path: "/products/h-tab",
      color: "from-orange-400 to-orange-600",
      features: ["Защита от воды и пыли", "Емкостные экраны", "Беспроводная связь", "Горячая замена батарей"],
      isPriority: true,
      badge: "Мобильность"
    },
    {
      title: "M2.SSD накопители (H-Storage)",
      description: "Высокоскоростные твердотельные накопители для промышленных применений",
      icon: HardDrive,
      path: "/products/h-storage",
      color: "from-orange-500 to-orange-700",
      features: ["NVMe интерфейс", "Расширенный температурный диапазон", "Высокая надежность", "Износостойкость"],
      isPriority: true,
      badge: "Высокие технологии"
    }
  ];

  // Secondary products
  const secondaryProducts = [
    {
      title: "Блоки для автомобилей",
      description: "Электронные блоки управления для автомобильной промышленности",
      icon: Car,
      path: "/products/car-blocks",
      color: "from-blue-500 to-cyan-500",
      features: ["ECU блоки управления", "Системы впрыска топлива", "ABS модули безопасности", "Диагностические системы"],
      isPriority: false
    },
    {
      title: "Блоки для тракторов",
      description: "Специализированные решения для сельскохозяйственной техники",
      icon: Tractor,
      path: "/products/tractor-blocks",
      color: "from-green-500 to-emerald-500",
      features: ["Управление двигателем", "GPS-навигационные системы", "Системы автопилота", "Мониторинг параметров"],
      isPriority: false
    },
    {
      title: "Блоки для комбайнов",
      description: "Высокотехнологичные системы автоматизации для уборочной техники",
      icon: Archive,
      path: "/products/combine-blocks",
      color: "from-yellow-500 to-orange-500",
      features: ["Мониторинг урожайности", "Автоматизация процессов", "Диагностика состояния", "Оптимизация работы"],
      isPriority: false
    },
    {
      title: "Блоки для карьерных самосвалов",
      description: "Надежные решения для экстремальных условий тяжелой промышленности",
      icon: Truck,
      path: "/products/dump-truck-blocks",
      color: "from-red-500 to-pink-500",
      features: ["Системы безопасности", "Телематические решения", "Мониторинг нагрузки", "Контроль производительности"],
      isPriority: false
    },
    {
      title: "Системы домофонной связи",
      description: "Современные IP-системы домофонной связи с видеонаблюдением",
      icon: Radio,
      path: "/products/intercoms",
      color: "from-teal-500 to-cyan-500",
      features: ["IP-технологии связи", "HD видеосвязь", "Мобильная интеграция", "Облачные сервисы"],
      isPriority: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 dark:from-orange-950 dark:via-orange-900 dark:to-orange-800">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Hero Section */}
          <div className="text-center mb-24 animate-fade-in-up">
            <div className="inline-block relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-full blur-3xl scale-150"></div>
              <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                Наша продукция
              </h1>
            </div>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              Инновационные промышленные решения с акцентом на высокотехнологичную вычислительную технику
            </p>
            
            {/* Statistics */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="glass-card p-6 border-white/40 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              
              <div className="glass-card p-6 border-white/40 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">85%+</div>
                <div className="text-sm text-muted-foreground">инновационной продукции</div>
              </div>
              
              <div className="glass-card p-6 border-white/40 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">качество</div>
              </div>
            </div>
          </div>

          {/* Priority Products Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <Crown className="h-8 w-8 text-orange-500" />
                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Флагманская продукция
                </h2>
                <Crown className="h-8 w-8 text-orange-500" />
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Наши ведущие решения в области промышленной вычислительной техники и систем хранения данных
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {priorityProducts.map((product, index) => {
                const Icon = product.icon;
                return (
                  <Card 
                    key={index} 
                    className="group overflow-hidden glass-card border-orange-200/50 hover:border-orange-400/60 hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up h-full flex flex-col relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Priority Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {product.badge}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col h-full">
                      {/* Icon with enhanced gradient */}
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-30 rounded-2xl blur-xl`}></div>
                        <div className={`relative p-4 bg-gradient-to-r ${product.color} rounded-2xl w-fit shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Enhanced Button */}
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transition-all duration-300 mt-auto shadow-lg hover:shadow-xl"
                        onClick={() => window.location.href = product.path}
                      >
                        Подробнее
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Secondary Products Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                Дополнительные направления
              </h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Проверенные решения для различных отраслей промышленности
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryProducts.map((product, index) => {
                const Icon = product.icon;
                return (
                  <Card 
                    key={index} 
                    className="group overflow-hidden glass-card border-white/40 hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-pointer animate-fade-in-up h-full flex flex-col"
                    style={{ animationDelay: `${(priorityProducts.length + index) * 100}ms` }}
                  >
                    <div className="p-6 flex flex-col h-full">
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-20 rounded-2xl blur-xl`}></div>
                        <div className={`relative p-4 bg-gradient-to-r ${product.color} rounded-2xl w-fit`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow text-sm">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {product.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Button */}
                      <Button 
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 mt-auto text-sm"
                        onClick={() => window.location.href = product.path}
                      >
                        Подробнее
                        <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="p-12 text-center glass-card border-white/40 bg-gradient-to-r from-orange-500/5 via-orange-600/5 to-orange-500/5 animate-fade-in-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Нужна консультация?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Наши специалисты помогут подобрать оптимальное решение для ваших задач
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-4 shadow-lg">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
                  Скачать каталог
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
