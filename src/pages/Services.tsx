
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  ArrowRight,
  FlaskConical,
  Settings,
  Cpu,
  Flame,
  Package,
  Zap,
  Waves,
  Wrench,
  Target,
  Shield,
  Cog
} from "lucide-react";

const Services = () => {
  const mainService = {
    title: "Испытательные лаборатории",
    description: "Комплексные испытания и контроль качества продукции с государственной аккредитацией. Наша лаборатория обеспечивает полный цикл тестирования для подтверждения соответствия вашей продукции всем необходимым стандартам.",
    icon: FlaskConical,
    link: "/services/testing-laboratories",
    features: [
      "Электронные испытания и EMC тестирование",
      "Химический и материаловедческий анализ", 
      "Механические и климатические испытания",
      "Сертификация продукции и системы качества",
      "Государственная аккредитация",
      "Быстрые сроки получения результатов"
    ]
  };

  const additionalServices = [
    {
      title: "Металлообработка",
      description: "Высокоточная обработка металлических деталей на современном оборудовании",
      icon: Settings
    },
    {
      title: "Термообработка", 
      description: "Специализированная термическая обработка для улучшения свойств материалов",
      icon: Flame
    },
    {
      title: "Литье пластика",
      description: "Производство пластиковых изделий методом литья под давлением",
      icon: Package
    },
    {
      title: "SMD-монтаж",
      description: "Поверхностный монтаж электронных компонентов с высокой точностью",
      icon: Cpu
    },
    {
      title: "Волновая пайка",
      description: "Автоматизированная пайка электронных компонентов волновым методом",
      icon: Waves
    },
    {
      title: "Ручной монтаж",
      description: "Прецизионный ручной монтаж сложных электронных узлов",
      icon: Wrench
    },
    {
      title: "Селективная пайка",
      description: "Точечная пайка компонентов с использованием селективного оборудования",
      icon: Target
    },
    {
      title: "Полимерное покрытие",
      description: "Защитные и декоративные полимерные покрытия для различных изделий",
      icon: Shield
    },
    {
      title: "Прессование термоактивных материалов",
      description: "Формование изделий из термоактивных полимерных материалов",
      icon: Cog
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white/95 leading-tight">
              Услуги
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              Профессиональные услуги для вашего бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Main Service - Testing Laboratories */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-8">
              Наша ключевая услуга
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="group overflow-hidden bg-gradient-to-br from-slate-800/20 to-slate-900/40 backdrop-blur-xl border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-6 rounded-2xl group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-500">
                      <FlaskConical className="w-16 h-16 text-cyan-400" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{mainService.title}</h3>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">{mainService.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {mainService.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-slate-300">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-4"
                    >
                      <Link to={mainService.link}>
                        Подробнее об испытательных лабораториях
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-8">
              Дополнительные услуги
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Широкий спектр производственных и технологических услуг
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="group overflow-hidden bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-700 hover:shadow-xl hover:shadow-slate-900/30 w-full max-w-sm"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-3 rounded-xl mr-4 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-500">
                        <Icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    </div>
                    
                    <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 text-lg mb-6">
              Заинтересованы в наших услугах? Свяжитесь с нами для получения подробной информации
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 lg:py-28 relative bg-black overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white/95">
              Нужна консультация?
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Свяжитесь с нами для получения подробной информации о наших услугах
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white hover:text-white text-lg px-8 py-4">
                <Link to="/">На главную</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
