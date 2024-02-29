import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const[onlineStatus, setOnlineStatus] = useState(true);

    
    useEffect(() => {
        console.log("event listerner for status check");
        window.addEventListener("offline", () => {

            setOnlineStatus(false);

        });

        window.addEventListener("online", () => {

            setOnlineStatus(true);

        });

    }, []);


    //if online
    return onlineStatus;           //boolean value

}

export default useOnlineStatus;