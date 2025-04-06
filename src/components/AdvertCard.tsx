
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AdvertCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  bgColor: string;
  borderColor: string;
  buttonText: string;
  buttonColor: string;
  buttonHoverColor: string;
  link?: string;
}

const AdvertCard: React.FC<AdvertCardProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  bgColor,
  borderColor,
  buttonText,
  buttonColor,
  buttonHoverColor,
  link = "#"
}) => {
  return (
    <Card className={`${bgColor} ${borderColor} hover:shadow-md transition-all`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <Badge className="bg-yellow-500 text-white">Mdhamini</Badge>
        </div>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="h-32 bg-cover bg-center rounded-md mb-4" style={{backgroundImage: `url('${imageSrc}')`}}></div>
        <p className="text-gray-700 text-sm">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${buttonColor} ${buttonHoverColor}`} 
          onClick={() => window.open(link, '_blank')}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AdvertCard;
