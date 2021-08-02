import React, {
    createContext,
    useState,
    useContext,
    useCallback,
    ReactNode
  } from 'react';

  import { api } from '../../services/api'

  interface Register {
    email: string;
    password: string;
  }

  interface UserProviderProps {
    children: ReactNode;
  }

  interface RegisterContextData {
    signIn: (registers: Register) => Promise<void>;
    signOut(): void;
    auth: string;
  }
  
  export const AuthContext = createContext<RegisterContextData>(
      {} as RegisterContextData
    );

  export function AuthProvider({children}: UserProviderProps) {
    const [auth, setAuth] = useState("");
    
    useState(() => {
      const token = sessionStorage.getItem('@Academia_login');
  
      if (token) {
        return setAuth(token);
      }

    });
  
    const [error, setError] = useState("");

    async function signOut() {
      sessionStorage.removeItem('@Academia_login')
      setAuth("");
    };
  
    async function signIn({email, password}: Register) {
      setError("")
      try {
        if(!email || !password) setError('Login ou senha inválidos')
        
        const { data } = await api.get(`/users?email=${email}`)

        if(data.length === 0) {
            return setError('Login ou senha inválidos')
        }
        if(password !== data[0].password) {
            return setError('Login ou senha inválidos')
        }

        setAuth(data[0].email);
        sessionStorage.setItem('@Academia_login', data[0].email)
        api.defaults.headers.Authorization = `Bearer ${data[0].email}`; 
      } catch (error) {
          return error
      }
    }; 
    
    return (
      <AuthContext.Provider 
        value={{ 
          auth, 
          signIn, 
          signOut 
        }}
      >
            {children}
      </AuthContext.Provider>
    );
  };