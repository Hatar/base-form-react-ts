import { ChangeEvent } from 'react'
import { IFormInputs, IUserData } from '../../types'
import './form.css'


interface  IProps {
    userData:IUserData
    setUserData:(user:IUserData)=> void,
    setIsLogged:(val:boolean) => void
}



const FormList: IFormInputs[] = [
    {
        id:"firstname",
        name:"firstname",
        label:"FirstName",
        placeholder:"FirstName",
        type:"text"
    },
    {
        id:"lastname",
        name:"lastname",
        label:"LastName",
        placeholder:"LastName",
        type:"text"
    },
    {
        id:"adresse",
        name:"adresse",
        label:"Adresse",
        placeholder:"Adresse",
        type:"text"
    },
    {
        id:"email",
        name:"email",
        label:"Email",
        placeholder:"Email",
        type:"email"
    },
    {
        id:"phone",
        name:"phone",
        label:"Phone",
        placeholder:"Phone",
        type:"text"
    }
]

const RegisterForm =({setIsLogged,userData,setUserData}:IProps) => {

  const handleChangeInput = (event :ChangeEvent<HTMLInputElement>) => {
        const {value,name} = event.target
        setUserData({
            ...userData,
            [name]:value
        })
    }


  const renderFormRegister = ()=> {
        return FormList.map((form,idx) => (
             <div className="input-wrapper" key={idx}>
                <label htmlFor={form.label}>{form.label}:</label>
                <input type="text" name={form.name} id={form.id} placeholder={form.placeholder} value={userData[form.name]} onChange={handleChangeInput} />
            </div>
        ))
    }
  const sendForm = (e: { preventDefault: () => void }) =>{
    e.preventDefault()
    setIsLogged(true)
    console.log("send Form")
  }
  return (
    <form onSubmit={sendForm}>
        {renderFormRegister()}
        <button type="submit">Send</button>
    </form>
  )
}

export default RegisterForm