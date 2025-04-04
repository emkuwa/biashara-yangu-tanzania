
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

type User = {
  id: string;
  name: string;
  email: string;
} | null;

type AuthContextType = {
  user: User;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Check if user is already logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      // In a real app, this would be an actual API call to validate credentials
      if (email && password) {
        const newUser = {
          id: Math.random().toString(36).substr(2, 9),
          name: email.split('@')[0],
          email
        };
        
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        
        toast({
          title: "Umefanikiwa kuingia!",
          description: "Karibu kwenye Biashara Yangu.",
        });
        
        navigate('/');
      } else {
        throw new Error("Taarifa zako si sahihi");
      }
    } catch (error) {
      toast({
        title: "Imeshindikana kuingia",
        description: error instanceof Error ? error.message : "Kuna hitilafu imetokea",
        variant: "destructive"
      });
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      // Simulate API call for registration
      if (name && email && password) {
        const newUser = {
          id: Math.random().toString(36).substr(2, 9),
          name,
          email
        };
        
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        
        toast({
          title: "Umefanikiwa kujisajili!",
          description: "Karibu kwenye Biashara Yangu.",
        });
        
        navigate('/');
      } else {
        throw new Error("Tafadhali jaza taarifa zote zinazohitajika");
      }
    } catch (error) {
      toast({
        title: "Imeshindikana kujisajili",
        description: error instanceof Error ? error.message : "Kuna hitilafu imetokea",
        variant: "destructive"
      });
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
    
    toast({
      title: "Umetoka",
      description: "Umefanikiwa kutoka kwenye akaunti yako.",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
