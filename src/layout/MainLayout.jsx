import {
    NavLink,
    Outlet
} from "react-router-dom";
import logo from "../assets/logoimg.png";

const MainLayout = () => {

    const navBars = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/all-products"}>All Phones</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
    </>

    return (
        <div>

            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-[#c8d6e5]">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <img className="md:w-20 w-12" src={logo} alt="" />
                            <h3 className="md:text-3xl text-lg font-semibold">Mobile Shop</h3>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal font-medium">
                                {/* Navbar menu content here */}
                                {navBars}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet />
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#c8d6e5] font-medium">
                        {/* Sidebar content here */}
                        {navBars}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;