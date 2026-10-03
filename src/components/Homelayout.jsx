import { Outlet } from "react-router";
import Navbar from "./navbar";
function HomeLayout({ children }) {
    return (
       <div>
        <Navbar />
        <Outlet />
       </div>
    )
}

export default HomeLayout;

