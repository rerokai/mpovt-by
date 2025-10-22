import React from "react";
import { Card } from "@/components/ui/card";

interface InfoCard {
  title: string;
  description: string;
  icon?: React.ElementType;
  iconColor?: string;      // ex: "text-blue-400"
  iconBg?: string;         // ex: "bg-blue-500/20"
  iconBgHover?: string;    // ex: "bg-blue-500/40"
  borderFrom?: string;     // ex: "from-blue-500/20"
  borderTo?: string;       // ex: "to-cyan-500/20"
  cardHoverBg?: string;    // ex: "bg-blue-500/20"
}

interface InfoCardsSectionProps {
  title: string;
  subtitle?: string;
  cards: InfoCard[];

  // Цвета заголовка (градиент)
  titleGradientFrom?: string;
  titleGradientVia?: string;
  titleGradientTo?: string;

  // Цвет фона за заголовком (фоновые "блики")
  backgroundGlowFrom?: string;
  backgroundGlowVia?: string;
  backgroundGlowTo?: string;

  // Карточка внизу (опциональная)
  bottomCard?: {
    title: string;
    description: string;
    gradientFrom?: string;
    gradientVia?: string;
    gradientTo?: string;
  };

  // Опциональная настройка сетки
  columns?: 1 | 2 | 3 | 4;
}

const InfoCardsSection: React.FC<InfoCardsSectionProps> = ({
  title,
  subtitle,
  cards,
  titleGradientFrom = "from-blue-400",
  titleGradientVia = "via-orange-400",
  titleGradientTo = "to-pink-400",
  backgroundGlowFrom = "from-cyan-400/15",
  backgroundGlowVia = "via-purple-400/15",
  backgroundGlowTo = "to-emerald-400/15",
  bottomCard,
  columns = 3,
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className="py-16 md:py-20 px-4 relative z-10">
      <div className="container mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12 relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${backgroundGlowFrom} ${backgroundGlowVia} ${backgroundGlowTo} rounded-3xl blur-3xl`}
          ></div>

          <h2
            className={`text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${titleGradientFrom} ${titleGradientVia} ${titleGradientTo} bg-clip-text text-transparent relative z-10`}
          >
            {title}
          </h2>

          {subtitle && (
            <p className="text-lg text-white/60 relative z-10">{subtitle}</p>
          )}
        </div>

        {/* Карточки */}
        <div
          className={`grid ${gridCols} gap-6 max-w-6xl mx-auto mb-12 justify-center items-stretch place-items-center`}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                className={`p-6 text-center bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 group relative w-full max-w-sm h-full flex flex-col transform-gpu hover:scale-105 ${
                  card.cardHoverBg ?? ""
                } hover:!bg-opacity-30 hover:!bg-blend-lighten`}
                style={{
                  transitionProperty:
                    "background, border, box-shadow, transform",
                  transitionDuration: "300ms",
                }}
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 ${
                    card.iconBg ?? ""
                  } rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none`}
                ></div>

                {/* Hover border glow */}
                {(card.borderFrom || card.borderTo) && (
                  <div
                    className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${
                      card.borderFrom ?? ""
                    } ${card.borderTo ?? ""} p-px pointer-events-none`}
                  >
                    <div className="w-full h-full bg-black/90 rounded-lg"></div>
                  </div>
                )}

                {/* Иконка */}
                {Icon && (
                  <div
                    className={`w-16 h-16 ${
                      card.iconBg ?? ""
                    } rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:${
                      card.iconBgHover ?? ""
                    } relative z-20`}
                  >
                    <Icon className={`h-8 w-8 ${card.iconColor ?? ""}`} />
                  </div>
                )}

                {/* Текст карточки */}
                <h3 className="text-xl font-semibold mb-3 text-white relative z-20">
                  {card.title}
                </h3>
                <p className="text-slate-300 relative z-20">
                  {card.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Нижняя карточка (опционально) */}
        {bottomCard && (
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-slate-900/30 via-slate-700/30 to-slate-900/30 backdrop-blur-xl border border-slate-500/20 hover:border-slate-400/30 transition-all duration-300 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 via-slate-600/5 to-slate-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-center relative z-10">
              <h3
                className={`text-2xl font-bold mb-4 bg-gradient-to-r ${
                  bottomCard.gradientFrom ?? "from-blue-300"
                } ${bottomCard.gradientVia ?? "via-orange-200"} ${
                  bottomCard.gradientTo ?? "to-rose-300"
                } bg-clip-text text-transparent`}
              >
                {bottomCard.title}
              </h3>
              <p className="text-lg text-slate-200 leading-relaxed">
                {bottomCard.description}
              </p>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default InfoCardsSection;