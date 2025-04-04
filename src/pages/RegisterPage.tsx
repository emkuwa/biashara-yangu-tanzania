
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Jina liwe na herufi 2 au zaidi",
  }),
  lastName: z.string().min(2, {
    message: "Jina la ukoo liwe na herufi 2 au zaidi",
  }),
  email: z.string().email({
    message: "Tafadhali ingiza barua pepe halali",
  }),
  phone: z.string().min(10, {
    message: "Nambari ya simu iwe na tarakimu 10 au zaidi",
  }),
  password: z.string().min(8, {
    message: "Nywila iwe na herufi 8 au zaidi",
  }),
  confirmPassword: z.string(),
  region: z.string({
    required_error: "Tafadhali chagua mkoa",
  }),
  businessInterest: z.string({
    required_error: "Tafadhali chagua aina ya biashara unayopenda",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Nywila hazifanani",
  path: ["confirmPassword"],
});

const regions = [
  "Arusha", "Dar es Salaam", "Dodoma", "Geita", "Iringa", "Kagera", "Katavi", 
  "Kigoma", "Kilimanjaro", "Lindi", "Manyara", "Mara", "Mbeya", "Morogoro", 
  "Mtwara", "Mwanza", "Njombe", "Pemba North", "Pemba South", "Pwani", 
  "Rukwa", "Ruvuma", "Shinyanga", "Simiyu", "Singida", "Songwe", "Tabora", 
  "Tanga", "Zanzibar Central/South", "Zanzibar North", "Zanzibar West"
];

const businessInterests = [
  "Kilimo", "Teknolojia", "Viwanda", "Ujenzi", "Chakula", "Usafirishaji", 
  "Biashara ndogo ndogo", "Huduma", "Elimu", "Afya", "Sanaa na Burudani", "Nyingine"
];

const RegisterPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      region: "",
      businessInterest: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, we would send this data to the server
    console.log(values);
    
    // Show success message
    toast({
      title: "Usajili Umefanikiwa!",
      description: "Umesajiliwa kwa mafanikio, unaweza kuingia sasa.",
    });
    
    // Redirect to home page after successful registration
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Jisajili</CardTitle>
                <CardDescription className="text-center">
                  Jisajili kuanza safari yako ya biashara
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Jina la Kwanza</FormLabel>
                            <FormControl>
                              <Input placeholder="Jina la kwanza" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Jina la Ukoo</FormLabel>
                            <FormControl>
                              <Input placeholder="Jina la ukoo" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Barua Pepe</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jina@mfano.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nambari ya Simu</FormLabel>
                            <FormControl>
                              <Input placeholder="0712 345 678" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nywila</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Nywila yako" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Thibitisha Nywila</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Thibitisha nywila yako" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="region"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mkoa</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chagua mkoa" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {regions.map((region) => (
                                  <SelectItem key={region} value={region}>{region}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="businessInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Aina ya Biashara Unayopenda</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chagua aina ya biashara" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {businessInterests.map((interest) => (
                                  <SelectItem key={interest} value={interest}>{interest}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-tz-blue hover:bg-blue-600">
                      Jisajili
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex flex-col items-center justify-between">
                <p className="px-8 text-center text-sm text-gray-600 mt-2">
                  Kwa kujisajili, unakubaliana na <a href="#" className="text-tz-blue hover:underline">Vigezo na Masharti</a> yetu
                  na <a href="#" className="text-tz-blue hover:underline">Sera ya Faragha</a>.
                </p>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-600">Una akaunti tayari?</span>{" "}
                  <a href="#" className="text-sm font-medium text-tz-blue hover:underline">
                    Ingia
                  </a>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RegisterPage;
