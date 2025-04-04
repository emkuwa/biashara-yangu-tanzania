
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { businessIdeas, formatCurrency } from '@/data/businessIdeas';
import { CheckCircle, ArrowLeft, FileText, Share2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from '@/context/AuthContext';

const BusinessDetailPage = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  
  const [activeTab, setActiveTab] = useState<'details' | 'business-plan'>('details');
  const [showBusinessPlan, setShowBusinessPlan] = useState(false);
  
  const businessIdea = businessIdeas.find(idea => idea.id === businessId);
  
  useEffect(() => {
    // If business idea doesn't exist, redirect to business ideas page
    if (!businessIdea) {
      navigate('/biashara');
    }
  }, [businessIdea, navigate]);
  
  if (!businessIdea) {
    return null;
  }
  
  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: businessIdea.title,
        text: businessIdea.description,
        url: window.location.href,
      }).catch((error) => console.log('Sharing failed', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Anwani imenakiliwa!",
        description: "Anwani ya tovuti imenakiliwa kwenye clipboard yako.",
      });
    }
  };
  
  const handleViewMoreClick = () => {
    if (isAuthenticated) {
      setShowBusinessPlan(true);
    } else {
      toast({
        title: "Tafadhali jisajili kwanza",
        description: "Unahitaji kuwa na akaunti ili uone maelezo zaidi ya biashara.",
        variant: "destructive",
      });
      navigate('/sajili', { state: { from: location.pathname } });
    }
  };
  
  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Bidhaa':
        return 'bg-blue-100 text-blue-800';
      case 'Huduma':
        return 'bg-green-100 text-green-800';
      case 'Mchanganyiko':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-tz-blue"
              onClick={() => navigate('/biashara')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Rudi kwenye Orodha ya Biashara
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="outline" className="bg-blue-50 text-tz-blue border-blue-200">
                  {businessIdea.category}
                </Badge>
                <Badge className={getTypeColor(businessIdea.type)}>
                  {businessIdea.type}
                </Badge>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-3">{businessIdea.title}</h1>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                {showBusinessPlan ? (
                  <div className="p-6">
                    <div className="prose max-w-none">
                      <p className="text-lg text-gray-700 mb-6">{businessIdea.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <Card className="border-l-4 border-tz-blue">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Mtaji Unaohitajika</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 text-lg font-semibold">
                              {formatCurrency(businessIdea.minCapital)} - {formatCurrency(businessIdea.maxCapital)}
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-l-4 border-tz-green">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Muda wa Kuanza Kupata Faida</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 text-lg font-semibold">
                              {businessIdea.timeToProfit}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Hatua za Kuanza</h2>
                      <ul className="space-y-3 mb-8">
                        {businessIdea.steps.map((step, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-tz-green text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                              <span className="font-medium text-sm">{index + 1}</span>
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Mahitaji</h2>
                      <ul className="space-y-3 mb-8">
                        {businessIdea.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="text-tz-blue mr-3 mt-1 flex-shrink-0" size={18} />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Vidokezo vya Mafanikio</h2>
                      <ul className="space-y-3 mb-8">
                        {businessIdea.tips.map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="text-tz-gold mr-3 mt-1 flex-shrink-0" size={18} />
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {businessIdea.businessPlan && (
                        <>
                          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Mpango wa Biashara</h2>
                          <div className="whitespace-pre-wrap bg-gray-50 p-6 rounded-lg border text-gray-700 mb-8">
                            {businessIdea.businessPlan}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="p-6">
                    <div className="prose max-w-none">
                      <p className="text-lg text-gray-700 mb-6">{businessIdea.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <Card className="border-l-4 border-tz-blue">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Mtaji Unaohitajika</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 text-lg font-semibold">
                              {formatCurrency(businessIdea.minCapital)} - {formatCurrency(businessIdea.maxCapital)}
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-l-4 border-tz-green">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Muda wa Kuanza Kupata Faida</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 text-lg font-semibold">
                              {businessIdea.timeToProfit}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="text-center py-8 mb-8 bg-blue-50 rounded-lg border border-blue-200">
                        <h3 className="text-xl font-semibold mb-4 text-tz-blue">Unataka kujua zaidi?</h3>
                        <p className="text-gray-700 mb-5">Ili uone maelezo zaidi, mpango wa biashara, hatua za kuanza, mahitaji, na vidokezo vya mafanikio, bonyeza kitufe hapa chini.</p>
                        <Button 
                          className="bg-tz-blue hover:bg-blue-600" 
                          onClick={handleViewMoreClick}
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Angalia Taarifa Zaidi
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-20">
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">Hatua Zinazofuata</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-tz-green hover:bg-green-600" onClick={() => navigate('/sajili')}>
                    Jisajili na Anza Sasa
                  </Button>
                  {!showBusinessPlan ? (
                    <Button className="w-full" variant="outline" onClick={handleViewMoreClick}>
                      <FileText className="mr-2 h-4 w-4" />
                      Angalia Taarifa Zaidi
                    </Button>
                  ) : (
                    <Button className="w-full" variant="outline" onClick={handleShareClick}>
                      <Share2 className="mr-2 h-4 w-4" />
                      Shiriki Biashara Hii
                    </Button>
                  )}
                  <Button className="w-full" variant="outline" onClick={handleShareClick}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Shiriki
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium text-gray-800 mb-2">Biashara Zinazohusiana:</h4>
                  <ul className="space-y-2">
                    {businessIdeas
                      .filter(idea => 
                        idea.category === businessIdea.category && 
                        idea.id !== businessIdea.id
                      )
                      .slice(0, 3)
                      .map(relatedIdea => (
                        <li key={relatedIdea.id}>
                          <a 
                            href={`/biashara/${relatedIdea.id}`}
                            className="text-tz-blue hover:underline block py-1"
                          >
                            {relatedIdea.title}
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessDetailPage;
