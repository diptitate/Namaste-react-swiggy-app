//import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  
  constructor(props){

    super(props);

   // console.log("Parent Constructor");
  }

  componentDidMount(){
    //console.log("Parent component DidMount");
}

  render(){
    //console.log("Parent Render");
    return(
      <div>
        <h1>About Us</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="text-lg font-bold">loggedInUser</h1>}
          </UserContext.Consumer>
        </div>
        <p>This is Namaste React</p>
        <UserClass name={"First"} location={"Hyderabad"}/>  

      </div>
    );
  }
}


  
  export default About;