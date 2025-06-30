
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Phone, Mail, Shield, Scale, Eye } from "lucide-react";
import Footer from "@/components/Footer";

const AntiCorruption = () => {
  const documents = [
    {
      title: "Закон Республики Беларусь \"О БОРЬБЕ С КОРРУПЦИЕЙ\"",
      url: "https://mpovt.by/gallery/zakon_o_borbe_s_korruptsiyey.pdf"
    },
    {
      title: "Методические рекомендации по организации антикоррупционной работы",
      url: "https://mpovt.by/gallery/metodicheskiye_rekomendatsii.pdf"
    },
    {
      title: "Постановление Совета Министров Республики Беларусь №45 от 22.01.2016",
      url: "https://mpovt.by/gallery/postanovleniye_45_22_01_2016.pdf"
    },
    {
      title: "Положение о Комиссии по противодействию коррупции",
      url: "https://mpovt.by/gallery/%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%B82.pdf"
    },
    {
      title: "План работы Комиссии по противодействию коррупции",
      url: "https://mpovt.by/gallery/%D0%9F%D0%BB%D0%B0%D0%BD%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9.pdf"
    },
    {
      title: "План мероприятий по реализации Программы патриотического воспитания населения Республики Беларусь на 2022-2025 годы",
      url: "https://mpovt.by/gallery/%D0%9F%D0%9B%D0%90%D0%9D%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9%20%D0%BF%D0%B0%D1%82%D1%80%D0%B8%D0%BE%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%B2%D0%BE%D1%81%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F.pdf"
    }
  ];

  const contact = {
    name: "Остапенко Юлия Ивановна",
    position: "Секретарь Комиссии по противодействию коррупции",
    photo: "https://mpovt.by/gallery/%D0%9E%D1%81%D1%82%D0%B0%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE-ts1651744178.gif?ts=1746513905",
    phone: "+375 17 3889460",
    email: "ostapenko@mpovt.by"
  };

  const principles = [
    {
      icon: Shield,
      title: "Нулевая терпимость",
      description: "Строгое соблюдение антикоррупционного законодательства и нулевая терпимость к коррупции"
    },
    {
      icon: Scale,
      title: "Законность и справедливость",
      description: "Все процессы в компании основаны на принципах законности, справедливости и равенства"
    },
    {
      icon: Eye,
      title: "Прозрачность деятельности",
      description: "Открытость и прозрачность всех бизнес-процессов и принятия управленческих решений"
    }
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
              Противодействие коррупции
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              ОАО "МПОВТ" строго соблюдает антикоррупционное законодательство и ведет активную работу 
              по предотвращению коррупционных правонарушений.
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

        {/* Principles Section - moved to top */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Наша позиция
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Принципы прозрачности и честности в нашей деятельности
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
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
                    <h3 className={`text-base sm:text-lg md:text-xl font-semibold mb-2 md:mb-3 ${color.text}`}>{principle.title}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm md:text-base">{principle.description}</p>
                  </Card>
                );
              })}
            </div>
            
            <div className="text-center">
              <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                ОАО "МПОВТ" придерживается принципов прозрачности, честности и законности во всех сферах деятельности. 
                Мы активно противодействуем любым проявлениям коррупции и создаем условия для ее предотвращения.
              </p>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Нормативные документы
              </h2>
            </div>
            
            <div className="grid gap-4 max-w-5xl mx-auto">
              {documents.map((doc, index) => (
                <Card key={index} className="p-4 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <FileText className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {doc.title}
                        </h3>
                        <p className="text-slate-400 text-sm">Нормативный документ</p>
                      </div>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 flex-shrink-0 ml-4 transition-all duration-300"
                      onClick={() => window.open(doc.url, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                Контактное лицо
              </h2>
            </div>
            
            <Card className="p-8 max-w-2xl mx-auto bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <img
                    src={contact.photo}
                    alt={contact.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-orange-500/50"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    {contact.name}
                  </h3>
                  <p className="text-orange-300 mb-4 text-sm">{contact.position}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-slate-300">
                      <Phone className="w-4 h-4 mr-2 text-orange-400" />
                      <a href={`tel:${contact.phone}`} className="hover:text-orange-400 transition-colors text-sm">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Mail className="w-4 h-4 mr-2 text-orange-400" />
                      <a href={`mailto:${contact.email}`} className="hover:text-orange-400 transition-colors text-sm">
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

export default AntiCorruption;
