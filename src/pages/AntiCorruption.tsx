
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Phone, Mail, Shield, Scale, BookOpen } from "lucide-react";

const AntiCorruption = () => {
  const documents = [
    {
      title: "Закон Республики Беларусь \"О БОРЬБЕ С КОРРУПЦИЕЙ\"",
      description: "Основной законодательный акт, регулирующий вопросы противодействия коррупции",
      url: "https://mpovt.by/gallery/zakon_o_borbe_s_korruptsiyey.pdf"
    },
    {
      title: "Методические рекомендации по организации антикоррупционной работы",
      description: "Практические рекомендации по внедрению антикоррупционных мер",
      url: "https://mpovt.by/gallery/metodicheskiye_rekomendatsii.pdf"
    },
    {
      title: "Постановление Совета Министров Республики Беларусь №45 от 22.01.2016",
      description: "Нормативный документ, устанавливающий требования к антикоррупционной деятельности",
      url: "https://mpovt.by/gallery/postanovleniye_45_22_01_2016.pdf"
    },
    {
      title: "Положение о Комиссии по противодействию коррупции",
      description: "Документ, определяющий структуру и функции антикоррупционной комиссии",
      url: "https://mpovt.by/gallery/%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%B82.pdf"
    },
    {
      title: "План работы Комиссии по противодействию коррупции",
      description: "Планы мероприятий по противодействию коррупционным проявлениям",
      url: "https://mpovt.by/gallery/%D0%9F%D0%BB%D0%B0%D0%BD%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9.pdf"
    },
    {
      title: "План мероприятий по реализации Программы патриотического воспитания населения Республики Беларусь на 2022-2025 годы",
      description: "Программа воспитательной работы для формирования гражданской позиции",
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
      title: "Прозрачность",
      description: "Открытость деятельности и принятия решений"
    },
    {
      icon: Scale,
      title: "Законность",
      description: "Строгое соблюдение требований законодательства"
    },
    {
      icon: BookOpen,
      title: "Этичность",
      description: "Высокие моральные стандарты в работе"
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
            Противодействие
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              коррупции
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ОАО "МПОВТ" ведет последовательную политику противодействия коррупции, 
            обеспечивая прозрачность деятельности и соблюдение высоких этических стандартов.
          </p>
        </div>

        {/* Principles Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Основные принципы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <principle.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-300">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Нормативные документы
          </h2>
          <div className="grid gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <FileText className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{doc.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{doc.description}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10 flex-shrink-0 ml-4"
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

        {/* Commission Activities */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Деятельность Комиссии по противодействию коррупции
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-4">Основные функции:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Разработка антикоррупционных мер и процедур</li>
                    <li>• Проведение анализа коррупционных рисков</li>
                    <li>• Организация обучения сотрудников</li>
                    <li>• Рассмотрение обращений и жалоб</li>
                    <li>• Мониторинг исполнения антикоррупционного законодательства</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-4">Принципы работы:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Объективность и беспристрастность</li>
                    <li>• Конфиденциальность информации</li>
                    <li>• Комплексный подход к решению проблем</li>
                    <li>• Превентивный характер мероприятий</li>
                    <li>• Взаимодействие с контролирующими органами</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Контактная информация
          </h2>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <img
                    src={contact.photo}
                    alt={contact.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-orange-500/30"
                  />
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

        {/* Reporting Section */}
        <div className="mt-16">
          <Card className="bg-red-900/20 border-red-500/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Сообщить о коррупционных нарушениях
              </h3>
              <p className="text-gray-300 mb-6">
                Если вам стало известно о фактах коррупции или коррупционных правонарушениях в ОАО "МПОВТ", 
                вы можете обратиться к секретарю Комиссии по противодействию коррупции. 
                Конфиденциальность обращения гарантируется.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                  onClick={() => window.location.href = `tel:${contact.phone}`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
                <Button
                  variant="outline"
                  className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                  onClick={() => window.location.href = `mailto:${contact.email}`}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Написать письмо
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AntiCorruption;
