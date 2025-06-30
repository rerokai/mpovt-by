
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Zap, Shield, Headphones, Star, Award, CheckCircle, Cpu, Settings, Battery, Wrench } from "lucide-react";
import Footer from "@/components/Footer";

const AssetSales = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const products = [
    { name: "Блок управления двигателем", stock: "В наличии" },
    { name: "Контроллер ЭПХХ", stock: "В наличии" },
    { name: "Блок комфорта", stock: "Ограничено" },
    { name: "Контроллер АБС", stock: "В наличии" },
    { name: "Блок управления кондиционером", stock: "В наличии" },
    { name: "Контроллер системы безопасности", stock: "Ограничено" },
    { name: "Блок управления светом", stock: "В наличии" },
    { name: "Контроллер парковочной системы", stock: "В наличии" }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Высокое качество",
      description: "Вся продукция проходит строгий контроль качества и соответствует международным стандартам ISO"
    },
    {
      icon: Star,
      title: "Выгодные цены",
      description: "Конкурентоспособные цены на высококачественные электронные компоненты собственного производства"
    },
    {
      icon: Headphones,
      title: "Профессиональная поддержка",
      description: "Квалифицированная техническая поддержка и консультации по использованию продукции"
    },
    {
      icon: CheckCircle,
      title: "Гарантия надежности",
      description: "Все изделия имеют гарантию и полное техническое сопровождение от производителя"
    },
    {
      icon: Cpu,
      title: "Современные технологии",
      description: "Использование передовых технологий и компонентов высокого класса в производстве"
    },
    {
      icon: Settings,
      title: "Индивидуальный подход",
      description: "Персональные консультации и подбор оптимального решения под ваши задачи"
    },
    {
      icon: Battery,
      title: "Долговечность",
      description: "Продукция рассчитана на длительный срок эксплуатации в различных условиях"
    },
    {
      icon: Wrench,
      title: "Сервисное обслуживание",
      description: "Полный комплекс услуг по техническому обслуживанию и ремонту оборудования"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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
              Продажа неликвидов
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              Приобретайте качественные электронные блоки и контроллеры собственного производства ОАО "МПОВТ" 
              по выгодным ценам.
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
                Преимущества покупки у нас
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Почему стоит выбрать продукцию ОАО "МПОВТ"
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                const colors = [
                  { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/20" },
                  { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/20" },
                  { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/20" },
                  { bg: "bg-orange-500/20", text: "text-orange-400", border: "border-orange-500/20" }
                ];
                const color = colors[index % colors.length];
                
                return (
                  <Card 
                    key={index} 
                    className={`p-4 sm:p-6 text-center bg-slate-800/10 backdrop-blur-xl border ${color.border} hover:border-slate-600/40 transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${color.bg} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                      <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${color.text}`} />
                    </div>
                    <h3 className={`text-sm sm:text-base font-semibold mb-2 ${color.text}`}>{advantage.title}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm">{advantage.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Products Table */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Доступные товары
              </h2>
            </div>
            
            <Card className="p-0 max-w-5xl mx-auto overflow-hidden bg-slate-800/10 backdrop-blur-xl border border-slate-700/20">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                      <th className="text-left p-6 text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Наименование
                      </th>
                      <th className="text-left p-6 text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Наличие
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-slate-300 font-medium">{product.name}</td>
                        <td className="p-6">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            product.stock === "В наличии" 
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                          }`}>
                            {product.stock}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact and Form Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                Связаться с нами
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Info */}
              <Card className="p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Отдел продаж
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Телефоны:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-5 h-5 mr-3 text-orange-400" />
                        <a href="tel:+375173889464" className="hover:text-orange-400 transition-colors">
                          +375 (17) 388 94 64
                        </a>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-5 h-5 mr-3 text-orange-400" />
                        <a href="tel:+375173889465" className="hover:text-orange-400 transition-colors">
                          +375 (17) 388 94 65
                        </a>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-5 h-5 mr-3 text-orange-400" />
                        <a href="tel:+375173889466" className="hover:text-orange-400 transition-colors">
                          +375 (17) 388 94 66
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                      Email:
                    </h4>
                    <div className="flex items-center text-slate-300">
                      <Mail className="w-5 h-5 mr-3 text-pink-400" />
                      <a href="mailto:pcbmarket@mpovt.by" className="hover:text-pink-400 transition-colors">
                        pcbmarket@mpovt.by
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Contact Form */}
              <Card className="p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Отправить сообщение
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">Имя</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-400"
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">Телефон</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-400"
                      placeholder="+375 XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">Сообщение</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-400 min-h-[100px]"
                      placeholder="Опишите ваш запрос..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 transition-all duration-300"
                  >
                    Отправить сообщение
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AssetSales;
