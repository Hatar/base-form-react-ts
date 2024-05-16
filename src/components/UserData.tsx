import { IUserData } from "../types"


interface IProps {
    userData:IUserData
}

const UserData = (data :IProps) => {
  const {userData} = data
  return (
    <>
        <h3 style={{color:"#FFF"}}>User Data of : {userData.firstname} {userData.firstname}</h3>
        <ul>
            <li><span style={{color:"#333"}}>Email:</span> {userData.email}</li>
            <li><span style={{color:"#333"}}>Adresse:</span> {userData.adresse}</li>
            <li><span style={{color:"#333"}}>Phone:</span> {userData.phone}</li>
        </ul>
    </>
  )
}

export default UserData