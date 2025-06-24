
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
  Radio,
  Archive,
  ArrowRight,
  Settings2,
  Shield,
  Award,
  Star,
  CheckCircle,
  Zap
} from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      title: "Автокомпоненты",
      description: "Высокотехнологичные электронные блоки управления для автомобильной промышленности",
      icon: Car,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=400&fit=crop",
      features: ["Блоки ECU", "Системы впрыска", "ABS модули", "Блоки климат-контроля"],
      badge: "Премиум",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Сельхозтехника",
      description: "Специализированные решения для тракторов и комбайнов",
      icon: Tractor,
      image: "https://images.unsplash.com/photo-1574906670088-2c8e77b6f75b?w=500&h=400&fit=crop",
      features: ["Блоки управления двигателем", "GPS-навигация", "Мониторинг урожая", "Системы автопилота"],
      badge: "Инновации",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Промышленный транспорт",
      description: "Надежные решения для карьерных самосвалов и спецтехники",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=400&fit=crop",
      features: ["Системы безопасности", "Телематика", "Диагностика", "Мониторинг нагрузки"],
      badge: "Надежность",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Средства связи",
      description: "Профессиональные системы связи и телекоммуникаций",
      icon: Radio,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
      features: ["Домофонные системы", "Радиосвязь", "IP-телефония", "Системы оповещения"],
      badge: "Связь",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Компьютерная техника",
      description: "Современные ноутбуки и вычислительные устройства",
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=400&fit=crop",
      features: ["Защищенные ноутбуки", "Промышленные планшеты", "Embedded решения", "IoT устройства"],
      badge: "Технологии",
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Промышленное оборудование",
      description: "Металлические шкафы и специализированная мебель",
      icon: Archive,
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=500&h=400&fit=crop",
      features: ["Серверные шкафы", "Климатические шкафы", "Защитные корпуса", "Модульные системы"],
      badge: "Качество",
      color: "from-gray-500/20 to-slate-500/20"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Международные стандарты",
      description: "Сертификация ISO 9001, соответствие мировым требованиям качества"
    },
    {
      icon: Zap,
      title: "Инновационные технологии",
      description: "Использование передовых решений и современных материалов"
    },
    {
      icon: Award,
      title: "Проверенное качество",
      description: "Многолетний опыт и тысячи довольных клиентов"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 dark:from-orange-950 dark:via-orange-900 dark:to-orange-800">
      <Navigation />
      
      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-full blur-3xl"></div>
              <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                Наша продукция
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Инновационные решения для промышленности — от автокомпонентов до информационных систем
            </p>
          </div>

          {/* Features Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 glass-card border-white/40 hover:border-primary/30 transition-all duration-500 hover:scale-105 animate-fade-in-left group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index} 
                  className="group overflow-hidden glass-card border-white/40 hover:border-primary/30 hover:shadow-2xl transition-all duration-700 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-48">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60`}></div>
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/30">
                        {category.badge}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-orange-500 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Action Button */}
                    <Button 
                      className="w-full btn-primary-smooth group-hover:bg-primary/90 transition-all duration-300"
                    >
                      Подробнее
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Statistics Section */}
          <Card className="p-8 md:p-12 glass-card border-white/40 mb-16 animate-fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши достижения</h2>
              <p className="text-muted-foreground text-lg">Цифры, которые говорят о нашем качестве</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "лет опыта" },
                { number: "1000+", label: "довольных клиентов" },
                { number: "50+", label: "видов продукции" },
                { number: "24/7", label: "техподдержка" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="p-8 md:p-12 text-center glass-card border-white/40 bg-gradient-to-r from-primary/10 to-orange-500/10 animate-fade-in-up">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-6">
                <Settings2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Готовы обсудить ваш проект?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Наши эксперты помогут подобрать оптимальное решение для ваших задач. 
                Получите персональную консультацию уже сегодня.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary-smooth text-lg px-8">
                  Получить консультацию
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white">
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
