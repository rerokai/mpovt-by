
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, CheckCircle, Award, Shield, Target, Users } from "lucide-react";
import Footer from "@/components/Footer";

const QualityManagement = () => {
  const certificates = [
    {
      title: "СТБ ISO 9001-2015",
      number: "BY /112 05.01. 003.01 00601",
      validUntil: "14.02.2026",
      certifier: "РУП «БелГИМ»",
      pdfUrl: "https://mpovt.by/gallery/%D0%A1%D0%A2%D0%91%20ISO%209001.pdf"
    },
    {
      title: "СТБ 16949-2018",
      number: "BY/112 05.07. 003.01 00602",
      validUntil: "14.02.2026",
      certifier: "РУП «БелГИМ»",
      pdfUrl: "https://mpovt.by/gallery/%D0%A1%D0%A2%D0%91%2016949.pdf"
    }
  ];

  const documents = [
    {
      title: "Руководство по менеджменту качества поставщиков ПКИ и материалов для производства автокомпонентов",
      url: "https://mpovt.by/gallery/%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE.pdf"
    },
    {
      title: "Политика в области качества",
      url: "https://mpovt.by/gallery/%D0%9E%D0%A2%D0%9A%D0%A0%D0%AB%D0%A2%D0%9E%D0%95%20%D0%90%D0%9A%D0%A6%D0%98%D0%9E%D0%9D%D0%95%D0%A0%D0%9D%D0%9E%D0%95%20%D0%9E%D0%91%D0%A9%D0%95%D0%A1%D0%A2%D0%92%D0%9E.pdf"
    },
    {
      title: "План выполнения ОАО \"МПОВТ\" мероприятий Республиканского плана мероприятий по проведению в 2024 году Года качества",
      url: "https://mpovt.by/gallery/%D0%9F%D0%BB%D0%B0%D0%BD%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9.pdf"
    }
  ];

  const productCertificates = [
    {
      title: "Автотракторная продукция",
      url: "https://mpovt.by/gallery/%D0%A1%D0%95%D0%A0%D0%A2%D0%98%D0%A4%D0%98%D0%9A%D0%90%D0%A2%20%D0%A1%D0%9E%D0%91%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%9E%D0%93%D0%9E%20%D0%9F%D0%A0%D0%9E%D0%98%D0%97%D0%92%D0%9E%D0%94%D0%A1%D0%A2%D0%92%D0%90%20(%D0%B0%D0%B2%D1%82%D0%BE%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%BE%D0%B5).pdf"
    },
    {
      title: "Ноутбуки",
      url: "https://mpovt.by/gallery/%D0%A1%D0%95%D0%A0%D0%A2%D0%98%D0%A4%D0%98%D0%9A%D0%90%D0%A2%20%D0%A1%D0%9E%D0%91%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%9E%D0%93%D0%9E%20%D0%9F%D0%A0%D0%9E%D0%98%D0%97%D0%92%D0%9E%D0%94%D0%A1%D0%A2%D0%92%D0%90%20%D0%9D%D0%90%20%D0%9D%D0%9E%D0%A3%D0%A2%D0%91%D0%A3%D0%9A%D0%98.PDF"
    },
    {
      title: "Адаптер сетевой",
      url: "https://mpovt.by/gallery/%D0%90%D0%B4%D0%B0%D0%BF%D1%82%D0%B5%D1%80%20%D1%81%D0%B5%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%20%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0.PDF"
    },
    {
      title: "Плата системная",
      url: "https://mpovt.by/gallery/%D0%9F%D0%BB%D0%B0%D1%82%D0%B0%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F%20%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%20%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0.PDF"
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Международные стандарты",
      description: "Сертификация по ISO 9001 и IATF 16949 подтверждает соответствие мировым стандартам качества"
    },
    {
      icon: Target,
      title: "Постоянное совершенствование",
      description: "Непрерывное улучшение процессов и внедрение передовых методов управления качеством"
    },
    {
      icon: Users,
      title: "Квалифицированная команда",
      description: "Высококвалифицированные специалисты обеспечивают контроль качества на всех этапах"
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
              Система менеджмента качества
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              ОАО "МПОВТ" поддерживает высочайшие стандарты качества, подтвержденные международными сертификатами и строгим соблюдением требований ISO.
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
                Наша приверженность качеству
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Принципы, которыми мы руководствуемся в обеспечении высокого качества продукции
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

        {/* Certificates Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Сертификаты соответствия
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {certificates.map((cert, index) => (
                <Card key={index} className="p-6 md:p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-emerald-400" />
                    </div>
                    <Badge className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border-emerald-500/30 px-3 py-1">
                      До {cert.validUntil}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {cert.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <p className="text-slate-300">
                      <span className="text-cyan-400 font-semibold">Номер:</span> {cert.number}
                    </p>
                    <p className="text-slate-300">
                      <span className="text-cyan-400 font-semibold">Орган:</span> {cert.certifier}
                    </p>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white border-0 transition-all duration-300"
                    onClick={() => window.open(cert.pdfUrl, '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Скачать сертификат
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Документы и руководства
              </h2>
            </div>
            
            <div className="grid gap-6 max-w-5xl mx-auto">
              {documents.map((doc, index) => (
                <Card key={index} className="p-6 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {doc.title}
                        </h3>
                        <p className="text-slate-400 text-sm">Официальный документ ОАО "МПОВТ"</p>
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

        {/* Product Certificates Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                Сертификаты продукции собственного производства
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {productCertificates.map((cert, index) => (
                <Card key={index} className="p-6 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                          {cert.title}
                        </h3>
                        <p className="text-slate-400 text-sm">Сертификат соответствия</p>
                      </div>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white border-0 transition-all duration-300"
                      onClick={() => window.open(cert.url, '_blank')}
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

        <Footer />
      </div>
    </div>
  );
};

export default QualityManagement;
