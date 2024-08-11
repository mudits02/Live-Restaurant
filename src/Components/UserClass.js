import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2: 2,
        };
        console.log("Child Constructor");
    }

    componentDidMount(){
        console.log("Child ComponentDidMount");
    }
    
    render(){
        console.log("Child render");
        const {name , location} = this.props; //destructuring of the objects
        const {count , count2} = this.state;
        return(
            <div className="user-card">
                <h1>Count : {count}</h1>
                <h1>Count2 : {count2}</h1>
                <button className="counting" onClick={() => {
                    this.setState({
                        count : this.state.count + 1,
                    });
                }}>Click me</button>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h3>Software Engg.</h3>
            </div>
        )
    }
}

export default UserClass;