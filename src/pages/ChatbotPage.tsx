
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Send, Bot, User, HelpCircle, BookOpen, Calculator, PieChart } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

// Mock suggested questions
const suggestedQuestions = [
  "Ninawezaje kuanza biashara bila mtaji mkubwa?",
  "Kodi gani ninapaswa kulipa kwa biashara ndogo?",
  "Njia bora za kutafuta wateja wa kwanza?",
  "Jinsi ya kutengeneza mpango wa biashara?",
];

// Mock responses from the chatbot
const mockResponses: Record<string, string> = {
  "Ninawezaje kuanza biashara bila mtaji mkubwa?": 
    "Kuanza biashara bila mtaji mkubwa kunawezekana kwa kufuata mikakati hii:\n\n" +
    "1. Anza na biashara inayohitaji mtaji mdogo kama vile huduma za ushauri, uchoraji, uuzaji wa bidhaa mtandaoni, n.k.\n\n" +
    "2. Tumia mfumo wa 'drop shipping' ambapo haupaswi kununua bidhaa mpaka mteja aagize.\n\n" +
    "3. Tafuta wabia wanaoweza kuwekeza fedha wakati wewe unaweka ujuzi na muda.\n\n" +
    "4. Omba mikopo midogo midogo kutoka taasisi za fedha kama VICOBA, SACCOS, au programu za serikali za kuwezesha vijana.\n\n" +
    "5. Anza kwa kutumia rasilimali zilizopo kama vile kompyuta, simu, au ujuzi ulio nao.\n\n" +
    "Kumbuka kwamba mafanikio yanategemea zaidi mpango thabiti wa biashara kuliko kiasi cha mtaji ulionao mwanzoni.",
  
  "Kodi gani ninapaswa kulipa kwa biashara ndogo?": 
    "Kwa biashara ndogo nchini Tanzania, kodi zinazolipwa hutegemea aina ya biashara, ukubwa wake, na mapato yake. Hizi ni baadhi ya kodi kuu:\n\n" +
    "1. Kodi ya Mapato (Income Tax) - Inategemea faida unayopata. Kwa biashara ndogo, kiwango cha chini ni 3% ya mauzo kwa wenye leseni za biashara ndogo.\n\n" +
    "2. Kodi ya Ongezeko la Thamani (VAT) - Inahitajika ikiwa mauzo yako yanazidi shilingi milioni 100 kwa mwaka.\n\n" +
    "3. Ushuru wa Bidhaa (Excise Duty) - Kwa biashara zinazouza bidhaa kama vile vinywaji, sigara, n.k.\n\n" +
    "4. Ushuru wa Huduma (Service Levy) - Hutozwa na halmashauri za mitaa, kiwango cha 0.3% ya mauzo.\n\n" +
    "5. Kodi ya Majengo (Property Tax) - Ikiwa biashara iko kwenye jengo lako.\n\n" +
    "Nakushauri usajili biashara yako rasmi na TRA ili upate TIN na upate ushauri sahihi kuhusu kodi zinazokuhusu haswa.",
  
  "Njia bora za kutafuta wateja wa kwanza?": 
    "Kupata wateja wa kwanza ni muhimu sana kwa biashara yoyote mpya. Hizi ni njia bora unazoweza kutumia:\n\n" +
    "1. Mitandao ya Kijamii - Tengeneza kurasa za biashara yako kwenye Facebook, Instagram, na TikTok. Shiriki maudhui yanayovutia yanayoonyesha bidhaa/huduma zako.\n\n" +
    "2. Marafiki na Jamaa - Waombe marafiki na jamaa kuwa wateja wako wa kwanza na kukusaidia kueneza habari.\n\n" +
    "3. Tolea Sampuli Bure au Punguzo - Wape wateja watarajiwa sampuli bure au bei ya uanzishaji ili wajaribu bidhaa zako.\n\n" +
    "4. Shirikiana na Biashara Nyingine - Tafuta biashara zinazokamilishana na yako na mshirikiane.\n\n" +
    "5. Fungua Tovuti - Iwe rahisi kwa wateja kukupata mtandaoni kupitia tovuti rahisi.\n\n" +
    "6. Shiriki kwenye Matukio ya Jamii - Hudhuria maonesho ya biashara, masoko, au matukio yanayohusiana na biashara yako.\n\n" +
    "7. Huduma Bora - Hakikisha wateja wa kwanza wanapata huduma bora ili wakusifie kwa wengine.",
  
  "Jinsi ya kutengeneza mpango wa biashara?": 
    "Mpango wa biashara ni hati muhimu inayoelezea malengo, mikakati, na matarajio ya kifedha ya biashara yako. Hapa kuna hatua za kutengeneza mpango wa biashara:\n\n" +
    "1. Muhtasari wa Mtendaji - Maelezo mafupi ya biashara yako, lengo lake, na maono yako.\n\n" +
    "2. Maelezo ya Biashara - Elezea bidhaa au huduma zako, soko unalolenga, na jinsi biashara yako itakavyofanya kazi.\n\n" +
    "3. Uchambuzi wa Soko - Onesha utafiti wako kuhusu wateja wanaolengwa, washindani, na fursa zilizopo sokoni.\n\n" +
    "4. Mpango wa Uendeshaji - Elezea jinsi biashara itakavyoendeshwa kila siku, ikijumuisha wafanyakazi, vifaa, na mchakato wa uzalishaji.\n\n" +
    "5. Mpango wa Masoko - Onesha mikakati ya kutangaza na kuuza bidhaa au huduma zako.\n\n" +
    "6. Mpango wa Fedha - Jumuisha makisio ya mapato, gharama, na mtiririko wa fedha kwa miaka 3-5 ijayo.\n\n" +
    "7. Viambatisho - Ongeza nyaraka zozote za ziada kama vile muundo wa shirika, wasifu wa wasimamizi, n.k.\n\n" +
    "Kama unahitaji kusaidiwa zaidi, unaweza kutumia dodoso letu la mpango wa biashara kwenye tovuti hii.",
};

