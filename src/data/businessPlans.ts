
export interface BusinessPlanTemplate {
  id: string;
  title: string;
  description: string;
  sections: BusinessPlanSection[];
}

export interface BusinessPlanSection {
  title: string;
  description: string;
  fields: BusinessPlanField[];
}

export interface BusinessPlanField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'select' | 'multiselect';
  placeholder?: string;
  options?: string[];
  required?: boolean;
  helperText?: string;
}

export const businessPlanTemplates: BusinessPlanTemplate[] = [
  {
    id: "simple",
    title: "Mpango wa Biashara Rahisi",
    description: "Kwa wajasiriamali wanaoanza. Mpango huu ni rahisi na unaelezea vipengele muhimu vya biashara.",
    sections: [
      {
        title: "Muhtasari wa Biashara",
        description: "Elezea kwa ufupi biashara yako, maono, na malengo.",
        fields: [
          {
            id: "business-name",
            label: "Jina la Biashara",
            type: "text",
            placeholder: "Mfano: Kilimo Bora Ltd",
            required: true
          },
          {
            id: "business-description",
            label: "Maelezo ya Biashara",
            type: "textarea",
            placeholder: "Elezea biashara yako kwa sentensi 2-3",
            required: true
          },
          {
            id: "business-vision",
            label: "Maono ya Biashara",
            type: "textarea",
            placeholder: "Biashara yako inalenga kufikia wapi baada ya miaka kadhaa?",
            required: true
          },
          {
            id: "business-mission",
            label: "Dhamira ya Biashara",
            type: "textarea",
            placeholder: "Kwa nini biashara hii ipo?",
            required: true
          }
        ]
      },
      {
        title: "Bidhaa na Huduma",
        description: "Elezea bidhaa au huduma unazotoa.",
        fields: [
          {
            id: "products-services",
            label: "Bidhaa/Huduma Unazotoa",
            type: "textarea",
            placeholder: "Orodhesha bidhaa au huduma zako kuu",
            required: true
          },
          {
            id: "unique-selling-point",
            label: "Sifa za Kipekee",
            type: "textarea",
            placeholder: "Ni nini kinakufanya uwe tofauti na washindani?",
            required: true
          },
          {
            id: "pricing-strategy",
            label: "Mkakati wa Bei",
            type: "textarea",
            placeholder: "Unapanga kuweka bei kwa bidhaa/huduma zako vipi?",
            required: true
          }
        ]
      },
      {
        title: "Soko na Washindani",
        description: "Elezea soko unalolenga na washindani wako.",
        fields: [
          {
            id: "target-market",
            label: "Soko Lengwa",
            type: "textarea",
            placeholder: "Wateja wako ni akina nani? (Umri, jinsia, eneo, mapato, n.k.)",
            required: true
          },
          {
            id: "market-size",
            label: "Ukubwa wa Soko",
            type: "textarea",
            placeholder: "Kuna wateja wangapi unaweza kuhudumia?",
            required: true
          },
          {
            id: "competitors",
            label: "Washindani",
            type: "textarea",
            placeholder: "Nani anafanya biashara kama yako? Unatofautianaje?",
            required: true
          }
        ]
      },
      {
        title: "Mpango wa Masoko",
        description: "Elezea jinsi utakavyotangaza na kuuza bidhaa/huduma zako.",
        fields: [
          {
            id: "marketing-channels",
            label: "Njia za Kutangaza",
            type: "textarea",
            placeholder: "Utatumia njia gani kutangaza? (Mitandao ya kijamii, matangazo, n.k.)",
            required: true
          },
          {
            id: "sales-strategy",
            label: "Mkakati wa Mauzo",
            type: "textarea",
            placeholder: "Utauza vipi? (Moja kwa moja, wasambazaji, mtandaoni, n.k.)",
            required: true
          }
        ]
      },
      {
        title: "Mpango wa Fedha",
        description: "Elezea uhitaji wa fedha, mapato, na matumizi ya biashara yako.",
        fields: [
          {
            id: "startup-costs",
            label: "Gharama za Kuanzisha",
            type: "textarea",
            placeholder: "Orodhesha gharama zote za kuanza biashara (vifaa, pango, leseni, n.k.)",
            required: true
          },
          {
            id: "monthly-expenses",
            label: "Matumizi ya Kila Mwezi",
            type: "textarea",
            placeholder: "Orodhesha matumizi ya kawaida ya kila mwezi",
            required: true
          },
          {
            id: "revenue-projection",
            label: "Matarajio ya Mapato",
            type: "textarea",
            placeholder: "Unatarajia kutengeneza kiasi gani cha mapato kwa mwezi/mwaka?",
            required: true
          },
          {
            id: "break-even-point",
            label: "Wakati wa Kuvuka Kiasi cha Gharama",
            type: "textarea",
            placeholder: "Utafika lini kwenye hali ya kuanza kupata faida?",
            required: true
          }
        ]
      }
    ]
  },
  {
    id: "comprehensive",
    title: "Mpango wa Biashara Kamili",
    description: "Kwa biashara za kati na kubwa. Mpango huu ni wa kina zaidi.",
    sections: [
      {
        title: "Muhtasari Mtendaji",
        description: "Muhtasari wa mpango wote wa biashara.",
        fields: [
          {
            id: "business-name",
            label: "Jina la Biashara",
            type: "text",
            placeholder: "Jina kamili la biashara yako",
            required: true
          },
          {
            id: "business-summary",
            label: "Muhtasari wa Biashara",
            type: "textarea",
            placeholder: "Elezea biashara yako kwa ufupi",
            required: true
          },
          {
            id: "business-goals",
            label: "Malengo ya Biashara",
            type: "textarea",
            placeholder: "Malengo ya muda mfupi na mrefu",
            required: true
          },
          {
            id: "success-factors",
            label: "Vigezo vya Mafanikio",
            type: "textarea",
            placeholder: "Ni nini kitafanya biashara yako ifanikiwe?",
            required: true
          }
        ]
      },
      {
        title: "Maelezo ya Kampuni",
        description: "Maelezo ya kina kuhusu kampuni yako.",
        fields: [
          {
            id: "company-structure",
            label: "Muundo wa Kampuni",
            type: "select",
            options: ["Biashara Binafsi", "Ubia", "Kampuni ya Dhima Yenye Kikomo", "Ushirika", "Nyingine"],
            required: true
          },
          {
            id: "company-history",
            label: "Historia ya Kampuni",
            type: "textarea",
            placeholder: "Historia fupi ya kampuni (kama ipo)",
            required: false
          },
          {
            id: "company-location",
            label: "Eneo la Kampuni",
            type: "textarea",
            placeholder: "Maelezo ya eneo na kwa nini umechagua eneo hilo",
            required: true
          },
          {
            id: "ownership",
            label: "Umiliki",
            type: "textarea",
            placeholder: "Nani anamiliki biashara na kwa asilimia ngapi?",
            required: true
          }
        ]
      },
      {
        title: "Bidhaa na Huduma",
        description: "Maelezo ya kina kuhusu bidhaa au huduma unazotoa.",
        fields: [
          {
            id: "products-services-list",
            label: "Orodha ya Bidhaa/Huduma",
            type: "textarea",
            placeholder: "Orodhesha bidhaa/huduma zote unazotoa",
            required: true
          },
          {
            id: "product-lifecycle",
            label: "Mzunguko wa Bidhaa",
            type: "textarea",
            placeholder: "Elezea hatua za maendeleo ya bidhaa/huduma zako",
            required: true
          },
          {
            id: "intellectual-property",
            label: "Mali ya Kiakili",
            type: "textarea",
            placeholder: "Una hataza, haki miliki, au alama za biashara?",
            required: false
          },
          {
            id: "research-development",
            label: "Utafiti na Maendeleo",
            type: "textarea",
            placeholder: "Mipango ya kuboresha bidhaa/huduma zako",
            required: false
          }
        ]
      },
      {
        title: "Uchambuzi wa Soko",
        description: "Uchambuzi wa kina wa soko unalolenga.",
        fields: [
          {
            id: "industry-analysis",
            label: "Uchambuzi wa Sekta",
            type: "textarea",
            placeholder: "Elezea sekta yako na mwelekeo wa sasa",
            required: true
          },
          {
            id: "target-market-analysis",
            label: "Uchambuzi wa Soko Lengwa",
            type: "textarea",
            placeholder: "Elezea kwa kina soko lako lengwa",
            required: true
          },
          {
            id: "competitor-analysis",
            label: "Uchambuzi wa Washindani",
            type: "textarea",
            placeholder: "Washindani wakuu, nguvu na udhaifu wao",
            required: true
          },
          {
            id: "swot-analysis",
            label: "Uchambuzi wa SWOT",
            type: "textarea",
            placeholder: "Nguvu, Udhaifu, Fursa, na Vitisho",
            required: true
          }
        ]
      },
      {
        title: "Mkakati wa Masoko na Mauzo",
        description: "Mkakati wako wa kutangaza na kuuza bidhaa/huduma.",
        fields: [
          {
            id: "marketing-strategy",
            label: "Mkakati wa Masoko",
            type: "textarea",
            placeholder: "Elezea mkakati wako wa masoko",
            required: true
          },
          {
            id: "sales-process",
            label: "Mchakato wa Mauzo",
            type: "textarea",
            placeholder: "Elezea mchakato wa mauzo kutoka mwanzo hadi mwisho",
            required: true
          },
          {
            id: "marketing-budget",
            label: "Bajeti ya Masoko",
            type: "textarea",
            placeholder: "Utatumia kiasi gani kwa masoko?",
            required: true
          }
        ]
      },
      {
        title: "Mpango wa Uendeshaji",
        description: "Jinsi biashara itakavyoendeshwa kila siku.",
        fields: [
          {
            id: "operations-process",
            label: "Mchakato wa Uendeshaji",
            type: "textarea",
            placeholder: "Elezea jinsi biashara itakavyofanya kazi kila siku",
            required: true
          },
          {
            id: "facilities-equipment",
            label: "Miundombinu na Vifaa",
            type: "textarea",
            placeholder: "Unahitaji vifaa na miundombinu gani?",
            required: true
          },
          {
            id: "suppliers",
            label: "Wasambazaji",
            type: "textarea",
            placeholder: "Wasambazaji wako wakuu na masharti",
            required: true
          },
          {
            id: "quality-control",
            label: "Udhibiti wa Ubora",
            type: "textarea",
            placeholder: "Utadhibiti vipi ubora wa bidhaa/huduma zako?",
            required: true
          }
        ]
      },
      {
        title: "Mpango wa Fedha",
        description: "Mipango ya fedha ya kina kwa biashara yako.",
        fields: [
          {
            id: "startup-budget",
            label: "Bajeti ya Kuanzisha",
            type: "textarea",
            placeholder: "Orodhesha gharama zote za kuanzisha kwa kina",
            required: true
          },
          {
            id: "financial-projections",
            label: "Matarajio ya Fedha",
            type: "textarea",
            placeholder: "Matarajio ya mapato, matumizi, na faida kwa miaka 3-5",
            required: true
          },
          {
            id: "funding-sources",
            label: "Vyanzo vya Fedha",
            type: "textarea",
            placeholder: "Fedha zitatoka wapi? (Binafsi, mkopo, wawekezaji)",
            required: true
          },
          {
            id: "break-even-analysis",
            label: "Uchambuzi wa Kuvuka Gharama",
            type: "textarea",
            placeholder: "Itachukua muda gani kuvuka gharama na kuanza kupata faida?",
            required: true
          }
        ]
      },
      {
        title: "Timu ya Usimamizi",
        description: "Maelezo kuhusu timu inayosimamia biashara.",
        fields: [
          {
            id: "management-team",
            label: "Timu ya Usimamizi",
            type: "textarea",
            placeholder: "Maelezo ya wanatimu muhimu na uzoefu wao",
            required: true
          },
          {
            id: "organizational-structure",
            label: "Muundo wa Shirika",
            type: "textarea",
            placeholder: "Elezea muundo wa shirika na majukumu",
            required: true
          },
          {
            id: "advisors",
            label: "Washauri",
            type: "textarea",
            placeholder: "Una washauri au bodi ya ushauri?",
            required: false
          }
        ]
      }
    ]
  }
];

export const generateBusinessPlan = (templateId: string, data: Record<string, string>): string => {
  const template = businessPlanTemplates.find(t => t.id === templateId);
  if (!template) return "Hakuna kiolezo kilichopatikana";

  let generatedPlan = `# ${data['business-name'] || 'Mpango wa Biashara'}\n\n`;

  template.sections.forEach(section => {
    generatedPlan += `## ${section.title}\n\n`;
    
    section.fields.forEach(field => {
      const value = data[field.id] || '';
      if (value) {
        generatedPlan += `### ${field.label}\n${value}\n\n`;
      }
    });
  });

  return generatedPlan;
};
