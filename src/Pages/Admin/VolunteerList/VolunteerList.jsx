import axios from "axios";
import { useEffect, useState } from "react";
import trash from "../../../../logos/trash-2 9.png"

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);
  const baseURL = "https://volunteer-network-server-rose-xi.vercel.app";
  useEffect(() => {
    axios
      .get(`${baseURL}/volunteers`)
      .then((result) => setVolunteers(result.data));
  }, []);

  const handleDelete = (id) =>{
    const proceed = confirm('Are You Sure You Want To Remove Volunteer');
    if(proceed){
        fetch(`${baseURL}/volunteers?id=${id}` , {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result.deletedCount>0){
                alert("Volunteer Remove Successfully")
                const rest = volunteers.filter(volunteer => volunteer._id !== id);
                setVolunteers(rest);
            }
        })
    }
    
  }
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-center">Volunteer register list</h1>
      </div>

      <div className="card bg-white shadow-xl p-5 my-5">
        <div className="overflow-x-auto">
          <table className="table table-xs table-sm table-md	table-lg">
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

              {volunteers.map((volunteer) => (
                <tr key={volunteer._id}>
                  <td>{volunteer.name}</td>
                  <td>{volunteer.email
                  }</td>
                  <td>{volunteer.date}</td>
                  <td>{volunteer.eventName}</td>
                  <td><button onClick={() => handleDelete(volunteer._id)} className="bg-red-600 w-9 p-2"><img src={trash} alt="" className="" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VolunteerList;
