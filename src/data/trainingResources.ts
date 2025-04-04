
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
    description: "Mafunzo ya misingi ya biashara kwa wajasiriamali wanaoanza, yakiangazia upangaji wa bajeti, utengenezaji wa mpango wa biashara, na utafutaji wa masoko.",
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
    description: "Mwongozo wa jinsi ya kuomba na kupata mikopo ya biashara kutoka taasisi za fedha Tanzania, pamoja na nyaraka zinazohitajika na masharti.",
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
    description: "Mafunzo ya usimamizi wa fedha kwa biashara ndogo, yakiangazia ulipaji kodi, uwekaji wa hesabu, na utunzaji wa kumbukumbu.",
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
    description: "Jinsi ya kutumia mitandao ya kijamii kama vile Instagram, Facebook, na WhatsApp kutangaza biashara yako na kuongeza mauzo.",
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
    description: "Mahojiano na wajasiriamali waliofanikiwa Tanzania, wakishirikisha hadithi zao, changamoto, na vidokezo vya mafanikio.",
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
    description: "Mwongozo wa jinsi ya kutengeneza lebo na packaging bora kwa bidhaa zako ili kuvutia wateja na kuongeza mauzo.",
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
    description: "Mafunzo kuhusu sheria na kanuni zinazosimamia biashara nchini Tanzania, ikiwa ni pamoja na usajili, leseni, na ulipaji kodi.",
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
    description: "Jinsi ya kuajiri, kusimamia, na kuendeleza wafanyakazi katika biashara ndogo ili kuongeza tija na kupunguza mzunguko wa wafanyakazi.",
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
    description: "Mafunzo ya jinsi ya kuuza bidhaa au huduma zako kwa ufanisi zaidi, kuhimiza wateja kununua, na kujenga mahusiano ya muda mrefu na wateja.",
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
    description: "Kifaa cha Excel kinachokusaidia kutengeneza bajeti ya biashara yako, kufuatilia matumizi, na kupanga fedha kwa mwaka mzima.",
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
