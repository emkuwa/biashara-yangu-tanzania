
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowRight, Book, Briefcase, FileText, MessageSquare, Users, Text, Wallet, Share2, Globe, Award } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Index = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-pattern py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tz-green via-tz-blue to-tz-green bg-clip-text text-transparent">
              Anza Biashara Yako Tanzania
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Pata mawazo, miongozo, na rasilimali unazohitaji kuanza na kukuza biashara yako nchini Tanzania.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-tz-green hover:bg-green-600 text-white font-medium text-lg px-6 py-5 rounded-md">
                <Link to="/biashara">Tazama Mawazo ya Biashara</Link>
              </Button>
              <Button asChild variant="outline" className="border-tz-blue text-tz-blue hover:bg-blue-50 font-medium text-lg px-6 py-5 rounded-md">
                <Link to={isAuthenticated ? "/chatbot" : "/sajili"}>Pata Ushauri wa Biashara</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Feature Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Tunatoa Nini</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Business Ideas Card */}
              <Card className="hover:shadow-lg transition-shadow">
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
              <Card className="hover:shadow-lg transition-shadow">
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
              <Card className="hover:shadow-lg transition-shadow">
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
              <Card className="hover:shadow-lg transition-shadow">
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
              <Card className="hover:shadow-lg transition-shadow">
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
              <Card className="hover:shadow-lg transition-shadow">
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
              <Card className="hover:shadow-lg transition-shadow">
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
              <Card className="hover:shadow-lg transition-shadow">
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
              <Card className="hover:shadow-lg transition-shadow">
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
              <Card className="hover:shadow-lg transition-shadow">
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
              <Card className="hover:shadow-lg transition-shadow">
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
