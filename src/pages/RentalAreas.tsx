
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, User, Download, Building, Car, Zap, Droplets } from "lucide-react";

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
      description: "Современные офисные пространства с естественным освещением"
    },
    {
      icon: Building,
      title: "Производственные площади",
      description: "Оборудованные производственные помещения для различных видов деятельности"
    },
    {
      icon: Building,
      title: "Складские помещения",
      description: "Просторные складские комплексы с удобными подъездными путями"
    },
    {
      icon: Car,
      title: "Парковка",
      description: "Удобная парковка для сотрудников и посетителей"
    }
  ];

  const amenities = [
    {
      icon: Zap,
      title: "Электричество",
      description: "Стабильное электроснабжение"
    },
    {
      icon: Droplets,
      title: "Водоснабжение",
      description: "Централизованное водоснабжение"
    },
    {
      icon: Building,
      title: "Отопление",
      description: "Централизованное отопление"
    },
    {
      icon: MapPin,
      title: "Транспорт",
      description: "Удобные выездные пути"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Building className="w-16 h-16 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Арендные
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              площади
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ОАО "МПОВТ" предлагает в аренду офисные, производственные и складские помещения 
            с развитой инфраструктурой в удобном районе Минска.
          </p>
        </div>

        {/* Main Info */}
        <div className="mb-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <MapPin className="w-8 h-8 text-orange-500 mr-3" />
                Основная информация
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Характеристики помещений</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Площади от 10 кв. м до 10 000 кв. м</li>
                    <li>• Естественное освещение</li>
                    <li>• Централизованное отопление</li>
                    <li>• Электроснабжение</li>
                    <li>• Водоснабжение</li>
                    <li>• Парковочные места</li>
                    <li>• Удобные выездные пути</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Местоположение</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">г. Минск, ул. Притыцкого, 62</p>
                        <p className="text-gray-400 text-sm">Удобное расположение с развитой транспортной инфраструктурой</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Building className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Собственник: ОАО "МПОВТ"</p>
                        <p className="text-gray-400 text-sm">Юридическое лицо с надежной репутацией</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Types of Facilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Типы помещений
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <facility.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{facility.title}</h3>
                      <p className="text-gray-300">{facility.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Коммунальные услуги и удобства
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{amenity.title}</h3>
                  <p className="text-gray-300 text-sm">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Price List Download */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Актуальный прайс-лист
              </h3>
              <p className="text-gray-300 mb-6">
                Скачайте подробную информацию о свободных площадях и текущих ценах на аренду
              </p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => window.open('https://mpovt.by/gallery/%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B024.xls', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Скачать прайс: Свободные площади в аренду
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Расположение
          </h2>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-0">
              <div className="h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <p className="text-white text-lg font-semibold">г. Минск, ул. Притыцкого, 62</p>
                  <p className="text-gray-400">Интерактивная карта</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Контактная информация
          </h2>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                  <p className="text-orange-400 mb-4">{contact.position}</p>
                  <div className="space-y-2">
                    {contact.phones.map((phone, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <Phone className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
                        <a href={`tel:${phone}`} className="hover:text-orange-400 transition-colors">
                          {phone} {index === 1 && <span className="text-sm text-gray-400">(факс)</span>}
                        </a>
                      </div>
                    ))}
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
                      <a href={`mailto:${contact.email}`} className="hover:text-orange-400 transition-colors">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RentalAreas;
