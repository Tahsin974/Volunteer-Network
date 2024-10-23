import { useEffect, useState } from "react";
import useAuthContext from "../../../Context/useAuthContext";
import Event from "../Event/Event";
import Navbar from "../../Shared/Navbar/Navbar";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Events = () => {
    const [events,setEvents] = useState([]);
    const {user} = useAuthContext();
    const axiosSecure = useAxiosSecure();
    const baseURL = "https://volunteer-network-server-rose-xi.vercel.app";
    useEffect(() => {
        
       if(user.email){
        axiosSecure.get(`/events?email=${user.email}`,{withCredentials:true})
        .then(res => {
         
            setEvents(res.data)})
       }
        
       
    },[user,axiosSecure])

    const handleCancel = (name) => {
        fetch(`${baseURL}/event?name=${name}` , {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result.deletedCount>0){
                alert("Event Cancelled Successfully")
                const rest = events.filter(event => event.eventName !== name);
                setEvents(rest);
            }
        })
        
      }

  
    
    return (
        <div className="py-5">
            <Navbar></Navbar>
            <div className="my-5 px-10">
                

                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
                {
                    events.map(event => <Event
                    key={event._id}
                    event = {event.event}
                    handleCancel={handleCancel}
                    
                    ></Event>)
                }
                </div>
            </div>
        </div>
    );
};

export default Events;