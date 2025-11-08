import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)

  useEffect(()=> {
    const s = localStorage.getItem('dq_user')
    if(s) setUser(JSON.parse(s))
  },[])

  const login = (email, name) => {
    const u = { email, name }
    setUser(u)
    localStorage.setItem('dq_user', JSON.stringify(u))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('dq_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
