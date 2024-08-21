import PropTypes from "prop-types";
import { format } from "date-fns";

const Event = ({ event,handleCancel }) => {
  const {eventTitle, eventDate, imgURL } = event;
  const date = format(new Date(eventDate), "d MMM , yyyy");

  
  

  return (
    <div>
      <div className=" lg:h-4/5 border border-gray-700 grid lg:grid-cols-2  gap-x-3 rounded-lg shadow-lg lg:pt-8 lg:pb-14 px-6 p-5">
        <figure>
          <img src={imgURL} alt="" className="rounded-lg image-full lg:h-4/5" />
        </figure>
        <div className="flex flex-col justify-evenly space-y-3">
          <div className="space-y-3">
            <h1 className="lg:text-2xl md:text-xl text-lg font-bold"> {eventTitle} </h1>
            <h1 className="lg:text-xl md:text-lg text-md font-bold"> {date} </h1>
          </div>
          <div className="flex justify-end">
            <button onClick={() => handleCancel(eventTitle)} className="btn ">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
Event.propTypes = {
  event: PropTypes.node,
  handleCancel: PropTypes.node,
  
};
