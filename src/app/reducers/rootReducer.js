import { combineReducers } from "../../../../Library/Caches/typescript/3.6/node_modules/redux";
import { firebaseReducer,  } from "react-redux-firebase";
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({

    firebase: firebaseReducer,
    firestore: firestoreReducer,
})

export default rootReducer