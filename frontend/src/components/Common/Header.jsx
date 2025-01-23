import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import { IoMenu } from "../../utils/icons";
import { IoMenu, IoSettingsOutline, IoLogOutOutline, IoPersonCircle } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
const Header = ({ toggleSidebar }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = (e) => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if click is outside menu and button
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <header>
      <div className="h-container">
        <div className="left-container">
          <div className="menu-bar">
            <div className="in-menu-bar" onClick={toggleSidebar}>
              <IoMenu className="menu-icon" />
            </div>
          </div>
          <div className="h-main-logo">
            <Link className="h-logo" to="/dashboard">
              {/* <img src="" alt="Logo" /> */}
              <div className="h-title">
                <h1>
                  Biometric <span>Fingerprint Identification</span>
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="right-container">
          <div className="relative">
            <button
              ref={buttonRef}
              className="flex items-center gap-2 focus:outline-none bg-blue-800 hover:bg-blue-900 p-2 rounded-md"
              onClick={toggleMenu}
            >
              <IoPersonCircle className="text-3xl" />
              <span className="hidden md:block">Profile</span>
              <FaCaretDown className="text-sm" /> {/* Add dropdown indicator */}
            </button>

            {menuOpen && (
              <div ref={menuRef} className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg text-gray-800 z-10">
                <ul className="py-2 px-2">
                  <li className="rounded-md hover:bg-gray-100">
                    <Link to="/user-profile" className="flex items-center px-4 py-2">
                      <MdAccountCircle className="mr-2 text-lg" />
                      User Profile
                    </Link>
                  </li>
                  <li className="rounded-md hover:bg-gray-100">
                    <Link to="#" className="flex items-center px-4 py-2">
                      <IoPersonCircle className="mr-2 text-lg" />
                      Change Username/Password
                    </Link>
                  </li>
                  <li className="rounded-md hover:bg-gray-100">
                    <Link to="#" className="flex items-center px-4 py-2">
                      <IoPersonCircle className="mr-2 text-lg" />
                      Change Network Settings
                    </Link>
                  </li>
                  <li className="rounded-md hover:bg-gray-100">
                    <Link to="#" className="flex items-center px-4 py-2">
                      <IoPersonCircle className="mr-2 text-lg" />
                      Add a New User
                    </Link>
                  </li>
                  <li className="rounded-md hover:bg-gray-100">
                    <Link to="#" className="flex items-center px-4 py-2">
                      <IoPersonCircle className="mr-2 text-lg" />
                      Delete a User
                    </Link>
                  </li>
                  <hr className="my-2 border-gray-300" />                  
                  <li className="rounded-md hover:bg-gray-100">
                    <Link to="#" className="flex items-center px-4 py-2">
                      <IoSettingsOutline className="mr-2 text-lg" />
                      Settings
                    </Link>
                  </li>
                  <li className="rounded-md hover:bg-gray-100">
                    <Link to="#" className="flex items-center px-4 py-2 text-red-500">
                      <IoLogOutOutline className="mr-2 text-lg" />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


// import React from "react";
// import { Link } from "react-router-dom";
// import { IoMenu } from "../../utils/icons";

// const Header = ({ toggleSidebar }) => {
//   return (
//     <header>
//       <div className="h-container">
//         <div className="left-container">
//           <div className="menu-bar">
//             <div className="in-menu-bar" onClick={toggleSidebar}>
//               <IoMenu className="menu-icon" />
//             </div>
//           </div>
//           <div className="h-main-logo">
//             <Link className="h-logo" to="/dashboard">
//               {/* <img src="" alt="Logo" /> */}
//               <div className="h-title">
//                 <h1>
//                   Biometric <span>Fingerprint Identification</span>
//                 </h1>
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="right-container"></div>
//       </div>
//     </header>
//   );
// };

// export default Header;
