
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import OptimizedVideoPlayer from "./OptimizedVideoPlayer";

interface ApartmentCardProps {
  title: string;
  description: string;
  features: string[];
  videoSrc: string;
  placeholderSrc: string;
  price?: string;
  isNew?: boolean;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({
  title,
  description,
  features,
  videoSrc,
  placeholderSrc,
  price,
  isNew = false,
}) => {
  return (
    <Card className="group overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
      <div className="relative aspect-video overflow-hidden">
        <OptimizedVideoPlayer
          src={videoSrc}
          placeholder={placeholderSrc}
          className="w-full h-full object-cover"
        />
        {isNew && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            Новинка
          </Badge>
        )}
        {price && (
          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
            <span className="text-white font-semibold">{price}</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {features.slice(0, 3).map((feature, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
            >
              {feature}
            </Badge>
          ))}
          {features.length > 3 && (
            <Badge 
              variant="outline" 
              className="text-gray-400 border-gray-400"
            >
              +{features.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApartmentCard;
