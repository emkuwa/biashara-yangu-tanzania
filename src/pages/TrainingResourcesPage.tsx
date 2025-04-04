
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { trainingResources, categories, filterTrainingResources, type TrainingResource } from '@/data/trainingResources';
import { Book, ExternalLink, Search, Video, FileText, Tool, Archive } from 'lucide-react';

const TrainingResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedCost, setSelectedCost] = useState('');
  const [filteredResources, setFilteredResources] = useState<TrainingResource[]>(trainingResources);
  
  // Apply filters when any filter changes
  useEffect(() => {
    const filtered = filterTrainingResources(
      searchTerm,
      selectedCategory,
      selectedType,
      selectedLevel,
      selectedLanguage,
      selectedCost
    );
    setFilteredResources(filtered);
  }, [searchTerm, selectedCategory, selectedType, selectedLevel, selectedLanguage, selectedCost]);
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedType('');
    setSelectedLevel('');
    setSelectedLanguage('');
    setSelectedCost('');
  };
  
  // Get resource icon based on type
  const getResourceIcon = (type: string) => {
    switch(type) {
      case 'Video':
        return <Video className="text-tz-blue" size={24} />;
      case 'Article':
        return <FileText className="text-tz-green" size={24} />;
      case 'Course':
        return <Book className="text-tz-gold" size={24} />;
      case 'Book':
        return <Archive className="text-purple-500" size={24} />;
      case 'Tool':
        return <Tool className="text-gray-600" size={24} />;
      default:
        return <Book className="text-tz-blue" size={24} />;
    }
  };
  
  // Get level color
  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Get cost color
  const getCostColor = (cost: string) => {
    switch(cost) {
      case 'Free':
        return 'bg-green-100 text-green-800';
      case 'Paid':
        return 'bg-amber-100 text-amber-800';
      case 'Freemium':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Mafunzo na Rasilimali</h1>
            <p className="text-gray-600">
              Jifunze ujuzi muhimu wa kuendesha biashara kupitia rasilimali zetu zilizochaguliwa kwa makini
            </p>
          </div>
          
          {/* Filters Section */}
          <div className="bg-white p-4 rounded-lg shadow mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {/* Search Input */}
              <div className="relative xl:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Tafuta mafunzo..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
              </div>
              
              {/* Category Filter */}
              <div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Kategoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Kategoria Zote</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Type Filter */}
              <div>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Aina" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Aina Zote</SelectItem>
                    <SelectItem value="Video">Video</SelectItem>
                    <SelectItem value="Article">Makala</SelectItem>
                    <SelectItem value="Course">Kozi</SelectItem>
                    <SelectItem value="Book">Vitabu</SelectItem>
                    <SelectItem value="Tool">Zana</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Level Filter */}
              <div>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Kiwango" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Viwango Vyote</SelectItem>
                    <SelectItem value="Beginner">Mwanzo</SelectItem>
                    <SelectItem value="Intermediate">Kati</SelectItem>
                    <SelectItem value="Advanced">Juu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Reset Button */}
              <div>
                <Button variant="outline" onClick={resetFilters} className="w-full">
                  Ondoa Vigezo Vyote
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4">
              {/* Language Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Lugha:</span>
                <div className="flex gap-2">
                  <Button
                    variant={selectedLanguage === '' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage('')}
                    className={selectedLanguage === '' ? "bg-tz-blue" : ""}
                  >
                    Zote
                  </Button>
                  <Button
                    variant={selectedLanguage === 'Swahili' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage('Swahili')}
                    className={selectedLanguage === 'Swahili' ? "bg-tz-blue" : ""}
                  >
                    Kiswahili
                  </Button>
                  <Button
                    variant={selectedLanguage === 'English' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage('English')}
                    className={selectedLanguage === 'English' ? "bg-tz-blue" : ""}
                  >
                    Kiingereza
                  </Button>
                </div>
              </div>
              
              {/* Cost Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Gharama:</span>
                <div className="flex gap-2">
                  <Button
                    variant={selectedCost === '' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCost('')}
                    className={selectedCost === '' ? "bg-tz-blue" : ""}
                  >
                    Zote
                  </Button>
                  <Button
                    variant={selectedCost === 'Free' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCost('Free')}
                    className={selectedCost === 'Free' ? "bg-tz-blue" : ""}
                  >
                    Bure
                  </Button>
                  <Button
                    variant={selectedCost === 'Paid' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCost('Paid')}
                    className={selectedCost === 'Paid' ? "bg-tz-blue" : ""}
                  >
                    Malipo
                  </Button>
                  <Button
                    variant={selectedCost === 'Freemium' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCost('Freemium')}
                    className={selectedCost === 'Freemium' ? "bg-tz-blue" : ""}
                  >
                    Freemium
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-4">
            <p className="text-gray-600">
              Rasilimali {filteredResources.length} zimepatikana
            </p>
          </div>
          
          {/* Training Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      {getResourceIcon(resource.type)}
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="bg-blue-50 text-tz-blue border-blue-200">
                        {resource.type}
                      </Badge>
                      <Badge className={getLevelColor(resource.level)}>
                        {resource.level === 'Beginner' ? 'Mwanzo' : 
                         resource.level === 'Intermediate' ? 'Kati' : 'Juu'}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{resource.title}</CardTitle>
                  <CardDescription>{resource.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 line-clamp-3 mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge className={getCostColor(resource.cost)}>
                      {resource.cost === 'Free' ? 'Bure' : 
                       resource.cost === 'Paid' ? 'Malipo' : 'Bure/Malipo'}
                    </Badge>
                    <Badge variant="outline">
                      {resource.language === 'Swahili' ? 'Kiswahili' : 
                       resource.language === 'English' ? 'Kiingereza' : 'Kiswahili/Kiingereza'}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild
                    className="w-full bg-tz-blue hover:bg-blue-600"
                  >
                    <a href={resource.url || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <span>Angalia Zaidi</span>
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <Book className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-xl font-semibold mb-2">Hakuna rasilimali zimepatikana</h3>
              <p className="text-gray-600 mb-4">Jaribu kubadilisha vigezo vya kutafuta</p>
              <Button variant="outline" onClick={resetFilters}>
                Ondoa Vigezo Vyote
              </Button>
            </div>
          )}
          
          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-tz-green to-tz-blue rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold mb-2">Ungana na Wajasiriamali Wengine</h3>
                <p className="opacity-90">
                  Jiunge na jamii yetu ya wajasiriamali Tanzania kushirikiana, kusoma, na kukua pamoja.
                </p>
              </div>
              <Button
                className="bg-white text-tz-blue hover:bg-gray-100 min-w-[150px]"
              >
                Jiunge Nasi
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrainingResourcesPage;
