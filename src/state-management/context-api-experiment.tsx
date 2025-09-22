// src/contexts/UserContext.tsx
import React, { createContext, ReactNode, useContext, useState } from "react";

// 1️⃣ Define type for context value
type UserContextType = {
  user: string;
  setUser: (name: string) => void;
};

// 2️⃣ Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// 3️⃣ Create provider
type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<string>("Shafqat");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 4️⃣ Create a custom hook for easy usage
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return context;
};
