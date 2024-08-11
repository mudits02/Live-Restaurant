import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            userInfo: {
                name: "Default Name",
                location: "Default Location",
                avatar_url: "http:lol.com",
            },
        }

        console.log("Parent Constructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/mudits02");
        const json = await data.json();

        this.setState({
            userInfo : json,
        })

        console.log(json);
    }

    render(){
        console.log("Parent Render");
        const {name , location , avatar_url} = this.state.userInfo;
        return (
            <div classname="about-us">
                <h1>About Us page</h1>
                <img src={avatar_url} />
                {/* <User name={"Mudit Shukla(from function)"} location={"gwalior from function"} /> */}
                <UserClass name={name} location={location} />
                <UserClass name={"Second Component"} location={"US from Class"} />
            </div>
        );
    }
}
export default About;