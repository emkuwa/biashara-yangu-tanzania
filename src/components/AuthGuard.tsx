
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useToast } from "@/components/ui/use-toast";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  
  if (!isAuthenticated) {
    toast({
      title: "Tafadhali ingia kwanza",
      description: "Unahitaji kuingia kwanza ili uone taarifa zaidi.",
      variant: "destructive",
    });
    
    return <Navigate to="/sajili" replace />;
  }
  
  return <>{children}</>;
};

export default AuthGuard;
