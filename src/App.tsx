import { useState } from "react"
import Navbar from "./components/Navbar"
import RegisterForm from "./components/Form/RegisterForm"
import { IUserData } from "./types"
import UserData from "./components/UserData"

function App() {
  const [isLogged,setIsLogged] = useState(false)
  const [userData,setUserData] = useState<IUserData>({
      firstname:"",
      lastname:"",
      email:"",
      adresse:"",
      phone:"",
  })
  return (
    <div className="container">
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} setUserData={setUserData} />
      {isLogged && (userData.firstname !== "" && userData.email !== "") ? <UserData userData={userData}/> : (
        <RegisterForm setIsLogged={setIsLogged} userData={userData} setUserData={setUserData}/>
      )} 
    </div>
  )
}

export default App