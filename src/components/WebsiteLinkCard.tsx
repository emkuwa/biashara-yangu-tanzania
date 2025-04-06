
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface WebsiteLinkCardProps {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  iconColor: string;
}

const WebsiteLinkCard: React.FC<WebsiteLinkCardProps> = ({
  title,
  description,
  url,
  icon: Icon,
  iconColor
}) => {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <Icon className={`mr-2 ${iconColor}`} size={20} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-gray-700">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            Tembelea <ExternalLink size={16} className="ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WebsiteLinkCard;
