
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, ExternalLink, Phone, Mail, User } from "lucide-react";

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data for vacancies (in real implementation, this would fetch from rabota.by API)
  const mockVacancies = [
    {
      id: 1,
      title: "Инженер-программист",
      department: "Департамент разработок",
      location: "г. Минск, ул. Притыцкого, 62",
      salary: "от 1500 BYN",
      type: "Полная занятость",
      experience: "от 2 лет",
      description: "Разработка и поддержка программного обеспечения для автомобильной электроники",
      requirements: ["Высшее техническое образование", "Знание C/C++", "Опыт работы с микроконтроллерами"]
    },
    {
      id: 2,
      title: "Технолог производства",
      department: "Производственный отдел",
      location: "г. Минск, ул. Притыцкого, 62",
      salary: "от 1200 BYN",
      type: "Полная занятость",
      experience: "от 3 лет",
      description: "Разработка и оптимизация технологических процессов производства электронных блоков",
      requirements: ["Высшее техническое образование", "Опыт в производстве электроники", "Знание LEAN-технологий"]
    },
    {
      id: 3,
      title: "Менеджер по качеству",
      department: "Отдел качества",
      location: "г. Минск, ул. Притыцкого, 62",
      salary: "от 1300 BYN",
      type: "Полная занятость",
      experience: "от 2 лет",
      description: "Контроль качества продукции, ведение документации по системе менеджмента качества",
      requirements: ["Высшее образование", "Знание стандартов ISO", "Аналитические способности"]
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchVacancies = async () => {
      setLoading(true);
      // In real implementation, make API call to rabota.by
      setTimeout(() => {
        setVacancies(mockVacancies);
        setLoading(false);
      }, 1000);
    };

    fetchVacancies();
  }, []);

  const hrManager = {
    name: "Улькин Максим Владимирович",
    position: "Руководитель департамента подбора персонала",
    photo: "https://mpovt.by/gallery_gen/81e58fda2be845b3a58d1d39baea37d0_290x307_10x0_300x307_crop.jpg?ts=1746513904",
    phones: ["+375 17 3889458", "+375 44 7635888"],
    email: "ulkin@mpovt.by"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Briefcase className="w-16 h-16 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Карьера в
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              ОАО "МПОВТ"
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Присоединяйтесь к команде профессионалов и развивайте свою карьеру в одной из ведущих компаний Беларуси в области электронных технологий.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
            onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Смотреть актуальные вакансии на rabota.by
          </Button>
        </div>

        {/* Vacancies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Открытые позиции
          </h2>
          
          {loading ? (
            <div className="grid gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-white/5 backdrop-blur-sm border-white/10 animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-6 bg-white/10 rounded mb-4"></div>
                    <div className="h-4 bg-white/10 rounded mb-2"></div>
                    <div className="h-4 bg-white/10 rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-6">
              {vacancies.map((vacancy) => (
                <Card key={vacancy.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-white mb-2">{vacancy.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                            {vacancy.department}
                          </Badge>
                          <Badge variant="outline" className="border-white/20 text-white/70">
                            {vacancy.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-400">{vacancy.salary}</div>
                        <div className="text-sm text-gray-400">в месяц</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                        {vacancy.location}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-4 h-4 mr-2 text-orange-500" />
                        Опыт работы: {vacancy.experience}
                      </div>
                      <p className="text-gray-300">{vacancy.description}</p>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Требования:</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {vacancy.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                        onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
                      >
                        Откликнуться на вакансию
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* HR Manager Contact */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Контакты по вопросам трудоустройства
          </h2>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <img
                    src={hrManager.photo}
                    alt={hrManager.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-orange-500/30"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{hrManager.name}</h3>
                  <p className="text-orange-400 mb-4">{hrManager.position}</p>
                  <div className="space-y-2">
                    {hrManager.phones.map((phone, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <Phone className="w-4 h-4 mr-2 text-orange-500" />
                        <a href={`tel:${phone}`} className="hover:text-orange-400 transition-colors">
                          {phone}
                        </a>
                      </div>
                    ))}
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-4 h-4 mr-2 text-orange-500" />
                      <a href={`mailto:${hrManager.email}`} className="hover:text-orange-400 transition-colors">
                        {hrManager.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Почему стоит работать с нами?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">Стабильность</h4>
                  <p className="text-gray-300">Надежная компания с многолетней историей и стабильным финансовым положением</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">Развитие</h4>
                  <p className="text-gray-300">Возможности для профессионального роста и обучения новым технологиям</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">Соцпакет</h4>
                  <p className="text-gray-300">Полный социальный пакет, медицинская страховка и дополнительные льготы</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
