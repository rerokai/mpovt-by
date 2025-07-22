import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, LucideIcon } from 'lucide-react';

interface DownloadItem {
  title: string;
  description: string;
  icon: LucideIcon;
  fileName: string;
  fileSize: string;
  downloadUrl: string;
}

interface DownloadsSectionProps {
  title: string;
  description: string;
  downloads: DownloadItem[];
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  gradientColors?: string;
}

export const DownloadsSection: React.FC<DownloadsSectionProps> = ({
  title,
  description,
  downloads,
  variant = 'primary',
  gradientColors = 'from-cyan-400 to-blue-400'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          card: 'bg-slate-800/10 backdrop-blur-sm border-slate-700/20 hover:border-slate-600/40',
          iconContainer: 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20',
          icon: 'text-cyan-400'
        };
      case 'secondary':
        return {
          card: 'bg-slate-800/20 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/50',
          iconContainer: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20',
          icon: 'text-purple-400'
        };
      case 'outline':
        return {
          card: 'bg-transparent border-2 border-slate-700/50 hover:border-slate-600/70',
          iconContainer: 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20',
          icon: 'text-emerald-400'
        };
      case 'gradient':
        return {
          card: 'bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/50',
          iconContainer: 'bg-gradient-to-r from-orange-500/20 to-yellow-500/20',
          icon: 'text-orange-400'
        };
      default:
        return {
          card: 'bg-slate-800/10 backdrop-blur-sm border-slate-700/20 hover:border-slate-600/40',
          iconContainer: 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20',
          icon: 'text-cyan-400'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-900/20 to-black/20 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]`}>
            {title}
          </h2>
          <p className="text-slate-300 text-lg">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((download, index) => (
            <Card 
              key={index} 
              className={`p-8 ${styles.card} transition-all duration-300 hover:scale-105 animate-fade-in-up`} 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-full ${styles.iconContainer} mb-4`}>
                  <download.icon className={`w-8 h-8 ${styles.icon}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{download.title}</h3>
                <p className="text-slate-300 mb-4">{download.description}</p>
                <div className="text-sm text-slate-400 mb-4">
                  <p>{download.fileName}</p>
                  <p>{download.fileSize}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                  onClick={() => window.open(download.downloadUrl, '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Скачать
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
