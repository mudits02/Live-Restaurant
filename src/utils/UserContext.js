import { createContext } from "react"

const UserContext = createContext({
    loggedInUser: "Default User",
})

export default UserContext;

//Wherever we are importing this context , we have to use the same name here i.e. loggedInUser to be used wherever we import