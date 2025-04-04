
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Text, RefreshCw, Copy, Star, Search, LightbulbIcon } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Business categories
const businessCategories = [
  "Kilimo na Mifugo",
  "Chakula na Vinywaji",
  "Utengenezaji",
  "Teknolojia",
  "Usafi na Urembo",
  "Elimu",
  "Afya",
  "Usafiri",
  "Ujenzi",
  "Biashara za Mtandaoni",
  "Utalii na Ukarimu",
  "Nyingine"
];

// Mock name suggestions based on category
const namesByCategory: Record<string, string[]> = {
  "Kilimo na Mifugo": [
    "Mazao Bora", "Kilimo Hai", "Rutuba Shamba", "Mkulima Hodari", "Mavuno Plus",
    "Chakula Asili", "Mbegu Zalisha", "Shamba Letu", "Green Harvest", "Kilimo Tech"
  ],
  "Chakula na Vinywaji": [
    "Ladha Tamu", "Kitamu Cafe", "Mlo Bora", "Utamu Wetu", "Chakula Chetu",
    "Ladha Afrika", "Karibu Cafe", "Maua Restaurant", "Nyama Choma King", "Zawadi Catering"
  ],
  "Teknolojia": [
    "Digi Solutions", "Tech Rafiki", "Smart Afrika", "Digital Tanzania", "Tech Simba",
    "Byte Jembe", "Zana Digital", "Tech Safari", "Teknolojia Bora", "Janja Tech"
  ],
  "Usafi na Urembo": [
    "Uzuri Beauty", "Nuru Cosmetics", "Mrembo Wetu", "Mapishi ya Ngozi", "Rangi Salon",
    "Urembo Express", "Haiba Nzuri", "Ngozi Asili", "Beautiful You", "Urembo Africa"
  ],
  "Elimu": [
    "Elimu Bora", "Maarifa Centre", "Wasomi Academy", "Akili Institute", "Soma Smart",
    "Chuo Cha Maarifa", "Jifunze Hub", "Ujuzi College", "Watoto Scholars", "Anzisha Learning"
  ]
};

// Generic names for other categories
const genericNames = [
  "Biashara Smart", "Tanzania Express", "Afrika Solutions", "Hodari Services", "Uzoefu Pro",
  "Zawadi Company", "Maendeleo Group", "Tumaini Enterprise", "Nguvu Limited", "Safari Success",
  "Umoja Ventures", "Karibu Solutions", "Jamii Group", "Tija Services", "Uhuru Enterprises"
];

