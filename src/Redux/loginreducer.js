import { Login,Logout } from "./actiontypes";

// Initial store value
let InitialLog = {
    Status:false,
    LoginRouteConfig:{
        path:'/signuplogin',
        name:'Login'
    },
    User:{},
}

// Reducer
const loginReducer = (store = InitialLog,action) => {
    switch (action.type) {
        case Login:{
            return{
                Status:true,
                LoginRouteConfig:{
                    path:'/profile',
                    name:'My Profile'
                },
                User:action.payload
            }
        }
        case Logout:{
            return{
                ...InitialLog,
                User:action.payload
            }
        }
    
        default:{
            return store
        }
    }
}

export {loginReducer}