import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Phone, Mail, User, Building2, Handshake, Globe, Info } from "lucide-react";
import Footer from "@/components/Footer";

const Cooperation = () => {
  const contacts = [
    {
      name: "Соболевская Елена Анатольевна",
      position: "Руководитель Департамента логистики и внешнеэкономической деятельности",
      phone: "+375 17 3889398",
      email: "sobolevskaya@mpovt.by",
      photo: "https://mpovt.by/gallery_gen/81e58fda2be845b3a58d1d39baea37d0_290x307_10x0_300x307_crop.jpg?ts=1746513904"
    },
    {
      name: "Матюшонок Дмитрий Эдуардович",
      position: "Начальник сектора Департамента разработок",
      phone: "+375 17 3889083",
      email: null,
      photo: "https://mpovt.by/gallery_gen/81e58fda2be845b3a58d1d39baea37d0_290x307_10x0_300x307_crop.jpg?ts=1746513904"
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
      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse moving-sphere-1"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse moving-sphere-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse moving-sphere-3"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Кооперация
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto">
              ОАО "МПОВТ" активно развивает партнерские отношения и участвует в различных формах сотрудничества для достижения взаимовыгодных результатов.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-black to-black relative overflow-hidden">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
        </div>

        {/* Advantages Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Развитие партнерских отношений
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 text-center bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{advantage.title}</h3>
                    <p className="text-slate-300">{advantage.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
            
        {/* Information Card */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/5 backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Info className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    О нашем подходе к кооперации
                  </h3>
                  <p className="text-lg text-slate-200 leading-relaxed">
                    ОАО "МПОВТ" заинтересовано в развитии долгосрочных партнерских отношений с поставщиками, 
                    подрядчиками и другими участниками рынка. Мы стремимся к взаимовыгодному сотрудничеству 
                    и готовы рассмотреть различные формы кооперации.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Links Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Информация о сотрудничестве
              </h2>
            </div>
            
            <div className="grid gap-6 max-w-5xl mx-auto">
              {links.map((link, index) => (
                <Card key={index} className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {link.title}
                      </h3>
                      <p className="text-slate-300 mb-4">{link.description}</p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300 ml-4 flex-shrink-0"
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Контактные лица
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {contacts.map((contact, index) => (
                <Card key={index} className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-32 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={contact.photo}
                        alt={contact.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {contact.name}
                      </h3>
                      <p className="text-white/60 mb-4 text-sm">{contact.position}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-slate-300">
                          <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                          <a href={`tel:${contact.phone}`} className="hover:text-cyan-400 transition-colors text-sm">
                            {contact.phone}
                          </a>
                        </div>
                        {contact.email && (
                          <div className="flex items-center text-slate-300">
                            <Mail className="w-4 h-4 mr-2 text-purple-400" />
                            <a href={`mailto:${contact.email}`} className="hover:text-purple-400 transition-colors text-sm">
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
