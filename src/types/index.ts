export interface IUserData {
  firstname:string,
  lastname:string,
  email:string,
  adresse:string,
  phone:string,
}


export interface IFormInputs {
    id:string,
    name: keyof IUserData,
    label:string,
    placeholder:string,
    type: string
}