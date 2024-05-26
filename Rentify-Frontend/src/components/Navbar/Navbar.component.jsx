import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

const Navbar = () => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.user);
//   const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

  return (
    <nav className="bg-col1-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-col1-200 text-2xl font-serif font-bold">Rentify</div>
        <div className="flex space-x-4 gap-3">
          <Link
            to={"/create"}
            className="text-col1-200 text-lg font-semibold flex font-serif items-center hover:text-white hover:underline cursor-pointer "
          >
            Create
          </Link>
          <Link
            to={"/update"}
            className="text-col1-200 text-lg font-semibold font-serif flex items-center hover:text-white hover:underline cursor-pointer "
          >
            Update
          </Link>
          <Link
            to={"/delete"}
            className="text-col1-200 text-lg font-semibold font-serif flex items-center hover:text-white hover:underline cursor-pointer "
          >
            Delete
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3">
          {/* {isLoggedIn ? ( */}
            <>
              <span className="text-col1-200 text-lg font-semibold font-serif">
                Hello 
              </span>
              {/* Add notification icon/button here */}
              <button
                // onClick={handleLogout}
                className="text-white font-semibold bg-red-500 rounded text-sm px-2 py-1"
              >
                Logout
              </button>
            </>
          {/* ) : ( */}
            {/* <>
              <button
                onClick={() => navigate("/login")}
                className="text-white font-semibold bg-green-800 rounded text-sm px-2 py-1"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="text-white font-semibold bg-green-800 rounded text-sm px-2 py-1"
              >
                Register
              </button>
            </> */}
          {/* )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