const NameGeneratorPage = () => {
  const [businessDescription, setBusinessDescription] = useState('');
  const [businessCategory, setBusinessCategory] = useState('');
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('generator');
  const [isGenerating, setIsGenerating] = useState(false);
  const [favoriteNames, setFavoriteNames] = useState<string[]>([]);
  const [customWords, setCustomWords] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const handleGenerateNames = () => {
    if (!businessCategory && !businessDescription) {
      toast({
        title: "Tafadhali jaza taarifa",
        description: "Chagua aina ya biashara au andika maelezo ya biashara yako",
        variant: "destructive"
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let names: string[] = [];
      
      if (businessCategory && namesByCategory[businessCategory]) {
        names = [...namesByCategory[businessCategory]];
      }
      
      // Add some generic names
      names = [...names, ...genericNames.slice(0, 5)];
      
      // If custom words provided, create some combinations
      if (customWords.trim()) {
        const words = customWords.split(',').map(word => word.trim());
        words.forEach(word => {
          if (word) {
            names.push(`${word} Tanzania`);
            names.push(`${word} Express`);
            names.push(`${word} Solutions`);
          }
        });
      }
      
      // Shuffle the array and take first 10
      const shuffled = names.sort(() => 0.5 - Math.random());
      setGeneratedNames(shuffled.slice(0, 10));
      setIsGenerating(false);
      
      toast({
        title: "Majina yametengenezwa!",
        description: "Tumekutengenezea majina 10 ya biashara. Unaweza kuchagua linalokufaa."
      });
    }, 2000);
  };

  const handleFavorite = (name: string) => {
    if (favoriteNames.includes(name)) {
      setFavoriteNames(favoriteNames.filter(n => n !== name));
      toast({
        title: "Jina limeondolewa",
        description: `"${name}" limeondolewa kutoka kwenye vipendwa.`
      });
    } else {
      setFavoriteNames([...favoriteNames, name]);
      toast({
        title: "Jina limehifadhiwa",
        description: `"${name}" limehifadhiwa kwenye vipendwa vyako.`
      });
    }
  };

  const handleCopyName = (name: string) => {
    navigator.clipboard.writeText(name);
    toast({
      title: "Jina limenakiliwa!",
      description: `"${name}" limenakiliwaa kwenye clipboard yako.`
    });
  };

  const filteredFavorites = searchQuery 
    ? favoriteNames.filter(name => name.toLowerCase().includes(searchQuery.toLowerCase()))
    : favoriteNames;

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
                <Text className="mr-3 text-tz-blue" />
                Generator ya Majina ya Biashara
              </h1>
              <p className="text-gray-600 max-w-2xl">
                Pata majina ya biashara yanayovutia na yanayoweza kutambulika kirahisi kwenye soko!
              </p>
            </div>
          </div>
          
          <Tabs 
            defaultValue={activeTab} 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="space-y-4"
          >
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="generator">Generator ya Majina</TabsTrigger>
              <TabsTrigger value="favorites">Majina Uliyopenda</TabsTrigger>
            </TabsList>
            
            <TabsContent value="generator">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Tengeneza Majina ya Biashara</CardTitle>
                    <CardDescription>
                      Jaza taarifa za biashara yako ili kupata mapendekezo ya majina
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Aina ya Biashara</Label>
                      <Select 
                        value={businessCategory} 
                        onValueChange={setBusinessCategory}
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Chagua aina ya biashara" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessCategories.map(category => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Maelezo ya Biashara (Sio Lazima)</Label>
                      <Textarea
                        id="description"
                        placeholder="Elezea biashara yako kwa ufupi..."
                        value={businessDescription}
                        onChange={(e) => setBusinessDescription(e.target.value)}
                        rows={4}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="keywords">Maneno Muhimu (Tenganisha kwa koma)</Label>
                      <Input
                        id="keywords"
                        placeholder="Mfano: Afya, Asili, Tanzania..."
                        value={customWords}
                        onChange={(e) => setCustomWords(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleGenerateNames} 
                      className="w-full bg-tz-blue hover:bg-blue-600"
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Inatengeneza...
                        </>
                      ) : (
                        <>
                          <LightbulbIcon className="mr-2 h-4 w-4" />
                          Tengeneza Majina
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Majina Yaliyopendekezwa</CardTitle>
                    <CardDescription>
                      {generatedNames.length > 0 
                        ? "Chagua jina linalokufaa kutoka kwenye orodha hii" 
                        : "Majina yatatokea hapa baada ya kutengenezwa"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isGenerating ? (
                      <div className="flex flex-col items-center justify-center py-8">
                        <RefreshCw className="h-12 w-12 text-tz-blue animate-spin mb-4" />
                        <p className="text-gray-600">Tunaunda majina mazuri kwa biashara yako...</p>
                      </div>
                    ) : generatedNames.length > 0 ? (
                      <ScrollArea className="h-[320px] pr-4">
                        <div className="space-y-3">
                          {generatedNames.map((name, index) => (
                            <div 
                              key={index} 
                              className="p-3 border rounded-md hover:bg-blue-50 transition-colors flex justify-between items-center"
                            >
                              <div className="font-medium">{name}</div>
                              <div className="flex space-x-1">
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  onClick={() => handleCopyName(name)}
                                  className="h-8 w-8"
                                >
                                  <Copy size={16} />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  onClick={() => handleFavorite(name)}
                                  className={`h-8 w-8 ${favoriteNames.includes(name) ? 'text-yellow-500' : ''}`}
                                >
                                  <Star size={16} />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <LightbulbIcon className="h-16 w-16 text-gray-300 mb-4" />
                        <h3 className="text-lg font-medium text-gray-700 mb-2">Hakuna majina yaliyotengenezwa bado</h3>
                        <p className="text-gray-500 max-w-sm">
                          Jaza taarifa za biashara yako na ubonyeze kitufe cha "Tengeneza Majina" kupata mapendekezo.
                        </p>
                      </div>
                    )}
                  </CardContent>
                  {generatedNames.length > 0 && (
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        onClick={handleGenerateNames}
                        className="w-full"
                        disabled={isGenerating}
                      >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Tengeneza Majina Mengine
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="favorites">
              <Card>
                <CardHeader>
                  <CardTitle>Majina Uliyopenda</CardTitle>
                  <CardDescription>
                    Orodha ya majina uliyoyahifadhi kwa ajili ya kutumia baadaye
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        placeholder="Tafuta majina uliyohifadhi..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  {favoriteNames.length > 0 ? (
                    <div className="space-y-3">
                      {filteredFavorites.length > 0 ? (
                        filteredFavorites.map((name, index) => (
                          <div 
                            key={index} 
                            className="p-3 border rounded-md hover:bg-blue-50 transition-colors flex justify-between items-center"
                          >
                            <div className="font-medium">{name}</div>
                            <div className="flex space-x-1">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => handleCopyName(name)}
                                className="h-8 w-8"
                              >
                                <Copy size={16} />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => handleFavorite(name)}
                                className="h-8 w-8 text-yellow-500"
                              >
                                <Star size={16} />
                              </Button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-6">
                          <p className="text-gray-500">Hakuna jina linalofanana na utafutaji wako</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <Star className="h-16 w-16 text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-700 mb-2">Hakuna majina yaliyohifadhiwa</h3>
                      <p className="text-gray-500 max-w-sm">
                        Unapopata jina unalolipenda, bonyeza ikoni ya nyota kulihifadhi hapa.
                      </p>
                      <Button 
                        className="mt-4 bg-tz-blue hover:bg-blue-600"
                        onClick={() => setActiveTab('generator')}
                      >
                        Rudi kwenye Generator
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-tz-blue mb-4">Vidokezo vya Kuchagua Jina la Biashara</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Badge className="bg-tz-blue mb-2">Vidokezo #1</Badge>
                <h3 className="font-medium">Jina Rahisi na Linalokumbukika</h3>
                <p className="text-gray-700">
                  Chagua jina fupi na rahisi ambalo wateja watakumbuka kwa urahisi. Epuka kutumia maneno magumu.
                </p>
              </div>
              <div className="space-y-2">
                <Badge className="bg-tz-blue mb-2">Vidokezo #2</Badge>
                <h3 className="font-medium">Fikiria Ukuaji wa Baadaye</h3>
                <p className="text-gray-700">
                  Chagua jina ambalo litaendana na mipango yako ya baadaye ya kupanua biashara.
                </p>
              </div>
              <div className="space-y-2">
                <Badge className="bg-tz-blue mb-2">Vidokezo #3</Badge>
                <h3 className="font-medium">Hakikisha Jina Linapatikana</h3>
                <p className="text-gray-700">
                  Angalia kama jina hilo halitumiki na biashara nyingine na linaweza kusajiliwa rasmi.
                </p>
              </div>
              <div className="space-y-2">
                <Badge className="bg-tz-blue mb-2">Vidokezo #4</Badge>
                <h3 className="font-medium">Jina Lenye Maana</h3>
                <p className="text-gray-700">
                  Jina la biashara linaweza kuakisi huduma unazotoa au thamani za biashara yako.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NameGeneratorPage;
