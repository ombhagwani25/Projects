import { createContext, useCallback, useState } from "react";

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
  console.log("register info :" , registerInfo);
  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  } , [])

  const registerUser  = useCallback(async()=> {

    setIsRegisterLoading(true)
    setRegisterError(null)

    const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo))

    setIsRegisterLoading(false)

    if(response.error) {
      return setRegisterError(response)
    }
    localStorage.setItem("User", JSON.stringify(response))
    setUser(response)
  } , [])

  return (
    <AuthContext.Provider value={{ user , registerInfo,  updateRegisterInfo ,registerUser, registerError }}>
      {children}
    </AuthContext.Provider>
  );
};
