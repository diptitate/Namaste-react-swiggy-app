import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "bangalore",
                
            },
        };
        console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount(){
        //console.log(this.props.name + "Child component DidMount");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json =  await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    render(){
       // const { name , location } = this.props; //Destucturing
        const {name, location, avatar_url} = this.state.userInfo;
       // debugger;

        console.log(this.props.name + "Child Render");
        return(
            <div className="user-card">
                
                
                <img src={avatar_url} />
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
                <h3>Contact: diptitate7@gmail.com</h3>
                <h3>Avatar-URL: {avatar_url}</h3>
            </div>
        );
    }
}
export default UserClass;


/*** 
*---------------Mounting LifeCycle----------------*
* constructor (dummy)
* Render(dummy)
*   <HTML Dummy>
* Component Did Mount
*   <API Call>
*   <this.setState>    -> State variable is updated
*---------------Update----------------------------*
*
*   render(API data)
    <HTML (new API data)>
* componentDid Update


***/