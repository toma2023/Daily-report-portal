
import image from "../../public/images/toma.jpg"

const Header = () => {
    const navOptions = <>
        <li></li>
        <li></li>
        <li></li>

    </>




    return (
        <div>
            <div className=" p-2 navbar text-[#FFFFFF] bg-[#0C1427]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <p className="text-lg font-bold">  Welcome To Daily Report Portal</p>
                        </ul>
                    </div>
                    <p className=" normal-case text-sm">07-03-2023</p>
                    <p className="ml-10 normal-case text-sm">02:15:03 Am</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <p className="text-2xl ">  Welcome To Daily Report Portal</p>


                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={image} />
                        </div>

                    </label>
                    <p className="ml-2">Toma Akter Hashi</p>

                </div>
            </div>
        </div>
    );
};

export default Header;