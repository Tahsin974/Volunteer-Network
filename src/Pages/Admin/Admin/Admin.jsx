
import { Outlet } from "react-router-dom";
import AdminNavbar from "../../Shared/AdminNavbar/AdminNavbar";




const Admin = () => {
    return (
        <div className="grid grid-cols-4 p-5">
           <AdminNavbar></AdminNavbar>
            <div className="col-span-3 px-3">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Admin;