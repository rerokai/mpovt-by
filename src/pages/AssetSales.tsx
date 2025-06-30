
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Phone, Mail, Send, ShoppingCart, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AssetSales = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const { toast } = useToast();

  const products = [
    {
      code: "ТАИС.467845.016-01",
      name: "БЛОК ИНДИКАЦИИ К ВМ 8119",
      description: "Выпуск ГП №107 от 28.12.2021 г., 202145 (130 руб.)",
      unit: "шт",
      pricePerUnit: "х",
      quantity: 1,
      totalPrice: 130.00
    },
    {
      code: "ТАИС 467845.016-01",
      name: "",
      description: "",
      unit: "шт",
      pricePerUnit: 130.00,
      quantity: 1,
      totalPrice: 130.00
    },
    {
      code: "ТАИС 321426001",
      name: "ДЕНЕЖНЫЙ ЯЩИК",
      description: "Выпуск ГП №28 от 29.10.2015 г., 202145 (459 150 руб.)",
      unit: "шт",
      pricePerUnit: "х",
      quantity: 22,
      totalPrice: 1010.13
    },
    {
      code: "ТАИС 321426001",
      name: "",
      description: "",
      unit: "шт",
      pricePerUnit: 45.92,
      quantity: 22,
      totalPrice: 1010.13
    },
    {
      code: "ТАИС.715111.052",
      name: "КАТУШКА ДЛЯ ЛЕНТЫ",
      description: "",
      unit: "шт",
      pricePerUnit: "х",
      quantity: 4,
      totalPrice: 4.80
    },
    {
      code: "ТАИС 715111.052",
      name: "",
      description: "Выпуск ГП №1 от 02.02.2018 г., 202145 (1.2 руб.)",
      unit: "шт",
      pricePerUnit: 1.20,
      quantity: 1,
      totalPrice: 1.20
    },
    {
      code: "ТАИС 715111.052",
      name: "",
      description: "Выпуск ГП №2 от 02.02.2018 г., 202145 (1.2 руб.)",
      unit: "шт",
      pricePerUnit: 1.20,
      quantity: 2,
      totalPrice: 2.40
    },
    {
      code: "ТАИС 715111.052",
      name: "",
      description: "Выпуск ГП №10 от 11.06.2018 г., 202145 (1.2 руб.)",
      unit: "шт",
      pricePerUnit: 1.20,
      quantity: 1,
      totalPrice: 1.20
    },
    {
      code: "ТАИС421455001-01",
      name: "КОНТРОЛЛЕР",
      description: "Выпуск ГП №2 от 31.07.2014 г., 202153 (1 066 800 руб.)",
      unit: "шт",
      pricePerUnit: "х",
      quantity: 60,
      totalPrice: 6400.80
    },
    {
      code: "ТАИС421455001-01",
      name: "",
      description: "",
      unit: "шт",
      pricePerUnit: 106.68,
      quantity: 60,
      totalPrice: 6400.80
    },
    {
      code: "№226-245",
      name: "КОНТРОЛЛЕР",
      description: "Выпуск ГП №2 от 31.07.2014 г., 202153 (2 776 150 руб.)",
      unit: "шт",
      pricePerUnit: "х",
      quantity: 20,
      totalPrice: 5552.30
    },
    {
      code: "№226-245",
      name: "",
      description: "",
      unit: "шт",
      pricePerUnit: 277.62,
      quantity: 20,
      totalPrice: 5552.30
    }
  ];

  const salesDepartment = {
    title: "Отдел продаж",
    phones: [
      "+375 (17) 388 94 64",
      "+375 (17) 388 94 65", 
      "+375 (17) 388 94 66"
    ],
    email: "pcbmarket@mpovt.by"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время"
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <ShoppingCart className="w-16 h-16 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Продажа
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              неликвидов
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ОАО "МПОВТ" предлагает к реализации неликвидные товарно-материальные ценности по выгодным ценам. 
            Вся продукция находится в исправном состоянии и готова к использованию.
          </p>
        </div>

        {/* Products Table */}
        <div className="mb-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Package className="w-8 h-8 text-orange-500 mr-3" />
                Доступные товары
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead className="text-orange-400 font-semibold">Код</TableHead>
                      <TableHead className="text-orange-400 font-semibold">Наименование ТМЦ</TableHead>
                      <TableHead className="text-orange-400 font-semibold">Ед. изм.</TableHead>
                      <TableHead className="text-orange-400 font-semibold">Цена за ед.</TableHead>
                      <TableHead className="text-orange-400 font-semibold">Кол-во</TableHead>
                      <TableHead className="text-orange-400 font-semibold">Стоимость, руб.</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product, index) => (
                      <TableRow key={index} className="border-white/10 hover:bg-white/5">
                        <TableCell className="text-white font-mono text-sm">{product.code}</TableCell>
                        <TableCell className="text-white">
                          <div>
                            {product.name && <div className="font-semibold mb-1">{product.name}</div>}
                            {product.description && <div className="text-gray-400 text-sm">{product.description}</div>}
                          </div>
                        </TableCell>
                        <TableCell className="text-white">{product.unit}</TableCell>
                        <TableCell className="text-white">
                          {product.pricePerUnit === "х" ? "х" : `${product.pricePerUnit}`}
                        </TableCell>
                        <TableCell className="text-white">{product.quantity}</TableCell>
                        <TableCell className="text-orange-400 font-semibold">{product.totalPrice.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact and Form Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sales Department Contact */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">{salesDepartment.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-4">Телефоны:</h4>
                  <div className="space-y-2">
                    {salesDepartment.phones.map((phone, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <Phone className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
                        <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="hover:text-orange-400 transition-colors">
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-4">Email:</h4>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
                    <a href={`mailto:${salesDepartment.email}`} className="hover:text-orange-400 transition-colors">
                      {salesDepartment.email}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-sm">
                    Наши специалисты готовы предоставить подробную информацию о товарах, 
                    условиях поставки и оформить заказ в удобное для вас время.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Отправить сообщение</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">Имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Ваше имя"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="+375 XX XXX XX XX"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-white">Компания</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Название организации"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Сообщение *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                    placeholder="Укажите интересующие вас товары и количество"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Условия реализации неликвидов
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-4">Преимущества покупки:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Значительная экономия по сравнению с новыми товарами</li>
                    <li>• Все товары проверены и находятся в рабочем состоянии</li>
                    <li>• Возможность приобретения редких и снятых с производства компонентов</li>
                    <li>• Быстрая отгрузка со склада в Минске</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-4">Условия продажи:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Оплата по безналичному расчету для юридических лиц</li>
                    <li>• Самовывоз со склада или доставка по договоренности</li>
                    <li>• Предоставляются все необходимые документы</li>
                    <li>• Возможна продажа как оптом, так и в розницу</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AssetSales;
