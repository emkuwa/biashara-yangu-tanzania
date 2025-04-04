import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowRight, Book, Briefcase, FileText, Info } from 'lucide-react';

const Index = () => {
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
                <Link to="/mpango">Tengeneza Mpango wa Biashara</Link>
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
              
              {/* Business Plan Card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <FileText className="text-tz-blue" size={24} />
                  </div>
                  <CardTitle>Mpango wa Biashara</CardTitle>
                  <CardDescription>Tengeneza mpango wa biashara bora na wa kitaalamu</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Tumia zana yetu ya kutengeneza mpango wa biashara kuandaa mpango unaokidhi viwango vya benki na wawekezaji. Jaza tu taarifa na sisi tutatoa mpango mzuri.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-tz-blue hover:text-tz-blue hover:bg-blue-50 p-0 flex items-center">
                    <Link to="/mpango" className="flex items-center">
                      <span>Tengeneza Mpango wa Biashara</span>
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
                    <Link to="/mafunzo" className="flex items-center">
                      <span>Angalia Mafunzo na Rasilimali</span>
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
              <Link to="/biashara">Anza Sasa</Link>
            </Button>
          </div>
        </section>
        
        {/* Testimonials (Placeholder) */}
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
