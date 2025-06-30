
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Phone, Mail, User, Building2, Handshake, Globe } from "lucide-react";
import Footer from "@/components/Footer";

const Cooperation = () => {
  const contacts = [
    {
      name: "Соболевская Елена Анатольевна",
      position: "Руководитель Департамента логистики и внешнеэкономической деятельности",
      phone: "+375 17 3889398",
      email: "sobolevskaya@mpovt.by"
    },
    {
      name: "Матюшонок Дмитрий Эдуардович",
      position: "Начальник сектора Департамента разработок",
      phone: "+375 17 3889083",
      email: null
    }
  ];

  const links = [
    {
      title: "Участие ОАО \"МПОВТ\" в процедурах закупок",
      url: "https://icetrade.by/search/aucArchive?search_text=%D0%9E%D0%90%D0%9E+%D0%9C%D0%9F%D0%9E%D0%92%D0%A2&zakup_type%5B1%5D=1&zakup_type%5B2%5D=1&auc_num=&okrb=&company_title=&participant=&establishment=0&industries=&period=&created_from=&created_to=&request_end_from=&request_end_to=&t%5BTrade%5D=1&t%5BeTrade%5D=1&t%5BsocialOrder%5D=1&t%5BsingleSource%5D=1&t%5BAuction%5D=1&t%5BRequest%5D=1&t%5BcontractingTrades%5D=1&t%5Bnegotiations%5D=1&t%5BOther%5D=1&r%5B1%5D=1&r%5B2%5D=2&r%5B7%5D=7&r%5B3%5D=3&r%5B4%5D=4&r%5B6%5D=6&r%5B5%5D=5&sort=num%3Adesc&sbm=1&onPage=20",
      description: "Информация о участии компании в торговых процедурах и закупках на платформе IceTrade"
    },
    {
      title: "Перечень основных средств ОАО \"МПОВТ\", подлежащих реализации",
      url: "https://mpovt.by/gallery/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2022.pdf",
      description: "Документ со списком основных средств компании, доступных для реализации"
    }
  ];

  const advantages = [
    {
      icon: Building2,
      title: "Надежное партнерство",
      description: "Многолетний опыт успешного сотрудничества с ведущими компаниями отрасли"
    },
    {
      icon: Handshake,
      title: "Взаимовыгодное сотрудничество",
      description: "Гибкие условия партнерства и индивидуальный подход к каждому проекту"
    },
    {
      icon: Globe,
      title: "Международный опыт",
      description: "Опыт работы на международных рынках и знание глобальных стандартов"
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
              Кооперация
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              ОАО "МПОВТ" активно развивает партнерские отношения и участвует в различных формах сотрудничества для достижения взаимовыгодных результатов.
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
                Развитие партнерских отношений
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Преимущества сотрудничества с ОАО "МПОВТ"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
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
            
            <div className="text-center">
              <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                ОАО "МПОВТ" заинтересовано в развитии долгосрочных партнерских отношений с поставщиками, 
                подрядчиками и другими участниками рынка. Мы стремимся к взаимовыгодному сотрудничеству 
                и готовы рассмотреть различные формы кооперации.
              </p>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Информация о сотрудничестве
              </h2>
            </div>
            
            <div className="grid gap-6 max-w-5xl mx-auto">
              {links.map((link, index) => (
                <Card key={index} className="p-6 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {link.title}
                      </h3>
                      <p className="text-slate-300 mb-4">{link.description}</p>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 ml-4 flex-shrink-0 transition-all duration-300"
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Открыть
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                Контактные лица
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {contacts.map((contact, index) => (
                <Card key={index} className="p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
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
                        {contact.email && (
                          <div className="flex items-center text-slate-300">
                            <Mail className="w-4 h-4 mr-2 text-orange-400" />
                            <a href={`mailto:${contact.email}`} className="hover:text-orange-400 transition-colors text-sm">
                              {contact.email}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Cooperation;
