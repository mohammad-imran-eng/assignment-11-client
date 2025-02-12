import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const {user,signOutUser} = useContext(AuthContext);
    const handleLogout = ()=> {
        signOutUser()
        .then(()=> console.log("Sign-out successful.")).catch(error=> console.log(error))
    }
    const links = <>
    <NavLink to='/'><li className="mb-2">Home</li></NavLink>
    <NavLink><li className="mb-2">Find tutors</li></NavLink>
    <NavLink><li className="mb-2">Add Tutorials</li></NavLink>
    <NavLink><li className="mb-2">My Tutorials</li></NavLink>
    <NavLink><li className="mb-2">My booked tutors</li></NavLink>
    {
        user ?<NavLink onClick={handleLogout} to='/login'><li className="mb-2">Logout</li></NavLink>
         : <>
         <NavLink to='/register'><li className="mb-2">Register</li></NavLink>
         <NavLink to='/login'><li className="mb-2">Login</li></NavLink>
         </>

    }
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-10">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">BrightPath Tutors</a>
            </div>
            <div className="flex gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;