
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Users, MessageSquare, Calendar, ThumbsUp, MessageCircle, Share2, Plus } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from "@/components/ui/use-toast";

// Mock data
const discussions = [
  {
    id: '1',
    title: 'Jinsi ya kupata mtaji wa kuanzia biashara ndogo',
    author: 'Maria Joseph',
    authorAvatar: '',
    date: '2 saa zilizopita',
    category: 'Mtaji na Fedha',
    replies: 15,
    likes: 24,
    content: 'Nimekuwa nikitafuta njia za kupata mtaji wa kuanza biashara yangu ya ufugaji kuku. Ni njia zipi zinazofaa zaidi kwa vijana?'
  },
  {
    id: '2',
    title: 'Changamoto za usajili wa biashara rasmi Tanzania',
    author: 'John Makundi',
    authorAvatar: '',
    date: 'Jana',
    category: 'Usajili wa Biashara',
    replies: 8,
    likes: 12,
    content: 'Naomba msaada kuhusu usajili wa biashara yangu. Nimepata changamoto kadhaa na ningependa kusikia uzoefu wa wengine.'
  },
  {
    id: '3',
    title: 'Masoko ya bidhaa za asili Tanzania',
    author: 'Sarah Thomas',
    authorAvatar: '',
    date: 'Siku 3 zilizopita',
    category: 'Masoko',
    replies: 22,
    likes: 35,
    content: 'Ninatengeneza sabuni ya asili na natafuta masoko zaidi. Kuna mapendekezo yoyote ya wapi ninaweza kuuza bidhaa zangu?'
  }
];

