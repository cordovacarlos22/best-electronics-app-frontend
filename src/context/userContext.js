import React, { useEffect, useState } from 'react'

const UserContext = React.createContext()

const { Provider, Consumer } = UserContext

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null)

  // const [username, setUsername] = useState(" ")

  useEffect(() => {
    let storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [token]);


  const setupSession = (token) => {
    localStorage.setItem("token", token)
    setToken(token)
  }

  const deleteSession = () => {
    localStorage.removeItem("token")
    setToken(null)
  }

  return (
    <Provider value={{ token, setupSession, deleteSession }}>
      {children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }