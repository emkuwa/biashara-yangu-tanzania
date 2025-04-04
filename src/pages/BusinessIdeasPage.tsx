
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { 
  businessIdeas, 
  categories, 
  filterBusinessIdeas,
  formatCurrency,
  type BusinessIdea
} from '@/data/businessIdeas';
import { Briefcase, CheckCircle, Search } from 'lucide-react';

const BusinessIdeasPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [capitalRange, setCapitalRange] = useState<[number, number]>([0, 10000000]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [filteredIdeas, setFilteredIdeas] = useState<BusinessIdea[]>(businessIdeas);
  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  
  // Apply filters when any filter changes
  useEffect(() => {
    const filtered = filterBusinessIdeas(
      searchTerm,
      selectedCategory === 'all' ? '' : selectedCategory,
      capitalRange,
      selectedDifficulty === 'all' ? undefined : selectedDifficulty
    );
    setFilteredIdeas(filtered);
  }, [searchTerm, selectedCategory, capitalRange, selectedDifficulty]);
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle category selection
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };
  
  // Handle difficulty selection
  const handleDifficultyChange = (value: string) => {
    setSelectedDifficulty(value);
  };
  
  // Handle capital range slider change
  const handleCapitalRangeChange = (value: number[]) => {
    setCapitalRange([value[0], value[1]]);
  };
  
  // Handle view toggle
  const handleViewChange = (value: string) => {
    setCurrentView(value as 'grid' | 'list');
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setCapitalRange([0, 10000000]);
    setSelectedDifficulty('all');
  };
  
  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Rahisi':
        return 'bg-green-100 text-green-800';
      case 'Wastani':
        return 'bg-yellow-100 text-yellow-800';
      case 'Ngumu':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Mawazo ya Biashara</h1>
              <p className="text-gray-600">
                Gundua fursa za biashara zinazofaa katika mazingira ya Tanzania
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Tabs defaultValue="grid" value={currentView} onValueChange={handleViewChange}>
                <TabsList>
                  <TabsTrigger value="grid">Gridi</TabsTrigger>
                  <TabsTrigger value="list">Orodha</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          {/* Filters Section */}
          <div className="bg-white p-4 rounded-lg shadow mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Tafuta biashara..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
              </div>
              
              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Kategoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Kategoria Zote</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Difficulty Filter */}
              <Select value={selectedDifficulty} onValueChange={handleDifficultyChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Ugumu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Ugumu Wowote</SelectItem>
                  <SelectItem value="Rahisi">Rahisi</SelectItem>
                  <SelectItem value="Wastani">Wastani</SelectItem>
                  <SelectItem value="Ngumu">Ngumu</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Reset Button */}
              <Button variant="outline" onClick={resetFilters}>
                Ondoa Vigezo Vyote
              </Button>
            </div>
            
            {/* Capital Range Slider */}
            <div className="mt-4">
              <p className="mb-2">Mtaji: {formatCurrency(capitalRange[0])} - {formatCurrency(capitalRange[1])}</p>
              <Slider
                defaultValue={[0, 10000000]}
                max={10000000}
                step={100000}
                value={capitalRange}
                onValueChange={handleCapitalRangeChange}
              />
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-4">
            <p className="text-gray-600">
              Mawazo {filteredIdeas.length} yamepatikana
            </p>
          </div>
          
          {/* Business Ideas Grid/List View */}
          {currentView === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIdeas.map(idea => (
                <Card key={idea.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="bg-blue-50 text-tz-blue border-blue-200">
                          {idea.category}
                        </Badge>
                        <Badge className={getDifficultyColor(idea.difficulty)}>
                          {idea.difficulty}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">{idea.description}</p>
                      <div className="text-sm text-gray-700 mb-4">
                        <p><span className="font-medium">Mtaji:</span> {formatCurrency(idea.minCapital)} - {formatCurrency(idea.maxCapital)}</p>
                        <p><span className="font-medium">Muda wa Faida:</span> {idea.timeToProfit}</p>
                      </div>
                      <Button 
                        className="w-full bg-tz-blue hover:bg-blue-600"
                        onClick={() => navigate(`/biashara/${idea.id}`)}
                      >
                        Angalia Zaidi
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredIdeas.map(idea => (
                <Accordion 
                  key={idea.id} 
                  type="single" 
                  collapsible 
                  className="bg-white rounded-lg shadow"
                >
                  <AccordionItem value={idea.id} className="border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full text-left">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-full mr-4">
                            <Briefcase className="text-tz-blue" size={24} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{idea.title}</h3>
                            <div className="flex flex-wrap gap-2 mt-1">
                              <Badge variant="outline" className="bg-blue-50 text-tz-blue border-blue-200">
                                {idea.category}
                              </Badge>
                              <Badge className={getDifficultyColor(idea.difficulty)}>
                                {idea.difficulty}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 md:mt-0 text-sm font-medium">
                          Mtaji: {formatCurrency(idea.minCapital)} - {formatCurrency(idea.maxCapital)}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="border-t pt-4">
                        <p className="text-gray-700 mb-4">{idea.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-gray-800">Hatua za Kuanza</h4>
                            <ul className="space-y-2">
                              {idea.steps.map((step, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle className="text-tz-green mr-2 mt-1 flex-shrink-0" size={16} />
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-gray-800">Mahitaji</h4>
                            <ul className="space-y-2">
                              {idea.requirements.map((req, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle className="text-tz-blue mr-2 mt-1 flex-shrink-0" size={16} />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 text-gray-800">Vidokezo</h4>
                          <ul className="space-y-2">
                            {idea.tips.map((tip, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="text-tz-gold mr-2 mt-1 flex-shrink-0" size={16} />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-4">
                          <Button 
                            className="bg-tz-green hover:bg-green-600"
                            onClick={() => navigate(`/mpango`)}
                          >
                            Tengeneza Mpango wa Biashara
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          )}
          
          {/* Empty State */}
          {filteredIdeas.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-xl font-semibold mb-2">Hakuna mawazo ya biashara yaliyopatikana</h3>
              <p className="text-gray-600 mb-4">Jaribu kubadilisha vigezo vya kutafuta</p>
              <Button variant="outline" onClick={resetFilters}>
                Ondoa Vigezo Vyote
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessIdeasPage;
