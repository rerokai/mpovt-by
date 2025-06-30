
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Phone, Mail, User, Handshake, FileText } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Handshake className="w-16 h-16 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Кооперация и
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              сотрудничество
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ОАО "МПОВТ" открыто для взаимовыгодного сотрудничества с партнерами, поставщиками и заказчиками. 
            Мы стремимся к долгосрочным отношениям, основанным на доверии и качестве.
          </p>
        </div>

        {/* Procurement Participation */}
        <div className="mb-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <FileText className="w-8 h-8 text-orange-500" />
                <div>
                  <CardTitle className="text-2xl text-white">Участие в процедурах закупок</CardTitle>
                  <p className="text-gray-400 mt-2">
                    Информация об участии ОАО "МПОВТ" в государственных и коммерческих закупках
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Наша компания активно участвует в процедурах государственных и коммерческих закупок, 
                предлагая качественную продукцию и услуги по конкурентоспособным ценам. 
                Мы соблюдаем все требования законодательства и поддерживаем прозрачность в деловых отношениях.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                onClick={() => window.open('https://icetrade.by/search/aucArchive?search_text=%D0%9E%D0%90%D0%9E+%D0%9C%D0%9F%D0%9E%D0%92%D0%A2&zakup_type%5B1%5D=1&zakup_type%5B2%5D=1&auc_num=&okrb=&company_title=&participant=&establishment=0&industries=&period=&created_from=&created_to=&request_end_from=&request_end_to=&t%5BTrade%5D=1&t%5BeTrade%5D=1&t%5BsocialOrder%5D=1&t%5BsingleSource%5D=1&t%5BAuction%5D=1&t%5BRequest%5D=1&t%5BcontractingTrades%5D=1&t%5Bnegotiations%5D=1&t%5BOther%5D=1&r%5B1%5D=1&r%5B2%5D=2&r%5B7%5D=7&r%5B3%5D=3&r%5B4%5D=4&r%5B6%5D=6&r%5B5%5D=5&sort=num%3Adesc&sbm=1&onPage=20', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Участие ОАО "МПОВТ" в процедурах закупок
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Assets for Sale */}
        <div className="mb-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <FileText className="w-8 h-8 text-orange-500" />
                <div>
                  <CardTitle className="text-2xl text-white">Реализация основных средств</CardTitle>
                  <p className="text-gray-400 mt-2">
                    Перечень основных средств ОАО "МПОВТ", подлежащих реализации
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                В рамках оптимизации производственных мощностей и обновления оборудования, 
                наша компания периодически реализует основные средства. Все предлагаемое оборудование 
                находится в рабочем состоянии и может быть использовано для производственных нужд.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                onClick={() => window.open('https://mpovt.by/gallery/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2022.pdf', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Перечень основных средств для реализации (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Partnership Opportunities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Возможности сотрудничества
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Поставщики</h3>
                <p className="text-gray-300">
                  Сотрудничество с надежными поставщиками комплектующих, материалов и оборудования
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Подрядчики</h3>
                <p className="text-gray-300">
                  Взаимодействие с подрядными организациями для выполнения специализированных работ
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Заказчики</h3>
                <p className="text-gray-300">
                  Долгосрочные партнерские отношения с заказчиками нашей продукции и услуг
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Persons */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Контактные лица
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {contacts.map((contact, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                      <p className="text-orange-400 mb-4 text-sm leading-relaxed">{contact.position}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-300">
                          <Phone className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
                          <a href={`tel:${contact.phone}`} className="hover:text-orange-400 transition-colors">
                            {contact.phone}
                          </a>
                        </div>
                        {contact.email && (
                          <div className="flex items-center text-gray-300">
                            <Mail className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
                            <a href={`mailto:${contact.email}`} className="hover:text-orange-400 transition-colors">
                              {contact.email}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Готовы к сотрудничеству?
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
                Свяжитесь с нами для обсуждения возможностей взаимовыгодного сотрудничества. 
                Мы всегда открыты к новым предложениям и партнерским отношениям.
              </p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => window.location.href = '/contact'}
              >
                Связаться с нами
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
