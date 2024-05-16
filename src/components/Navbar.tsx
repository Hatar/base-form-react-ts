import { IUserData } from "../types"

interface IProps {
  isLogged:boolean,
  setIsLogged:(val:boolean)=> void, 
  setUserData:(data:IUserData)=> void
}

const Navbar =({isLogged,setIsLogged,setUserData}: IProps) => {
  return (
    <ul>
      <li>Codeaway</li>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact</li>
      <button onClick={() => {
        setIsLogged(!isLogged)
        setUserData({
          firstname: "",
          lastname: "",
          email: "",
          adresse: "",
          phone: ""
        })
      }}> {isLogged ? 'Logout' : 'Login'} </button>
    </ul>
  )
}

export default Navbar