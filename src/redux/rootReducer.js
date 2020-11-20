import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'
import loginReducer from './login/loginReducer'
import userManagementReducer from './userManagement/userManagementReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
    login: loginReducer,
    userManagement: userManagementReducer
})

export default rootReducer