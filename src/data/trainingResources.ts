export interface TrainingResource {
  id: string;
  title: string;
  category: string;
  description: string;
  type: 'Video' | 'Article' | 'Course' | 'Book' | 'Tool';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  language: 'Swahili' | 'English' | 'Both';
  url?: string;
  cost: 'Free' | 'Paid' | 'Freemium';
  imageUrl?: string;
}

export const trainingResources: TrainingResource[] = [
  {
    id: "1",
    title: "Misingi ya Biashara kwa Wajasiriamali",
    category: "Business Fundamentals",
    description: "Mafunzo haya yanaangazia misingi muhimu ya biashara kwa wajasiriamali wanaoanza safari ya ujasiriamali. Utajifunza mbinu za upangaji wa bajeti za biashara, utayarishaji wa mpango wa biashara unaotekelezeka, njia za kuwavutia na kuwahudumia wateja, na mikakati ya kutafuta masoko yenye tija. Kozi hii inatoa mifano halisi kutoka kwa wajasiriamali waliofanikiwa Tanzania na inajumuisha mazoezi ya vitendo yanayokusaidia kuanza mara moja.",
    type: "Course",
    level: "Beginner",
    language: "Swahili",
    url: "https://example.com/course1",
    cost: "Free",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "2",
    title: "Jinsi ya Kupata Mikopo ya Biashara Tanzania",
    category: "Finance",
    description: "Mwongozo kamili unaokuonyesha hatua kwa hatua jinsi ya kuomba na kupata mikopo ya biashara kutoka taasisi mbalimbali za kifedha nchini Tanzania. Makala hii inafafanua aina tofauti za mikopo inayopatikana (mikopo midogo, ya kati, na mikubwa), mahitaji ya nyaraka kwa kila aina ya mkopo, masharti ya mikopo kutoka benki mbalimbali na taasisi za kifedha, na mikakati ya kuongeza uwezekano wa kuidhinishiwa mkopo. Pia inaelezea namna ya kuandaa mpango wa biashara unaovutia wawekezaji na taasisi za kifedha.",
    type: "Article",
    level: "Intermediate",
    language: "Swahili",
    url: "https://example.com/article1",
    cost: "Free",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "3",
    title: "Usimamizi wa Fedha kwa Biashara Ndogo",
    category: "Finance",
    description: "Video hizi zinakufundisha mbinu za kusimamia fedha za biashara yako kwa ufanisi. Utajifunza jinsi ya kuweka vitabu vya hesabu kwa usahihi, kutofautisha mapato ya biashara na matumizi binafsi, kuandaa taarifa za kifedha za biashara, kuelewa na kutekeleza ulipaji kodi unaotakiwa kisheria, na kuweka mifumo ya kufuatilia fedha za biashara kwa kutumia programu rahisi. Mfululizo huu wa video unajumuisha mifano halisi na mazoezi ya vitendo yanayoweza kutumika katika biashara yako mara moja.",
    type: "Video",
    level: "Beginner",
    language: "Swahili",
    url: "https://example.com/video1",
    cost: "Free",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "4",
    title: "Matumizi ya Mitandao ya Kijamii katika Biashara",
    category: "Marketing",
    description: "Kozi hii inakupa ujuzi wa kutumia mitandao ya kijamii kuimarisha na kukuza biashara yako. Utajifunza jinsi ya kutengeneza na kusimamia akaunti za biashara kwenye Instagram, Facebook, WhatsApp Business, na TikTok. Kozi inafundisha mbinu za kutengeneza maudhui yanayovutia, ratiba ya machapisho, jinsi ya kujibu maoni ya wateja, kutumia picha na video kwa ufanisi, kutumia matangazo yenye malipo kwenye mitandao ya kijamii kwa bajeti ndogo, na kutumia zana za uchambuzi kupima mafanikio ya juhudi zako. Inajumuisha mifano halisi ya biashara ndogo Tanzania zilizofanikiwa kupitia mitandao ya kijamii.",
    type: "Course",
    level: "Beginner",
    language: "Swahili",
    url: "https://example.com/course2",
    cost: "Freemium",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "5",
    title: "Siri za Mafanikio ya Wajasiriamali Tanzania",
    category: "Entrepreneurship",
    description: "Mfululizo wa video za mahojiano na wajasiriamali 15 waliofanikiwa Tanzania kutoka sekta mbalimbali. Katika mahojiano haya, wajasiriamali wanashirikisha safari zao za kuanzia biashara kutoka mwanzo, changamoto walizokabiliana nazo na jinsi walivyozishinda, mikakati ya kipekee waliyotumia kukuza biashara zao, masomo waliyojifunza kutokana na makosa yao, na ushauri kwa wajasiriamali wapya. Video hizi zinatoa mtazamo wa ndani na uhalisia wa ujasiriamali Tanzania na zinaweza kukuinspire na kukupa mbinu za kutatua changamoto unazokumbana nazo.",
    type: "Video",
    level: "Intermediate",
    language: "Swahili",
    url: "https://example.com/video2",
    cost: "Free",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "6",
    title: "Utengenezaji wa Lebo na Packaging ya Bidhaa",
    category: "Product Development",
    description: "Makala ya kina inayokufundisha jinsi ya kutengeneza lebo na packaging bora kwa bidhaa zako. Inakuelimisha kuhusu umuhimu wa lebo na packaging nzuri katika kuvutia wateja, vipengele muhimu vya lebo inayofaa kisheria (maelezo ya bidhaa, viambato, tarehe ya kutengenezwa na kumalizika muda wa matumizi, mawasiliano ya mtengenezaji), misingi ya ubunifu katika utengenezaji wa lebo, aina za vifungashio vinavyofaa kwa bidhaa tofauti, watengenezaji wa lebo na packaging Tanzania na gharama zao, na jinsi ya kupata usajili wa lebo na packaging kutoka TFDA na TBS. Makala hii pia inajumuisha mifano ya lebo na packaging bora kutoka kwa biashara ndogo Tanzania.",
    type: "Article",
    level: "Intermediate",
    language: "Swahili",
    url: "https://example.com/article2",
    cost: "Free",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "7",
    title: "Sheria na Kanuni za Biashara Tanzania",
    category: "Legal",
    description: "Kozi kamili inayokupa uelewa wa kina wa sheria na kanuni zinazoongoza biashara nchini Tanzania. Inafundisha hatua za usajili wa biashara (jina la biashara, kampuni, au leseni ya biashara), aina za leseni zinazohitajika kwa sekta tofauti, utaratibu wa ulipaji kodi (VAT, kodi ya mapato, ushuru wa bidhaa), mahitaji ya kiutendaji yanayotakiwa na OSHA, vibali vya mazingira na hifadhi kutoka NEMC, pamoja na masuala ya sheria za kazi na mikataba ya wafanyakazi. Kozi hii inakuwezesha kuhakikisha biashara yako inazingatia sheria na kanuni zote zinazotakiwa, na kuepuka adhabu na faini zisizohitajika.",
    type: "Course",
    level: "Intermediate",
    language: "Swahili",
    url: "https://example.com/course3",
    cost: "Paid",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "8",
    title: "Usimamizi wa Wafanyakazi katika Biashara Ndogo",
    category: "Management",
    description: "Kitabu hiki kinakufundisha mbinu za kisasa za kusimamia wafanyakazi katika biashara ndogo na za kati. Kinashughulikia maeneo muhimu kama vile: mchakato wa kuajiri wafanyakazi wanaofaa, kuwafunza wafanyakazi wapya kwa ufanisi, kuweka malengo na kupima utendaji, mbinu za kuwaongoza na kuwamotisha wafanyakazi, kushughulikia migogoro kazini, kutengeneza mifumo ya malipo na motisha, na kujenga utamaduni wa kazi unaovutia na kudumisha wafanyakazi wenye vipaji. Kitabu kinatoa zana na mifano halisi inayoweza kutumika moja kwa moja katika biashara ndogo za Tanzania, na kinazingatia changamoto za kipekee za soko la ajira Tanzania.",
    type: "Book",
    level: "Advanced",
    language: "Swahili",
    url: "https://example.com/book1",
    cost: "Paid",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "9",
    title: "Mbinu za Uuzaji na Ushawishi kwa Wafanyabiashara",
    category: "Sales",
    description: "Mfululizo wa video zinazofundisha mbinu za kuuza bidhaa na huduma kwa ufanisi zaidi. Utajifunza jinsi ya kutambua mahitaji ya mteja, kuwasilisha bidhaa au huduma kwa njia inayoonyesha thamani yake, kushughulikia pingamizi za wateja, mbinu za kufunga mauzo, kujenga uhusiano wa muda mrefu na wateja, na kutengeneza mfumo wa rufaa za wateja. Video hizi zinaonyesha mifano halisi ya mazungumzo ya mauzo na zinakupa maneno na misemo mahususi ya kutumia wakati wa kuuza. Mbinu hizi zinaweza kutumika katika biashara yoyote, iwe ya ana kwa ana, mtandaoni, au kwa simu.",
    type: "Video",
    level: "Beginner",
    language: "Swahili",
    url: "https://example.com/video3",
    cost: "Free",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "10",
    title: "Kifaa cha Kutengeneza Bajeti ya Biashara",
    category: "Finance",
    description: "Kifaa hiki cha Excel kimeundwa mahususi kwa wajasiriamali wa Tanzania na kinakusaidia kutengeneza na kusimamia bajeti ya biashara yako kwa urahisi. Kinajumuisha vitengo vya kurekodi mapato na matumizi ya kila siku, kutengeneza utabiri wa mtiririko wa fedha kwa miezi 12, kuweka malengo ya mauzo na kufuatilia ukamilishaji wake, kuhesabu faida na hasara, kulinganisha matumizi halisi na yaliyopangwa, na kutengeneza ripoti za kifedha zinazoweza kushirikishwa na wawekezaji au benki. Kifaa hiki kinakuja na mwongozo wa matumizi na mifano iliyojazwa tayari, hivyo ni rahisi kutumia hata kwa wasio na ujuzi mkubwa wa Excel.",
    type: "Tool",
    level: "Beginner",
    language: "Both",
    url: "https://example.com/tool1",
    cost: "Free",
    imageUrl: "/placeholder.svg"
  }
];

export const categories = [
  "Business Fundamentals",
  "Finance",
  "Marketing",
  "Entrepreneurship",
  "Product Development",
  "Legal",
  "Management",
  "Sales",
  "Operations"
];

export const filterTrainingResources = (
  searchTerm: string = '',
  selectedCategory: string = '',
  selectedType: string = '',
  selectedLevel: string = '',
  selectedLanguage: string = '',
  selectedCost: string = ''
): TrainingResource[] => {
  return trainingResources.filter(resource => {
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === '' || resource.category === selectedCategory;
    
    // Filter by type
    const matchesType = selectedType === '' || resource.type === selectedType;
    
    // Filter by level
    const matchesLevel = selectedLevel === '' || resource.level === selectedLevel;
    
    // Filter by language
    const matchesLanguage = selectedLanguage === '' || resource.language === selectedLanguage || resource.language === 'Both';
    
    // Filter by cost
    const matchesCost = selectedCost === '' || resource.cost === selectedCost;
    
    return matchesSearch && matchesCategory && matchesType && matchesLevel && matchesLanguage && matchesCost;
  });
};
