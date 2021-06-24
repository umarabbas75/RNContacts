// export default () => null
import React, { createContext, useReducer } from 'react'
import authInitialState from './initialStates/authInitialState'
import auth from './reducers/auth'
import contactsInitialState from './initialStates/contactsInitialState'
import contacts from './reducers/contacts'




export const GlobalContext = createContext({})
const GlobalProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(auth, authInitialState)
    const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitialState)

    return <GlobalContext.Provider
        value={{ authState, contactsState, authDispatch, contactsDispatch }}
    >
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider