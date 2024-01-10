import {legacy_createStore as createstore} from 'redux'
import {persistReducer,persistStore} from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import { loginReducer } from './loginreducer'

const persistConfig = {
    key:'root',
    version:1,
    storage:storageSession
}

const persistedReducer = persistReducer(persistConfig,loginReducer);

export let store = createstore(persistedReducer);
export let persistor = persistStore(store);

// store.subscribe(()=>{
//     console.log(store.getState());
// })