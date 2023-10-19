import { createContext } from 'react'


// Createing user context
export const AuthContext = createContext()

export default function Providers({children}) {

const User = {
    name :"sam"
}

return( <AuthContext.Provider value={User}>
         {children}
      </AuthContext.Provider>
)
}

