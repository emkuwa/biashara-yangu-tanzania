
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useToast } from "@/hooks/use-toast";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const location = useLocation();
  
  if (!isAuthenticated) {
    toast({
      title: "Tafadhali jisajili/ingia kwanza",
      description: "Unahitaji kuwa na akaunti ili upate huduma hii.",
      variant: "destructive",
    });
    
    return <Navigate to="/sajili" state={{ from: location.pathname }} replace />;
  }
  
  return <>{children}</>;
};

export default AuthGuard;
