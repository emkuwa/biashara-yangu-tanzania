
import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { businessPlanTemplates, generateBusinessPlan, type BusinessPlanTemplate } from '@/data/businessPlans';
import { FileText, Download, CheckCircle, ArrowRight } from 'lucide-react';

const BusinessPlanPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<BusinessPlanTemplate | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [generatedPlan, setGeneratedPlan] = useState<string>('');
  
  // Handle template selection
  const handleTemplateSelect = (templateId: string) => {
    const template = businessPlanTemplates.find(t => t.id === templateId);
    if (template) {
      setSelectedTemplate(template);
      setCurrentStep(0);
      setFormData({});
      setGeneratedPlan('');
    }
  };
  
  // Handle input change
  const handleInputChange = (fieldId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };
  
  // Handle next step
  const handleNextStep = () => {
    if (selectedTemplate && currentStep < selectedTemplate.sections.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      // Generate the business plan
      if (selectedTemplate) {
        const plan = generateBusinessPlan(selectedTemplate.id, formData);
        setGeneratedPlan(plan);
      }
    }
  };
  
  // Handle previous step
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Download business plan as text file
  const handleDownload = () => {
    if (!generatedPlan) return;
    
    const element = document.createElement('a');
    const file = new Blob([generatedPlan], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${formData['business-name'] || 'Mpango-wa-Biashara'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  // Reset the form
  const handleReset = () => {
    setSelectedTemplate(null);
    setCurrentStep(0);
    setFormData({});
    setGeneratedPlan('');
  };
  
  // Check if current section fields are filled
  const isCurrentSectionValid = () => {
    if (!selectedTemplate) return false;
    
    const currentSection = selectedTemplate.sections[currentStep];
    const requiredFields = currentSection.fields.filter(field => field.required);
    
    return requiredFields.every(field => !!formData[field.id]);
  };
  
  // Render field based on type
  const renderField = (field: any) => {
    switch (field.type) {
      case 'text':
        return (
          <Input
            id={field.id}
            placeholder={field.placeholder}
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            required={field.required}
          />
        );
      case 'textarea':
        return (
          <Textarea
            id={field.id}
            placeholder={field.placeholder}
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            required={field.required}
            rows={5}
          />
        );
      case 'select':
        return (
          <Select
            value={formData[field.id] || ''}
            onValueChange={(value) => handleInputChange(field.id, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Chagua..." />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option: string) => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      default:
        return (
          <Input
            id={field.id}
            placeholder={field.placeholder}
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            required={field.required}
          />
        );
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Tengeneza Mpango wa Biashara</h1>
            <p className="text-gray-600">
              Mpango wa biashara ni muhimu sana katika kuanzisha na kukuza biashara yako. Tumia zana hii kutengeneza mpango wa biashara bora.
            </p>
          </div>
          
          {!selectedTemplate && !generatedPlan && (
            <>
              <h2 className="text-xl font-semibold mb-6">Chagua Kiolezo cha Mpango wa Biashara</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {businessPlanTemplates.map(template => (
                  <Card 
                    key={template.id} 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleTemplateSelect(template.id)}
                  >
                    <CardHeader>
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <FileText className="text-tz-blue" size={24} />
                      </div>
                      <CardTitle>{template.title}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="font-medium">Sehemu {template.sections.length}</p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          {template.sections.slice(0, 3).map((section, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="text-tz-green mr-2 flex-shrink-0" size={14} />
                              <span>{section.title}</span>
                            </li>
                          ))}
                          {template.sections.length > 3 && (
                            <li className="text-gray-500">...na zaidi</li>
                          )}
                        </ul>
                      </div>
                      <Button className="w-full bg-tz-blue hover:bg-blue-600">
                        Chagua Kiolezo Hiki
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-lg font-semibold mb-4">Kwa nini Mpango wa Biashara ni Muhimu?</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <CheckCircle className="text-tz-green mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Kukusaidia kuwa na mwelekeo na malengo wazi</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-tz-green mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Kukuwezesha kupata ufadhili au mikopo kutoka taasisi za fedha</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-tz-green mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Kutambua changamoto na fursa kabla hazijatokea</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-tz-green mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Kuelewa soko lako, washindani, na wateja wako vizuri zaidi</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-tz-green mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Kukupa uelewa wa kifedha wa biashara yako</span>
                  </li>
                </ul>
              </div>
            </>
          )}
          
          {selectedTemplate && !generatedPlan && (
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-6">
                <Button
                  variant="ghost"
                  onClick={handleReset}
                  className="mr-4"
                >
                  Rudi
                </Button>
                <div>
                  <h2 className="text-xl font-semibold">{selectedTemplate.title}</h2>
                  <p className="text-gray-600">
                    Hatua {currentStep + 1} kati ya {selectedTemplate.sections.length}
                  </p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                <div 
                  className="bg-tz-blue h-2 rounded-full" 
                  style={{ width: `${((currentStep + 1) / selectedTemplate.sections.length) * 100}%` }}
                ></div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow mb-8">
                <h3 className="text-lg font-semibold mb-2">
                  {selectedTemplate.sections[currentStep].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedTemplate.sections[currentStep].description}
                </p>
                
                <div className="space-y-6">
                  {selectedTemplate.sections[currentStep].fields.map(field => (
                    <div key={field.id}>
                      <div className="flex justify-between items-center mb-2">
                        <Label htmlFor={field.id} className="text-base font-medium">
                          {field.label}
                          {field.required && <span className="text-red-500 ml-1">*</span>}
                        </Label>
                        {field.helperText && (
                          <span className="text-xs text-gray-500">{field.helperText}</span>
                        )}
                      </div>
                      {renderField(field)}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={currentStep === 0}
                >
                  Nyuma
                </Button>
                <Button
                  onClick={handleNextStep}
                  disabled={!isCurrentSectionValid()}
                  className="bg-tz-blue hover:bg-blue-600"
                >
                  {currentStep < selectedTemplate.sections.length - 1 ? (
                    <span className="flex items-center">
                      Endelea <ArrowRight size={16} className="ml-2" />
                    </span>
                  ) : (
                    'Tengeneza Mpango wa Biashara'
                  )}
                </Button>
              </div>
            </div>
          )}
          
          {generatedPlan && (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="outline"
                  onClick={handleReset}
                >
                  Anza Upya
                </Button>
                <Button
                  onClick={handleDownload}
                  className="bg-tz-blue hover:bg-blue-600"
                >
                  <Download size={16} className="mr-2" />
                  Pakua Mpango wa Biashara
                </Button>
              </div>
              
              <Card className="mb-8">
                <CardHeader>
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-tz-green" size={24} />
                  </div>
                  <CardTitle>Mpango wako wa Biashara Umekamilika!</CardTitle>
                  <CardDescription>
                    Mpango wako wa biashara umetengenezwa. Unaweza kupakua au kuhariri tena.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4 prose max-w-none">
                    <div className="whitespace-pre-wrap font-mono text-sm">
                      {generatedPlan.split('\n').map((line, index) => {
                        if (line.startsWith('# ')) {
                          return <h1 key={index} className="text-2xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
                        } else if (line.startsWith('## ')) {
                          return <h2 key={index} className="text-xl font-bold mt-5 mb-3">{line.substring(3)}</h2>;
                        } else if (line.startsWith('### ')) {
                          return <h3 key={index} className="text-lg font-bold mt-4 mb-2">{line.substring(4)}</h3>;
                        } else {
                          return <p key={index} className="mb-2">{line}</p>;
                        }
                      })}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="flex-1"
                    >
                      Tengeneza Mpango Mpya
                    </Button>
                    <Button
                      onClick={handleDownload}
                      className="flex-1 bg-tz-green hover:bg-green-600"
                    >
                      <Download size={16} className="mr-2" />
                      Pakua Mpango wa Biashara
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
                <h3 className="text-lg font-semibold mb-4 text-tz-blue">Hatua Zinazofuata</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <CheckCircle className="text-tz-blue mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Hakiki mpango wako wa biashara na mshauri au mjasiriamali mwenye uzoefu</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-tz-blue mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Ongeza maelezo zaidi kwenye sehemu zinazohitaji ufafanuzi</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-tz-blue mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Tengeneza bajeti ya kina na mipango ya kifedha</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-tz-blue mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Tafuta rasilimali na vyanzo vya fedha kwa ajili ya kuanza biashara yako</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessPlanPage;