const events = [
  {
    id: '1',
    title: 'Kikao cha Wajasiriamali wa Dar es Salaam',
    date: '15 Juni, 2025',
    time: '10:00 - 14:00',
    location: 'Mlimani City Conference Center, Dar es Salaam',
    attendees: 45,
    description: 'Kikao cha wajasiriamali wote wa Dar es Salaam kujadili changamoto na fursa zilizopo katika sekta mbalimbali.'
  },
  {
    id: '2',
    title: 'Mafunzo ya Masoko Mtandaoni',
    date: '22 Juni, 2025',
    time: '14:00 - 16:00',
    location: 'Online (Zoom)',
    attendees: 120,
    description: 'Mafunzo ya jinsi ya kutumia mitandao ya kijamii kuuza bidhaa na huduma zako.'
  },
  {
    id: '3',
    title: 'Workshop ya Usimamizi wa Fedha',
    date: '30 Juni, 2025',
    time: '09:00 - 13:00',
    location: 'Diamond Jubilee Hall, Arusha',
    attendees: 30,
    description: 'Workshop ya jinsi ya kusimamia fedha katika biashara ndogo na za kati.'
  }
];

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const { user } = useAuth();
  const { toast } = useToast();
  
  const handleNewPost = () => {
    toast({
      title: "Unatengeneza chapisho jipya",
      description: "Kipengele hiki kitakuwa tayari hivi karibuni.",
    });
  };
  
  const handleJoinEvent = () => {
    toast({
      title: "Umejisajili kwa tukio",
      description: "Utapokea barua pepe yenye maelezo zaidi kuhusu tukio hili.",
    });
  };
  
  const handleLike = (id: string) => {
    toast({
      title: "Umependa chapisho",
      description: "Asante kwa kushiriki maoni yako.",
    });
  };
  
  const handleComment = (id: string) => {
    toast({
      title: "Unatuma maoni",
      description: "Kipengele hiki kitakuwa tayari hivi karibuni.",
    });
  };
  
  const handleShare = (id: string) => {
    toast({
      title: "Unashiriki chapisho",
      description: "Kipengele hiki kitakuwa tayari hivi karibuni.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Jamii ya Wajasiriamali</h1>
              <p className="text-gray-600 max-w-2xl">
                Karibu kwenye jukwaa la jamii la Biashara Yangu! Hapa unaweza kujadili, kuuliza maswali, na kujifunza kutoka kwa wajasiriamali wengine.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Button onClick={handleNewPost} className="bg-tz-blue hover:bg-blue-600">
                <Plus size={16} className="mr-1" />
                Andika Chapisho Jipya
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full md:w-auto grid-cols-2">
              <TabsTrigger value="discussions" className="flex space-x-2">
                <MessageSquare size={16} />
                <span>Majadiliano</span>
              </TabsTrigger>
              <TabsTrigger value="events" className="flex space-x-2">
                <Calendar size={16} />
                <span>Matukio</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Main content area */}
              <div className="lg:col-span-3">
                <TabsContent value="discussions" className="space-y-4">
                  <div className="flex space-x-2 mb-4">
                    <Input 
                      placeholder="Tafuta majadiliano..."
                      className="max-w-md"
                    />
                    <Button variant="outline">Tafuta</Button>
                  </div>
                  
                  {discussions.map(discussion => (
                    <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {discussion.category}
                          </Badge>
                          <span className="text-sm text-gray-500">{discussion.date}</span>
                        </div>
                        <CardTitle className="text-xl mt-2 text-tz-blue hover:text-blue-700">
                          {discussion.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{discussion.content}</p>
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={discussion.authorAvatar} />
                            <AvatarFallback className="bg-blue-100 text-blue-700">
                              {discussion.author.split(' ').map(name => name[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{discussion.author}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4 flex justify-between">
                        <div className="flex space-x-4">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-gray-600 hover:text-tz-blue"
                            onClick={() => handleLike(discussion.id)}
                          >
                            <ThumbsUp size={16} className="mr-1" />
                            <span>{discussion.likes}</span>
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-gray-600 hover:text-tz-blue"
                            onClick={() => handleComment(discussion.id)}
                          >
                            <MessageCircle size={16} className="mr-1" />
                            <span>{discussion.replies}</span>
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-gray-600 hover:text-tz-blue"
                            onClick={() => handleShare(discussion.id)}
                          >
                            <Share2 size={16} className="mr-1" />
                            <span>Shiriki</span>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                  
                  <div className="flex justify-center mt-6">
                    <Button variant="outline">Onyesha Zaidi</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="events" className="space-y-4">
                  <div className="flex space-x-2 mb-4">
                    <Input 
                      placeholder="Tafuta matukio..."
                      className="max-w-md"
                    />
                    <Button variant="outline">Tafuta</Button>
                  </div>
                  
                  {events.map(event => (
                    <Card key={event.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl text-tz-blue">{event.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2 text-gray-500" />
                            <span>{event.date}, {event.time}</span>
                          </div>
                          <div className="mt-1 text-gray-600">{event.location}</div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-2">{event.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Users size={16} className="mr-1" />
                          <span>{event.attendees} wamejisajili</span>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <Button className="bg-tz-green hover:bg-green-600" onClick={handleJoinEvent}>
                          Jiunge na Tukio
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Taarifa Zako</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-blue-100 text-blue-700">
                          {user?.name ? user.name.split(' ').map(name => name[0]).join('') : 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm border-t border-b py-2 my-2">
                      <span>Chapisho Zangu:</span>
                      <span className="font-semibold">0</span>
                    </div>
                    <div className="flex justify-between text-sm border-b py-2 mb-2">
                      <span>Matukio Yangu:</span>
                      <span className="font-semibold">0</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Vikundi Maarufu</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Wafanyabiashara Chipukizi</span>
                      <Badge>Watu 245</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Biashara za Kilimo</span>
                      <Badge>Watu 189</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Wajasiriamali wa Teknolojia</span>
                      <Badge>Watu 156</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Biashara za Online</span>
                      <Badge>Watu 134</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-tz-blue">
                      Onyesha Vikundi Vyote
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Matukio Yanayokuja</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium">Workshop ya Biashara Digital</p>
                      <p className="text-sm text-gray-500">Juni 15, 2025</p>
                    </div>
                    <div>
                      <p className="font-medium">Kongamano la Biashara Tanzania</p>
                      <p className="text-sm text-gray-500">Julai 3-5, 2025</p>
                    </div>
                    <div>
                      <p className="font-medium">Mkutano wa Wakulima Mbeya</p>
                      <p className="text-sm text-gray-500">Julai 22, 2025</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-tz-blue">
                      Onyesha Matukio Yote
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CommunityPage;
