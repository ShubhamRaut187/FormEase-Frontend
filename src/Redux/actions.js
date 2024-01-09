import { Login,Logout } from "./actiontypes";

const handlelogin=(val)=>{
    return{
        type:Login,
        payload:val
    }
}

const handlelogout=(val)=>{
    return{
        type:Logout,
        payload:val
    }
}

export {handlelogin,handlelogout};