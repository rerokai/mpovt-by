
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, User, Download, Building, Car, Zap, Droplets, Home, Shield, DollarSign, CheckCircle, Award, Star } from "lucide-react";
import Footer from "@/components/Footer";

const RentalAreas = () => {
  const contact = {
    name: "Медведь Татьяна Николаевна",
    position: "Ведущий инженер",
    phones: ["+375 17 3889405", "+375 17 3639295"],
    email: "rent2@mpovt.by"
  };

  const facilities = [
    {
      icon: Building,
      title: "Офисные помещения",
      description: "Современные офисные пространства с естественным освещением и комфортными условиями работы"
    },
    {
      icon: Building,
      title: "Производственные площади",
      description: "Оборудованные производственные помещения для различных видов деятельности с высокими потолками"
    },
    {
      icon: Building,
      title: "Складские помещения",
      description: "Просторные складские комплексы с удобными подъездными путями и погрузочными зонами"
    },
    {
      icon: Car,
      title: "Парковочные места",
      description: "Удобная парковка для сотрудников и посетителей с охраняемой территорией"
    }
  ];

  const amenities = [
    {
      icon: Zap,
      title: "Электроснабжение",
      description: "Стабильное электроснабжение с резервными источниками питания"
    },
    {
      icon: Droplets,
      title: "Водоснабжение",
      description: "Централизованное водоснабжение и канализация"
    },
    {
      icon: Home,
      title: "Отопление",
      description: "Централизованное отопление с возможностью регулирования температуры"
    },
    {
      icon: MapPin,
      title: "Транспорт",
      description: "Удобные выездные пути и близость к транспортным узлам"
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Надежный собственник",
      description: "ОАО \"МПОВТ\" - юридическое лицо с многолетней репутацией и стабильным положением"
    },
    {
      icon: Star,
      title: "Удобное расположение",
      description: "Центральное расположение в Минске с развитой инфраструктурой и транспортной доступностью"
    },
    {
      icon: Award,
      title: "Гибкие условия",
      description: "Различные варианты площадей от 10 до 10,000 кв.м с индивидуальными условиями аренды"
    }
  ];

  const characteristics = [
    "Площади от 10 кв. м до 10 000 кв. м",
    "Естественное освещение во всех помещениях",
    "Централизованное отопление и вентиляция",
    "Стабильное электроснабжение 380/220В",
    "Холодное и горячее водоснабжение",
    "Охраняемые парковочные места",
    "Удобные выездные пути на основные магистрали",
    "Возможность размещения вывесок и рекламы"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - matching main page style */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black">
        {/* Animated background matching main page style */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse moving-sphere-1"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse moving-sphere-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse moving-sphere-3"></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse moving-sphere-4"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white/95 leading-tight">
              Арендные площади
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              ОАО "МПОВТ" предлагает в аренду офисные, производственные и складские помещения 
              с развитой инфраструктурой в удобном районе Минска.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
        </div>

        {/* Advantages Section - moved to top */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Преимущества аренды у нас
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Почему стоит выбрать арендные площади ОАО "МПОВТ"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                const colors = [
                  { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/20" },
                  { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/20" },
                  { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/20" }
                ];
                const color = colors[index % colors.length];
                
                return (
                  <Card 
                    key={index} 
                    className={`p-4 sm:p-6 md:p-8 text-center bg-slate-800/10 backdrop-blur-xl border ${color.border} hover:border-slate-600/40 transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${color.bg} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 lg:mb-6`}>
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 ${color.text}`} />
                    </div>
                    <h3 className={`text-base sm:text-lg md:text-xl font-semibold mb-2 md:mb-3 ${color.text}`}>{advantage.title}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm md:text-base">{advantage.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Info */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <Card className="p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105 max-w-6xl mx-auto">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-purple-400 mr-3" />
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Основная информация
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Характеристики помещений
                  </h3>
                  <div className="grid gap-4">
                    {characteristics.map((char, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-slate-800/10 backdrop-blur-sm rounded-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300">
                        <CheckCircle className="w-6 h-6 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-base">{char}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Местоположение
                  </h3>
                  <div className="space-y-6">
                    <Card className="p-6 bg-slate-800/10 backdrop-blur-sm border border-slate-700/20">
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-white font-semibold text-lg">г. Минск, ул. Притыцкого, 62</p>
                          <p className="text-slate-400 text-sm mt-1">Удобное расположение с развитой транспортной инфраструктурой</p>
                        </div>
                      </div>
                    </Card>
                    <Card className="p-6 bg-slate-800/10 backdrop-blur-sm border border-slate-700/20">
                      <div className="flex items-start space-x-4">
                        <Building className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-white font-semibold text-lg">Собственник: ОАО "МПОВТ"</p>
                          <p className="text-slate-400 text-sm mt-1">Юридическое лицо с надежной репутацией</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Types of Facilities */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Типы помещений
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {facilities.map((facility, index) => (
                <Card key={index} className="p-6 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <facility.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        {facility.title}
                      </h3>
                      <p className="text-slate-300">{facility.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                Коммунальные услуги и удобства
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {amenities.map((amenity, index) => (
                <Card key={index} className="p-6 text-center bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    {amenity.title}
                  </h3>
                  <p className="text-slate-300 text-sm">{amenity.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Price List Download */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Актуальный прайс-лист
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Скачайте подробную информацию о свободных площадях и текущих ценах на аренду
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white border-0 transition-all duration-300"
                onClick={() => window.open('https://mpovt.by/gallery/%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B024.xls', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Скачать прайс: Свободные площади в аренду
              </Button>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Расположение
              </h2>
            </div>
            
            <Card className="p-0 max-w-5xl mx-auto overflow-hidden bg-slate-800/10 backdrop-blur-xl border border-slate-700/20">
              <div className="h-96 bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <p className="text-white text-lg font-semibold">г. Минск, ул. Притыцкого, 62</p>
                  <p className="text-slate-400">Интерактивная карта</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Контактная информация
              </h2>
            </div>
            
            <Card className="p-8 max-w-2xl mx-auto bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {contact.name}
                  </h3>
                  <p className="text-purple-300 mb-4">{contact.position}</p>
                  <div className="space-y-2">
                    {contact.phones.map((phone, index) => (
                      <div key={index} className="flex items-center text-slate-300">
                        <Phone className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" />
                        <a href={`tel:${phone}`} className="hover:text-purple-400 transition-colors">
                          {phone} {index === 1 && <span className="text-sm text-slate-400">(факс)</span>}
                        </a>
                      </div>
                    ))}
                    <div className="flex items-center text-slate-300">
                      <Mail className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" />
                      <a href={`mailto:${contact.email}`} className="hover:text-purple-400 transition-colors">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default RentalAreas;
