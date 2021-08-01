
  import { createContext, useEffect, useState, ReactNode } from 'react';
  
  import { api } from '../../services/api'
  
  interface Register {
    id: number;
    name: string;
    email: string;
    password: string;
  }
  
  type RegisterInput = Omit<Register, 'id'>;
  
  interface UserProviderProps {
    children: ReactNode;
  }
  
  
  interface RegisterContextData {
    registers: Register[];
    createRegister: (registers: RegisterInput) => Promise<void>;
    updateRegisters: (registers: Register) => Promise<void>;
  }
  
  export const userContext = createContext<RegisterContextData>(
    {} as RegisterContextData
  );
  
  export function UserProvider ({ children }: UserProviderProps){
    const [ registers, setRegister ] = useState<Register[]>([]);
    
     useEffect(() => {
       api.get('users')
       .then(response => setRegister(response.data.users))
     }, []);

    async function createRegister(registeriInput: RegisterInput ){
              try {
                await api.post('/users', registeriInput)
              
              } catch (error) {
                return error
              }
      
      }
  
    async function updateRegisters(registeriUpdate: Register) {
            try {
              await api.put(`/users/${registeriUpdate.id}`, registeriUpdate)
            
            } catch (error) {
              return error
            }
        }
  
   
    return (
      <userContext.Provider 
        value={{ 
          registers, 
          createRegister, 
          updateRegisters
        }}
      >
            {children}
      </userContext.Provider>
    );
  };
  
  
