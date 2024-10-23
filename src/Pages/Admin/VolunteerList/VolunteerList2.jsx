// import axios from "axios";
// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

const VolunteerList2 = () => {
    const baseURL = "https://volunteer-network-server-rose-xi.vercel.app";
    const {data : volunteers,isPending} = useQuery({
        queryKey: ['volunteers'],
        queryFn: async () =>{
            const res = await fetch(`${baseURL}/volunteers`)
            return res.json()
        }
    })

    if(isPending){
        return <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-lg text-green-500"></span>
      </div>
    }






    // const [volunteers, setVolunteers] = useState([]);
    // const baseURL = "https://volunteer-network-server-rose-xi.vercel.app";
    // useEffect(() => {
    //   axios
    //     .get(`${baseURL}/volunteers`)
    //     .then((result) => setVolunteers(result.data));
    // }, []);
    return (
        <div>
      <div>
        <h1 className="font-bold text-2xl text-center">Volunteer register list 2 (load data using tanstack query)</h1>
      </div>

      <div className="card bg-white shadow-xl p-5 my-5">
        <div className="overflow-x-auto">
          <table className="table table-xs sm:table-sm md:table-md	lg:table-lg">
            {/* head */}
            <thead>
              <tr className="bg-slate-300 rounded-md ">
                <th>Name</th>
                <th>Email ID</th>
                <th>Registating date</th>
                <th>Volunteer list</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {volunteers.sort((a,b) => a.date.localeCompare(b.date)).map((volunteer) => (
                <tr key={volunteer._id}>
                  <td>{volunteer.name}</td>
                  <td>{volunteer.email
                  }</td>
                  <td>{volunteer.date}</td>
                  <td>{volunteer.eventName}</td>
                  {/* <td><button onClick={() => handleDelete(volunteer._id)} className="bg-red-600 w-9 p-2"><img src={trash} alt="" className="" /></button></td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default VolunteerList2;