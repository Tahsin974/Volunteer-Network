
import { Outlet } from "react-router-dom";
import AdminNavbar from "../../Shared/AdminNavbar/AdminNavbar";




const Admin = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-5">
           <AdminNavbar></AdminNavbar>
            <div className="lg:col-span-3 md:col-span-1 px-3">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Admin;