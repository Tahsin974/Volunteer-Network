import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Activity = ({ activity }) => {
    const {eventTitle,imgURL} = activity;
    const navigate = useNavigate()
    const url = `/register/${activity._id}`
    const handleSelectActivity = () => {
      navigate(url)
    }
  return (
    <div onClick={handleSelectActivity} className="card text-white w-60 h-5/6  shadow-xl cursor-pointer bg-blue-400" >
      <figure >
        <img
          src={imgURL}
          alt="Shoes"
          className="rounded-b-none "/>
      </figure>
      <div className="card-body items-center text-center" >
        <h2 className={`card-title`}>{eventTitle}</h2>
      </div>
    </div>
  );
};

export default Activity;

Activity.propTypes = {
  activity: PropTypes.node,
};
