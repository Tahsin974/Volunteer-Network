import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "./useAxiosSecure";

const useActivities = () => {
  const [activities, setActivities] = useState([]);
  const [displayActivities, setDisplayActivities] = useState([]);
  const { register, handleSubmit,reset} = useForm();

  const axiosSecure = useAxiosSecure()
  useEffect(() => {
    axiosSecure.get('/activities')
    .then((result) => {
          setActivities(result.data)
          setDisplayActivities(result.data)
        });
    // const baseURL = "https://volunteer-network-server-rose-xi.vercel.app";
    // axios.get(`${baseURL}/activities`)
    //   .then((result) => {
    //     setActivities(result.data)
    //     setDisplayActivities(result.data)
    //   });
  },[])
  const onSubmit = data => {
    const searchText = data.search;
    const matchedActivity = activities.filter((activity) =>
      activity.eventTitle.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayActivities(matchedActivity)
    reset();


  };
    return {
      activities,onSubmit,register, handleSubmit,displayActivities
    };
  
};

export default useActivities;