// Default initial messages
const initialMessages: MessageType[] = [
  {
    id: '1',
    content: "Habari! Mimi ni Mshauri wa Biashara, robotchat wako wa AI. Ninaweza kukusaidia kujibu maswali yako kuhusu biashara, kodi, uongozi, na zaidi. Unaweza kuuliza swali lolote!",
    sender: 'bot',
    timestamp: new Date()
  }
];

const ChatbotPage = () => {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response with delay
    setTimeout(() => {
      let responseContent = "";
      
      // Check if there's a predefined response
      for (const [question, answer] of Object.entries(mockResponses)) {
        if (inputMessage.toLowerCase().includes(question.toLowerCase().substring(0, 10))) {
          responseContent = answer;
          break;
        }
      }
      
      // Default response if no match found
      if (!responseContent) {
        responseContent = "Asante kwa swali lako. Hili ni swali zuri ambalo litahitaji uchambuzi zaidi. " +
          "Kipengele cha AI kinaendelea kuboresha. Tafadhali jaribu moja ya maswali yaliyopendekezwa, " +
          "au nita kukupatia jibu kamili hivi karibuni.";
      }

      const botMessage: MessageType = {
        id: Date.now().toString(),
        content: responseContent,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
    
    // Focus on input after selecting a question
    const inputElement = document.getElementById('chat-input');
    if (inputElement) {
      inputElement.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getMessageTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bot className="mr-2 text-tz-blue" />
                    Mshauri wa Biashara
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <HelpCircle size={16} className="mr-1 text-tz-blue" />
                      Maswali Yaliyopendekezwa
                    </h3>
                    <div className="space-y-2">
                      {suggestedQuestions.map((question, index) => (
                        <Button 
                          key={index} 
                          variant="outline" 
                          className="w-full justify-start text-left h-auto py-2 text-sm"
                          onClick={() => handleSuggestedQuestion(question)}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <BookOpen size={16} className="mr-1 text-tz-blue" />
                      Mada Maarufu
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer bg-blue-50 hover:bg-blue-100">Mtaji</Badge>
                      <Badge variant="outline" className="cursor-pointer bg-blue-50 hover:bg-blue-100">Kodi</Badge>
                      <Badge variant="outline" className="cursor-pointer bg-blue-50 hover:bg-blue-100">Masoko</Badge>
                      <Badge variant="outline" className="cursor-pointer bg-blue-50 hover:bg-blue-100">Usajili</Badge>
                      <Badge variant="outline" className="cursor-pointer bg-blue-50 hover:bg-blue-100">Usimamizi</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <Calculator size={16} className="mr-1 text-tz-blue" />
                      Zana za Hesabu
                    </h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start text-left">Hesabu ya Faida</Button>
                      <Button variant="outline" className="w-full justify-start text-left">Hesabu ya Kodi</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <PieChart size={16} className="mr-1 text-tz-blue" />
                      Takwimu za Biashara
                    </h3>
                    <p className="text-sm text-gray-600">
                      Pata takwimu muhimu za biashara nchini Tanzania kwa kubofya hapa
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Chat Area */}
            <div className="md:col-span-3">
              <Card className="h-[80vh] flex flex-col">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center">
                    <Bot className="mr-2 text-tz-blue" size={20} />
                    Gumzo na Mshauri wa Biashara
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow overflow-y-auto p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`flex items-start max-w-[80%] ${
                            message.sender === 'user' 
                              ? 'bg-tz-blue text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg' 
                              : 'bg-gray-100 text-gray-800 rounded-tl-lg rounded-tr-lg rounded-br-lg'
                          } p-3 shadow-sm`}
                        >
                          {message.sender === 'bot' && (
                            <Avatar className="h-8 w-8 mr-2 mt-1">
                              <AvatarFallback className="bg-white text-tz-blue border border-blue-200">
                                <Bot size={16} />
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <div className="whitespace-pre-line">{message.content}</div>
                            <div 
                              className={`text-xs mt-1 ${
                                message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                              }`}
                            >
                              {getMessageTime(message.timestamp)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 text-gray-800 rounded-lg p-3 max-w-[80%]">
                          <div className="flex space-x-1">
                            <div className="animate-pulse bg-gray-400 rounded-full h-2 w-2"></div>
                            <div className="animate-pulse bg-gray-400 rounded-full h-2 w-2 delay-75"></div>
                            <div className="animate-pulse bg-gray-400 rounded-full h-2 w-2 delay-150"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                </CardContent>
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      id="chat-input"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Andika swali lako hapa..."
                      className="flex-grow"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isTyping}
                      className="bg-tz-blue hover:bg-blue-600"
                    >
                      <Send size={16} />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Mshauri wa Biashara anaweza kukusaidia na maswali kuhusu biashara, kodi, mikopo, sheria, masoko, na zaidi.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChatbotPage;
