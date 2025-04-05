
export interface BusinessIdea {
  id: string;
  title: string;
  category: string;
  type: 'Bidhaa' | 'Huduma' | 'Mchanganyiko';
  minCapital: number;
  maxCapital: number;
  timeToProfit: string;
  description: string;
  steps: string[];
  requirements: string[];
  tips: string[];
  businessPlan?: string;
}

export const categories = [
  'Kilimo',
  'Chakula',
  'Teknolojia',
  'Elimu',
  'Afya',
  'Ujenzi',
  'Usafirishaji',
  'Sanaa na Burudani',
  'Huduma',
  'Biashara ndogo ndogo',
  'Mauzo ya Rejareja',
  'Chakula & Vinywaji',
  'Urembo & Afya',
  'Huduma kwa Jamii',
  'Ubunifu na Mitindo',
  'Teknolojia na Kidigitali',
  'Kilimo na Ufugaji',
  'Ukarabati na Ufundi',
  'Biashara za Mtandaoni',
  'Elimu na Mafunzo'
];

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('sw-TZ', {
    style: 'currency',
    currency: 'TZS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const filterBusinessIdeas = (
  searchTerm: string,
  category: string,
  capitalRange: [number, number],
  type?: string
): BusinessIdea[] => {
  return businessIdeas.filter(idea => {
    const matchesSearch = searchTerm === '' || 
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = category === '' || idea.category === category;
    
    const matchesCapital = (
      idea.minCapital <= capitalRange[1] && 
      idea.maxCapital >= capitalRange[0]
    );
    
    const matchesType = !type || idea.type === type;
    
    return matchesSearch && matchesCategory && matchesCapital && matchesType;
  });
};

// All 100 business ideas
export const businessIdeas: BusinessIdea[] = [
  // Original 10 business ideas
  {
    id: "1",
    title: "Kilimo cha Mbogamboga",
    category: "Kilimo",
    type: "Bidhaa",
    minCapital: 300000,
    maxCapital: 1500000,
    timeToProfit: "Miezi 3-6",
    description: "Kulima mbogamboga za majani kama sukumawiki, kabichi, spinachi na nyinginezo. Kuna soko kubwa la mbogamboga katika miji na vitongoji.",
    steps: [
      "Pata eneo la ardhi lenye ukubwa wa kutosha (angalau mita za mraba 100)",
      "Nunua mbegu bora na mbolea",
      "Andaa ardhi na panda mbegu",
      "Tengeneza mpango wa kumwagilia maji",
      "Chunguza magugu na wadudu waharibifu",
      "Vuna na uza kwenye masoko ya karibu au hoteli"
    ],
    requirements: [
      "Eneo la ardhi",
      "Mbegu na mbolea",
      "Vifaa vya kilimo kama jembe, panga",
      "Mfumo wa kumwagilia maji",
      "Elimu ya kilimo cha mbogamboga"
    ],
    tips: [
      "Anza na aina chache za mbogamboga kwanza",
      "Jifunze kutoka kwa wakulima wengine wenye uzoefu",
      "Tafuta soko kabla ya kuanza kilimo",
      "Wekeza kwenye mfumo mzuri wa umwagiliaji"
    ]
  },
  {
    id: "2",
    title: "Duka la Rejareja la Bidhaa za Msingi",
    category: "Biashara ndogo ndogo",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 5000000,
    timeToProfit: "Miezi 1-3",
    description: "Kuanzisha duka dogo la rejareja linalouza bidhaa za matumizi ya kila siku kama vile chakula, vinywaji, bidhaa za usafi, na kadhalika.",
    steps: [
      "Tafuta eneo zuri lenye watu wengi",
      "Pata leseni ya biashara kutoka manispaa",
      "Tengeneza rafu za kuonyesha bidhaa",
      "Tafuta wasambazaji wa bidhaa kwa bei nafuu",
      "Nunua bidhaa za awali",
      "Anzisha mfumo wa kurekodi mauzo"
    ],
    requirements: [
      "Chumba au eneo la biashara",
      "Leseni ya biashara",
      "Mtaji wa kununua bidhaa za awali",
      "Rafu za kuonyesha bidhaa",
      "Kifaa cha kuhesabia fedha"
    ],
    tips: [
      "Hakikisha duka lipo kwenye eneo lenye watu wengi",
      "Uza bidhaa zinazohitajika sana kwenye eneo lako",
      "Kuwa na bei shindani",
      "Toa huduma nzuri kwa wateja"
    ]
  },
  {
    id: "3",
    title: "Salon ya Nywele",
    category: "Huduma",
    type: "Huduma",
    minCapital: 1500000,
    maxCapital: 6000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuanzisha salon inayotoa huduma za kunyoa, kusuka, na kutengeneza nywele kwa wanawake na/au wanaume.",
    steps: [
      "Pata eneo zuri kwa ajili ya salon",
      "Pata leseni na vibali vinavyohitajika",
      "Nunua vifaa muhimu kama vile viti, vioo, na vifaa vya kunyoa",
      "Tafuta wafanyakazi wenye ujuzi",
      "Anzisha huduma na tangazo la ufunguzi"
    ],
    requirements: [
      "Eneo la biashara",
      "Vifaa vya salon",
      "Leseni ya biashara",
      "Ujuzi wa kunyoa au wafanyakazi wenye ujuzi",
      "Vifaa vya usafi"
    ],
    tips: [
      "Jifunze mitindo mipya ya nywele kila wakati",
      "Toa huduma bora zaidi kuliko washindani",
      "Tumia mitandao ya kijamii kutangaza biashara yako",
      "Hakikisha usafi wa hali ya juu"
    ]
  },
  {
    id: "4",
    title: "Ufugaji wa Kuku wa Mayai",
    category: "Kilimo",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 8000000,
    timeToProfit: "Miezi 4-6",
    description: "Kufuga kuku wa kutaga mayai kwa ajili ya kuuza mayai ambayo yana mahitaji makubwa mjini.",
    steps: [
      "Jenga banda la kuku lenye nafasi ya kutosha",
      "Nunua vifaranga bora wa kutaga",
      "Pata chakula bora cha kuku",
      "Chunguza afya ya kuku mara kwa mara",
      "Kusanya na kuuza mayai"
    ],
    requirements: [
      "Eneo la kujenga banda",
      "Vifaranga wa kuku",
      "Chakula cha kuku",
      "Chanjo na dawa za kuku",
      "Vifaa vya kusanyia mayai"
    ],
    tips: [
      "Hakikisha banda lina hewa ya kutosha",
      "Toa chanjo kwa wakati",
      "Anza na idadi ndogo ya kuku halafu ongeza",
      "Tafuta masoko ya uhakika ya mayai"
    ]
  },
  {
    id: "5",
    title: "Huduma za Usafi wa Nyumba",
    category: "Huduma",
    type: "Huduma",
    minCapital: 500000,
    maxCapital: 2000000,
    timeToProfit: "Mwezi 1-2",
    description: "Kutoa huduma za usafi wa nyumba kwa familia na ofisi katika maeneo ya mjini.",
    steps: [
      "Nunua vifaa muhimu vya usafi",
      "Anzisha orodha ya huduma na bei zako",
      "Tangaza huduma zako kwenye mitandao ya kijamii na matangazo madogo",
      "Tafuta wateja wa mwanzo",
      "Weka mfumo wa kupokea malipo"
    ],
    requirements: [
      "Vifaa vya usafi",
      "Usafiri wa kufikia wateja",
      "Simu ya mawasiliano",
      "Nguo za kazi"
    ],
    tips: [
      "Kuwa mwaminifu na mwenye nidhamu",
      "Toa huduma bora ili kupata mapendekezo",
      "Weka ratiba nzuri ya kazi",
      "Jaribu kupata wateja wa mkataba wa mara kwa mara"
    ]
  },
  {
    id: "6",
    title: "Biashara ya Viatu Online",
    category: "Teknolojia",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza viatu kupitia mtandao na kusambaza kwenye maeneo mbalimbali mjini.",
    steps: [
      "Tafuta wasambazaji wa viatu kwa bei nafuu",
      "Tengeneza ukurasa wa Instagram na Facebook",
      "Piga picha bora za bidhaa",
      "Weka mfumo wa kupokea na kusambaza bidhaa",
      "Anzisha mbinu za kutangaza biashara online"
    ],
    requirements: [
      "Mtaji wa kununulia viatu",
      "Simu ya kupiga picha nzuri",
      "Mtandao wa internet",
      "Mfumo wa usafirishaji"
    ],
    tips: [
      "Piga picha zenye ubora wa juu",
      "Kuwa na maelezo sahihi ya bidhaa",
      "Jibu maswali ya wateja haraka",
      "Toa huduma ya kusambaza nyumbani"
    ]
  },
  {
    id: "7",
    title: "Kituo cha Marekebisho ya Simu",
    category: "Teknolojia",
    type: "Huduma",
    minCapital: 1500000,
    maxCapital: 5000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa huduma za marekebisho ya simu za mkononi, kubadilisha skrini, na kuuza vifaa vya simu.",
    steps: [
      "Pata eneo la biashara",
      "Nunua vifaa muhimu vya marekebisho",
      "Jifunze au ajiri mtu mwenye ujuzi wa marekebisho ya simu",
      "Nunua vipuri vya simu vinavyotumika sana",
      "Tangaza huduma zako"
    ],
    requirements: [
      "Eneo la biashara",
      "Vifaa vya urekebishaji wa simu",
      "Ujuzi wa simu",
      "Vipuri vya awali",
      "Mtaji wa kujiendesha"
    ],
    tips: [
      "Soma na jifunze teknolojia mpya za simu",
      "Toa huduma za haraka",
      "Kuwa mwaminifu kuhusu gharama",
      "Toa hakikisho kwa kazi zako"
    ]
  },
  {
    id: "8",
    title: "Uchapishaji na Utengenezaji wa Vitambulisho",
    category: "Huduma",
    type: "Mchanganyiko",
    minCapital: 3000000,
    maxCapital: 8000000,
    timeToProfit: "Miezi 2-3",
    description: "Kutoa huduma za uchapishaji, nakala, na kutengeneza vitambulisho kwa ajili ya shule, makampuni, na matukio.",
    steps: [
      "Nunua printa ya ubora wa juu na mashine ya vitambulisho",
      "Pata kompyuta na programu za kubuni",
      "Pata eneo la biashara",
      "Tangaza huduma zako kwa shule, ofisi, na makampuni",
      "Tengeneza sampuli za kazi zako"
    ],
    requirements: [
      "Printa ya ubora wa juu",
      "Mashine ya vitambulisho",
      "Kompyuta na programu za kubuni",
      "Eneo la biashara",
      "Karatasi na vifaa vingine"
    ],
    tips: [
      "Jifunze kubuni vizuri",
      "Timiza ahadi za muda",
      "Toa bei shindani",
      "Kuwa na sampuli za kazi zako za awali"
    ]
  },
  {
    id: "9",
    title: "Kituo cha Kuosha Magari",
    category: "Huduma",
    type: "Huduma",
    minCapital: 2000000,
    maxCapital: 7000000,
    timeToProfit: "Miezi 1-3",
    description: "Kuanzisha kituo cha kuosha magari kwa kutumia njia za kisasa na huduma bora.",
    steps: [
      "Tafuta eneo lenye nafasi ya kutosha na karibu na barabara kuu",
      "Nunua mashine za kusukuma maji na vifaa vingine",
      "Weka miundombinu ya maji taka",
      "Ajiri wafanyakazi",
      "Tangaza huduma zako"
    ],
    requirements: [
      "Eneo la kuosha magari",
      "Mashine za kusukuma maji",
      "Vifaa vya kuoshea",
      "Chanzo cha maji",
      "Wafanyakazi"
    ],
    tips: [
      "Toa huduma za ziada kama vile kusafisha ndani",
      "Kuwa mwepesi katika huduma",
      "Anzisha kadi za uanachama kwa wateja wa mara kwa mara",
      "Tumia sabuni zinazohifadhi mazingira"
    ]
  },
  {
    id: "10",
    title: "Ufundishaji wa Kompyuta",
    category: "Elimu",
    type: "Huduma",
    minCapital: 1000000,
    maxCapital: 5000000,
    timeToProfit: "Miezi 1-2",
    description: "Kuanzisha kituo kidogo cha kufundisha ujuzi wa kompyuta na programu mbalimbali za ofisi.",
    steps: [
      "Pata eneo lenye chumba kimoja au viwili",
      "Nunua kompyuta chache za kuanzia",
      "Andaa mtaala wa kufundishia",
      "Tangaza kozi zako kwenye mitandao ya kijamii",
      "Anzisha usajili wa wanafunzi"
    ],
    requirements: [
      "Kompyuta za kutosha",
      "Eneo la kufundishia",
      "Ujuzi wa kompyuta",
      "Mtaala wa kufundishia",
      "Vifaa vya kufundishia"
    ],
    tips: [
      "Anzisha kozi za ngazi tofauti",
      "Toa vyeti kwa wahitimu wa kozi",
      "Tangaza kozi zako kwenye taasisi na shule",
      "Ongeza kozi mpya kadri teknolojia inavyobadilika"
    ]
  },
  // Adding 90 more business ideas to reach 100 total
  {
    id: "11",
    title: "Uuzaji wa Matunda na Mboga za Kigeni",
    category: "Chakula",
    type: "Bidhaa",
    minCapital: 500000,
    maxCapital: 2000000,
    timeToProfit: "Miezi 1-2",
    description: "Kuuza matunda na mboga za kigeni ambazo hazijazoelieka kwenye masoko ya kawaida kwa walaji wenye uwezo.",
    steps: [
      "Tafuta wasambazaji wa matunda na mboga za kigeni",
      "Pata eneo la kuuzia",
      "Jifunze kuhusu uhifadhi wa matunda na mboga hizo",
      "Tengeneza lebo na vifungashio vizuri",
      "Tangaza biashara yako kwa hoteli na wateja wengine"
    ],
    requirements: [
      "Mtaji wa kununulia bidhaa",
      "Jokofu au friji kubwa",
      "Eneo la biashara",
      "Ujuzi wa kutunza matunda",
      "Usafiri"
    ],
    tips: [
      "Lenga hoteli za kitalii na wageni",
      "Jifunze mapishi mbalimbali ya matunda hayo",
      "Kuwa na kawaida ya kupokea bidhaa mpya kila wiki",
      "Tumia mitandao ya kijamii kutangaza bidhaa zako"
    ]
  },
  {
    id: "12",
    title: "Ufugaji wa Samaki (Aquaculture)",
    category: "Kilimo",
    type: "Bidhaa",
    minCapital: 3000000,
    maxCapital: 10000000,
    timeToProfit: "Miezi 6-12",
    description: "Kufuga samaki kama vile sato na tilapia kwenye mabwawa yaliyotengenezwa maalum.",
    steps: [
      "Tengeneza bwawa la kufugia samaki",
      "Nunua vifaranga vya samaki",
      "Pata chakula bora cha samaki",
      "Simamia ubora wa maji na afya ya samaki",
      "Tangaza na uza samaki wakiwa tayari"
    ],
    requirements: [
      "Eneo la kujenga mabwawa",
      "Mtaji wa kujenga miundombinu",
      "Ujuzi wa ufugaji samaki",
      "Vyanzo vya maji safi",
      "Vifaa vya kupimia ubora wa maji"
    ],
    tips: [
      "Anza na bwawa moja kasha ongeza",
      "Jifunze kuhusu magonjwa ya samaki",
      "Weka kumbukumbu nzuri za uzalishaji",
      "Fikiria kufuga zaidi ya aina moja ya samaki"
    ]
  },
  {
    id: "13",
    title: "Utengenezaji wa Sabuni za Asili",
    category: "Ubunifu na Mitindo",
    type: "Bidhaa",
    minCapital: 400000,
    maxCapital: 2000000,
    timeToProfit: "Miezi 2-3",
    description: "Kutengeneza sabuni za asili zisizo na kemikali kali kwa kutumia mafuta ya asili na mimea yenye harufu nzuri.",
    steps: [
      "Jifunze utengenezaji wa sabuni za asili",
      "Nunua vifaa na malighafi",
      "Anzisha uzalishaji wa majaribio",
      "Tengeneza vifungashio vizuri",
      "Tangaza bidhaa zako mtandaoni"
    ],
    requirements: [
      "Vifaa vya kutengenezea sabuni",
      "Malighafi kama mafuta na mimea",
      "Eneo la kazi",
      "Vifungashio vizuri",
      "Leseni ya bidhaa za vipodozi"
    ],
    tips: [
      "Tumia vifungashio vya asili pia",
      "Tangaza faida za sabuni za asili",
      "Lenga watu wenye ngozi nyeti",
      "Tengeneza sabuni za harufu tofauti"
    ]
  },
  {
    id: "14",
    title: "Ushauri wa Masuala ya Kodi na Uhasibu",
    category: "Huduma",
    type: "Huduma",
    minCapital: 500000,
    maxCapital: 2000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa ushauri wa kodi na huduma za uhasibu kwa biashara ndogo na za kati.",
    steps: [
      "Pata elimu na leseni za kutosha",
      "Weka ofisi ndogo",
      "Nunua kompyuta na programu za uhasibu",
      "Tangaza huduma zako",
      "Jenga mtandao wa wateja"
    ],
    requirements: [
      "Elimu ya uhasibu",
      "Leseni husika",
      "Ofisi au eneo la kazi",
      "Kompyuta na programu za uhasibu",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Endelea kujifunza mabadiliko ya sheria za kodi",
      "Toa semina za elimu ya kodi",
      "Anzisha huduma za ushauri wa kifedha pia",
      "Tengeneza taarifa za mara kwa mara kwa wateja wako"
    ]
  },
  {
    id: "15",
    title: "Upigaji Picha na Video",
    category: "Sanaa na Burudani",
    type: "Huduma",
    minCapital: 1500000,
    maxCapital: 6000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa huduma za upigaji picha na video kwa matukio, sherehe, na biashara.",
    steps: [
      "Nunua kamera na vifaa vya mwanga",
      "Jifunze mbinu za upigaji picha",
      "Tengeneza tovuti au ukurasa wa mitandao ya kijamii",
      "Piga picha za mfano za kazi zako",
      "Tangaza huduma zako"
    ],
    requirements: [
      "Kamera nzuri",
      "Vifaa vya mwanga",
      "Kompyuta na programu za uhariri",
      "Ujuzi wa upigaji picha",
      "Usafiri"
    ],
    tips: [
      "Jikite kwenye aina maalum ya upigaji picha",
      "Piga picha nyingi bure mwanzoni kujenga jina",
      "Weka bei zinazokidhi gharama na faida",
      "Endelea kujifunza mitindo mipya"
    ]
  },
  {
    id: "16",
    title: "Uzalishaji wa Mvinyo wa Matunda ya Asili",
    category: "Chakula & Vinywaji",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 7000000,
    timeToProfit: "Miezi 6-12",
    description: "Kutengeneza mvinyo kutoka matunda ya asili ya Tanzania kama vile embe, nanasi, na zabibu.",
    steps: [
      "Jifunze mchakato wa kutengeneza mvinyo",
      "Pata vifaa na malighafi",
      "Pata vibali na leseni husika",
      "Anzisha uzalishaji wa majaribio",
      "Tengeneza chapa na vifungashio"
    ],
    requirements: [
      "Vifaa vya kutengenezea mvinyo",
      "Matunda bora",
      "Leseni za uzalishaji wa pombe",
      "Eneo la uzalishaji",
      "Ujuzi wa utengenezaji mvinyo"
    ],
    tips: [
      "Tumia matunda ya msimu kupunguza gharama",
      "Anza na aina chache za mvinyo",
      "Fanya majaribio kabla ya uzalishaji mkubwa",
      "Fuata viwango vya ubora"
    ]
  },
  {
    id: "17",
    title: "Ufugaji wa Nyuki",
    category: "Kilimo na Ufugaji",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 6-12",
    description: "Kufuga nyuki kwa ajili ya kuvuna asali na nta kwenye maeneo ya vijijini.",
    steps: [
      "Jenga mizinga ya nyuki",
      "Weka mizinga kwenye maeneo yenye maua mengi",
      "Jifunze utunzaji wa nyuki",
      "Vuna asali kwa njia sahihi",
      "Tangaza na uza asali"
    ],
    requirements: [
      "Mizinga ya nyuki",
      "Mavazi ya kujikinga",
      "Vifaa vya kuvunia asali",
      "Vifungashio vya asali",
      "Eneo lenye mazingira mazuri kwa nyuki"
    ],
    tips: [
      "Anzisha mizinga kwenye maeneo mbalimbali",
      "Tenga asali kulingana na aina ya maua",
      "Tumia pia nta kwa bidhaa nyingine",
      "Jifunze kuhusu magonjwa ya nyuki"
    ]
  },
  {
    id: "18",
    title: "Ufundishaji wa Lugha za Kigeni",
    category: "Elimu na Mafunzo",
    type: "Huduma",
    minCapital: 500000,
    maxCapital: 2500000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa mafunzo ya lugha za kigeni kama Kiingereza, Kifaransa, Kichina, na Kiarabu.",
    steps: [
      "Anzisha mtaala wa kufundishia",
      "Pata eneo la kufundishia",
      "Andaa vifaa vya kufundishia",
      "Tangaza kozi zako",
      "Fanya majaribio na wanafunzi wa kwanza"
    ],
    requirements: [
      "Ujuzi wa lugha unazofundisha",
      "Eneo la kufundishia",
      "Vifaa vya kufundishia",
      "Vitabu na rasilimali nyingine",
      "Mbinu za kufundishia"
    ],
    tips: [
      "Anza na lugha mojawapo unayoijua vizuri",
      "Tengeneza makundi kulingana na viwango",
      "Ongeza vipindi vya mazoezi ya mazungumzo",
      "Fikiria pia kufundisha mtandaoni"
    ]
  },
  {
    id: "19",
    title: "Kituo cha Michezo ya Watoto",
    category: "Huduma kwa Jamii",
    type: "Huduma",
    minCapital: 3000000,
    maxCapital: 10000000,
    timeToProfit: "Miezi 3-6",
    description: "Kuanzisha kituo cha michezo na burudani kwa watoto chenye vifaa mbalimbali vya kuchezea.",
    steps: [
      "Pata eneo kubwa la kutosha",
      "Nunua vifaa vya michezo ya watoto",
      "Hakikisha usalama wa eneo",
      "Ajiri wafanyakazi wa kusimamia watoto",
      "Tengeneza ratiba na bei za huduma"
    ],
    requirements: [
      "Eneo kubwa la michezo",
      "Vifaa vya michezo",
      "Bima ya usalama",
      "Wafanyakazi wenye uzoefu wa watoto",
      "Leseni na vibali husika"
    ],
    tips: [
      "Weka vifaa vya aina tofauti za michezo",
      "Anzisha mipango ya matukio maalum",
      "Toa huduma za chakula kwa watoto",
      "Kuwa na mipango ya sherehe za kuzaliwa"
    ]
  },
  {
    id: "20",
    title: "Utengenezaji wa Samani",
    category: "Ukarabati na Ufundi",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 8000000,
    timeToProfit: "Miezi 2-4",
    description: "Kutengeneza samani za mbao kama vile viti, meza, vitanda na makabati kulingana na mahitaji ya wateja.",
    steps: [
      "Pata karakana ya kazi",
      "Nunua mashine na vifaa vya useremala",
      "Tengeneza sampuli za samani",
      "Anzisha mfumo wa kupokea oda",
      "Tengeneza mkakati wa uuzaji"
    ],
    requirements: [
      "Ujuzi wa useremala",
      "Karakana ya kazi",
      "Mashine za kazi za mbao",
      "Rasilimali za mbao",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Jikite kwenye mitindo ya kisasa",
      "Tumia mbao bora zenye uimara",
      "Kuwa mbunifu katika utengenezaji",
      "Toa dhamana kwa samani zako"
    ]
  },
  {
    id: "21",
    title: "Utengenezaji wa Vitabu vya Watoto",
    category: "Elimu",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 5000000,
    timeToProfit: "Miezi 3-6",
    description: "Kuandaa na kuchapisha vitabu vya hadithi na elimu kwa watoto kwa lugha za Kiswahili na Kiingereza.",
    steps: [
      "Andika au ajiri waandishi wa vitabu",
      "Ajiri wachoraji wa picha",
      "Fanya uhariri wa kitabu",
      "Chapisha vitabu kwa bei nafuu",
      "Tangaza na sambaza vitabu"
    ],
    requirements: [
      "Ujuzi wa uandishi au waandishi",
      "Wachoraji wa picha",
      "Kompyuta na programu za kubuni",
      "Mtaji wa kuchapisha",
      "Mtandao wa usambazaji"
    ],
    tips: [
      "Andaa vitabu kwa umri tofauti",
      "Tumia picha zenye rangi nyingi",
      "Tengeneza maudhui yanayofundisha",
      "Wasiliana na shule kupata wateja"
    ]
  },
  {
    id: "22",
    title: "Kilimo cha Uyoga",
    category: "Kilimo",
    type: "Bidhaa",
    minCapital: 800000,
    maxCapital: 3000000,
    timeToProfit: "Miezi 2-4",
    description: "Kulima uyoga wa aina mbalimbali kwa ajili ya chakula na matumizi ya dawa.",
    steps: [
      "Jenga au pata chumba cha giza",
      "Nunua mbegu za uyoga",
      "Andaa matandiko ya uyoga",
      "Dhibiti halijoto na unyevunyevu",
      "Vuna na uza uyoga"
    ],
    requirements: [
      "Chumba cha giza",
      "Mbegu za uyoga",
      "Matandiko kama majani ya mpunga",
      "Vifaa vya kudhibiti halijoto",
      "Ujuzi wa kilimo cha uyoga"
    ],
    tips: [
      "Anzisha uzalishaji mdogo kwanza",
      "Jifunze kutofautisha uyoga wa sumu",
      "Lenga masoko ya hoteli na migahawa",
      "Jifunze njia za kuhifadhi uyoga"
    ]
  },
  {
    id: "23",
    title: "Biashara ya Vifaa vya Elimu ya Awali",
    category: "Elimu",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza vifaa vya kujifunzia kwa watoto wa elimu ya awali kama vile kadi za herufi, vitabu vya kubuni, na michezo ya kutumia akili.",
    steps: [
      "Tafuta wasambazaji wa vifaa vya elimu",
      "Tengeneza baadhi ya vifaa wewe mwenyewe",
      "Pata duka au anzisha uuzaji mtandaoni",
      "Anzisha mahusiano na shule za awali",
      "Tangaza bidhaa zako kwa walimu na wazazi"
    ],
    requirements: [
      "Mtaji wa kununulia vifaa",
      "Eneo la kuuzia",
      "Ujuzi wa vifaa vya elimu",
      "Mtandao wa usambazaji",
      "Usafiri"
    ],
    tips: [
      "Lenga shule za awali na wazazi",
      "Tengeneza vifaa vinavyoendana na mtaala wa Tanzania",
      "Anzisha warsha za kutumia vifaa hivi",
      "Tengeneza vifaa kwa lugha ya Kiswahili"
    ]
  },
  {
    id: "24",
    title: "Ushonaji wa Mavazi ya Kitamaduni",
    category: "Ubunifu na Mitindo",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 2-3",
    description: "Kushona na kuuza mavazi ya kitamaduni yenye ubunifu wa kisasa kwa wanawake na wanaume.",
    steps: [
      "Jifunze au ajiri washonaji wenye ujuzi",
      "Nunua mashine za kushonia",
      "Tafuta vitambaa bora",
      "Buni mitindo ya kisasa ya kitamaduni",
      "Tengeneza duka au uza mtandaoni"
    ],
    requirements: [
      "Mashine za kushonia",
      "Washonaji wenye ujuzi",
      "Vitambaa na malighafi nyingine",
      "Eneo la kazi",
      "Ujuzi wa kubuni mitindo"
    ],
    tips: [
      "Changanya mitindo ya kitamaduni na ya kisasa",
      "Tumia vitambaa vya kitanzania",
      "Tengeneza mavazi kwa matukio maalum",
      "Tangaza bidhaa zako kwa kutumia modeli"
    ]
  },
  {
    id: "25",
    title: "Uchimbaji na Uuzaji wa Maji ya Kunywa",
    category: "Bidhaa",
    type: "Bidhaa",
    minCapital: 5000000,
    maxCapital: 15000000,
    timeToProfit: "Miezi 6-12",
    description: "Kuchimba, kusafisha, na kufungasha maji safi ya kunywa kwenye chupa na mitungi.",
    steps: [
      "Pata eneo lenye maji safi",
      "Chimba kisima au tafuta chanzo cha maji",
      "Nunua vifaa vya kusafisha maji",
      "Tengeneza kiwanda kidogo cha kufungasha",
      "Pata vibali vya ubora wa maji"
    ],
    requirements: [
      "Chanzo cha maji safi",
      "Vifaa vya kusafisha na kupima maji",
      "Mashine za kufungasha",
      "Leseni za biashara ya maji",
      "Usafiri wa kusambazia"
    ],
    tips: [
      "Hakikisha maji yanakidhi viwango vya ubora",
      "Anza na eneo dogo la usambazaji",
      "Tumia vifungashio vya ukubwa tofauti",
      "Weka bei shindani"
    ]
  },
  {
    id: "26",
    title: "Utengenezaji wa Mipira ya Umwagiliaji",
    category: "Kilimo",
    type: "Bidhaa",
    minCapital: 3000000,
    maxCapital: 10000000,
    timeToProfit: "Miezi 4-8",
    description: "Kutengeneza mipira na vifaa vya umwagiliaji kwa matumizi ya kilimo cha kisasa.",
    steps: [
      "Nunua mashine za kutengeneza mipira",
      "Pata malighafi ya kutengeneza mipira",
      "Anzisha kiwanda kidogo",
      "Tangaza bidhaa zako kwa wakulima",
      "Fanya majaribio ya ubora"
    ],
    requirements: [
      "Mashine za kutengeneza mipira",
      "Malighafi ya kutengeneza mipira",
      "Eneo la kiwanda",
      "Wafanyakazi wenye ujuzi",
      "Mtaji wa kuanzia"
    ],
    tips: [
      "Tengeneza mipira yenye ubora wa kudumu",
      "Tumia malighafi zenye uimara",
      "Weka bei zinazovutia wakulima",
      "Tangaza faida za umwagiliaji wa matone"
    ]
  },
  {
    id: "27",
    title: "Ushauri wa Masuala ya Ndoa",
    category: "Huduma",
    type: "Huduma",
    minCapital: 500000,
    maxCapital: 2000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa huduma za ushauri kwa wachumba na wanandoa kuhusu masuala ya ndoa na familia.",
    steps: [
      "Pata mafunzo ya ushauri wa ndoa",
      "Anzisha ofisi au eneo la kazi",
      "Andaa programu za ushauri",
      "Tangaza huduma zako",
      "Tengeneza vifurushi vya huduma"
    ],
    requirements: [
      "Elimu ya ushauri wa ndoa",
      "Ofisi au eneo la kazi",
      "Vifaa vya ofisi",
      "Ujuzi wa mawasiliano",
      "Elimu ya saikolojia"
    ],
    tips: [
      "Weka huduma za ushauri wa kibinafsi na vikundi",
      "Andaa warsha na semina za ndoa",
      "Tengeneza vitabu na machapisho ya ushauri",
      "Shirikiana na viongozi wa dini"
    ]
  },
  {
    id: "28",
    title: "Biashara ya Vifaa vya Michezo",
    category: "Huduma",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 7000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza vifaa vya michezo kama vile mpira wa miguu, mpira wa kikapu, jezi, viatu, na vifaa vingine vya michezo.",
    steps: [
      "Tafuta wasambazaji wa vifaa vya michezo",
      "Pata duka au eneo la kuuzia",
      "Nunua vifaa vya awali",
      "Tangaza biashara yako kwa vikundi vya michezo",
      "Fikiria kutoa huduma za uchapishaji wa jezi"
    ],
    requirements: [
      "Duka au eneo la kuuzia",
      "Mtaji wa kununulia vifaa",
      "Ujuzi wa vifaa vya michezo",
      "Mahusiano na vikundi vya michezo",
      "Mtandao wa usambazaji"
    ],
    tips: [
      "Jikite kwenye michezo inayopendwa zaidi",
      "Uza vifaa vya ubora wa juu na bei nafuu",
      "Tangaza wakati wa mashindano makubwa",
      "Fikiria kutoa huduma za kurekebisha vifaa"
    ]
  },
  {
    id: "29",
    title: "Ufugaji wa Sungura",
    category: "Kilimo na Ufugaji",
    type: "Bidhaa",
    minCapital: 500000,
    maxCapital: 2000000,
    timeToProfit: "Miezi 3-6",
    description: "Kufuga sungura kwa ajili ya nyama, manyoya, na samadi kwa matumizi mbalimbali.",
    steps: [
      "Jenga tundu za sungura",
      "Nunua sungura wa mbegu bora",
      "Andaa chakula cha sungura",
      "Tengeneza mpango wa kuzalisha",
      "Tafuta masoko ya nyama na manyoya"
    ],
    requirements: [
      "Tundu za sungura",
      "Sungura wa kuanza nao",
      "Chakula cha sungura",
      "Eneo la ufugaji",
      "Ujuzi wa ufugaji sungura"
    ],
    tips: [
      "Weka kumbukumbu nzuri za uzalishaji",
      "Tumia samadi kwa kilimo",
      "Tafuta soko la nyama kwenye migahawa",
      "Jikite kwenye aina za sungura wenye manyoya mengi"
    ]
  },
  {
    id: "30",
    title: "Huduma za Utunzaji wa Wazee",
    category: "Huduma kwa Jamii",
    type: "Huduma",
    minCapital: 2000000,
    maxCapital: 8000000,
    timeToProfit: "Miezi 3-6",
    description: "Kutoa huduma za kutunza wazee nyumbani au katika kituo maalum cha utunzaji.",
    steps: [
      "Pata mafunzo ya utunzaji wa wazee",
      "Tengeneza kituo au huduma za nyumbani",
      "Ajiri watunzaji wenye uzoefu",
      "Pata vifaa muhimu vya utunzaji",
      "Tangaza huduma zako"
    ],
    requirements: [
      "Eneo la kituo au huduma za nyumbani",
      "Wafanyakazi wenye ujuzi",
      "Vifaa vya utunzaji",
      "Leseni husika",
      "Usafiri wa kufika kwa wateja"
    ],
    tips: [
      "Toa huduma za afya na lishe bora",
      "Kuwa na mipango ya burudani kwa wazee",
      "Weka bei kulingana na huduma zinazotolewa",
      "Kuwa na mpango wa dharura"
    ]
  },
  {
    id: "31",
    title: "Utengenezaji wa Mikate na Keki",
    category: "Chakula & Vinywaji",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 1-2",
    description: "Kutengeneza na kuuza mikate, keki, na vitafunio vingine vya unga.",
    steps: [
      "Pata mafunzo ya upishi wa mikate na keki",
      "Nunua vifaa vya kuokea",
      "Pata jiko la kazi",
      "Anzisha uzalishaji wa mikate na keki",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Vifaa vya kuoka",
      "Jiko la kazi",
      "Unga na malighafi nyingine",
      "Leseni za chakula",
      "Ujuzi wa kuoka"
    ],
    tips: [
      "Tengeneza mikate na keki za aina tofauti",
      "Weka ubora wa hali ya juu",
      "Kuwa na utaratibu wa kupokea oda",
      "Tengeneza keki za matukio maalum"
    ]
  },
  {
    id: "32",
    title: "Huduma za Ubunifu wa Matangazo",
    category: "Teknolojia na Kidigitali",
    type: "Huduma",
    minCapital: 1500000,
    maxCapital: 5000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa huduma za kubuni matangazo ya biashara kwa magazeti, televisheni, na mitandao ya kijamii.",
    steps: [
      "Jifunze ubunifu wa matangazo",
      "Nunua kompyuta na programu za kubuni",
      "Tengeneza mfano wa kazi zako",
      "Tangaza huduma zako",
      "Anzisha mtandao wa wateja"
    ],
    requirements: [
      "Kompyuta na programu za kubuni",
      "Ujuzi wa ubunifu",
      "Kameras na vifaa vingine",
      "Eneo la kazi",
      "Mtandao wa intaneti"
    ],
    tips: [
      "Jenga mtandao wa wateja wadogo kwanza",
      "Kuwa na ubunifu wa kipekee",
      "Weka bei kulingana na ukubwa wa kazi",
      "Endelea kujifunza mbinu mpya"
    ]
  },
  {
    id: "33",
    title: "Ufugaji wa Mbuzi wa Maziwa",
    category: "Kilimo na Ufugaji",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 5000000,
    timeToProfit: "Miezi 4-8",
    description: "Kufuga mbuzi wa maziwa kwa ajili ya kuuza maziwa na bidhaa zitokanazo na maziwa ya mbuzi.",
    steps: [
      "Jenga zizi la mbuzi",
      "Nunua mbuzi wa maziwa wa mbegu bora",
      "Andaa malisho ya mbuzi",
      "Pata vifaa vya kukamua na kuhifadhi maziwa",
      "Anzisha soko la maziwa"
    ],
    requirements: [
      "Zizi la mbuzi",
      "Mbuzi wa mbegu bora",
      "Malisho ya mbuzi",
      "Vifaa vya kukamua",
      "Eneo la kuhifadhi maziwa"
    ],
    tips: [
      "Hakikisha usafi wa zizi na maziwa",
      "Pata chanjo na dawa za mbuzi",
      "Tumia maziwa kutengeneza bidhaa kama jibini",
      "Fikiria pia kuuza mbolea ya mbuzi"
    ]
  },
  {
    id: "34",
    title: "Usanifu wa Maua na Matukio",
    category: "Huduma",
    type: "Huduma",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa huduma za kupamba maua na kuandaa mapambo ya matukio kama harusi, sherehe, na mikutano.",
    steps: [
      "Jifunze usanifu wa maua na mapambo",
      "Nunua vifaa vya kupambia",
      "Tengeneza sampuli za kazi zako",
      "Tangaza huduma zako",
      "Jenga mtandao wa wateja"
    ],
    requirements: [
      "Vifaa vya kupambia",
      "Usafiri wa kufika kwenye matukio",
      "Ujuzi wa usanifu",
      "Mtaji wa kununulia vifaa",
      "Wafanyakazi wa kusaidia"
    ],
    tips: [
      "Kuwa na miongozo ya mapambo ya kisasa",
      "Tengeneza vifurushi tofauti kwa bei tofauti",
      "Weka picha za kazi zako kwenye mitandao ya kijamii",
      "Shirikiana na wasanii wengine wa matukio"
    ]
  },
  {
    id: "35",
    title: "Utengenezaji wa Batiki na Tie-Dye",
    category: "Ubunifu na Mitindo",
    type: "Bidhaa",
    minCapital: 500000,
    maxCapital: 2000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutengeneza vitambaa vya batiki na tie-dye kwa ajili ya nguo, mapambo, na vifaa vingine.",
    steps: [
      "Jifunze mbinu za batiki na tie-dye",
      "Nunua vitambaa na rangi",
      "Anzisha uzalishaji wa vitambaa",
      "Tangaza bidhaa zako",
      "Tafuta masoko ya vitambaa vyako"
    ],
    requirements: [
      "Vitambaa vya pamba",
      "Rangi za batiki",
      "Vifaa vya kufanyia kazi",
      "Eneo la kazi",
      "Ujuzi wa utengenezaji wa batiki"
    ],
    tips: [
      "Tumia rangi za asili kwa nyongeza ya thamani",
      "Tengeneza miundo ya kipekee",
      "Tumia vitambaa vya hali ya juu",
      "Lenga watalii na masoko ya nje"
    ]
  },
  {
    id: "36",
    title: "Biashara ya Upakiaji na Usafirishaji",
    category: "Usafirishaji",
    type: "Huduma",
    minCapital: 2000000,
    maxCapital: 8000000,
    timeToProfit: "Miezi 2-4",
    description: "Kutoa huduma za upakiaji na usafirishaji wa mizigo ndani ya mji au kutoka mji mmoja hadi mwingine.",
    steps: [
      "Nunua gari la mizigo",
      "Ajiri madereva na wapakiaji",
      "Tengeneza ofisi ndogo",
      "Anzisha mfumo wa kupokea kazi",
      "Tangaza huduma zako"
    ],
    requirements: [
      "Gari la mizigo",
      "Leseni ya usafirishaji",
      "Wafanyakazi",
      "Bima ya gari",
      "Ofisi ndogo"
    ],
    tips: [
      "Weka bei za ushindani",
      "Hakikisha usalama wa mizigo",
      "Toa huduma za ziada kama ufungashaji",
      "Weka mfumo wa kufuatilia mizigo"
    ]
  },
  {
    id: "37",
    title: "Uuzaji wa Vifaa vya Mifugo",
    category: "Kilimo na Ufugaji",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 7000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza vifaa vya ufugaji kama chakula cha mifugo, dawa, na vifaa vingine vinavyohitajika kwa wafugaji.",
    steps: [
      "Tafuta wasambazaji wa vifaa vya mifugo",
      "Pata duka au eneo la kuuzia",
      "Nunua bidhaa za awali",
      "Tangaza biashara yako kwa wafugaji",
      "Anzisha huduma za ushauri"
    ],
    requirements: [
      "Duka au eneo la kuuzia",
      "Mtaji wa kununulia bidhaa",
      "Ujuzi wa vifaa vya mifugo",
      "Mtandao wa wafugaji",
      "Usafiri wa kusambazia"
    ],
    tips: [
      "Toa huduma za ushauri kwa wafugaji",
      "Weka bidhaa za hali ya juu",
      "Fanya semina za elimu kwa wafugaji",
      "Fanya ziara za mara kwa mara kwa wafugaji"
    ]
  },
  {
    id: "38",
    title: "Studio ya Kurekodi Muziki",
    category: "Sanaa na Burudani",
    type: "Huduma",
    minCapital: 3000000,
    maxCapital: 10000000,
    timeToProfit: "Miezi 3-6",
    description: "Kuanzisha studio ya kurekodi muziki kwa wasanii wa muziki wa aina mbalimbali.",
    steps: [
      "Pata chumba chenye akustiki nzuri",
      "Nunua vifaa vya kurekodi",
      "Ajiri mhandisi wa sauti",
      "Tengeneza vifurushi vya huduma",
      "Tangaza studio yako"
    ],
    requirements: [
      "Chumba cha studio",
      "Vifaa vya kurekodi",
      "Kompyuta na programu za muziki",
      "Mhandisi wa sauti",
      "Leseni husika"
    ],
    tips: [
      "Weka vifaa vya kisasa",
      "Toa huduma za ziada kama usambazaji wa muziki",
      "Jenga mahusiano na wasanii waliopo",
      "Weka bei za ushindani"
    ]
  },
  {
    id: "39",
    title: "Utengenezaji wa Matofali ya Kuchoma",
    category: "Ujenzi",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 8000000,
    timeToProfit: "Miezi 3-6",
    description: "Kutengeneza matofali ya kuchoma kwa ajili ya ujenzi wa nyumba na majengo mengine.",
    steps: [
      "Pata eneo la kazi",
      "Nunua udongo mzuri",
      "Jenga tanuru la kuchomea",
      "Ajiri wafanyakazi",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Eneo la kazi",
      "Udongo wa matofali",
      "Tanuru la kuchomea",
      "Wafanyakazi",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Hakikisha ubora wa matofali",
      "Weka bei kulingana na ukubwa wa matofali",
      "Toa huduma za usafirishaji",
      "Tengeneza matofali ya ukubwa tofauti"
    ]
  },
  {
    id: "40",
    title: "Kituo cha Mafunzo ya Udereva",
    category: "Elimu na Mafunzo",
    type: "Huduma",
    minCapital: 5000000,
    maxCapital: 15000000,
    timeToProfit: "Miezi 3-6",
    description: "Kuanzisha shule ya mafunzo ya udereva kwa ajili ya kusaidia watu kupata leseni za udereva.",
    steps: [
      "Pata magari ya mafunzo",
      "Ajiri wakufunzi wenye uzoefu",
      "Pata leseni ya kufundishia",
      "Tengeneza mtaala wa kufundishia",
      "Tangaza shule yako"
    ],
    requirements: [
      "Magari ya mafunzo",
      "Wakufunzi wenye leseni",
      "Leseni ya kufundishia udereva",
      "Eneo la ofisi",
      "Vitabu na vifaa vya kufundishia"
    ],
    tips: [
      "Toa mafunzo ya nadharia na vitendo",
      "Weka bei za ushindani",
      "Toa huduma za kusaidia kupata leseni",
      "Hakikisha usalama wa magari ya mafunzo"
    ]
  },
  {
    id: "41",
    title: "Bustani ya Miti ya Matunda",
    category: "Kilimo",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 6000000,
    timeToProfit: "Miaka 1-3",
    description: "Kupanda na kuuza miti ya matunda kama embe, chungwa, limao, parachichi, na mengineyo.",
    steps: [
      "Pata eneo la ardhi",
      "Nunua miche ya miti ya matunda",
      "Panda na tunza miti",
      "Tangaza matunda yako",
      "Anzisha mfumo wa kuvuna na kusambaza"
    ],
    requirements: [
      "Eneo la ardhi",
      "Miche ya miti ya matunda",
      "Mfumo wa umwagiliaji",
      "Mbolea na dawa",
      "Ujuzi wa kilimo cha miti ya matunda"
    ],
    tips: [
      "Panda aina mbalimbali za matunda",
      "Tumia mbinu za kisasa za kilimo",
      "Fikiria pia kuuza miche ya miti",
      "Tafuta masoko kabla ya kuanza"
    ]
  },
  {
    id: "42",
    title: "Huduma za Ukarabati wa Nyumba",
    category: "Ukarabati na Ufundi",
    type: "Huduma",
    minCapital: 1000000,
    maxCapital: 5000000,
    timeToProfit: "Mwezi 1-2",
    description: "Kutoa huduma za ukarabati wa nyumba kama vile upakaji rangi, ukarabati wa paa, na matengenezo mengine.",
    steps: [
      "Kusanya vifaa vya ukarabati",
      "Ajiri mafundi wenye ujuzi",
      "Anzisha orodha ya huduma",
      "Tangaza huduma zako",
      "Tengeneza vifurushi vya bei"
    ],
    requirements: [
      "Vifaa vya ukarabati",
      "Mafundi wenye ujuzi",
      "Usafiri wa kufika kwa wateja",
      "Mtaji wa kuanza",
      "Simu ya mawasiliano"
    ],
    tips: [
      "Toa huduma za hali ya juu",
      "Kuwa na timu ya mafundi wa fani tofauti",
      "Timiza ahadi za muda",
      "Toa makadirio ya bei bila malipo"
    ]
  },
  {
    id: "43",
    title: "Kilimo cha Mimea ya Viungo",
    category: "Kilimo",
    type: "Bidhaa",
    minCapital: 800000,
    maxCapital: 3000000,
    timeToProfit: "Miezi 3-6",
    description: "Kulima mimea ya viungo kama pilipili, tangawizi, na iliki kwa ajili ya kuuza kama viungo.",
    steps: [
      "Pata eneo la ardhi",
      "Nunua mbegu za mimea ya viungo",
      "Panda na tunza mimea",
      "Vuna na kausha viungo",
      "Tangaza na uza bidhaa zako"
    ],
    requirements: [
      "Eneo la ardhi",
      "Mbegu za mimea ya viungo",
      "Mfumo wa umwagiliaji",
      "Mbolea",
      "Vifaa vya kuvuna na kukausha"
    ],
    tips: [
      "Tumia mbinu za kilimo cha asili",
      "Fikiria pia kuuza viungo vilivyosagwa",
      "Hakikisha ubora wa viungo",
      "Anzisha mfumo wa kufungasha vizuri"
    ]
  },
  {
    id: "44",
    title: "Uuzaji wa Simu na Vifaa vya Elektroniki",
    category: "Teknolojia na Kidigitali",
    type: "Bidhaa",
    minCapital: 3000000,
    maxCapital: 10000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza simu za mkononi, kompyuta ndogo, na vifaa vingine vya kielektroniki.",
    steps: [
      "Tafuta wasambazaji wa elektroniki",
      "Pata duka au eneo la kuuzia",
      "Nunua bidhaa za awali",
      "Anzisha mfumo wa malipo",
      "Tangaza biashara yako"
    ],
    requirements: [
      "Duka au eneo la kuuzia",
      "Mtaji wa kununulia bidhaa",
      "Mfumo wa usalama",
      "Ujuzi wa elektroniki",
      "Leseni husika"
    ],
    tips: [
      "Toa huduma za ziada kama kuweka skrini",
      "Weka bei za ushindani",
      "Toa dhamana kwa bidhaa zako",
      "Kuwa na bidhaa mpya za kisasa"
    ]
  },
  {
    id: "45",
    title: "Ufugaji wa Nguruwe",
    category: "Kilimo na Ufugaji",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 7000000,
    timeToProfit: "Miezi 6-12",
    description: "Kufuga nguruwe kwa ajili ya nyama na bidhaa nyingine zinazotokana na nguruwe.",
    steps: [
      "Jenga banda la nguruwe",
      "Nunua nguruwe wa mbegu bora",
      "Andaa chakula cha nguruwe",
      "Pata chanjo na dawa",
      "Tangaza na uza nyama"
    ],
    requirements: [
      "Banda la nguruwe",
      "Nguruwe wa mbegu bora",
      "Chakula cha nguruwe",
      "Chanjo na dawa",
      "Ujuzi wa ufugaji nguruwe"
    ],
    tips: [
      "Hakikisha usafi wa banda",
      "Weka kumbukumbu za ufugaji",
      "Tafuta soko la uhakika la nyama",
      "Tumia mbolea ya nguruwe kwa kilimo"
    ]
  },
  {
    id: "46",
    title: "Kilimo cha Mazao ya Kiasili",
    category: "Kilimo",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 4-8",
    description: "Kulima mazao ya kiasili kama kunde, choroko, mtama, na ulezi ambayo yana soko kubwa.",
    steps: [
      "Pata eneo la ardhi",
      "Nunua mbegu bora za mazao ya kiasili",
      "Andaa ardhi na panda",
      "Tumia mbinu za kilimo cha kiasili",
      "Vuna na usindike mazao"
    ],
    requirements: [
      "Eneo la ardhi",
      "Mbegu za mazao ya kiasili",
      "Vifaa vya kilimo",
      "Ghala la kuhifadhia mazao",
      "Ujuzi wa kilimo cha mazao ya kiasili"
    ],
    tips: [
      "Tangaza faida za mazao ya kiasili",
      "Tumia mbinu za kilimo cha kiasili/organiki",
      "Anzisha usindikaji wa mazao",
      "Tafuta masoko ya mazao ya kiasili"
    ]
  },
  {
    id: "47",
    title: "Biashara ya Vinywaji Baridi",
    category: "Chakula & Vinywaji",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 6000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza vinywaji baridi kama juisi, maji, na vinywaji vingine kwenye duka au kibanda.",
    steps: [
      "Pata kibanda au duka",
      "Nunua jokofu au friji kubwa",
      "Tafuta wasambazaji wa vinywaji",
      "Nunua bidhaa za awali",
      "Tangaza biashara yako"
    ],
    requirements: [
      "Kibanda au duka",
      "Jokofu au friji",
      "Mtaji wa kununulia bidhaa",
      "Leseni ya biashara",
      "Mfumo wa umeme wa uhakika"
    ],
    tips: [
      "Weka bei za ushindani",
      "Hakikisha vinywaji viko baridi kila wakati",
      "Toa huduma za usambazaji",
      "Fikiria kutengeneza juisi yako mwenyewe"
    ]
  },
  {
    id: "48",
    title: "Utengenezaji wa Mavazi ya Watoto",
    category: "Ubunifu na Mitindo",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 2-4",
    description: "Kutengeneza na kuuza mavazi ya watoto ya mitindo mbalimbali.",
    steps: [
      "Jifunze kushona au ajiri washonaji",
      "Nunua mashine za kushonia",
      "Tafuta vitambaa bora",
      "Buni mitindo ya mavazi ya watoto",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Mashine za kushonia",
      "Washonaji wenye ujuzi",
      "Vitambaa na malighafi nyingine",
      "Eneo la kazi",
      "Ujuzi wa kubuni mitindo"
    ],
    tips: [
      "Buni mitindo ya kipekee",
      "Tumia vitambaa salama kwa watoto",
      "Weka bei kulingana na ubora",
      "Tangaza bidhaa zako kwenye mitandao ya kijamii"
    ]
  },
  {
    id: "49",
    title: "Ujasiriamali wa Tovuti na Programu",
    category: "Teknolojia na Kidigitali",
    type: "Huduma",
    minCapital: 1000000,
    maxCapital: 5000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutengeneza tovuti na programu kwa ajili ya kampuni na watu binafsi.",
    steps: [
      "Jifunze kutengeneza tovuti na programu",
      "Nunua kompyuta na programu muhimu",
      "Tengeneza mfano wa kazi zako",
      "Tangaza huduma zako",
      "Jenga mtandao wa wateja"
    ],
    requirements: [
      "Kompyuta nzuri",
      "Programu za kutengeneza tovuti",
      "Ujuzi wa kutengeneza tovuti",
      "Mtandao wa intaneti",
      "Eneo la kazi"
    ],
    tips: [
      "Tengeneza tovuti na programu za kisasa",
      "Toa huduma za utunzaji wa tovuti",
      "Weka bei kulingana na ukubwa wa kazi",
      "Endelea kujifunza teknolojia mpya"
    ]
  },
  {
    id: "50",
    title: "Duka la Vifaa vya Sanaa",
    category: "Sanaa na Burudani",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 6000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza vifaa vya sanaa kama rangi, brashi, karatasi, na vifaa vingine vya usanii.",
    steps: [
      "Tafuta wasambazaji wa vifaa vya sanaa",
      "Pata duka au eneo la kuuzia",
      "Nunua bidhaa za awali",
      "Tangaza biashara yako",
      "Jenga mahusiano na wasanii"
    ],
    requirements: [
      "Duka au eneo la kuuzia",
      "Mtaji wa kununulia bidhaa",
      "Ujuzi wa vifaa vya sanaa",
      "Mtandao wa wasanii",
      "Leseni ya biashara"
    ],
    tips: [
      "Anzisha kozi za sanaa",
      "Weka vifaa vya hali ya juu",
      "Toa ushauri kwa wasanii wanaoanza",
      "Fanya maonyesho ya sanaa kwenye duka lako"
    ]
  },
  {
    id: "51",
    title: "Uchapishaji wa T-Shirt",
    category: "Ubunifu na Mitindo",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 1-3",
    description: "Kuchapisha na kuuza t-shirt zenye michoro, maandishi, na nembo mbalimbali.",
    steps: [
      "Nunua mashine ya kuchapisha t-shirt",
      "Pata t-shirt za hali ya juu",
      "Buni michoro na maandishi",
      "Anzisha uzalishaji wa t-shirt",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Mashine ya kuchapisha t-shirt",
      "T-shirt tupu",
      "Rangi za kuchapisha",
      "Kompyuta na programu za kubuni",
      "Eneo la kazi"
    ],
    tips: [
      "Tengeneza michoro ya kipekee",
      "Anzisha huduma za kuchapisha kwa wateja",
      "Tumia t-shirt za hali ya juu",
      "Weka bei kulingana na ubora"
    ]
  },
  {
    id: "52",
    title: "Bustani ya Maua",
    category: "Kilimo",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 3-6",
    description: "Kupanda na kuuza maua kwa ajili ya sherehe, mapambo, na matumizi mengine.",
    steps: [
      "Pata eneo la ardhi",
      "Nunua mbegu za maua",
      "Anzisha bustani ya maua",
      "Tangaza biashara yako",
      "Anzisha mfumo wa kusambaza maua"
    ],
    requirements: [
      "Eneo la ardhi",
      "Mbegu za maua",
      "Mfumo wa umwagiliaji",
      "Mbolea na dawa",
      "Ujuzi wa kulima maua"
    ],
    tips: [
      "Panda aina mbalimbali za maua",
      "Lenga matukio kama harusi na sherehe",
      "Tumia mbinu za kilimo cha kiasili",
      "Toa huduma za upakiaji wa maua"
    ]
  },
  {
    id: "53",
    title: "Huduma za Mshauri wa Mali",
    category: "Huduma",
    type: "Huduma",
    minCapital: 1000000,
    maxCapital: 3000000,
    timeToProfit: "Miezi 2-4",
    description: "Kutoa ushauri kuhusu ununuzi, uuzaji, na upangishaji wa mali kama vile nyumba na ardhi.",
    steps: [
      "Pata mafunzo ya ushauri wa mali",
      "Anzisha ofisi ndogo",
      "Jenga mtandao wa wamiliki wa mali",
      "Tangaza huduma zako",
      "Tengeneza mfumo wa kuweka kumbukumbu"
    ],
    requirements: [
      "Ujuzi wa mali",
      "Ofisi ndogo",
      "Mtandao wa intaneti",
      "Simu ya mawasiliano",
      "Leseni husika"
    ],
    tips: [
      "Jenga mtandao mkubwa wa watu",
      "Kuwa mwaminifu na wateja wako",
      "Toa ushauri wa thamani ya mali",
      "Tengeneza mfumo wa kupata asilimia"
    ]
  },
  {
    id: "54",
    title: "Biashara ya Vifaa vya Mifumo ya Sola",
    category: "Teknolojia na Kidigitali",
    type: "Bidhaa",
    minCapital: 3000000,
    maxCapital: 10000000,
    timeToProfit: "Miezi 3-6",
    description: "Kuuza na kufunga mifumo ya sola kwa ajili ya nyumba, ofisi, na biashara.",
    steps: [
      "Tafuta wasambazaji wa vifaa vya sola",
      "Pata mafunzo ya ufungaji",
      "Pata duka au eneo la kuuzia",
      "Nunua vifaa vya awali",
      "Tangaza biashara yako"
    ],
    requirements: [
      "Mtaji wa kununulia vifaa",
      "Ujuzi wa mifumo ya sola",
      "Eneo la kuuzia",
      "Vifaa vya kufungia",
      "Leseni husika"
    ],
    tips: [
      "Toa huduma za ufungaji na matengenezo",
      "Weka vifaa vya hali ya juu",
      "Toa mafunzo ya matumizi ya sola",
      "Tengeneza vifurushi vya bei mbalimbali"
    ]
  },
  {
    id: "55",
    title: "Ufugaji wa Kuku wa Nyama",
    category: "Kilimo na Ufugaji",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 8000000,
    timeToProfit: "Miezi 2-4",
    description: "Kufuga kuku wa nyama (broilers) kwa ajili ya kuuza nyama ya kuku.",
    steps: [
      "Jenga banda la kuku",
      "Nunua vifaranga vya kuku wa nyama",
      "Pata chakula bora cha kuku",
      "Hakikisha chanjo na dawa",
      "Anzisha soko la nyama ya kuku"
    ],
    requirements: [
      "Banda la kuku",
      "Vifaranga vya kuku",
      "Chakula cha kuku",
      "Chanjo na dawa",
      "Ujuzi wa ufugaji kuku"
    ],
    tips: [
      "Hakikisha usafi wa banda",
      "Fuata ratiba ya chanjo",
      "Weka kumbukumbu za ufugaji",
      "Tafuta soko la uhakika la nyama"
    ]
  },
  {
    id: "56",
    title: "Utengenezaji wa Sanduku za Mbao",
    category: "Ukarabati na Ufundi",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutengeneza sanduku za mbao kwa ajili ya kuhifadhi vitu, kusafirishia mizigo, na matumizi mengine.",
    steps: [
      "Pata eneo la kazi",
      "Nunua vifaa vya useremala",
      "Tafuta mbao bora",
      "Anzisha uzalishaji wa sanduku",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Vifaa vya useremala",
      "Mbao bora",
      "Eneo la kazi",
      "Ujuzi wa useremala",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Tengeneza sanduku za ukubwa tofauti",
      "Tumia mbao bora zenye uimara",
      "Toa huduma za kuandika majina kwenye sanduku",
      "Lenga makampuni yanayosafirishia mizigo"
    ]
  },
  {
    id: "57",
    title: "Uuzaji wa Vipuri vya Pikipiki",
    category: "Usafirishaji",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 8000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza vipuri na vifaa vya pikipiki kwa ajili ya matengenezo na ukarabati.",
    steps: [
      "Tafuta wasambazaji wa vipuri",
      "Pata duka au eneo la kuuzia",
      "Nunua vipuri vya awali",
      "Anzisha mfumo wa kurekodi bidhaa",
      "Tangaza biashara yako"
    ],
    requirements: [
      "Duka au eneo la kuuzia",
      "Mtaji wa kununulia bidhaa",
      "Ujuzi wa vipuri vya pikipiki",
      "Leseni ya biashara",
      "Mfumo wa kurekodi bidhaa"
    ],
    tips: [
      "Jifunze aina mbalimbali za pikipiki",
      "Weka vipuri vya pikipiki zinazotumika sana",
      "Jenga mahusiano na mafundi wa pikipiki",
      "Toa huduma za ushauri"
    ]
  },
  {
    id: "58",
    title: "Utengenezaji wa Vikapu na Mikeka",
    category: "Ubunifu na Mitindo",
    type: "Bidhaa",
    minCapital: 500000,
    maxCapital: 2000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutengeneza vikapu, mikeka, na bidhaa nyingine za ukindu na majani kwa ajili ya mapambo na matumizi mengine.",
    steps: [
      "Jifunze usukaji wa vikapu na mikeka",
      "Kusanya malighafi kama ukindu na majani",
      "Tengeneza bidhaa za sampuli",
      "Anzisha uzalishaji wa bidhaa",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Ujuzi wa kusuka",
      "Malighafi kama ukindu na majani",
      "Eneo la kazi",
      "Vifaa vya kusukia",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Tengeneza bidhaa za kisasa",
      "Tumia rangi za asili kurembesha",
      "Lenga watalii na masoko ya nje",
      "Tengeneza bidhaa za ukubwa tofauti"
    ]
  },
  {
    id: "59",
    title: "Huduma za Ulinzi na Usalama",
    category: "Huduma",
    type: "Huduma",
    minCapital: 3000000,
    maxCapital: 10000000,
    timeToProfit: "Miezi 3-6",
    description: "Kutoa huduma za ulinzi na usalama kwa nyumba, ofisi, na maeneo mengine.",
    steps: [
      "Pata vibali na leseni za ulinzi",
      "Ajiri walinzi wenye uzoefu",
      "Nunua sare na vifaa vya ulinzi",
      "Anzisha ofisi ndogo",
      "Tangaza huduma zako"
    ],
    requirements: [
      "Leseni za ulinzi",
      "Walinzi wenye uzoefu",
      "Sare na vifaa vya ulinzi",
      "Ofisi ndogo",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Weka mfumo wa usimamizi wa walinzi",
      "Toa mafunzo ya mara kwa mara kwa walinzi",
      "Weka bima ya walinzi na biashara",
      "Tumia teknolojia ya kisasa kwa ulinzi"
    ]
  },
  {
    id: "60",
    title: "Huduma za Usafiri wa Wanafunzi",
    category: "Usafirishaji",
    type: "Huduma",
    minCapital: 5000000,
    maxCapital: 15000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa huduma za usafiri kwa wanafunzi kwenda na kurudi shule.",
    steps: [
      "Nunua basi au vipando vingine",
      "Pata leseni za usafirishaji",
      "Ajiri madereva wenye uzoefu",
      "Anzisha mkataba na shule au wazazi",
      "Tangaza huduma zako"
    ],
    requirements: [
      "Basi au vipando vingine",
      "Leseni za usafirishaji",
      "Madereva wenye uzoefu",
      "Bima ya gari",
      "Ofisi ndogo"
    ],
    tips: [
      "Hakikisha usalama wa watoto",
      "Weka ratiba ya uhakika",
      "Tumia mfumo wa kufuatilia vipando",
      "Toa huduma za ziada kama usimamizi wa watoto"
    ]
  },
  {
    id: "61",
    title: "Utengenezaji wa Mafuta ya Kupaka",
    category: "Urembo & Afya",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 2-4",
    description: "Kutengeneza mafuta ya kupaka ya asili kwa kutumia mbegu na mimea ya asili.",
    steps: [
      "Jifunze utengenezaji wa mafuta ya asili",
      "Kusanya malighafi kama mbegu na mimea",
      "Tengeneza mafuta ya majaribio",
      "Pata vifungashio vizuri",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Ujuzi wa utengenezaji",
      "Malighafi ya utengenezaji",
      "Vifaa vya utengenezaji",
      "Vifungashio",
      "Leseni za bidhaa za vipodozi"
    ],
    tips: [
      "Tangaza faida za mafuta ya asili",
      "Tumia vifungashio vizuri",
      "Tengeneza mafuta kwa matumizi tofauti",
      "Toa elimu kuhusu matumizi sahihi"
    ]
  },
  {
    id: "62",
    title: "Huduma za Utunzaji wa Bustani",
    category: "Huduma",
    type: "Huduma",
    minCapital: 800000,
    maxCapital: 3000000,
    timeToProfit: "Mwezi 1-2",
    description: "Kutoa huduma za kupanga, kupanda, na kutunza bustani za nyumbani na ofisini.",
    steps: [
      "Jifunze utunzaji wa bustani",
      "Nunua vifaa vya bustani",
      "Anzisha orodha ya huduma",
      "Tangaza huduma zako",
      "Jenga mtandao wa wateja"
    ],
    requirements: [
      "Vifaa vya bustani",
      "Ujuzi wa utunzaji wa bustani",
      "Usafiri wa kufika kwa wateja",
      "Mbegu na miche",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Toa huduma za kutunza bustani kila wiki",
      "Jenga mtandao wa wateja wa kudumu",
      "Toa huduma za ziada kama kupambua miti",
      "Tangaza kazi zako kwenye mitandao ya kijamii"
    ]
  },
  {
    id: "63",
    title: "Usindikaji wa Asali",
    category: "Chakula & Vinywaji",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 5000000,
    timeToProfit: "Miezi 3-6",
    description: "Kusafisha, kufungasha, na kuuza asali kutoka kwa wafugaji wa nyuki.",
    steps: [
      "Jenga mtandao wa wafugaji wa nyuki",
      "Pata vifaa vya kusafisha asali",
      "Anzisha kiwanda kidogo",
      "Tengeneza lebo na vifungashio",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Vifaa vya kusafisha asali",
      "Wafugaji wa nyuki wa kuaminika",
      "Vifungashio vizuri",
      "Leseni za chakula",
      "Eneo la kazi"
    ],
    tips: [
      "Hakikisha ubora wa asali",
      "Tumia vifungashio vya ukubwa tofauti",
      "Tangaza faida za asali ya asili",
      "Tafuta masoko ya nje ya nchi"
    ]
  },
  {
    id: "64",
    title: "Ufundishaji wa Muziki",
    category: "Sanaa na Burudani",
    type: "Huduma",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa mafunzo ya kupiga ala za muziki, kuimba, na ubunifu wa muziki.",
    steps: [
      "Pata ujuzi wa muziki",
      "Nunua ala za muziki",
      "Pata eneo la kufundishia",
      "Tengeneza mtaala wa kufundishia",
      "Tangaza kozi zako"
    ],
    requirements: [
      "Ujuzi wa muziki",
      "Ala za muziki",
      "Eneo la kufundishia",
      "Vifaa vya kufundishia",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Toa mafunzo ya aina mbalimbali za muziki",
      "Anzisha mafunzo kwa watoto na watu wazima",
      "Fanya maonyesho ya wanafunzi",
      "Toa huduma za kurekodi muziki"
    ]
  },
  {
    id: "65",
    title: "Utengenezaji wa Mikoba",
    category: "Ubunifu na Mitindo",
    type: "Bidhaa",
    minCapital: 800000,
    maxCapital: 3000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutengeneza mikoba ya ngozi, kitambaa, na malighafi nyingine kwa ajili ya matumizi mbalimbali.",
    steps: [
      "Jifunze utengenezaji wa mikoba",
      "Nunua mashine na vifaa vingine",
      "Tafuta malighafi bora",
      "Tengeneza mikoba ya sampuli",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Mashine za kushonia",
      "Malighafi kama ngozi na vitambaa",
      "Eneo la kazi",
      "Ujuzi wa utengenezaji",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Tengeneza mikoba ya mitindo ya kisasa",
      "Tumia malighafi za hali ya juu",
      "Tengeneza mikoba kwa matumizi tofauti",
      "Weka alama yako ya biashara"
    ]
  },
  {
    id: "66",
    title: "Huduma za Upakiaji wa Mizigo",
    category: "Usafirishaji",
    type: "Huduma",
    minCapital: 500000,
    maxCapital: 2000000,
    timeToProfit: "Miezi 1-2",
    description: "Kutoa huduma za kupakia na kupakua mizigo kwenye magari, nyumba, na maeneo mengine.",
    steps: [
      "Kusanya timu ya wapakiaji",
      "Nunua vifaa vya kupakia",
      "Anzisha ofisi ndogo",
      "Tangaza huduma zako",
      "Tengeneza orodha ya bei"
    ],
    requirements: [
      "Timu ya wapakiaji",
      "Vifaa vya kupakia",
      "Simu ya mawasiliano",
      "Usafiri wa kufika kwa wateja",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Kuwa na wafanyakazi wenye nguvu",
      "Toa huduma za haraka na za uhakika",
      "Weka bei kulingana na ukubwa wa kazi",
      "Hakikisha usalama wa mizigo"
    ]
  },
  {
    id: "67",
    title: "Utengenezaji wa Mishumaa",
    category: "Ubunifu na Mitindo",
    type: "Bidhaa",
    minCapital: 500000,
    maxCapital: 2000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutengeneza mishumaa ya mapambo na matumizi mengine kwa kutumia mbinu za kisasa.",
    steps: [
      "Jifunze utengenezaji wa mishumaa",
      "Nunua vifaa na malighafi",
      "Tengeneza mishumaa ya sampuli",
      "Anzisha uzalishaji wa mishumaa",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Vifaa vya kutengeneza mishumaa",
      "Nta na malighafi nyingine",
      "Eneo la kazi",
      "Vifungashio vizuri",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Tengeneza mishumaa ya rangi na harufu tofauti",
      "Lenga matukio maalum kama harusi",
      "Tumia malighafi za asili",
      "Toa huduma za kuagiza mishumaa maalum"
    ]
  },
  {
    id: "68",
    title: "Uuzaji wa Vifaa vya Kilimo",
    category: "Kilimo",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 8000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza vifaa vya kilimo kama majembe, mbolea, mbegu, na dawa za mimea.",
    steps: [
      "Tafuta wasambazaji wa vifaa vya kilimo",
      "Pata duka au eneo la kuuzia",
      "Nunua bidhaa za awali",
      "Tangaza biashara yako",
      "Jenga mahusiano na wakulima"
    ],
    requirements: [
      "Duka au eneo la kuuzia",
      "Mtaji wa kununulia bidhaa",
      "Ujuzi wa vifaa vya kilimo",
      "Leseni husika",
      "Mtandao wa wakulima"
    ],
    tips: [
      "Toa huduma za ushauri kwa wakulima",
      "Anzisha mfumo wa mikopo kwa wakulima",
      "Weka vifaa vya kisasa vya kilimo",
      "Fanya semina za mara kwa mara kwa wakulima"
    ]
  },
  {
    id: "69",
    title: "Biashara ya Vifaa vya Ofisi",
    category: "Biashara ndogo ndogo",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 6000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza vifaa vya ofisi kama karatasi, kalamu, vitabu, na vifaa vingine vinavyohitajika ofisini.",
    steps: [
      "Tafuta wasambazaji wa vifaa vya ofisi",
      "Pata duka au eneo la kuuzia",
      "Nunua bidhaa za awali",
      "Tangaza biashara yako",
      "Jenga mahusiano na ofisi"
    ],
    requirements: [
      "Duka au eneo la kuuzia",
      "Mtaji wa kununulia bidhaa",
      "Ujuzi wa vifaa vya ofisi",
      "Leseni ya biashara",
      "Mtandao wa wateja"
    ],
    tips: [
      "Toa huduma za usambazaji",
      "Weka bei za ushindani",
      "Anzisha mfumo wa kupokea oda mtandaoni",
      "Weka vifaa vya kisasa vya ofisi"
    ]
  },
  {
    id: "70",
    title: "Usindikaji wa Matunda",
    category: "Chakula & Vinywaji",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 8000000,
    timeToProfit: "Miezi 3-6",
    description: "Kusindika matunda kuwa juisi, jamu, na bidhaa nyingine zinazoweza kuhifadhiwa kwa muda mrefu.",
    steps: [
      "Jifunze usindikaji wa matunda",
      "Nunua vifaa vya usindikaji",
      "Anzisha kiwanda kidogo",
      "Tafuta wakulima wa matunda",
      "Tengeneza lebo na vifungashio"
    ],
    requirements: [
      "Vifaa vya usindikaji",
      "Eneo la kiwanda",
      "Matunda bora",
      "Vifungashio vizuri",
      "Leseni za chakula"
    ],
    tips: [
      "Sindika matunda ya msimu",
      "Tumia mbinu za kisasa za uhifadhi",
      "Tangaza ubora wa bidhaa zako",
      "Tafuta masoko mbalimbali ya bidhaa"
    ]
  },
  {
    id: "71",
    title: "Ufugaji wa Samaki Mapambo",
    category: "Kilimo na Ufugaji",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 5000000,
    timeToProfit: "Miezi 3-6",
    description: "Kufuga samaki wa mapambo kwa ajili ya kuuza kwenye maduka ya wanyama na watu binafsi.",
    steps: [
      "Jenga mabwawa au matanki ya samaki",
      "Nunua samaki wa mbegu bora",
      "Pata chakula cha samaki",
      "Simamia afya ya samaki",
      "Tangaza na uza samaki"
    ],
    requirements: [
      "Mabwawa au matanki",
      "Samaki wa mbegu bora",
      "Chakula cha samaki",
      "Vifaa vya kupima ubora wa maji",
      "Ujuzi wa ufugaji samaki"
    ],
    tips: [
      "Fuga aina mbalimbali za samaki",
      "Hakikisha usafi wa maji",
      "Lenga maduka ya wanyama wa kipenzi",
      "Toa huduma za kutengeneza matanki ya samaki"
    ]
  },
  {
    id: "72",
    title: "Ufugaji wa Mifugo Midogo",
    category: "Kilimo na Ufugaji",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 3-6",
    description: "Kufuga mifugo midogo kama sungura, bata, kanga, na wanyama wengine wadogo.",
    steps: [
      "Jenga mabanda ya wanyama",
      "Nunua wanyama wa kuanza nao",
      "Andaa chakula cha wanyama",
      "Hakikisha chanjo na dawa",
      "Tangaza na uza wanyama"
    ],
    requirements: [
      "Mabanda ya wanyama",
      "Wanyama wa kuanza nao",
      "Chakula cha wanyama",
      "Chanjo na dawa",
      "Ujuzi wa ufugaji"
    ],
    tips: [
      "Fuga aina mbalimbali za wanyama",
      "Hakikisha usafi wa mabanda",
      "Weka kumbukumbu za ufugaji",
      "Tafuta masoko mbalimbali ya wanyama"
    ]
  },
  {
    id: "73",
    title: "Uhunzi wa Vyuma",
    category: "Ukarabati na Ufundi",
    type: "Mchanganyiko",
    minCapital: 2000000,
    maxCapital: 7000000,
    timeToProfit: "Miezi 2-4",
    description: "Kutengeza bidhaa mbalimbali za chuma kama milango, madirisha, na vifaa vingine.",
    steps: [
      "Pata karakana ya kazi",
      "Nunua vifaa vya uhunzi",
      "Jifunze au ajiri mhunzi wenye uzoefu",
      "Tengeneza bidhaa za sampuli",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Karakana ya kazi",
      "Vifaa vya uhunzi",
      "Chuma cha kutosha",
      "Ujuzi wa uhunzi",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Tengeneza bidhaa za kisasa",
      "Toa dhamana kwa kazi zako",
      "Weka bei kulingana na ubora",
      "Toa huduma za matengenezo"
    ]
  },
  {
    id: "74",
    title: "Biashara ya Vipodozi",
    category: "Urembo & Afya",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 6000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza vipodozi na bidhaa za urembo kwa wanawake na wanaume.",
    steps: [
      "Tafuta wasambazaji wa vipodozi",
      "Pata duka au eneo la kuuzia",
      "Nunua bidhaa za awali",
      "Tengeneza mfumo wa kurekodi bidhaa",
      "Tangaza biashara yako"
    ],
    requirements: [
      "Duka au eneo la kuuzia",
      "Mtaji wa kununulia bidhaa",
      "Ujuzi wa vipodozi",
      "Leseni za bidhaa za vipodozi",
      "Mtandao wa wateja"
    ],
    tips: [
      "Toa ushauri kuhusu matumizi ya vipodozi",
      "Weka vipodozi vya kisasa",
      "Toa huduma za majaribio ya vipodozi",
      "Tangaza bidhaa mpya za kisasa"
    ]
  },
  {
    id: "75",
    title: "Huduma za Kusafisha Madirisha",
    category: "Huduma",
    type: "Huduma",
    minCapital: 500000,
    maxCapital: 2000000,
    timeToProfit: "Miezi 1-2",
    description: "Kutoa huduma za kusafisha madirisha ya majengo marefu, ofisi, na nyumba.",
    steps: [
      "Nunua vifaa vya kusafisha madirisha",
      "Ajiri wafanyakazi wenye uzoefu",
      "Anzisha orodha ya huduma na bei",
      "Tangaza huduma zako",
      "Jenga mtandao wa wateja"
    ],
    requirements: [
      "Vifaa vya kusafisha madirisha",
      "Wafanyakazi wenye uzoefu",
      "Ujuzi wa kusafisha madirisha",
      "Vifaa vya usalama",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Lenga majengo ya ofisi",
      "Toa huduma za mara kwa mara",
      "Hakikisha usalama wa wafanyakazi",
      "Tumia vifaa vya kisasa vya kusafisha"
    ]
  },
  {
    id: "76",
    title: "Ufugaji wa Kware",
    category: "Kilimo na Ufugaji",
    type: "Bidhaa",
    minCapital: 800000,
    maxCapital: 3000000,
    timeToProfit: "Miezi 2-4",
    description: "Kufuga kware kwa ajili ya mayai na nyama ambayo ina soko kubwa.",
    steps: [
      "Jenga banda la kware",
      "Nunua kware wa kuanza nao",
      "Andaa chakula cha kware",
      "Hakikisha chanjo na dawa",
      "Tangaza na uza mayai na nyama"
    ],
    requirements: [
      "Banda la kware",
      "Kware wa kuanza nao",
      "Chakula cha kware",
      "Chanjo na dawa",
      "Ujuzi wa ufugaji kware"
    ],
    tips: [
      "Hakikisha usafi wa banda",
      "Weka kumbukumbu za ufugaji",
      "Tafuta soko la uhakika la mayai",
      "Anzisha uuzaji wa nyama ya kware"
    ]
  },
  {
    id: "77",
    title: "Utengenezaji wa Mipira ya Plastiki",
    category: "Teknolojia na Kidigitali",
    type: "Bidhaa",
    minCapital: 3000000,
    maxCapital: 10000000,
    timeToProfit: "Miezi 4-8",
    description: "Kutengeneza bidhaa za plastiki kama ndoo, beseni, na vifaa vingine vya nyumbani.",
    steps: [
      "Nunua mashine za kutengeneza plastiki",
      "Pata malighafi ya plastiki",
      "Anzisha kiwanda kidogo",
      "Tengeneza bidhaa za sampuli",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Mashine za kutengeneza plastiki",
      "Malighafi ya plastiki",
      "Eneo la kiwanda",
      "Leseni husika",
      "Wafanyakazi wenye ujuzi"
    ],
    tips: [
      "Tengeneza bidhaa za ubora wa juu",
      "Tumia plastiki inayoweza kutumika tena",
      "Tengeneza bidhaa za matumizi mbalimbali",
      "Anzisha mfumo wa kusambaza bidhaa"
    ]
  },
  {
    id: "78",
    title: "Uuzaji wa Dawa za Asili",
    category: "Urembo & Afya",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza dawa za asili kutoka mimea na vitu vingine vya asili kwa matibabu ya magonjwa mbalimbali.",
    steps: [
      "Jifunze kuhusu dawa za asili",
      "Kusanya mimea na vitu vingine vya asili",
      "Tengeneza dawa za asili",
      "Pata vifungashio vizuri",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Ujuzi wa dawa za asili",
      "Mimea na vitu vya asili",
      "Vifaa vya kutengeneza dawa",
      "Vifungashio vizuri",
      "Leseni husika"
    ],
    tips: [
      "Tangaza faida za dawa za asili",
      "Toa maelezo ya matumizi sahihi",
      "Tengeneza dawa kwa magonjwa mbalimbali",
      "Jenga mtandao wa wateja"
    ]
  },
  {
    id: "79",
    title: "Uchimbaji wa Visima",
    category: "Huduma",
    type: "Huduma",
    minCapital: 3000000,
    maxCapital: 10000000,
    timeToProfit: "Miezi 2-4",
    description: "Kutoa huduma za kuchimba visima vya maji kwa ajili ya nyumba, kilimo, na matumizi mengine.",
    steps: [
      "Nunua vifaa vya kuchimba visima",
      "Ajiri wafanyakazi wenye uzoefu",
      "Tengeneza orodha ya huduma",
      "Tangaza huduma zako",
      "Jenga mtandao wa wateja"
    ],
    requirements: [
      "Vifaa vya kuchimba visima",
      "Wafanyakazi wenye uzoefu",
      "Ujuzi wa kuchimba visima",
      "Leseni husika",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Toa huduma za ufungaji wa pampu",
      "Tafuta wateja vijijini",
      "Toa ushauri wa matumizi ya maji",
      "Weka bei kulingana na kina cha kisima"
    ]
  },
  {
    id: "80",
    title: "Utengenezaji wa Sabuni za Kufulia",
    category: "Ubunifu na Mitindo",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 2-3",
    description: "Kutengeneza sabuni za kufulia nguo na kusafishia nyumba kwa kutumia malighafi za bei nafuu.",
    steps: [
      "Jifunze utengenezaji wa sabuni",
      "Nunua vifaa na malighafi",
      "Anzisha uzalishaji wa sabuni",
      "Tengeneza lebo na vifungashio",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Vifaa vya kutengeneza sabuni",
      "Malighafi za sabuni",
      "Eneo la kazi",
      "Vifungashio vizuri",
      "Leseni husika"
    ],
    tips: [
      "Tengeneza sabuni zenye harufu nzuri",
      "Tumia malighafi za bei nafuu",
      "Tangaza faida za sabuni zako",
      "Weka bei ya ushindani"
    ]
  },
  {
    id: "81",
    title: "Huduma za Kutoa Takataka",
    category: "Huduma",
    type: "Huduma",
    minCapital: 2000000,
    maxCapital: 8000000,
    timeToProfit: "Miezi 2-4",
    description: "Kutoa huduma za kukusanya na kutoa takataka kutoka nyumba, ofisi, na maeneo mengine.",
    steps: [
      "Nunua magari ya takataka",
      "Pata vifaa vya kukusanyia takataka",
      "Ajiri wafanyakazi",
      "Pata vibali husika",
      "Anzisha mfumo wa kukusanya takataka"
    ],
    requirements: [
      "Magari ya takataka",
      "Vifaa vya kukusanyia takataka",
      "Wafanyakazi",
      "Eneo la kutupa takataka",
      "Leseni husika"
    ],
    tips: [
      "Tengeneza ratiba ya kukusanya takataka",
      "Anzisha mfumo wa usajili wa wateja",
      "Toa elimu kuhusu upunguzaji wa takataka",
      "Fikiria pia kureycycle takataka"
    ]
  },
  {
    id: "82",
    title: "Uuzaji wa Vitabu Vilivyotumika",
    category: "Elimu",
    type: "Bidhaa",
    minCapital: 800000,
    maxCapital: 3000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza vitabu vilivyotumika kwa bei nafuu kwa wanafunzi na wasomaji wengine.",
    steps: [
      "Kusanya vitabu vilivyotumika",
      "Pata duka au eneo la kuuzia",
      "Pangilia vitabu kwa aina",
      "Weka bei za ushindani",
      "Tangaza biashara yako"
    ],
    requirements: [
      "Vitabu vilivyotumika",
      "Eneo la kuuzia",
      "Rafu za vitabu",
      "Mfumo wa kurekodi vitabu",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Tafuta vitabu vinavyohitajika shuleni",
      "Nunua vitabu kutoka kwa wanafunzi waliomaliza",
      "Toa huduma za kutafuta vitabu maalum",
      "Anzisha mfumo wa kubadilishana vitabu"
    ]
  },
  {
    id: "83",
    title: "Huduma za Kupiga Picha za Matukio",
    category: "Sanaa na Burudani",
    type: "Huduma",
    minCapital: 1500000,
    maxCapital: 6000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa huduma za kupiga picha kwenye harusi, sherehe, na matukio mengine.",
    steps: [
      "Nunua kamera na vifaa vingine",
      "Jifunze mbinu za upigaji picha",
      "Tengeneza tovuti au ukurasa wa mitandao ya kijamii",
      "Tangaza huduma zako",
      "Jenga mtandao wa wateja"
    ],
    requirements: [
      "Kamera nzuri",
      "Vifaa vya mwanga",
      "Kompyuta ya kuhariri picha",
      "Ujuzi wa upigaji picha",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Lenga matukio kama harusi na sherehe",
      "Toa huduma za uhariri wa picha",
      "Anzisha huduma za albamu za picha",
      "Toa huduma za video pia"
    ]
  },
  {
    id: "84",
    title: "Utengenezaji wa Vyakula vya Watoto",
    category: "Chakula & Vinywaji",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 6000000,
    timeToProfit: "Miezi 3-6",
    description: "Kutengeneza vyakula vya watoto kutokana na nafaka, matunda, na mbogamboga za asili.",
    steps: [
      "Jifunze utengenezaji wa vyakula vya watoto",
      "Nunua vifaa vya usindikaji",
      "Pata malighafi bora na salama",
      "Tengeneza vyakula vya majaribio",
      "Pata leseni za chakula"
    ],
    requirements: [
      "Vifaa vya usindikaji",
      "Malighafi bora",
      "Eneo la kazi lenye usafi",
      "Vifungashio salama",
      "Leseni za chakula"
    ],
    tips: [
      "Hakikisha usafi wa hali ya juu",
      "Tumia malighafi za asili",
      "Tangaza faida za vyakula vyako",
      "Weka maelezo ya virutubishi kwenye vifungashio"
    ]
  },
  {
    id: "85",
    title: "Huduma za Kuandika Barua na Nyaraka",
    category: "Huduma",
    type: "Huduma",
    minCapital: 500000,
    maxCapital: 1500000,
    timeToProfit: "Mwezi 1",
    description: "Kutoa huduma za kuandika barua, nyaraka, na hati mbalimbali kwa watu wasioweza.",
    steps: [
      "Pata kompyuta na printa",
      "Anzisha ofisi ndogo",
      "Tangaza huduma zako",
      "Jenga mtandao wa wateja",
      "Tengeneza orodha ya bei"
    ],
    requirements: [
      "Kompyuta na printa",
      "Ofisi ndogo",
      "Ujuzi wa kuandika",
      "Mtandao wa intaneti",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Lenga watu wasiojua kuandika",
      "Toa huduma za kutafsiri nyaraka",
      "Toa huduma za kutengeneza CV",
      "Anzisha huduma za kuchapisha nyaraka"
    ]
  },
  {
    id: "86",
    title: "Utengenezaji wa Vifaa vya Michezo",
    category: "Ubunifu na Mitindo",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 7000000,
    timeToProfit: "Miezi 3-6",
    description: "Kutengeneza vifaa vya michezo kama mpira, jezi, na vifaa vingine vya michezo ya asili.",
    steps: [
      "Jifunze utengenezaji wa vifaa vya michezo",
      "Nunua vifaa na malighafi",
      "Anzisha uzalishaji wa vifaa",
      "Tengeneza vifaa vya sampuli",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Vifaa vya utengenezaji",
      "Malighafi bora",
      "Eneo la kazi",
      "Ujuzi wa utengenezaji",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Tengeneza vifaa vya michezo ya asili",
      "Lenga shule na vilabu vya michezo",
      "Tumia malighafi za hali ya juu",
      "Tangaza ubora wa vifaa vyako"
    ]
  },
  {
    id: "87",
    title: "Huduma za Kutengeza Nyumba za Mbao",
    category: "Ujenzi",
    type: "Huduma",
    minCapital: 3000000,
    maxCapital: 10000000,
    timeToProfit: "Miezi 2-4",
    description: "Kutoa huduma za kutengeneza nyumba za mbao kwa ajili ya mapumziko, bustani, na matumizi mengine.",
    steps: [
      "Jifunze useremala wa nyumba za mbao",
      "Nunua vifaa vya useremala",
      "Tengeneza mfano wa nyumba za mbao",
      "Tangaza huduma zako",
      "Jenga mtandao wa wateja"
    ],
    requirements: [
      "Vifaa vya useremala",
      "Mbao bora",
      "Ujuzi wa useremala",
      "Wafanyakazi wenye uzoefu",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Tengeneza nyumba za mitindo mbalimbali",
      "Toa ushauri wa matengenezo",
      "Tumia mbao zinazostahimili hali ya hewa",
      "Tangaza faida za nyumba za mbao"
    ]
  },
  {
    id: "88",
    title: "Usindikaji wa Asali",
    category: "Chakula & Vinywaji",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 5000000,
    timeToProfit: "Miezi 3-6",
    description: "Kusafisha, kufungasha, na kuuza asali kutoka kwa wafugaji wa nyuki.",
    steps: [
      "Jenga mtandao wa wafugaji wa nyuki",
      "Pata vifaa vya kusafisha asali",
      "Anzisha kiwanda kidogo",
      "Tengeneza lebo na vifungashio",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Vifaa vya kusafisha asali",
      "Wafugaji wa nyuki wa kuaminika",
      "Vifungashio vizuri",
      "Leseni za chakula",
      "Eneo la kazi"
    ],
    tips: [
      "Hakikisha ubora wa asali",
      "Tumia vifungashio vya ukubwa tofauti",
      "Tangaza faida za asali ya asili",
      "Tafuta masoko ya nje ya nchi"
    ]
  },
  {
    id: "89",
    title: "Ufundishaji wa Lugha za Kigeni",
    category: "Elimu na Mafunzo",
    type: "Huduma",
    minCapital: 500000,
    maxCapital: 2500000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa mafunzo ya lugha za kigeni kama Kiingereza, Kifaransa, Kichina, na Kiarabu.",
    steps: [
      "Anzisha mtaala wa kufundishia",
      "Pata eneo la kufundishia",
      "Andaa vifaa vya kufundishia",
      "Tangaza kozi zako",
      "Fanya majaribio na wanafunzi wa kwanza"
    ],
    requirements: [
      "Ujuzi wa lugha unazofundisha",
      "Eneo la kufundishia",
      "Vifaa vya kufundishia",
      "Vitabu na rasilimali nyingine",
      "Mbinu za kufundishia"
    ],
    tips: [
      "Anza na lugha mojawapo unayoijua vizuri",
      "Tengeneza makundi kulingana na viwango",
      "Ongeza vipindi vya mazoezi ya mazungumzo",
      "Fikiria pia kufundisha mtandaoni"
    ]
  },
  {
    id: "90",
    title: "Biashara ya Sanaa za Asili",
    category: "Sanaa na Burudani",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza sanaa za asili kama vinyago, michoro, na mapambo kutoka kwa wasanii wa Tanzania.",
    steps: [
      "Jenga mtandao wa wasanii wa asili",
      "Pata duka au eneo la kuuzia",
      "Nunua sanaa za awali",
      "Tangaza biashara yako",
      "Jenga mtandao wa wateja"
    ],
    requirements: [
      "Mtandao wa wasanii",
      "Eneo la kuuzia",
      "Mtaji wa kununulia sanaa",
      "Ujuzi wa sanaa za asili",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Lenga watalii na wapenzi wa sanaa",
      "Toa maelezo ya historia ya sanaa",
      "Tangaza kupitia hoteli na vituo vya watalii",
      "Tengeneza tovuti ya kuuzia sanaa mtandaoni"
    ]
  },
  {
    id: "91",
    title: "Huduma za Kutengeza Bustani",
    category: "Huduma",
    type: "Huduma",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa huduma za kubuni na kutengeneza bustani za mapambo kwenye nyumba, ofisi, na maeneo mengine.",
    steps: [
      "Jifunze ubunifu wa bustani",
      "Nunua vifaa vya bustani",
      "Anzisha orodha ya huduma",
      "Tengeneza bustani za sampuli",
      "Tangaza huduma zako"
    ],
    requirements: [
      "Ujuzi wa ubunifu wa bustani",
      "Vifaa vya bustani",
      "Mbegu na miche ya maua",
      "Wafanyakazi wenye uzoefu",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Buni bustani za mitindo mbalimbali",
      "Tumia mimea ya asili inayohimili hali ya hewa",
      "Toa huduma za matunzo ya bustani",
      "Tangaza kazi zako kupitia mitandao ya kijamii"
    ]
  },
  {
    id: "92",
    title: "Uuzaji wa Mabati na Vifaa vya Ujenzi",
    category: "Ujenzi",
    type: "Bidhaa",
    minCapital: 5000000,
    maxCapital: 15000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza mabati, misumari, matofali, na vifaa vingine vya ujenzi.",
    steps: [
      "Tafuta wasambazaji wa vifaa vya ujenzi",
      "Pata eneo la biashara",
      "Nunua bidhaa za awali",
      "Anzisha mfumo wa usafirishaji",
      "Tangaza biashara yako"
    ],
    requirements: [
      "Eneo la biashara",
      "Mtaji wa kununulia bidhaa",
      "Gari la kusafirishia",
      "Leseni ya biashara",
      "Wafanyakazi"
    ],
    tips: [
      "Toa huduma za usafirishaji",
      "Weka bei za ushindani",
      "Jenga mahusiano na wakandarasi",
      "Toa huduma za ushauri wa ujenzi"
    ]
  },
  {
    id: "93",
    title: "Huduma za Ukarabati wa Gari",
    category: "Ukarabati na Ufundi",
    type: "Huduma",
    minCapital: 3000000,
    maxCapital: 10000000,
    timeToProfit: "Miezi 2-4",
    description: "Kutoa huduma za kukarabati magari kama vile injini, umeme, na sehemu nyingine.",
    steps: [
      "Pata karakana ya kazi",
      "Nunua vifaa vya ukarabati",
      "Ajiri mafundi wenye uzoefu",
      "Anzisha orodha ya huduma",
      "Tangaza huduma zako"
    ],
    requirements: [
      "Karakana ya kazi",
      "Vifaa vya ukarabati",
      "Mafundi wenye uzoefu",
      "Leseni husika",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Toa huduma za ubora wa juu",
      "Tumia vipuri vya hali ya juu",
      "Toa dhamana kwa kazi zako",
      "Jenga mahusiano na madereva"
    ]
  },
  {
    id: "94",
    title: "Utengenezaji wa Kofia",
    category: "Ubunifu na Mitindo",
    type: "Bidhaa",
    minCapital: 800000,
    maxCapital: 3000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutengeneza kofia za mitindo mbalimbali kwa kutumia vitambaa vya asili na vya kisasa.",
    steps: [
      "Jifunze utengenezaji wa kofia",
      "Nunua mashine na vifaa vingine",
      "Tafuta vitambaa bora",
      "Tengeneza kofia za sampuli",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Mashine za kushonia",
      "Vitambaa na malighafi nyingine",
      "Ujuzi wa utengenezaji wa kofia",
      "Eneo la kazi",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Tengeneza kofia za mitindo mbalimbali",
      "Tumia vitambaa vya asili kwa nyongeza ya thamani",
      "Lenga matukio maalum kama harusi",
      "Tengeneza kofia kwa oda maalum"
    ]
  },
  {
    id: "95",
    title: "Utengenezaji wa Blanketi na Mashuka",
    category: "Ubunifu na Mitindo",
    type: "Bidhaa",
    minCapital: 2000000,
    maxCapital: 7000000,
    timeToProfit: "Miezi 3-6",
    description: "Kutengeneza blanketi, mashuka, na vitambaa vingine vya kitanda kwa kutumia vitambaa bora.",
    steps: [
      "Nunua mashine za kushonia",
      "Tafuta vitambaa bora",
      "Anzisha kiwanda kidogo",
      "Tengeneza bidhaa za sampuli",
      "Tangaza bidhaa zako"
    ],
    requirements: [
      "Mashine za kushonia",
      "Vitambaa bora",
      "Eneo la kazi",
      "Wafanyakazi wenye uzoefu",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Tengeneza bidhaa za ubora wa juu",
      "Tumia vitambaa vya hali ya juu",
      "Tengeneza bidhaa za ukubwa tofauti",
      "Weka lebo yako kwenye bidhaa"
    ]
  },
  {
    id: "96",
    title: "Biashara ya Kuuza Mbegu za Kilimo",
    category: "Kilimo",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 6000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza mbegu bora za mazao mbalimbali ya kilimo kwa wakulima.",
    steps: [
      "Tafuta wasambazaji wa mbegu bora",
      "Pata duka au eneo la kuuzia",
      "Nunua mbegu za awali",
      "Tangaza biashara yako",
      "Jenga mahusiano na wakulima"
    ],
    requirements: [
      "Duka au eneo la kuuzia",
      "Mtaji wa kununulia mbegu",
      "Ujuzi wa kilimo",
      "Leseni husika",
      "Mtandao wa wakulima"
    ],
    tips: [
      "Uza mbegu zinazofaa kwa mazingira ya eneo",
      "Toa ushauri wa kilimo kwa wakulima",
      "Tangaza matokeo ya mbegu zako",
      "Fanya majaribio ya mbegu kabla ya kuuza"
    ]
  },
  {
    id: "97",
    title: "Usanifu wa Tovuti",
    category: "Teknolojia na Kidigitali",
    type: "Huduma",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 1-3",
    description: "Kutoa huduma za kutengeneza tovuti kwa ajili ya biashara, taasisi, na watu binafsi.",
    steps: [
      "Jifunze usanifu wa tovuti",
      "Nunua kompyuta na programu muhimu",
      "Tengeneza mfano wa tovuti zako",
      "Tangaza huduma zako",
      "Jenga mtandao wa wateja"
    ],
    requirements: [
      "Ujuzi wa kutengeneza tovuti",
      "Kompyuta nzuri",
      "Programu za usanifu wa tovuti",
      "Mtandao wa intaneti",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Jikite kwenye usanifu wa tovuti za kisasa",
      "Toa huduma za utunzaji wa tovuti",
      "Tengeneza tovuti zinazofaa kwa simu",
      "Toa mafunzo ya kutumia tovuti"
    ]
  },
  {
    id: "98",
    title: "Biashara ya Vyombo vya Jikoni",
    category: "Biashara ndogo ndogo",
    type: "Bidhaa",
    minCapital: 1500000,
    maxCapital: 6000000,
    timeToProfit: "Miezi 2-4",
    description: "Kuuza vyombo vya jikoni kama sufuria, sahani, vikombe, na vifaa vingine vya nyumbani.",
    steps: [
      "Tafuta wasambazaji wa vyombo",
      "Pata duka au eneo la kuuzia",
      "Nunua vyombo vya awali",
      "Tangaza biashara yako",
      "Jenga mtandao wa wateja"
    ],
    requirements: [
      "Duka au eneo la kuuzia",
      "Mtaji wa kununulia vyombo",
      "Rafu za kuonyesha vyombo",
      "Leseni ya biashara",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Uza vyombo vya ubora wa juu",
      "Tengeneza vifurushi vya zawadi",
      "Lenga watu wanaoanza maisha ya ndoa",
      "Uza vyombo vya mitindo ya kisasa"
    ]
  },
  {
    id: "99",
    title: "Usafi wa Mazingira",
    category: "Huduma kwa Jamii",
    type: "Huduma",
    minCapital: 1000000,
    maxCapital: 5000000,
    timeToProfit: "Miezi 2-4",
    description: "Kutoa huduma za kusafisha mazingira ya umma, fukwe, na mabwawa kwa ushirikiano na jamii.",
    steps: [
      "Kusanya vifaa vya usafi",
      "Ajiri wafanyakazi",
      "Tangaza huduma zako",
      "Tengeneza mkataba na manispaa",
      "Anzisha mpango wa kazi"
    ],
    requirements: [
      "Vifaa vya usafi",
      "Wafanyakazi",
      "Usafiri wa kusafirishia takataka",
      "Vibali husika",
      "Mtaji wa kuanza"
    ],
    tips: [
      "Shirikiana na jamii katika usafi",
      "Tafuta ufadhili wa miradi ya usafi",
      "Anzisha miradi ya kureycycle takataka",
      "Toa elimu ya usafi wa mazingira"
    ]
  },
  {
    id: "100",
    title: "Kilimo cha Nyanya",
    category: "Kilimo",
    type: "Bidhaa",
    minCapital: 1000000,
    maxCapital: 4000000,
    timeToProfit: "Miezi 3-6",
    description: "Kulima nyanya kwa ajili ya kuuza kwenye masoko ya mjini na viwanda vya usindikaji.",
    steps: [
      "Pata eneo la ardhi",
      "Nunua mbegu bora za nyanya",
      "Andaa ardhi na panda",
      "Tengeneza mpango wa umwagiliaji",
      "Tangaza na uza nyanya"
    ],
    requirements: [
      "Eneo la ardhi",
      "Mbegu bora za nyanya",
      "Mbolea na dawa",
      "Mfumo wa umwagiliaji",
      "Ujuzi wa kilimo cha nyanya"
    ],
    tips: [
      "Tumia mbinu za kisasa za kilimo",
      "Hakikisha umwagiliaji wa uhakika",
      "Tafuta soko la uhakika kabla ya kuanza",
      "Fikiria pia kusindika nyanya"
    ]
  }
]
