import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
    const { register, handleSubmit,reset } = useForm();
    const navigate = useNavigate()
    const baseURL = "https://volunteer-network-server-rose-xi.vercel.app";
  const onSubmit = data => {
    axios.post(`${baseURL}/activities`, data).then((res) => {
        if (res.data.insertedId) {
          alert("Event Add Successfully");
          reset()
          navigate("/home");
        }
      });
  };
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-center">Add event</h1>
      </div>
      <div className="card bg-white shadow-2xl p-5 my-5">
        <form onSubmit={handleSubmit(onSubmit)}  className="card-body grid grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Event Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter title"
              className="input input-bordered"
              {...register("eventTitle")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Event Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered"
              {...register("eventDate")}
            />
          </div>
          <div className="form-control row-span-2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Enter description"
              className="textarea textarea-bordered"
              {...register("description")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Banner</span>
            </label>
            <input
              type="url"
              className="input input-bordered"
              placeholder="Enter banner url"
              {...register("imgURL")}
            />
          </div>
          <div className="flex justify-end mt-6">
            <button className="btn btn-wide bg-blue-500 hover:bg-blue-600 text-white">Submit</button>
          </div>
          
        </form>
      </div>
      
    </div>
  );
};

export default AddEvent;
