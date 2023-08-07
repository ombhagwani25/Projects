import { createContext, useCallback, useEffect, useState } from "react";
import { postRequest , baseUrl } from "../utils/services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null)
  const [isRegisterLoading, setIsRegisterLoading] = useState(false)

  const [registerInfo, setRegisterInfo] = useState(
    {
      name : "",
      email : "",
      password :""
    }
  )

  const [loginError, setLoginError] = useState(null)
  const [isLoginLoading, setIsLoginLoading] = useState(false)

  const [loginInfo, setLoginInfo] = useState(
    {
      email : "",
      password :""
    }
  )

  useEffect(()=> {
    const user = localStorage.getItem("User")
    setUser(JSON.parse(user));
  } , [])

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  } , [])

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  } , [])

  console.log("userr : " , user);
  const registerUser  = useCallback(async(event)=> {

    event.preventDefault();
    setIsRegisterLoading(true)
    setRegisterError(null)
    

    const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo))
    

    setIsRegisterLoading(false)

    if(response.error) {
      return setRegisterError(response)
    }
    localStorage.setItem("User", JSON.stringify(response))
    setUser(response)
  } , [registerInfo])

  const loginUser = useCallback(async(e)=> {
    // to prevent refresh
    e.preventDefault()
    setIsLoginLoading(true)
    setLoginError(null)

    const response = await postRequest(`${baseUrl}/users/login`, JSON.stringify(loginInfo))
    if(response.error) {
      return setLoginError(response.error)
    }
    setIsLoginLoading(false)

  } , [loginInfo])

  const logoutUser = useCallback(()=> {
    localStorage.removeItem("User");
    setUser(null);

  }, [])

  return (
    <AuthContext.Provider value={{ user , registerInfo,  updateRegisterInfo ,registerUser, registerError , isRegisterLoading , loginUser , loginError, loginInfo , updateLoginInfo, isLoginLoading , logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
