import React, { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type SmallMapProps = {
  className?: string;
  address?: string;
  /** Optional override for map language (app language used by default) - values: 'en'|'ru'|'be'|'zh' */
  lang?: string;
};

const SmallMap: React.FC<SmallMapProps> = ({ className = "", address = "ул. Притыцкого 62, Минск, Минская область, Беларусь", lang }) => {
  const { language } = useLanguage();

  // Map our app language codes to Google Maps `hl` parameter values
  const mapLang = useMemo(() => {
    const code = lang || language || 'en';
    const mapping: Record<string, string> = {
      en: 'en',
      ru: 'ru',
      be: 'be',
      zh: 'zh-CN',
      'zh-cn': 'zh-CN',
      'zh-CN': 'zh-CN',
    };
    return mapping[code] || 'en';
  }, [lang, language]);

  const src = useMemo(() => {
    return `https://maps.google.com/maps?width=450&height=200&hl=${encodeURIComponent(mapLang)}&q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=B&output=embed`;
  }, [mapLang, address]);

  const noscriptLabel = useMemo(() => {
    switch (mapLang.split('-')[0]) {
      case 'ru':
        return 'Открыть карту';
      case 'be':
        return 'Адкрыць карту';
      case 'zh':
        return '打开地图';
      default:
        return 'Open Map';
    }
  }, [mapLang]);

  return (
    <div className={`${className} relative overflow-hidden bg-slate-800/50`}>
      {/* Responsive iframe that fills its container */}
      <iframe
        title={`Map — ${address}`}
        src={src}
        style={{ border: 0, width: '100%', height: '100%' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label={`Карта: ${address}`}
      />
      {/* Fallback / attribution for users without JS or iframe support */}
      <noscript className="absolute inset-0 flex items-center justify-center text-sm text-white/70 p-4">
        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer" className="underline">
          {noscriptLabel}: {address}
        </a>
      </noscript>
    </div>
  );
};

export default SmallMap;
