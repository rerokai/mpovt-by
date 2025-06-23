
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Factory, Users, Award, TrendingUp, ArrowRight, Building, Calendar, Target } from "lucide-react";

const milestones = [
  {
    year: "1956",
    title: "Основание предприятия",
    description: "Союзным правительством принято решение о строительстве в Минске завода по производству электронных вычислительных машин"
  },
  {
    year: "1970-1990",
    title: "Развитие производства",
    description: "Активное развитие производственных мощностей и освоение новых технологий в области электроники"
  },
  {
    year: "2000-2010",
    title: "Модернизация",
    description: "Внедрение современных технологий производства и расширение номенклатуры выпускаемой продукции"
  },
  {
    year: "2020+",
    title: "Инновационное развитие",
    description: "Фокус на инновационные разработки и кооперацию с ведущими партнерами отрасли"
  }
];

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Качество продукции",
    description: "Обеспечение удовлетворения потребителей от покупки любого нашего изделия или услуги"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Инновации",
    description: "Упор на востребованные рынком разработки и внедрение передовых технологий"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Эффективность",
    description: "Обеспечение заданного показателя по прибыли и устойчивое развитие предприятия"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Партнерство",
    description: "Поиск сильных партнеров для совместного развития и роста"
  }
];

const departments = [
  { name: "Электронное обращение", path: "/company/electronic-appeal" },
  { name: "Система менеджмента качества", path: "/company/quality-management" },
  { name: "Кооперация", path: "/company/cooperation" },
  { name: "Вакансии", path: "/company/vacancies" },
  { name: "Арендные площади", path: "/company/rental-areas" },
  { name: "Противодействие коррупции", path: "/company/anti-corruption" },
  { name: "Продажа неликвидов", path: "/company/asset-sales" }
];

export default function Company() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-text-glow">
                  О компании
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Более 65 лет опыта в области промышленной электроники и инноваций
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/company/cooperation">
                      Наша история <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="glass-card border-white/30">
                    <Link to="/contact">Связаться с нами</Link>
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in-right">
                <div className="glass-card p-6 rounded-2xl">
                  <img 
                    src="https://mpovt.by/gallery/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%B2%D1%85%D0%BE%D0%B42-1.jpg?ts=1746513904"
                    alt="Главный офис МПОВТ"
                    className="w-full h-96 object-cover rounded-lg shadow-xl"
                  />
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Главный офис ОАО "МПОВТ"
                  </p>
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

        {/* History Section */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Наша история
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Путь длиной в 65+ лет
              </h2>
              <p className="text-muted-foreground text-lg">
                ОАО "МПОВТ" начинает свою историю в 1956 году, когда союзным правительством было принято решение о строительстве в Минске завода по производству электронных вычислительных машин. Богатая и насыщенная событиями история предприятия - это мощный фундамент для дальнейшего роста и развития.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-xl text-center transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-3xl font-bold text-primary mb-4 animate-bounce-in" style={{ animationDelay: `${index * 250}ms` }}>
                    {milestone.year}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  Наша миссия
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Движение вперед с уверенностью
                </h2>
                <p className="text-muted-foreground mb-6">
                  За годы работы нам удалось создать историю, сохранить знания и опыт. Но сегодня время ставит перед нами новые цели. Это значит, что мы находимся в непрерывном поиске проектов и привлекаем для этого сильных партнеров, с которыми можно развиваться и расти.
                </p>
                <p className="text-muted-foreground mb-8">
                  Быстро меняющийся рынок, ужесточение конкуренции и соперничества заставляют нас сегодня делать еще более уверенные шаги вперед для развития своих преимуществ.
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/company/cooperation">
                    Узнать о кооперации <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="glass-card p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl animate-scale-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="mb-4 flex justify-center animate-bounce-in" style={{ animationDelay: `${index * 200}ms` }}>
                      <div className="p-3 rounded-full bg-primary/10">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center">{value.title}</h3>
                    <p className="text-muted-foreground text-sm text-center">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Разделы компании
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Направления деятельности
              </h2>
              <p className="text-muted-foreground">
                Ознакомьтесь с различными аспектами деятельности нашего предприятия
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Link 
                  key={dept.path}
                  to={dept.path}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="glass-card p-6 rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:bg-primary/10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                        {dept.name}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Готовы к сотрудничеству?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Свяжитесь с нами для обсуждения возможностей партнерства и развития
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/contact">Связаться с нами</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="glass-card border-white/30">
                  <Link to="/company/cooperation">Узнать о кооперации</Link>
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
