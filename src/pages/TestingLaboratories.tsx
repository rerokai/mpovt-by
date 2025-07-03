
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  ArrowRight,
  FlaskConical,
  Microscope,
  Settings,
  Award,
  CheckCircle,
  Users,
  Clock,
  Shield,
  FileText,
  Download,
  Phone,
  Mail,
  User
} from "lucide-react";

const TestingLaboratories = () => {
  const laboratories = [
    {
      title: "Аккредитованная лаборатория испытаний",
      description: "Полный комплекс механических и климатических испытаний автокомпонентов и других изделий",
      icon: Settings,
      accreditationNumber: "BY/112 2.5349",
      accreditationDate: "10.12.2021",
      validityPeriod: "с 10 декабря 2021 г. до 10 декабря 2026 года",
      features: [
        "Механические испытания",
        "Климатические испытания",
        "Испытания автокомпонентов",
        "Испытания на вибрацию и удар",
        "Электромагнитная совместимость"
      ]
    },
    {
      title: "Аккредитованная лаборатория метрологии",
      description: "Поверка средств измерений радиотехнических, электрических величин, средств измерения давления и температуры",
      icon: Microscope,
      accreditationNumber: "BY/112 3.0268",
      accreditationDate: "18.07.2011",
      validityPeriod: "с 19 июля 2021 г. до 19 июля 2026 года",
      features: [
        "Поверка радиотехнических средств",
        "Поверка электрических величин",
        "Поверка средств измерения давления",
        "Поверка средств измерения температуры",
        "Калибровка измерительного оборудования"
      ]
    }
  ];

  const documents = [
    {
      title: "Аттестат лаборатории испытаний",
      url: "https://mpovt.by/gallery/%D0%90%D1%82%D1%82%D0%B5%D1%81%D1%82%D0%B0%D1%82%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%98%D1%81.pdf"
    },
    {
      title: "Область аккредитации ЛИс",
      url: "https://mpovt.by/gallery/%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%98%D1%81.pdf"
    },
    {
      title: "Аттестат лаборатории метрологии",
      url: "https://mpovt.by/gallery/%D0%90%D1%82%D1%82%D0%B5%D1%81%D1%82%D0%B0%D1%82%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%9C_16.07.2021.pdf"
    },
    {
      title: "Область аккредитации ЛМ",
      url: "https://mpovt.by/gallery/%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%9C.pdf"
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Аккредитация",
      description: "Все лаборатории имеют государственную аккредитацию",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      hoverBg: "hover:from-blue-500/30 hover:to-cyan-500/30",
      iconColor: "text-blue-400"
    },
    {
      icon: Users,
      title: "Опытные специалисты",
      description: "Команда высококвалифицированных экспертов",
      bgColor: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
      hoverBg: "hover:from-emerald-500/30 hover:to-green-500/30",
      iconColor: "text-emerald-400"
    },
    {
      icon: Clock,
      title: "Быстрые сроки",
      description: "Оперативное проведение испытаний и выдача результатов",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-violet-500/20",
      hoverBg: "hover:from-purple-500/30 hover:to-violet-500/30",
      iconColor: "text-purple-400"
    },
    {
      icon: Shield,
      title: "Надежность",
      description: "Точные и достоверные результаты испытаний",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      hoverBg: "hover:from-orange-500/30 hover:to-red-500/30",
      iconColor: "text-orange-400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white/95 leading-tight">
              Испытательные лаборатории
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              Профессиональные испытания и контроль качества продукции
            </p>
          </div>
        </div>
      </section>

      {/* Laboratories Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-8">
              Наши лаборатории
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Современное оборудование и высококвалифицированные специалисты
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {laboratories.map((lab, index) => {
              const Icon = lab.icon;
              return (
                <Card 
                  key={index}
                  className="group overflow-hidden bg-slate-900/30 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-700 hover:shadow-2xl hover:shadow-slate-900/50 h-full"
                >
                  <div className="p-6 md:p-8 flex flex-col h-full">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-3 rounded-xl mr-4">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{lab.title}</h3>
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">{lab.description}</p>
                    
                    <div className="mb-6 p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
                      <p className="text-sm text-slate-400 mb-2">
                        <strong className="text-white">Основания для оказания услуг:</strong> аттестат аккредитации № {lab.accreditationNumber} от {lab.accreditationDate}
                      </p>
                      <p className="text-sm text-slate-400">
                        <strong className="text-white">Срок действия:</strong> {lab.validityPeriod}
                      </p>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-white mb-3">Виды услуг:</h4>
                      <ul className="space-y-2">
                        {lab.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-slate-300">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/6 right-1/6 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/6 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">
              Документы
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Аттестаты аккредитации и области деятельности наших лабораторий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <Card 
                key={index}
                className="group overflow-hidden bg-slate-900/20 backdrop-blur-xl border border-slate-700/20 hover:border-blue-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/20"
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center flex-grow">
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-slate-400">PDF документ</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="ml-4 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300"
                  >
                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/6 right-1/6 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/6 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              Наши преимущества
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Почему стоит выбрать наши испытательные лаборатории
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card 
                  key={index}
                  className={`group text-center p-6 ${advantage.bgColor} backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105 ${advantage.hoverBg}`}
                >
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 bg-white/5">
                    <Icon className={`w-8 h-8 ${advantage.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-slate-300">{advantage.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-8">
              Контакты
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Свяжитесь с руководителем департамента для получения консультации
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-900/30 backdrop-blur-xl border border-slate-700/20 hover:border-purple-500/40 transition-all duration-500">
              <div className="p-8 text-center">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-10 h-10 text-purple-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  Руководитель Департамента управления качеством
                </h3>
                <p className="text-xl text-purple-300 mb-6 font-semibold">
                  Шляев Артём Сергеевич
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center text-slate-300">
                    <Phone className="w-5 h-5 text-emerald-400 mr-3" />
                    <a href="tel:+375173889093" className="hover:text-emerald-400 transition-colors">
                      +375 17 3889093
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-slate-300">
                    <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                    <a href="mailto:shliaev@mpovt.by" className="hover:text-cyan-400 transition-colors">
                      shliaev@mpovt.by
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 lg:py-28 relative bg-gradient-to-b from-black via-slate-900/20 to-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Готовы к сотрудничеству?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Свяжитесь с нами для консультации по проведению испытаний вашей продукции
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-600/40 bg-slate-800/20 hover:bg-slate-700/30 text-white hover:text-white text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
                <Link to="/services">Все услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestingLaboratories;
