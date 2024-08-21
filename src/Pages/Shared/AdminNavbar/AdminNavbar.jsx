import { Link } from "react-router-dom";
import logo1 from "../../../../logos/Group 1329.png";
import logo2 from "../../../../logos/users-alt 1.png";
import logo3 from "../../../../logos/plus 1.png";
const AdminNavbar = () => {
  return (
    <div className=" bg-white">
      <Link to="/home" className="btn btn-ghost text-xl">
        <figure className="max-w-36">
          <img src={logo1} className="image-full" alt="" />
        </figure>
      </Link>

      <ul className="menu menu-vertical py-6 space-y-4 font-semibold">
        <li>
          <Link to='/admin/volunteerlist'>
          <img src={logo2} alt="" className="w-3/4" />
          Volunteer register list</Link>
        </li>

        <li>
          <Link to="/admin/addevent">
          <img src={logo3} alt="" className="w-3/4" />
          Add event</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavbar;
