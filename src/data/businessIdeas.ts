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

export const businessIdeas: BusinessIdea[] = [
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
    ],
    businessPlan: "Mpango wa Biashara wa Kilimo cha Mbogamboga:\n\n1. Utangulizi\nBiashara ya kilimo cha mbogamboga inalenga kuzalisha na kuuza mbogamboga zenye ubora wa hali ya juu, zenye afya na bei nafuu kwa watumiaji. Tutajikita katika kutengeneza mazingira endelevu ya kilimo cha mbogamboga kwa kutumia mbinu za kisasa za kilimo.\n\n2. Malengo\n- Kuzalisha mbogamboga bora zenye virutubisho\n- Kupunguza uharibifu wa mazingira\n- Kuuza mbogamboga kwa bei nafuu\n- Kuajiri vijana wa kijiji\n\n3. Uchambuzi wa Soko\nSoko kubwa la mbogamboga lipo katika maeneo ya mijini, mahoteli, migahawa, na wakazi wa kawaida. Soko hili linaendelea kukua kutokana na ongezeko la watu wanaoishi mjini na ongezeko la ufahamu juu ya umuhimu wa kula vyakula vyenye afya.\n\n4. Mpango wa Mauzo\n- Kuuza moja kwa moja kwa watumiaji\n- Kufanya makubaliano na mahoteli na migahawa\n- Kuweka kibanda cha kuuzia mbogamboga katika eneo lenye watu wengi\n\n5. Mpango wa Fedha\n- Mtaji wa kuanzia: TZS 500,000\n- Matumizi ya kila mwezi: TZS 200,000\n- Matarajio ya mapato ya kila mwezi: TZS 800,000\n- Matarajio ya faida ya kila mwezi: TZS 600,000\n\n6. Mpango wa Uendeshaji\n- Kulima kwa zamu ili kuhakikisha upatikanaji wa mbogamboga mwaka mzima\n- Kutumia mbolea za asili kuongeza ubora wa mbogamboga\n- Kutumia mfumo wa umwagiliaji wa matone kuhifadhi maji"
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
    ],
    businessPlan: "Mpango wa Biashara wa Duka la Rejareja:\n\n1. Utangulizi\nBiashara hii inalenga kuanzisha duka la rejareja linalouza bidhaa za matumizi ya kila siku katika eneo la makazi. Duka hili litauza bidhaa mbalimbali za msingi ambazo zinahitajika kila siku na wakazi wa eneo hilo.\n\n2. Malengo\n- Kuwa na duka lenye bidhaa zote muhimu za nyumbani\n- Kutoa bei nafuu kwa wateja\n- Kuwa na huduma bora na ya kuvutia wateja\n- Kupata faida ya kutosha\n\n3. Uchambuzi wa Soko\nSoko la bidhaa za rejareja ni kubwa na la uhakika. Kila mtu anahitaji bidhaa za matumizi ya nyumbani kila siku. Washindani wako ni maduka mengine ya karibu, lakini tutajitofautisha kwa kutoa huduma bora zaidi na bei nafuu.\n\n4. Mpango wa Mauzo\n- Kuweka bei nafuu kuliko washindani\n- Kutoa huduma za usambazaji kwa wateja walio karibu\n- Kutumia mpango wa uaminifu kwa wateja wa mara kwa mara\n\n5. Mpango wa Fedha\n- Mtaji wa kuanzia: TZS 3,000,000\n- Matumizi ya kila mwezi: TZS 500,000\n- Matarajio ya mapato ya kila mwezi: TZS 2,000,000\n- Matarajio ya faida ya kila mwezi: TZS 1,500,000\n\n6. Mpango wa Uendeshaji\n- Duka litafunguliwa kila siku kuanzia saa 1 asubuhi hadi saa 1 usiku\n- Kutumia mfumo wa kieletroniki wa kurekodi mauzo\n- Kufanya uchunguzi wa mara kwa mara wa bidhaa zinazoisha"
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
    ],
    businessPlan: "Mpango wa Biashara wa Salon ya Nywele:\n\n1. Utangulizi\nSalon ya Nywele ni biashara inayolenga kutoa huduma bora za urembo na utengenezaji wa nywele kwa wanawake na wanaume. Lengo ni kujenga kituo kimoja kinachotoa huduma zote za urembo chini ya paa moja.\n\n2. Malengo\n- Kuanzisha salon ya kisasa na yenye vifaa vya hali ya juu\n- Kutoa huduma bora na za kipekee\n- Kuajiri wafanyakazi wenye ujuzi wa hali ya juu\n- Kujenga utambulisho wa salon kama kituo cha urembo bora katika eneo\n\n3. Uchambuzi wa Soko\nHuduma za salon zina mahitaji makubwa katika maeneo ya mijini. Watu wanaendelea kutafuta huduma bora za urembo na utengenezaji wa nywele. Soko hili linaendelea kukua kutokana na ongezeko la watu wanaojali muonekano wao.\n\n4. Mpango wa Mauzo\n- Kutoa huduma za kipekee na za hali ya juu\n- Kutumia mitandao ya kijamii kutangaza biashara\n- Kutoa ofa maalum kwa wateja wapya\n\n5. Mpango wa Fedha\n- Mtaji wa kuanzia: TZS 4,000,000\n- Matumizi ya kila mwezi: TZS 1,000,000\n- Matarajio ya mapato ya kila mwezi: TZS 3,000,000\n- Matarajio ya faida ya kila mwezi: TZS 2,000,000\n\n6. Mpango wa Uendeshaji\n- Salon itafunguliwa kila siku kuanzia saa 2 asubuhi hadi saa 12 jioni\n- Kuajiri wafanyakazi 5 wenye ujuzi\n- Kupata vifaa vya kisasa vya salon"
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
    ],
    businessPlan: "Mpango wa Biashara wa Ufugaji wa Kuku wa Mayai:\n\n1. Utangulizi\nBiashara ya ufugaji wa kuku wa mayai inalenga kuzalisha mayai ya kuku kwa ajili ya soko la mijini na vijijini. Kuna uhitaji mkubwa wa mayai ya kuku ambayo ni chanzo muhimu cha protini.\n\n2. Malengo\n- Kuanzisha mradi wa kuku 500 wa kutaga mayai\n- Kuzalisha mayai bora na salama\n- Kujenga mtandao wa wateja wa uhakika\n- Kupanua biashara baada ya miaka miwili\n\n3. Uchambuzi wa Soko\nSoko la mayai ya kuku ni kubwa na la uhakika. Hoteli, migahawa, mikahawa, na kaya nyingi zinatumia mayai kila siku. Uhitaji wa mayai unazidi ongezeko la idadi ya watu na uchumi.\n\n4. Mpango wa Mauzo\n- Kuuza mayai moja kwa moja kwa hoteli na migahawa\n- Kutafuta wasambazaji wa mayai katika maeneo mbalimbali\n- Kuuza mayai kwa jumla kwa wafanyabiashara wa rejareja\n\n5. Mpango wa Fedha\n- Mtaji wa kuanzia: TZS 5,000,000\n- Matumizi ya kila mwezi: TZS 1,500,000\n- Matarajio ya mapato ya kila mwezi: TZS 3,000,000\n- Matarajio ya faida ya kila mwezi: TZS 1,500,000\n\n6. Mpango wa Uendeshaji\n- Kufuga kuku 500 wa kutaga mayai\n- Kuhakikisha banda lina viwango vya joto na hewa safi\n- Kutoa chakula bora na maji safi kwa kuku\n- Kutumia mfumo wa kumbukumbu za uzalishaji"
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
    ],
    businessPlan: "Mpango wa Biashara wa Huduma za Usafi wa Nyumba:\n\n1. Utangulizi\nBiashara hii inalenga kutoa huduma za usafi wa nyumbani kwa familia na ofisi katika maeneo ya mjini. Huduma zitajumuisha usafi wa kawaida, usafi mkubwa, na huduma maalum za usafi.\n\n2. Malengo\n- Kutoa huduma bora za usafi kwa wateja\n- Kuajiri na kufundisha wafanyakazi wa usafi\n- Kupanua huduma katika maeneo mbalimbali ya jiji\n- Kuongeza idadi ya wateja wa mkataba\n\n3. Uchambuzi wa Soko\nFamilia nyingi na ofisi zinahitaji huduma za usafi. Wengi hawana muda wa kufanya usafi wenyewe kutokana na kazi nyingi. Soko hili linaendelea kukua hasa katika maeneo ya mijini.\n\n4. Mpango wa Mauzo\n- Kutangaza huduma kupitia mitandao ya kijamii\n- Kutoa ofa maalum kwa wateja wapya\n- Kupata mapendekezo kutoka kwa wateja walioridhika\n\n5. Mpango wa Fedha\n- Mtaji wa kuanzia: TZS 1,000,000\n- Matumizi ya kila mwezi: TZS 500,000\n- Matarajio ya mapato ya kila mwezi: TZS 2,000,000\n- Matarajio ya faida ya kila mwezi: TZS 1,500,000\n\n6. Mpango wa Uendeshaji\n- Kuajiri wafanyakazi 5 wa usafi\n- Kutoa mafunzo ya usafi kwa wafanyakazi\n- Kununua vifaa bora vya usafi\n- Kuweka ratiba ya kazi kwa kila mteja"
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
    ],
    businessPlan: "Mpango wa Biashara wa Biashara ya Viatu Online:\n\n1. Utangulizi\nBiashara hii inalenga kuuza viatu mbalimbali kupitia mtandao na kusambaza kwa wateja katika maeneo mbalimbali ya mji. Tutahudumia viatu vya wanawake, wanaume, na watoto vya mitindo ya kisasa.\n\n2. Malengo\n- Kuanzisha duka la mtandaoni la viatu\n- Kutoa bidhaa bora na za kisasa\n- Kuwa na mfumo bora wa usambazaji\n- Kujenga jina zuri katika biashara ya mtandaoni\n\n3. Uchambuzi wa Soko\nBiashara ya mtandaoni inaendelea kukua kwa kasi. Watu wengi wanapenda kununua bidhaa mtandaoni kwa urahisi. Soko la viatu ni kubwa na watu daima wanahitaji viatu vipya.\n\n4. Mpango wa Mauzo\n- Kutumia mitandao ya kijamii kama Instagram na Facebook\n- Kutoa huduma ya usambazaji bila malipo kwa oda kubwa\n- Kutoa ofa maalum kwa wateja wapya\n\n5. Mpango wa Fedha\n- Mtaji wa kuanzia: TZS 2,500,000\n- Matumizi ya kila mwezi: TZS 500,000\n- Matarajio ya mapato ya kila mwezi: TZS 3,000,000\n- Matarajio ya faida ya kila mwezi: TZS 2,500,000\n\n6. Mpango wa Uendeshaji\n- Kununua bidhaa kutoka kwa wasambazaji wa jumla\n- Kupiga picha za ubora wa juu za bidhaa\n- Kuweka mfumo wa kupokea oda mtandaoni\n- Kusambaza bidhaa kwa wakati"
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
    ],
    businessPlan: "Mpango wa Biashara wa Kituo cha Marekebisho ya Simu:\n\n1. Utangulizi\nBiashara hii inalenga kutoa huduma za marekebisho ya simu za mkononi na kuuza vipuri na vifaa vya simu. Tutakuwa kituo cha kutatua matatizo yote ya simu za mkononi.\n\n2. Malengo\n- Kuanzisha kituo cha kisasa cha marekebisho ya simu\n- Kutoa huduma bora na za haraka\n- Kuwa na wafanyakazi wenye ujuzi wa hali ya juu\n- Kuuza vipuri na vifaa vya simu vya ubora wa juu\n\n3. Uchambuzi wa Soko\nMahitaji ya huduma za marekebisho ya simu yanaendelea kuongezeka kadri idadi ya watumiaji wa simu za mkononi inavyoongezeka. Simu nyingi zinahitaji marekebisho mara kwa mara.\n\n4. Mpango wa Mauzo\n- Kutoa bei nafuu na huduma za haraka\n- Kutangaza huduma kupitia mitandao ya kijamii\n- Kutoa hakikisho kwa kazi zetu\n\n5. Mpango wa Fedha\n- Mtaji wa kuanzia: TZS 3,000,000\n- Matumizi ya kila mwezi: TZS 1,000,000\n- Matarajio ya mapato ya kila mwezi: TZS 4,000,000\n- Matarajio ya faida ya kila mwezi: TZS 3,000,000\n\n6. Mpango wa Uendeshaji\n- Kituo kitafunguliwa kila siku kazi kuanzia saa 2 asubuhi hadi saa 12 jioni\n- Kuajiri wafanyakazi 3 wenye ujuzi wa marekebisho ya simu\n- Kununua vifaa vya kisasa vya marekebisho ya simu\n- Kuweka akiba ya vipuri vya simu vinavyotumika sana"
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
    ],
    businessPlan: "Mpango wa Biashara wa Uchapishaji na Utengenezaji wa Vitambulisho:\n\n1. Utangulizi\nBiashara hii inalenga kutoa huduma za uchapishaji wa nyaraka, utengenezaji wa vitambulisho, na huduma nyingine za uchapishaji kwa wateja mbalimbali. Tutahudumia makampuni, shule, taasisi na watu binafsi.\n\n2. Malengo\n- Kuanzisha kituo cha kisasa cha uchapishaji\n- Kutoa huduma za ubora wa juu za uchapishaji\n- Kuwa kituo kinachotoa huduma zote za uchapishaji chini ya paa moja\n- Kutumia teknolojia ya kisasa ya uchapishaji\n\n3. Uchambuzi wa Soko\nMahitaji ya huduma za uchapishaji ni makubwa hasa katika maeneo ya mijini. Shule, makampuni, na taasisi nyingi zinahitaji huduma za uchapishaji kwa shughuli zao za kila siku.\n\n4. Mpango wa Mauzo\n- Kutembelea taasisi na makampuni kutangaza huduma zetu\n- Kutoa bei nafuu kwa wateja wa mkataba\n- Kutoa huduma za haraka na za ubora wa juu\n\n5. Mpango wa Fedha\n- Mtaji wa kuanzia: TZS 5,000,000\n- Matumizi ya kila mwezi: TZS 1,500,000\n- Matarajio ya mapato ya kila mwezi: TZS 4,000,000\n- Matarajio ya faida ya kila mwezi: TZS 2,500,000\n\n6. Mpango wa Uendeshaji\n- Kituo kitafunguliwa kila siku kazi kuanzia saa 2 asubuhi hadi saa 12 jioni\n- Kuajiri wafanyakazi 4 wenye ujuzi wa uchapishaji na ubunifu\n- Kununua vifaa vya kisasa vya uchapishaji\n- Kutoa huduma za uchapishaji za haraka"
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
    ],
    businessPlan: "Mpango wa Biashara wa Kituo cha Kuosha Magari:\n\n1. Utangulizi\nBiashara hii inalenga kuanzisha kituo cha kisasa cha kuosha magari katika eneo la mjini. Tutahudumia wamiliki wa magari binafsi na magari ya biashara kwa kutumia njia za kisasa za kuosha magari.\n\n2. Malengo\n- Kuanzisha kituo cha kisasa cha kuosha magari\n- Kutoa huduma bora na za haraka\n- Kutumia njia za kisasa za kuosha magari\n- Kuwa kituo cha kuosha magari kinachopendwa zaidi katika eneo\n\n3. Uchambuzi wa Soko\nMahitaji ya huduma za kuosha magari yanaendelea kuongezeka kadri idadi ya magari inavyoongezeka. Wamiliki wa magari wanatafuta huduma za ubora wa juu za kuosha magari.\n\n4. Mpango wa Mauzo\n- Kutoa huduma za ubora wa juu kwa bei nafuu\n- Kutoa kadi za uanachama kwa wateja wa mara kwa mara\n- Kutoa huduma za ziada kama kusafisha ndani na kusafisha injini\n\n5. Mpango wa Fedha\n- Mtaji wa kuanzia: TZS 4,000,000\n- Matumizi ya kila mwezi: TZS 1,000,000\n- Matarajio ya mapato ya kila mwezi: TZS 3,000,000\n- Matarajio ya faida ya kila mwezi: TZS 2,000,000\n\n6. Mpango wa Uendeshaji\n- Kituo kitafunguliwa kila siku kazi kuanzia saa 2 asubuhi hadi saa 12 jioni\n- Kuajiri wafanyakazi 6 wenye ujuzi wa kuosha magari\n- Kununua vifaa vya kisasa vya kuosha magari\n- Kutumia sabuni na kemikali zinazohifadhi mazingira"
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
      "Weka bei inayoendana na uwezo wa watu katika eneo lako",
      "Toa kozi za jioni kwa watu wanaofanya kazi"
    ],
    businessPlan: "Mpango wa Biashara wa Ufundishaji wa Kompyuta:\n\n1. Utangulizi\nBiashara hii inalenga kutoa mafunzo ya kompyuta na teknolojia kwa watu katika jamii. Tutafundisha ujuzi wa msingi na wa kati wa kompyuta, programu za ofisi, na ujuzi mwingine wa kidijitali.\n\n2. Malengo\n- Kuanzisha kituo cha mafunzo ya kompyuta\n- Kufundisha ujuzi wa kidijitali kwa wanajamii\n- Kuwawezesha vijana kupata ajira au kujiajiri\n- Kukabiliana na pengo la kidijitali katika jamii\n\n3. Uchambuzi wa Soko\nUjuzi wa kompyuta umekuwa muhimu sana katika ulimwengu wa leo. Kuna uhitaji mkubwa wa mafunzo ya kompyuta kwa watu wa rika zote. Vijana wanahitaji ujuzi huu kwa ajili ya ajira, wakati watu wazima wanahitaji kuboresha ujuzi wao wa kidijitali.\n\n4. Mpango wa Mauzo\n- Kutangaza kozi zetu kupitia mitandao ya kijamii\n- Kushirikiana na shule na taasisi za elimu\n- Kutoa ofa maalum kwa makundi ya wanafunzi\n\n5. Mpango wa Fedha\n- Mtaji wa kuanzia: TZS 3,000,000\n- Matumizi ya kila mwezi: TZS 1,000,000\n- Matarajio ya mapato ya kila mwezi: TZS 2,500,000\n- Matarajio ya faida ya kila mwezi: TZS 1,500,000\n\n6. Mpango wa Uendeshaji\n- Kituo kitafunguliwa kila siku kuanzia saa 2 asubuhi hadi saa 12 jioni\n- Kuajiri walimu 2 wenye ujuzi wa kompyuta\n- Kupanga kozi za siku 2-3 kwa wiki kwa kila kundi\n- Kutoa mafunzo ya MS Office, graphic design, na ujuzi wa msingi wa kompyuta"
  }
];
