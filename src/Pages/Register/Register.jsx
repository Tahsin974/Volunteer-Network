import { useNavigate, useParams } from "react-router-dom";
import logo from "../../../logos/Group 1329.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useAuthContext from "../../Context/useAuthContext";

const Register = () => {
  const { user } = useAuthContext();
  const { activityID } = useParams();
  const [activity, setActivity] = useState({});
  const baseURL = "https://volunteer-network-server-rose-xi.vercel.app";
  useEffect(() => {
    if (activityID){
      axios
      .get(`${baseURL}/activities/${activityID}`)
      .then((res) => setActivity(res.data));
    }
  }, []);
  
  const nameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const eventNameRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      date: dateRef.current.value,
      description: descriptionRef.current.value,
      eventName: eventNameRef.current.value,
      event : activity
    };
    axios.post(`${baseURL}/volunteers`, data).then((res) => {
      if (res.data.insertedId) {
        alert("Registration Successfully Done");
        navigate("/events");
      }
    });
  };

  // w-4/12 lg:w-2/12 md:w-3/12

  return (
    <div className="grid justify-items-center items-center min-h-screen p-10 gap-x-12">
      <img src={logo} alt="" className=" w-4/12 lg:w-2/12 md:w-3/12" />
      <div className="card bg-white shadow-2xl my-8 border border-gray-500 ">
        <h2 className="lg:text-2xl md:text-xl font-bold text-center mt-5">
          Register as a Volunteer
        </h2>
        <form className="card-body grid grid-cols-2" onSubmit={handleSubmit}>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              ref={nameRef}
              type="text"
              defaultValue={user.displayName || ""}
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user.email || ""}
              className="input input-bordered"
              ref={emailRef}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" className="input input-bordered" ref={dateRef} />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Event Name</span>
            </label>
            <input
              ref={eventNameRef}
              type="text"
              defaultValue={activity.eventTitle || ""}
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea className="textarea textarea-bordered" ref={descriptionRef} />
          </div>
          <div className="form-control mt-6 col-span-2">
            <button className="btn bg-blue-500 hover:bg-blue-600 text-white">
              Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
