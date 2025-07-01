
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ExternalLink, Phone, Mail, User, TrendingUp, Users, Award, Briefcase } from "lucide-react";
import Footer from "@/components/Footer";

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data for vacancies
  const mockVacancies = [
    {
      id: 1,
      title: "Инженер-программист",
      department: "Департамент разработок",
      location: "г. Минск, ул. Притыцкого, 62",
      type: "Полная занятость",
      experience: "от 2 лет",
      description: "Разработка и поддержка программного обеспечения для автомобильной электроники. Участие в проектах по созданию электронных блоков управления для ведущих автопроизводителей.",
      requirements: ["Высшее техническое образование", "Знание C/C++", "Опыт работы с микроконтроллерами", "Знание протоколов CAN, LIN"]
    },
    {
      id: 2,
      title: "Технолог производства",
      department: "Производственный отдел",
      location: "г. Минск, ул. Притыцкого, 62",
      type: "Полная занятость",
      experience: "от 3 лет",
      description: "Разработка и оптимизация технологических процессов производства электронных блоков. Контроль качества на всех этапах производственного цикла.",
      requirements: ["Высшее техническое образование", "Опыт в производстве электроники", "Знание LEAN-технологий", "Опыт работы с SMT-линиями"]
    },
    {
      id: 3,
      title: "Менеджер по качеству",
      department: "Отдел качества",
      location: "г. Минск, ул. Притыцкого, 62",
      type: "Полная занятость",
      experience: "от 2 лет",
      description: "Контроль качества продукции, ведение документации по системе менеджмента качества в соответствии с требованиями ISO 9001 и IATF 16949.",
      requirements: ["Высшее образование", "Знание стандартов ISO", "Аналитические способности", "Опыт аудита качества"]
    }
  ];

  useEffect(() => {
    const fetchVacancies = async () => {
      setLoading(true);
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

  const benefits = [
    {
      icon: TrendingUp,
      title: "Стабильность и рост",
      description: "Надежная компания с многолетней историей и стабильным финансовым положением"
    },
    {
      icon: Users,
      title: "Развитие и обучение",
      description: "Возможности для профессионального роста и обучения новым технологиям"
    },
    {
      icon: Award,
      title: "Социальный пакет",
      description: "Полный социальный пакет, медицинская страховка и дополнительные льготы"
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
              Карьера в ОАО "МПОВТ"
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto">
              Присоединяйтесь к команде профессионалов и развивайте свою карьеру в одной из ведущих компаний Беларуси в области электронных технологий.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white border-0"
              onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Актуальные вакансии на rabota.by
            </Button>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-black to-black relative overflow-hidden">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
        </div>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Почему стоит работать с нами?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 text-center bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-slate-300">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vacancies Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Открытые позиции
              </h2>
            </div>
            
            {loading ? (
              <div className="grid gap-6 max-w-5xl mx-auto">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 animate-pulse">
                    <div className="h-6 bg-white/10 rounded mb-4"></div>
                    <div className="h-4 bg-white/10 rounded mb-2"></div>
                    <div className="h-4 bg-white/10 rounded w-2/3"></div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid gap-8 max-w-5xl mx-auto">
                {vacancies.map((vacancy) => (
                  <Card key={vacancy.id} className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-blue-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {vacancy.title}
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 mb-6">
                        <Badge className="bg-slate-700/50 text-slate-200 border-slate-600 px-3 py-1">
                          {vacancy.department}
                        </Badge>
                        <Badge className="bg-slate-700/50 text-slate-200 border-slate-600 px-3 py-1">
                          {vacancy.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-slate-300">
                        <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                        {vacancy.location}
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Clock className="w-5 h-5 mr-3 text-purple-400" />
                        Опыт работы: {vacancy.experience}
                      </div>
                      <p className="text-slate-200 leading-relaxed">{vacancy.description}</p>
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">
                          Требования:
                        </h4>
                        <ul className="list-disc list-inside text-slate-300 space-y-1">
                          {vacancy.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-6 border-t border-white/10">
                      <Button 
                        className="bg-slate-700 hover:bg-slate-600 text-white border-0"
                        onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Смотреть на rabota.by
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0"
                        onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
                      >
                        Откликнуться на вакансию
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* HR Manager Contact */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Контакты по вопросам трудоустройства
              </h2>
            </div>
            
            <Card className="p-8 max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <img
                    src={hrManager.photo}
                    alt={hrManager.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-orange-500/50"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {hrManager.name}
                  </h3>
                  <p className="text-orange-300 mb-4">{hrManager.position}</p>
                  <div className="space-y-2">
                    {hrManager.phones.map((phone, index) => (
                      <div key={index} className="flex items-center text-slate-300">
                        <Phone className="w-4 h-4 mr-2 text-orange-400" />
                        <a href={`tel:${phone}`} className="hover:text-orange-400 transition-colors">
                          {phone}
                        </a>
                      </div>
                    ))}
                    <div className="flex items-center text-slate-300">
                      <Mail className="w-4 h-4 mr-2 text-orange-400" />
                      <a href={`mailto:${hrManager.email}`} className="hover:text-orange-400 transition-colors">
                        {hrManager.email}
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

export default Vacancies;
