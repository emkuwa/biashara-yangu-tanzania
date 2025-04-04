
export interface BusinessIdea {
  id: string;
  title: string;
  category: string;
  minCapital: number;
  maxCapital: number;
  difficulty: 'Rahisi' | 'Wastani' | 'Ngumu';
  timeToProfit: string;
  description: string;
  steps: string[];
  requirements: string[];
  tips: string[];
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
  'Biashara ndogo ndogo'
];

export const businessIdeas: BusinessIdea[] = [
  {
    id: "1",
    title: "Kilimo cha Mbogamboga",
    category: "Kilimo",
    minCapital: 300000,
    maxCapital: 1500000,
    difficulty: "Wastani",
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
    minCapital: 1000000,
    maxCapital: 5000000,
    difficulty: "Rahisi",
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
    minCapital: 1500000,
    maxCapital: 6000000,
    difficulty: "Wastani",
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
    minCapital: 2000000,
    maxCapital: 8000000,
    difficulty: "Wastani",
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
    minCapital: 500000,
    maxCapital: 2000000,
    difficulty: "Rahisi",
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
    minCapital: 1000000,
    maxCapital: 4000000,
    difficulty: "Wastani",
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
    minCapital: 1500000,
    maxCapital: 5000000,
    difficulty: "Wastani",
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
    minCapital: 3000000,
    maxCapital: 8000000,
    difficulty: "Wastani",
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
    minCapital: 2000000,
    maxCapital: 7000000,
    difficulty: "Rahisi",
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
    minCapital: 1000000,
    maxCapital: 5000000,
    difficulty: "Rahisi",
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
      "Toa vyeti kwa wahitimu",
      "Saidia wanafunzi kupata kazi",
      "Tengeneza ratiba inayowafaa wanafunzi wanaofanya kazi"
    ]
  }
];

export const filterBusinessIdeas = (
  searchTerm: string = '',
  selectedCategory: string = '',
  capitalRange: [number, number] = [0, 10000000],
  difficulty?: string
): BusinessIdea[] => {
  return businessIdeas.filter(idea => {
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === '' || idea.category === selectedCategory;
    
    // Filter by capital range
    const matchesCapital = idea.minCapital >= capitalRange[0] && idea.maxCapital <= capitalRange[1];
    
    // Filter by difficulty
    const matchesDifficulty = !difficulty || idea.difficulty === difficulty;
    
    return matchesSearch && matchesCategory && matchesCapital && matchesDifficulty;
  });
};

export const formatCurrency = (amount: number): string => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " TZS";
};
