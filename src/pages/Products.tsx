
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cpu, Car, Truck, Laptop, Phone, Shield, Database, Package, ArrowRight, Search } from "lucide-react";

const productCategories = [
  {
    id: "automotive",
    title: "Автокомпоненты",
    description: "Блоки управления для автомобильной техники",
    icon: <Car className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    products: [
      { name: "Блоки для автомобилей", path: "/products/car-blocks" },
      { name: "Блоки для тракторов", path: "/products/tractor-blocks" },
      { name: "Блоки для комбайнов", path: "/products/combine-blocks" },
      { name: "Блоки для карьерных самосвалов", path: "/products/dump-truck-blocks" }
    ]
  },
  {
    id: "computers",
    title: "Компьютерная техника",
    description: "Ноутбуки и компоненты на собственной платформе",
    icon: <Laptop className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop",
    products: [
      { name: "Ноутбуки", path: "/products/laptops" }
    ]
  },
  {
    id: "communication",
    title: "Средства связи",
    description: "Системы связи и информационные решения",
    icon: <Phone className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
    products: [
      { name: "Домофоны", path: "/products/intercoms" },
      { name: "Специальная связь", path: "/products/special-communication" },
      { name: "Информационные системы", path: "/products/information-systems" }
    ]
  },
  {
    id: "equipment",
    title: "Специальное оборудование",
    description: "Промышленное оборудование и металлические изделия",
    icon: <Package className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    products: [
      { name: "Металлические шкафы", path: "/products/metal-cabinets" }
    ]
  }
];

const features = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Высокое качество",
    description: "Сертифицированная система менеджмента качества"
  },
  {
    icon: <Cpu className="h-6 w-6 text-primary" />,
    title: "Инновации",
    description: "85% инновационной продукции от общего объема"
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Собственная платформа",
    description: "Разработка на базе интеллектуальной платформы"
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("automotive");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCategories = productCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="glass-card p-8 md:p-12 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-text-glow">
                  Наша продукция
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Широкий спектр высококачественной продукции для различных отраслей промышленности
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/contact">Запросить каталог</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="glass-card border-white/30">
                    <Link to="/company">О нашем производстве</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow [animation-delay:2s]" />
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-xl text-center transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-4 flex justify-center animate-bounce-in" style={{ animationDelay: `${index * 250}ms` }}>
                    <div className="p-3 rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Search */}
            <div className="max-w-md mx-auto mb-12 animate-fade-in">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Поиск продукции..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-primary focus:outline-none transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="section bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Категории продукции
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Основные направления
              </h2>
              <p className="text-muted-foreground">
                Выберите интересующую категорию для подробного изучения нашей продукции
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-105'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Active Category Content */}
            <div className="animate-fade-in" key={activeCategory}>
              {productCategories
                .filter(category => category.id === activeCategory)
                .map((category) => (
                  <div key={category.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-left">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-primary/10 mr-4">
                          {category.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6 text-lg">{category.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        {category.products.map((product, index) => (
                          <Link
                            key={product.path}
                            to={product.path}
                            className="flex items-center justify-between p-4 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:translate-x-2 group animate-fade-in-left"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <span className="font-medium group-hover:text-primary transition-colors duration-300">
                              {product.name}
                            </span>
                            <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>

                      <Button asChild className="btn-primary">
                        <Link to={category.products[0]?.path || "/contact"}>
                          Узнать подробнее <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="animate-fade-in-right">
                      <div className="glass-card p-6 rounded-2xl">
                        <img 
                          src={category.image}
                          alt={category.title}
                          className="w-full h-80 object-cover rounded-lg shadow-xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* All Categories Grid */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Вся продукция
              </h2>
              <p className="text-muted-foreground">
                Полный обзор всех категорий нашей продукции
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCategories.map((category, index) => (
                <div 
                  key={category.id}
                  className="glass-card p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="space-y-2">
                        {category.products.map((product) => (
                          <Link
                            key={product.path}
                            to={product.path}
                            className="block text-sm text-primary hover:underline transition-colors duration-300"
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Заинтересованы в нашей продукции?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Свяжитесь с нами для получения технических характеристик и коммерческих предложений
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/contact">Получить консультацию</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="glass-card border-white/30">
                  <Link to="/company/cooperation">Стать партнером</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
