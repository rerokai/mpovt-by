import React from "react";
import { Card } from "@/components/ui/card";
import { Settings, Microscope, CheckCircle } from "lucide-react";

const laboratories = [
  {
    title: "Испытательная лаборатория",
    description: "Полный комплекс механических и климатических испытаний автокомпонентов и других изделий",
    icon: Settings,
    accreditationNumber: "BY/112 2.5349",
    accreditationDate: "10.12.2021",
    validityPeriod: "с 10 декабря 2021 г. до 10 декабря 2026 года",
    features: [
      "Механические испытания",
      "Климатические испытания",
      "Испытания автокомпонентов",
      "Испытания на вибрацию и удар",
      "Электромагнитная совместимость"
    ]
  },
  {
    title: "Метрологическая лаборатория",
    description: "Поверка средств измерений радиотехнических, электрических величин, средств измерения давления и температуры",
    icon: Microscope,
    accreditationNumber: "BY/112 3.0268",
    accreditationDate: "18.07.2011",
    validityPeriod: "с 19 июля 2021 г. до 19 июля 2026 года",
    features: [
      "Поверка радиотехнических средств",
      "Поверка электрических величин",
      "Поверка средств измерения давления",
      "Поверка средств измерения температуры",
      "Калибровка измерительного оборудования"
    ]
  }
];

const LaboratoriesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-2 sm:px-8 lg:px-20 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-8">
            Наши лаборатории
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Современное оборудование и высококвалифицированные специалисты
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {laboratories.map((lab, index) => {
            const Icon = lab.icon;
            const accentColors = [
              {
                border: "hover:border-cyan-400/30",
                glow: "from-cyan-500/10 to-purple-500/10",
                iconBg: "from-cyan-500/20 to-purple-500/20",
                icon: "text-cyan-400"
              },
              {
                border: "hover:border-emerald-400/30",
                glow: "from-emerald-500/10 to-green-500/10",
                iconBg: "from-emerald-500/20 to-green-500/20",
                icon: "text-emerald-400"
              }
            ];
            const color = accentColors[index % accentColors.length];
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 ${color.border} transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex flex-col h-full`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color.glow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${color.iconBg} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                      <Icon className={`w-7 h-7 ${color.icon}`} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{lab.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">{lab.description}</p>
                  <div className="mb-6 p-4 bg-white/10 rounded-lg border border-white/10">
                    <p className="text-sm text-slate-400 mb-2">
                      <strong className="text-white">Основания для оказания услуг:</strong> аттестат аккредитации № {lab.accreditationNumber} от {lab.accreditationDate}
                    </p>
                    <p className="text-sm text-slate-400">
                      <strong className="text-white">Срок действия:</strong> {lab.validityPeriod}
                    </p>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-white mb-3">Виды услуг:</h4>
                    <ul className="space-y-2">
                      {lab.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LaboratoriesSection;