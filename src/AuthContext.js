/*  Данный компонент представляет собой пользовательский поставщик - 
*   Компонент с отслеживанием состояния,
*   который отображает поставщика контекста.
*   Пользовательский хук useAuth, заключает в себе контекст, что 
*   позволяет скрыть контекст от пользователя  
*/

import React, { createContext, useState, useContext, useEffect } from 'react';
import {usersDb} from "./api/users";


const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
      localStorage.setItem('users', JSON.stringify(usersDb))

      if (localStorage.getItem('isAuth')) {
          setIsAuth(true)
      }

  }, [])
  function login() {
    localStorage.setItem('isAuth', 'true')
    setIsAuth(true)
}

function logout() {
    localStorage.removeItem('isAuth')
    setIsAuth(false)
}

const context = {isAuth, setIsAuth, login, logout}

return (
    <AuthContext.Provider value={context}>
        {children}
    </AuthContext.Provider>
)}

export { AuthContextProvider, useAuth };