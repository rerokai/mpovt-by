
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";
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
  Cog,
  Award,
  CheckCircle
} from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";

const Services = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  const certifications = t?.services?.main?.testingLabs?.certifications ?? [
    "БГЦА - Белорусский государственный центр аккредитации",
    "EA BLA - Европейское сотрудничество по аккредитации (испытания, калибровки, сертификация)",
    "ILAC MRA - Международное сотрудничество лабораторных аккредитаций",
    "IAF MLA - Международный форум по аккредитации (сертификация продукции и систем)"
  ];

  const additionalServices = [
    {
      title: t?.services?.main?.additional?.items[0]?.title ?? "Металлообработка",
      description: t?.services?.main?.additional?.items[0]?.description ?? "Высокоточная обработка металлических деталей на современном оборудовании с ЧПУ",
      icon: Settings,
      solidBg: 'bg-blue-500/20',
      hoverBg: 'hover:bg-blue-900/40',
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-400"
    },
    {
      title: t?.services?.main?.additional?.items[1]?.title ?? "Термообработка",
      description: t?.services?.main?.additional?.items[1]?.description ?? "Специализированная термическая обработка для улучшения свойств материалов",
      icon: Flame,
      solidBg: 'bg-red-500/20',
      hoverBg: 'hover:bg-red-900/40',
      color: "from-red-500 to-orange-500",
      iconColor: "text-red-400"
    },
    {
      title: t?.services?.main?.additional?.items[2]?.title ?? "Литье пластика",
      description: t?.services?.main?.additional?.items[2]?.description ?? "Производство пластиковых изделий методом литья под давлением",
      icon: Package,
      solidBg: 'bg-green-500/20',
      hoverBg: 'hover:bg-green-900/40',
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-400"
    },
    {
      title: t?.services?.main?.additional?.items[3]?.title ?? "SMD-монтаж",
      description: t?.services?.main?.additional?.items[3]?.description ?? "Поверхностный монтаж электронных компонентов с высокой точностью",
      icon: Cpu,
      solidBg: 'bg-purple-500/20',
      hoverBg: 'hover:bg-purple-900/40',
      color: "from-purple-500 to-violet-500",
      iconColor: "text-purple-400"
    },
    {
      title: t?.services?.main?.additional?.items[4]?.title ?? "Волновая пайка",
      description: t?.services?.main?.additional?.items[4]?.description ?? "Автоматизированная пайка электронных компонентов волновым методом",
      icon: Waves,
      solidBg: 'bg-teal-500/20',
      hoverBg: 'hover:bg-teal-900/40',
      color: "from-teal-500 to-cyan-500",
      iconColor: "text-teal-400"
    },
    {
      title: t?.services?.main?.additional?.items[5]?.title ?? "Ручной монтаж",
      description: t?.services?.main?.additional?.items[5]?.description ?? "Прецизионный ручной монтаж сложных электронных узлов",
      icon: Wrench,
      solidBg: 'bg-amber-500/20',
      hoverBg: 'hover:bg-amber-900/40',
      color: "from-amber-500 to-yellow-500",
      iconColor: "text-amber-400"
    },
    {
      title: t?.services?.main?.additional?.items[6]?.title ?? "Селективная пайка",
      description: t?.services?.main?.additional?.items[6]?.description ?? "Точечная пайка компонентов с использованием селективного оборудования",
      icon: Target,
      solidBg: 'bg-pink-500/20',
      hoverBg: 'hover:bg-pink-900/40',
      color: "from-pink-500 to-rose-500",
      iconColor: "text-pink-400"
    },
    {
      title: t?.services?.main?.additional?.items[7]?.title ?? "Полимерное покрытие",
      description: t?.services?.main?.additional?.items[7]?.description ?? "Защитные и декоративные полимерные покрытия для различных изделий",
      icon: Shield,
      solidBg: 'bg-indigo-500/20',
      hoverBg: 'hover:bg-indigo-900/40',
      color: "from-indigo-500 to-blue-500",
      iconColor: "text-indigo-400"
    },
    {
      title: t?.services?.main?.additional?.items[8]?.title ?? "Прессование термоактивных материалов",
      description: t?.services?.main?.additional?.items[8]?.description ?? "Формование изделий из термоактивных полимерных материалов",
      icon: Cog,
      solidBg: 'bg-slate-500/20',
      hoverBg: 'hover:bg-slate-800/40',
      color: "from-slate-500 to-gray-500",
      iconColor: "text-slate-400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t?.services?.main?.pageTitle ?? 'Услуги'}
        subtitle={t?.services?.main?.pageSubtitle ?? 'Профессиональные услуги для вашего бизнеса'}
        sphere1="from-cyan-500/30 to-blue-500/30"
        sphere2="from-purple-500/30 to-pink-500/30"
        sphere3="from-emerald-500/30 to-teal-500/30"
        main={true}
      />

      {/* Main Service - Testing Laboratories */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                {t?.services?.main?.testingLabs?.title ?? 'Испытательные лаборатории'}
              </h2>
            </div>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              {t?.services?.main?.testingLabs?.description ?? 'Комплексные испытания и контроль качества с международной аккредитацией'}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid xl:grid-cols-2 gap-6 lg:gap-8">
              {/* First Card - Accreditation Info */}
              <Card className="group overflow-hidden bg-cyan-800/10 backdrop-blur-xl border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t?.services?.main?.testingLabs?.accreditationTitle ?? 'Государственная аккредитация'}</h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed pb-5">
                    {t?.services?.main?.testingLabs?.accreditationDescription ?? 'Наша лаборатория имеет полную государственную аккредитацию и международное признание. Мы обеспечиваем комплексные испытания промышленной продукции с выдачей официальных сертификатов соответствия.'}
                  </p>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start text-slate-300 group/cert">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/cert:bg-cyan-400 transition-colors"></div>
                        <span className="leading-relaxed text-sm md:text-base">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Second Card - Testing Types */}
              <Card className="group overflow-hidden bg-cyan-800/10 backdrop-blur-xl border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="p-6 md:p-8 h-full lg:max-w-none">
                  <div className="flex-grow lg:flex-grow-0">
                    <div className="mb-6">
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">{t?.services?.main?.testingLabs?.typesTitle ?? "Виды испытаний"}</h4>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        {t?.services?.main?.testingLabs?.typesSubtitle ?? 'Широкий спектр профессиональных испытаний и сертификационных услуг для промышленности'}
                      </p>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      {(t?.services?.main?.testingLabs?.types ?? [
                        "Электронные испытания и EMC тестирование",
                        "Химический и материаловедческий анализ",
                        "Механические и климатические испытания",
                        "Сертификация продукции и систем качества",
                        "Калибровка измерительного оборудования",
                        "Сертификация персонала"
                      ]).map((service, index) => (
                        <div key={index} className="flex items-center text-slate-300">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 mr-3 flex-shrink-0" />
                          <span className="text-sm md:text-base">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-base md:text-lg sd:text-xs px-6 md:px-8 py-4 md:py-6 hover:scale-105 transition-all duration-300"
                    >
                      <Link to="/services/testing-laboratories">
                        {t?.services?.main?.testingLabs?.ctaButton ?? (isMobile ? 'Подробнее о лабораториях' : 'Подробнее о лабораториях')}
                        <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-8">
              {t?.services?.main?.additional?.title ?? 'Производственные услуги'}
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              {t?.services?.main?.additional?.description ?? 'Полный спектр современных производственных и технологических решений'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-8 xl:px-24">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              let solidBg = service.solidBg;
              let hoverBg = service.hoverBg;

              return (
                <Card
                  key={index}
                  className={`group overflow-hidden backdrop-blur-xl bg-slate- border border-slate-700/30 transition-all duration-500 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-2 ${hoverBg}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="mb-6">
                      <div className={`inline-block p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 ${solidBg}`}>
                        <Icon className={`w-8 h-8 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed flex-grow group-hover:text-slate-200 transition-colors">
                      {service.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-slate-700/50">
                      <div className={`h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${solidBg}`}></div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
