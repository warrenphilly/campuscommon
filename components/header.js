// import Link from "next/link";

// const Header = ({ showHamburgerMenuIcon }) => {
//   return (
//     <header className="self-stretch z-50 bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white]  text-center text-5xl text-goldenrod font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
//       <div className="flex-1 flex flex-row items-center justify-between">
//         <Link
//           href="/"
//           className="flex flex-row items-center justify-center gap-[8px]"
//         >
//           <div className="flex flex-col items-start justify-start">
//             <div className="relative leading-[24px] font-semibold">
//               <img
//                 className=" rounded-3xs overflow-hidden h-[60px] shrink-0 object-cover"
//                 alt=""
//                 src="/assets/logo.png"
//               />
//             </div>
//           </div>
//         </Link>
//         <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
//           <div className="flex flex-row items-start justify-start gap-[30px]">
//             <div className="lg:hidden flex-row items-start flex justify-start gap-[30px]">
//               <div className="  mt-[15px] leading-[22px] ">Find your home</div>
//               <div className="  mt-[15px] leading-[22px] ">Find Tenants</div>
//               <div className=" mt-[15px] leading-[22px] ">About us</div>
//               <div className="mt-[15px] leading-[22px] ">Memberships</div>
//               <div className=" mt-[15px] leading-[22px] ">FAQ</div>
//               <div className="  mt-[15px] leading-[22px] ">Contact</div>
//             </div>

//             <button className="cursor-pointer [border:none] py-3 px-6 bg-red-500 rounded overflow-hidden flex flex-row items-start justify-start">
//               <div className=" text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
//                 Login
//               </div>
//             </button>
//             <button className="cursor-pointer border-1 border-red-500 py-3 px-6 rounded  items-start justify-start">
//               <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-red-500 text-center">
//                 List with us
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import Link from "next/link";
import { useState } from "react"; // Make sure to import useState

const Header = () => {
  // State to control the visibility of the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="relative self-stretch z-50 bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-0 text-center text-5xl text-goldenrod font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <Link
          href="/"
          className="flex flex-row items-center justify-center gap-[8px]"
        >
          <img
            className="rounded-3xs overflow-hidden h-[60px] shrink-0 object-cover"
            alt=""
            src="/assets/logo.png"
          />
        </Link>
        {/* Hamburger Button */}

        <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px]">
            <div className="lg:hidden flex-row items-start flex justify-start gap-[30px]">
              <div className="  mt-[15px] leading-[22px] ">Find your home</div>
              <div className="  mt-[15px] leading-[22px] ">Find Tenants</div>
              <div className=" mt-[15px] leading-[22px] ">About us</div>
              <div className="mt-[15px] leading-[22px] ">Memberships</div>
              <div className=" mt-[15px] leading-[22px] ">FAQ</div>
              <div className="  mt-[15px] leading-[22px] ">Contact</div>
            </div>

            <button className="cursor-pointer [border:none] py-3 h-[50px] lg:h-[40px] sm:h-[30px] text-gray-white text-center px-6 bg-red-500 rounded overflow-hidden flex flex-row justify-center  sm:text-[8px] lg:text-[12px]">
              
                Login
           
            </button>
            <button className="cursor-pointer text-red-500 text-center border-1 h-[50px] sm:h-[30px] lg:h-[40px] justify-center border-red-500 py-3 px-6 rounded sm:text-[8px] lg:text-[12px]">
         
                List with us
      
            </button>
            <button onClick={toggleSidebar} className="hidden cursor-pointer pt-[4px] bg-white md:block">
              <svg
                className="h-8 w-8 text-gray-800 bg-white"
                viewBox="0 0 20 20"
                fill="red"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ease-out duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleSidebar} className="text-gray-600 bg-white p-4">
          <svg
            className=" bg-[#fafafa] h-[60px] cursor-pointer p-[10px] shadow-2xl rounded-full text-red-500 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col mt-10">
          <a
            href="#"
            className="text-gray-700 text-lg py-2 px-4 hover:bg-gray-100"
          >
            Find your home
          </a>
          <a
            href="#"
            className="text-gray-700 text-lg py-2 px-4 hover:bg-gray-100"
          >
            Find Tenants
          </a>
          <a
            href="#"
            className="text-gray-700 text-lg py-2 px-4 hover:bg-gray-100"
          >
            About us
          </a>
          <a
            href="#"
            className="text-gray-700 text-lg py-2 px-4 hover:bg-gray-100"
          >
            Memberships
          </a>
          <a
            href="#"
            className="text-gray-700 text-lg py-2 px-4 hover:bg-gray-100"
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-gray-700 text-lg py-2 px-4 hover:bg-gray-100"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
