
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, CheckCircle, Shield, Award } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Система менеджмента
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              качества
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ОАО "МПОВТ" поддерживает высочайшие стандарты качества, подтвержденные международными сертификатами и строгим соблюдением требований ISO.
          </p>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Сертификаты соответствия
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Award className="w-8 h-8 text-orange-500" />
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Действителен до {cert.validUntil}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <p className="text-gray-300">
                      <span className="text-orange-400 font-semibold">Номер сертификата:</span> {cert.number}
                    </p>
                    <p className="text-gray-300">
                      <span className="text-orange-400 font-semibold">Орган сертификации:</span> {cert.certifier}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                    onClick={() => window.open(cert.pdfUrl, '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Скачать сертификат PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Документы и руководства
          </h2>
          <div className="grid gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <FileText className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{doc.title}</h3>
                        <p className="text-gray-400 text-sm">Официальный документ ОАО "МПОВТ"</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10 flex-shrink-0"
                      onClick={() => window.open(doc.url, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Certificates Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Сертификаты продукции собственного производства
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {productCertificates.map((cert, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                        <p className="text-gray-400 text-sm">Сертификат соответствия</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                      onClick={() => window.open(cert.url, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Commitment Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Наша приверженность качеству
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Система менеджмента качества ОАО "МПОВТ" обеспечивает соответствие нашей продукции и услуг 
                самым высоким международным стандартам. Мы постоянно совершенствуем наши процессы, 
                чтобы превосходить ожидания клиентов и партнеров.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QualityManagement;
