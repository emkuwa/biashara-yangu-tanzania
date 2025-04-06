
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, Book, Briefcase, FileText, MessageSquare, Users, Text, 
  Wallet, Share2, Globe, Award, FileCheck, Scale, ExternalLink, ShoppingCart
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import WebsiteLinkCard from '@/components/WebsiteLinkCard';

const Index = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section with Background Image - UPDATED with the new image */}
        <section className="py-16 md:py-24 bg-cover bg-center relative" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url("/lovable-uploads/9263e474-5f45-4507-a89b-02f1e74607b3.png")', 
            height: '600px',
            backgroundPosition: 'center 30%'
          }}>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Anzisha Biashara Yako Tanzania
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
              Pata mawazo, miongozo, na rasilimali unazohitaji kuanza na kukuza biashara yako nchini Tanzania.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-tz-green hover:bg-green-600 text-white font-medium text-lg px-6 py-5 rounded-md">
                <Link to="/biashara">Tazama Mawazo ya Biashara</Link>
              </Button>
              <Button asChild className="border-white bg-transparent text-white hover:bg-white hover:text-tz-blue font-medium text-lg px-6 py-5 rounded-md">
                <Link to={isAuthenticated ? "/chatbot" : "/sajili"}>Pata Ushauri wa Biashara</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Carousel Section - UPDATED with better images */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Mafanikio ya Wajasiriamali</h2>
            
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    <Card className="overflow-hidden">
                      <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">Maria Joseph</h3>
                        <p className="text-gray-600">Mkulima wa Kilimo cha Kisasa - Arusha</p>
                        <p className="mt-4">"Kupitia rasilimali za Biashara Yangu, nimeweza kubadilisha kilimo changu kuwa cha kisasa na kupata masoko bora."</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    <Card className="overflow-hidden">
                      <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">John Mbwambo</h3>
                        <p className="text-gray-600">Mwanzilishi wa Tech Startup - Dar es Salaam</p>
                        <p className="mt-4">"Mafunzo ya biashara mtandaoni yamenisaidia kupata wateja wa kimataifa na kukuza biashara yangu."</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    <Card className="overflow-hidden">
                      <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/6551401/pexels-photo-6551401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">Rehema Salim</h3>
                        <p className="text-gray-600">Mjasiriamali wa Nguo - Mwanza</p>
                        <p className="mt-4">"Kupitia ushauri wa biashara, nimeweza kupata mikopo na kuongeza wafanyakazi wangu kutoka 2 hadi 15 katika miezi 6 tu."</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </section>
        
        {/* Feature Cards - UPDATED with images for each service */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Huduma Zetu</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Business Ideas Card */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/8867443/pexels-photo-8867443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="text-tz-green" size={24} />
                  </div>
                  <CardTitle>Mawazo ya Biashara</CardTitle>
                  <CardDescription>Pata mawazo 100+ ya biashara zinazofaa kwa mazingira ya Tanzania</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Tumekusanya mawazo mengi ya biashara zinazoweza kuanzishwa Tanzania pamoja na maelezo ya mtaji unaohitajika, jinsi ya kuanza, na matarajio ya faida.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-tz-green hover:text-tz-green hover:bg-green-50 p-0 flex items-center">
                    <Link to="/biashara" className="flex items-center">
                      <span>Angalia Mawazo ya Biashara</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Community Card */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-tz-blue" size={24} />
                  </div>
                  <CardTitle>Jamii ya Wajasiriamali</CardTitle>
                  <CardDescription>Unganika na wajasiriamali wengine kubadilishana mawazo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Jukwaa letu la jamii linakupa nafasi ya kushiriki uzoefu wako, kuuliza maswali, na kujifunza kutoka kwa wajasiriamali wengine Tanzania kupitia forums, group chats na vikundi vya WhatsApp/Facebook.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-tz-blue hover:text-tz-blue hover:bg-blue-50 p-0 flex items-center">
                    <Link to={isAuthenticated ? "/jamii" : "/sajili"} className="flex items-center">
                      <span>Jiunge na Jamii</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Training Card */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/8867238/pexels-photo-8867238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Book className="text-tz-gold" size={24} />
                  </div>
                  <CardTitle>Mafunzo na Rasilimali</CardTitle>
                  <CardDescription>Jifunze jinsi ya kuendesha biashara yako kwa ufanisi</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Pata mafunzo, makala, na video zenye maelezo ya jinsi ya kuendesha biashara, kutengeneza bajeti, kodi, masoko, na zaidi.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-tz-gold hover:text-tz-gold hover:bg-yellow-50 p-0 flex items-center">
                    <Link to={isAuthenticated ? "/mafunzo" : "/sajili"} className="flex items-center">
                      <span>Angalia Mafunzo na Rasilimali</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {/* Chatbot Card */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/8438923/pexels-photo-8438923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="text-purple-600" size={24} />
                  </div>
                  <CardTitle>Chatbot wa Ushauri</CardTitle>
                  <CardDescription>Pata majibu ya maswali yako ya biashara kwa haraka</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Chatbot wetu wa AI itatoa ushauri wa kibiashara kama vile jinsi ya kushughulikia changamoto za biashara, maswala ya kodi, na uongozi.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-purple-600 hover:text-purple-600 hover:bg-purple-50 p-0 flex items-center">
                    <Link to={isAuthenticated ? "/chatbot" : "/sajili"} className="flex items-center">
                      <span>Pata Ushauri wa Biashara</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Name Generator Card */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Text className="text-pink-600" size={24} />
                  </div>
                  <CardTitle>Generator ya Majina</CardTitle>
                  <CardDescription>Pata jina linalovutia na linaloweza kutambulika kirahisi</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Programu yetu itatoa orodha ya majina ya biashara kulingana na sekta ya biashara unayotaka kuanzisha. Jina zuri ni muhimu kwa biashara yako!
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-pink-600 hover:text-pink-600 hover:bg-pink-50 p-0 flex items-center">
                    <Link to={isAuthenticated ? "/jina" : "/sajili"} className="flex items-center">
                      <span>Tengeneza Jina la Biashara</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Registration Card */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/8867229/pexels-photo-8867229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <FileText className="text-red-600" size={24} />
                  </div>
                  <CardTitle>Jisajili Leo</CardTitle>
                  <CardDescription>Pata huduma zote za kipekee bila malipo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Jiunge na Biashara Yangu kupata huduma zote, ikiwemo mipango ya biashara, majadiliano na wajasiriamali wengine, na mafunzo ya kipekee.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-red-600 hover:text-red-600 hover:bg-red-50 p-0 flex items-center">
                    <Link to="/sajili" className="flex items-center">
                      <span>Jisajili Sasa</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* New Features Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {/* Social Media Integration Card */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/6953806/pexels-photo-6953806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Share2 className="text-green-600" size={24} />
                  </div>
                  <CardTitle>Ushirikiano wa Mitandao ya Kijamii</CardTitle>
                  <CardDescription>Tangaza biashara yako na unganisha na wateja</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Jifunze kutumia WhatsApp, Instagram, na Facebook kwa ufanisi ili kufikia wateja zaidi na kutangaza bidhaa na huduma zako.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-green-600 hover:text-green-600 hover:bg-green-50 p-0 flex items-center">
                    <Link to={isAuthenticated ? "/mitandao" : "/sajili"} className="flex items-center">
                      <span>Jifunze Zaidi</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Online Business Card */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/8093275/pexels-photo-8093275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Globe className="text-blue-600" size={24} />
                  </div>
                  <CardTitle>Fursa za Biashara Mtandaoni</CardTitle>
                  <CardDescription>Anza biashara mtandaoni na e-commerce</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Pata mwongozo wa kuanzisha biashara ya e-commerce kupitia Jumia, Shopify, au freelancing kupitia Fiverr na Upwork.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-600 hover:bg-blue-50 p-0 flex items-center">
                    <Link to={isAuthenticated ? "/biashara-mtandaoni" : "/sajili"} className="flex items-center">
                      <span>Jifunze Zaidi</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Financial Management Card */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/7593693/pexels-photo-7593693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Wallet className="text-yellow-600" size={24} />
                  </div>
                  <CardTitle>Usimamizi wa Fedha na Mikopo</CardTitle>
                  <CardDescription>Jifunze kupanga na kusimamia fedha za biashara</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Pata mafunzo ya bajeti, usimamizi wa fedha, na taarifa muhimu kuhusu mikopo na misaada kwa vijana wajasiriamali.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-yellow-600 hover:text-yellow-600 hover:bg-yellow-50 p-0 flex items-center">
                    <Link to={isAuthenticated ? "/fedha" : "/sajili"} className="flex items-center">
                      <span>Jifunze Zaidi</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Final Features Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
              {/* Digital Skills Card */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <FileText className="text-purple-600" size={24} />
                  </div>
                  <CardTitle>Mafunzo ya Kazi za Kidijitali</CardTitle>
                  <CardDescription>Jifunze ujuzi wa kidijitali kwa biashara ya kisasa</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Pata video na makala kuhusu biashara mtandaoni, affiliate marketing, content creation, na matumizi ya Google/Facebook Ads.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-purple-600 hover:text-purple-600 hover:bg-purple-50 p-0 flex items-center">
                    <Link to={isAuthenticated ? "/ujuzi-kidijitali" : "/sajili"} className="flex items-center">
                      <span>Jifunze Zaidi</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Gamification Card */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/7821874/pexels-photo-7821874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Award className="text-pink-600" size={24} />
                  </div>
                  <CardTitle>Motisha na Ushindani</CardTitle>
                  <CardDescription>Shiriki changamoto na shindana kupata tuzo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Shiriki changamoto za biashara, mashindano ya ujasiriamali, na pata pointi za motisha kwa kukamilisha malengo ya biashara yako.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-pink-600 hover:text-pink-600 hover:bg-pink-50 p-0 flex items-center">
                    <Link to={isAuthenticated ? "/changamoto" : "/sajili"} className="flex items-center">
                      <span>Shiriki Sasa</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Wholesale Market Section */}
        <section className="py-16 bg-white border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Masoko ya Bidhaa za Jumla</h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Tazama orodha ya wazalishaji na wasambazaji wakubwa wa bidhaa mbalimbali nchini Tanzania
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <CardTitle>Vifaa vya Ujenzi</CardTitle>
                  <CardDescription>Saruji, nondo, mbao, matofali na zaidi</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Twiga Cement - Bei nafuu kwa wanunuzi wa jumla</li>
                    <li>Dangote Cement - Usafirishaji bure kwa zaidi ya mifuko 100</li>
                    <li>Nyumba Bora Hardware - Vifaa vyote vya ujenzi mahali pamoja</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Wasiliana Nao</Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/6201723/pexels-photo-6201723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <CardTitle>Bidhaa za Kilimo</CardTitle>
                  <CardDescription>Mbegu, mbolea, madawa na zana za kilimo</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Balton Tanzania - Mbegu bora za mazao mbalimbali</li>
                    <li>Yara Tanzania - Mbolea na ushauri wa kitaalamu</li>
                    <li>ETG Inputs - Bei nafuu kwa vikundi vya wakulima</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Wasiliana Nao</Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/7871181/pexels-photo-7871181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                <CardHeader>
                  <CardTitle>Bidhaa za Rejareja</CardTitle>
                  <CardDescription>Vyakula, vinywaji, vipodozi na zaidi</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Njombe Food Supplies - Chakula cha kiwanda kwa rejareja</li>
                    <li>Beauty Plus - Vipodozi na bidhaa za usafi kwa jumla</li>
                    <li>Dar Wholesale Market - Kituo kikuu cha bidhaa za rejareja</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Wasiliana Nao</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Advertising Section */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Matangazo ya Wadau</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sponsored Ad 1 */}
              <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-tz-blue">NMB Bank</CardTitle>
                    <Badge className="bg-yellow-500 text-white">Mdhamini</Badge>
                  </div>
                  <CardDescription>Mikopo ya Biashara</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="h-32 bg-cover bg-center rounded-md mb-4" style={{backgroundImage: "url('https://images.pexels.com/photos/7821875/pexels-photo-7821875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                  <p className="text-gray-700 text-sm">
                    Pata mikopo nafuu kwa biashara ndogo na za kati kupitia NMB. Tunatoa riba ndogo na muda mrefu wa malipo.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-tz-blue hover:bg-blue-700">Wasiliana Nao</Button>
                </CardFooter>
              </Card>
              
              {/* Sponsored Ad 2 */}
              <Card className="bg-gradient-to-br from-green-50 to-white border-green-200 hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-tz-green">Vodacom Tanzania</CardTitle>
                    <Badge className="bg-yellow-500 text-white">Mdhamini</Badge>
                  </div>
                  <CardDescription>M-Pesa kwa Biashara</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="h-32 bg-cover bg-center rounded-md mb-4" style={{backgroundImage: "url('https://images.pexels.com/photos/7821873/pexels-photo-7821873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                  <p className="text-gray-700 text-sm">
                    Rahisisha malipo ya biashara yako na M-Pesa Biashara. Pokea malipo, lipa wafanyakazi na wauzaji bila adha.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-tz-green hover:bg-green-700">Jisajili Sasa</Button>
                </CardFooter>
              </Card>
              
              {/* Sponsored Ad 3 */}
              <Card className="bg-gradient-to-br from-orange-50 to-white border-orange-200 hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-orange-600">TIB Development Bank</CardTitle>
                    <Badge className="bg-yellow-500 text-white">Mdhamini</Badge>
                  </div>
                  <CardDescription>Mikopo ya Maendeleo</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="h-32 bg-cover bg-center rounded-md mb-4" style={{backgroundImage: "url('https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
                  <p className="text-gray-700 text-sm">
                    TIB inatoa mikopo ya muda mrefu kwa vijana wajasiriamali. Riba nafuu na masharti nafuu kwa biashara zinazoanza.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Tuma Maombi</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Important Links Section - Using WebsiteLinkCard */}
        <section className="py-12 bg-white border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Tovuti Muhimu</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <WebsiteLinkCard 
                title="BRELA"
                description="Sajili biashara yako, kampuni au leseni ya biashara kupitia BRELA."
                url="https://www.brela.go.tz"
                icon={FileCheck}
                iconColor="text-tz-blue"
              />
              
              <WebsiteLinkCard 
                title="TRA"
                description="Taarifa kuhusu kodi, TIN na masuala mengine ya kikodi kwa biashara."
                url="https://www.tra.go.tz"
                icon={Scale}
                iconColor="text-tz-green"
              />
              
              <WebsiteLinkCard 
                title="NEEC"
                description="Baraza la Taifa la Uwezeshaji Wananchi Kiuchumi - mafunzo na mikopo."
                url="https://www.neec.go.tz"
                icon={Wallet}
                iconColor="text-tz-gold"
              />
              
              <WebsiteLinkCard 
                title="SIDO"
                description="Shirika la Kuhudumia Viwanda Vidogo Tanzania - usaidizi kwa wajasiriamali."
                url="https://www.sido.go.tz"
                icon={ShoppingCart}
                iconColor="text-purple-600"
              />
            </div>
          </div>
        </section>
        
        {/* Legal Procedures Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Taratibu za Kisheria za Kusajili Biashara Tanzania</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileCheck className="text-tz-green mr-3" size={24} />
                  Hatua za Usajili wa Biashara
                </h3>
                <ol className="space-y-3 list-decimal pl-6">
                  <li className="text-gray-700">
                    <span className="font-medium text-gray-800">Usajili wa Jina la Biashara:</span> Sajili jina la biashara yako kupitia BRELA (Business Registrations and Licensing Agency).
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-gray-800">Usajili wa Biashara/Kampuni:</span> Kusajili biashara yako kama biashara binafsi, ubia, kampuni, au ushirika.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-gray-800">Namba ya Mlipa Kodi (TIN):</span> Kuomba namba ya mlipa kodi kutoka Mamlaka ya Mapato Tanzania (TRA).
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-gray-800">Leseni ya Biashara:</span> Kupata leseni ya biashara kutoka serikali za mitaa au wizara husika.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-gray-800">Leseni za Sekta:</span> Baadhi ya biashara zinahitaji leseni maalum kutoka mamlaka za sekta (kama vile TFDA, EWURA, TCRA, n.k.).
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-gray-800">Usajili wa VAT:</span> Iwapo mzunguko wa biashara ni zaidi ya kiasi kilichowekwa kisheria, utahitaji kusajili kwa VAT.
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Scale className="text-tz-blue mr-3" size={24} />
                  Umuhimu wa Usajili wa Kisheria
                </h3>
                <ul className="space-y-3 list-disc pl-6">
                  <li className="text-gray-700">
                    <span className="font-medium text-gray-800">Ulinzi wa Kisheria:</span> Biashara iliyosajiliwa inapata ulinzi wa kisheria na inaweza kutetea haki zake mahakamani.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-gray-800">Kujenga Uaminifu:</span> Wateja na washirika wa biashara huwa na imani zaidi na biashara zilizosajiliwa.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-gray-800">Ufikiaji wa Mikopo:</span> Biashara iliyosajiliwa ina uwezo mkubwa wa kupata mikopo na ufadhili.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-gray-800">Kuepuka Faini na Adhabu:</span> Usajili husaidia kuepuka faini na adhabu zinazoweza kutolewa kwa biashara zisizosajiliwa.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-gray-800">Uwezekano wa Kukua:</span> Biashara iliyosajiliwa ina nafasi kubwa ya kukua, kupanuka, na kuajiri wafanyakazi.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-gray-800">Fursa za Serikali:</span> Kuwezesha ushiriki katika zabuni za serikali na fursa za kibiashara.
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild className="bg-tz-blue hover:bg-blue-600 text-white">
                <Link to={isAuthenticated ? "/msaada-kisheria" : "/sajili"}>Pata Usaidizi wa Usajili wa Biashara</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-tz-blue to-tz-green py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Uko tayari kuanza safari yako ya biashara?
            </h2>
            <p className="text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Tuchague kama mwenza wako katika safari ya biashara. Tunaahidi kukupatia taarifa sahihi, rasilimali na usaidizi unaohitaji kufanikiwa.
            </p>
            <Button asChild className="bg-white text-tz-blue hover:bg-gray-100 font-medium text-lg px-6 py-5 rounded-md">
              <Link to="/sajili">Anza Sasa</Link>
            </Button>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">Wajasiriamali Wanasema...</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-700 mb-4 italic">
                  "Nimeweza kuanzisha biashara yangu ya kilimo kutokana na mwongozo niliopata hapa. Rasilimali zilizopo ni za manufaa sana."
                </p>
                <p className="font-semibold">- Maria J, Arusha</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-700 mb-4 italic">
                  "Mpango wa biashara nilioutengeneza kupitia tovuti hii ulinisaidia kupata mkopo kutoka benki. Nashukuru sana!"
                </p>
                <p className="font-semibold">- John M, Dar es Salaam</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-700 mb-4 italic">
                  "Mafunzo ya usimamizi wa fedha yameniwezesha kusimamia biashara yangu vizuri zaidi na kuongeza faida."
                </p>
                <p className="font-semibold">- Sarah T, Mwanza</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
