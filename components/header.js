import Link from "next/link";

const Header = ({ showHamburgerMenuIcon }) => {
  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white]  text-center text-5xl text-goldenrod font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <Link
          href="/"
          className="flex flex-row items-center justify-center gap-[8px]"
        >
        
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold">
              <img
                className=" rounded-3xs overflow-hidden h-[60px] shrink-0 object-cover"
                alt=""
                src="/assets/logo.png"
              />
            </div>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px]">
            <div className="  mt-[15px] leading-[22px] ">Find your home</div>
            <div className="  mt-[15px] leading-[22px] ">Find Tenants</div>
            <div className=" mt-[15px] leading-[22px] ">About us</div>
            <div className="mt-[15px] leading-[22px] ">Memberships</div>
            <div className=" mt-[15px] leading-[22px] ">FAQ</div>
            <div className="  mt-[15px] leading-[22px] ">Contact</div>

            <button className="cursor-pointer [border:none] py-3 px-6 bg-red-500 rounded overflow-hidden flex flex-row items-start justify-start">
              <div className=" text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                Login
              </div>
            </button>
            <button className="cursor-pointer border-1 border-red-500 py-3 px-6 rounded  items-start justify-start">
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-red-500 text-center">
                List with us
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
