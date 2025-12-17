"use client"

import useGetListUser from "@/fetching/user/getListUsers";
import { GetListUserResponseType } from "@/lib/data.user";
import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react"

interface UserProviderContextType {
  // LOADING 
  getListUserLoading: boolean,

  // STATE
  users: GetListUserResponseType[] | null,

  // FUNCTION 
  getUsers: () => void,
};

const UserContext = createContext<UserProviderContextType | null>(null);


export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }

  return context;
}

interface UserProviderProps {
  children: ReactNode,
}

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
  // STATE 
  const [users, setUsers] = useState<GetListUserResponseType[] | null>(null);
  // API HOOK
  const {loading: getListUserLoading, getListUser} = useGetListUser();


  /**
   * get users - initialize to take all users from backend, and then set to 'users' state
   */
  const getUsers = useCallback( async() => {
    try {
      const result = await getListUser();
      setUsers(result);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setUsers([]); 
    }
  }, []);

  const didFetch = useRef<boolean>(false);
  useEffect( () => {
    if (didFetch.current){ return; }
    didFetch.current = true;
    getUsers();
  }, []);

  const value: UserProviderContextType = {
    getListUserLoading,

    users,

    getUsers,
  }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}