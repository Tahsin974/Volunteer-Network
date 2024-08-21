
import useActivities from "../../../Hooks/useActivities";
import Activity from "../Activity/Activity";

const Activites = () => {
    const {displayActivities} = useActivities();
  
    return (
        <div className="my-4 flex justify-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 ">
            {
            displayActivities.map(activity => <Activity
            key={activity._id}
            activity={activity}
            ></Activity>)
            }
            </div>
           
        </div>
    );
};

export default Activites;