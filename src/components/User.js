import {useState} from "react"

const User =({name, location}) => {
    const[count] = useState(0);
    const[count2] = useState(1);  //another state variable
    return(
        <div className="user-card">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
            <h3>Contact: diptitate7@gmail.com</h3>
        </div>
    );
    
};
export default User;