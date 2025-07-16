

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Phone, Mail, Shield, Scale, Eye } from "lucide-react";
import Footer from "@/components/Footer";


const AntiCorruption = () => {
  const documents = [
    {
      title: "Закон Республики Беларусь \"О БОРЬБЕ С КОРРУПЦИЕЙ\"",
      description: "Основной нормативный акт, регулирующий вопросы противодействия коррупции в РБ",
      url: "https://mpovt.by/gallery/zakon_o_borbe_s_korruptsiyey.pdf"
    },
    {
      title: "Методические рекомендации по организации антикоррупционной работы",
      description: "Практические рекомендации по построению антикоррупционной системы на предприятии",
      url: "https://mpovt.by/gallery/metodicheskiye_rekomendatsii.pdf"
    },
    {
      title: "Постановление Совета Министров Республики Беларусь №45 от 22.01.2016",
      description: "Порядок организации антикоррупционной работы на предприятиях",
      url: "https://mpovt.by/gallery/postanovleniye_45_22_01_2016.pdf"
    },
    {
      title: "Положение о Комиссии по противодействию коррупции",
      description: "Документ, регламентирующий деятельность антикоррупционной комиссии ОАО 'МПОВТ'",
      url: "https://mpovt.by/gallery/%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%B82.pdf"
    },
    {
      title: "План работы Комиссии по противодействию коррупции",
      description: "Актуальный план мероприятий по противодействию коррупции на предприятии",
      url: "https://mpovt.by/gallery/%D0%9F%D0%BB%D0%B0%D0%BD%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9.pdf"
    },
    {
      title: "План мероприятий по реализации Программы патриотического воспитания населения Республики Беларусь на 2022-2025 годы",
      description: "Патриотическое воспитание как часть антикоррупционной работы",
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
      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-rose-500/30 to-red-500/30 rounded-full blur-3xl animate-pulse moving-sphere-1"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-amber-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse moving-sphere-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-red-500/30 to-amber-500/30 rounded-full blur-3xl animate-pulse moving-sphere-3"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white leading-tight">
              Противодействие коррупции
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto">
              ОАО "МПОВТ" строго соблюдает антикоррупционное законодательство и ведет активную работу по предотвращению коррупционных правонарушений.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-black to-black relative overflow-hidden">
        {/* Enhanced animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-rose-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-amber-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
          <div className="absolute top-2/3 left-1/6 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-r from-pink-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse moving-sphere-7"></div>
        </div>

        {/* Principles Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/15 via-rose-400/15 to-amber-400/15 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-rose-400 to-amber-400 bg-clip-text text-transparent relative z-10">
                Наша позиция
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                Принципы прозрачности, честности и законности в деятельности ОАО "МПОВТ"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12 justify-center items-stretch place-items-center">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                const iconColors = [
                  { icon: "text-red-400", bg: "bg-red-500/20", bgHover: "bg-red-500/40", border: "from-red-500/20 to-rose-500/20", cardHover: "bg-red-500/20" },
                  { icon: "text-rose-400", bg: "bg-rose-500/20", bgHover: "bg-rose-500/40", border: "from-rose-500/20 to-pink-500/20", cardHover: "bg-rose-500/20" },
                  { icon: "text-amber-400", bg: "bg-amber-500/20", bgHover: "bg-amber-500/40", border: "from-amber-500/20 to-yellow-500/20", cardHover: "bg-amber-500/20" }
                ][index];
                return (
                  <Card 
                    key={index} 
                    className={`p-6 text-center bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 group relative w-full max-w-sm h-full flex flex-col transform-gpu hover:scale-105 ${iconColors.cardHover} hover:!bg-opacity-30 hover:!bg-blend-lighten`}
                    style={{ transitionProperty: 'background, border, box-shadow, transform', transitionDuration: '300ms' }}
                  >
                    {/* Background glow on hover */}
                    <div className={`absolute inset-0 ${iconColors.bg} rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none`}></div>
                    {/* Border glow on hover */}
                    <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${iconColors.border} p-px pointer-events-none`}>
                      <div className="w-full h-full bg-black/90 rounded-lg"></div>
                    </div>
                    <div
                      className={`w-16 h-16 ${iconColors.bg} rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:${iconColors.bgHover} relative z-20`}
                    >
                      <Icon className={`h-8 w-8 ${iconColors.icon}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white relative z-20">{principle.title}</h3>
                    <p className="text-slate-300 relative z-20">{principle.description}</p>
                  </Card>
                );
              })}
            </div>

            {/* Описание подхода */}
            <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-slate-900/30 via-slate-700/30 to-slate-900/30 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-rose-500/5 to-amber-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-300 via-rose-200 to-amber-300 bg-clip-text text-transparent">
                  О нашем подходе к противодействию коррупции
                </h3>
                <p className="text-lg text-slate-200 leading-relaxed">
                  ОАО "МПОВТ" придерживается принципов прозрачности, честности и законности во всех сферах деятельности. Мы активно противодействуем любым проявлениям коррупции и создаем условия для ее предотвращения.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10">
                Нормативные документы
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                Документы и материалы по вопросам противодействия коррупции
              </p>
            </div>
            <div className="grid gap-6 max-w-5xl mx-auto">
              {documents.map((doc, index) => (
                <Card key={index} className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group relative">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-white">
                          {doc.title}
                        </h3>
                        <p className="text-slate-400 text-sm">{doc.description}</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-purple-400/50 backdrop-blur-sm transition-all duration-300 flex-shrink-0 ml-4 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.02] group/btn"
                      onClick={() => window.open(doc.url, '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <Download className="w-4 h-4 mr-2 relative z-10" />
                      <span className="relative z-10">PDF</span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Person Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 to-yellow-400/15 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent relative z-10">
                Контактное лицо
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                Свяжитесь с нашим специалистом по вопросам противодействия коррупции
              </p>
            </div>
            <Card className="max-w-2xl mx-auto overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col md:flex-row h-full relative z-10">
                <div className="w-full md:w-40 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-yellow-500/10 p-4 md:p-0">
                  <img
                    src={contact.photo}
                    alt={contact.name}
                    className="w-28 h-32 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {contact.name}
                  </h3>
                  <p className="text-white/60 mb-4">{contact.position}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-slate-300">
                      <Phone className="w-4 h-4 mr-2 text-orange-400" />
                      <a href={`tel:${contact.phone}`} className="hover:text-orange-400 transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                      <a href={`mailto:${contact.email}`} className="hover:text-yellow-400 transition-colors">
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
