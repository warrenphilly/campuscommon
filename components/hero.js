import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import "antd/dist/antd.min.css";
import { useRouter } from "next/router";
import { useCallback } from "react";
import VideoBackground from "../components/VideoBackground";
const Hero = () => {
  const router = useRouter();

  const onSearchCTAClick = useCallback(() => {
    router.push("/properties");
  }, [router]);

  return (
    // <div className="self-stretch flex flex-col h-[650px] justify-center py-[120px] px-[30px] items-center bg-[url(/video/RealEstateApp/public/video/campusconnect_broll_2.mp4)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
    //   <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
    //     <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
    //       <div className="self-stretch relative leading-[72px] font-semibold">
    //         Let us take the stress out of Searching...
    //       </div>
    //     </div>
    //     <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-left text-base  font-body-regular-600">
    //       <div className="flex flex-row items-start justify-start gap-[10px]">
    //         <button className="cursor-pointer [border:none] py-3 px-6  bg-red-500 rounded items-start justify-start">
    //           <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
    //             Explore Now
    //           </div>
    //         </button>
    //         <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start hover:bg-whitesmoke-100 ">
    //           <div className="relative text-base leading-[24px]  text-red-500 text-center">
    //             Find your home
    //           </div>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="relative w-full h-[650px] self-stretch overflow-hidden">
      {/* Video as background */}
      <video
        autoPlay
        muted
        loop
        className="absolute z-10 top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/campusconnect_broll_2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* White overlay */}
      <div className="absolute z-20 w-full h-full bg-[#e75252] opacity-50"></div>

      {/* Content overlay */}
      <div className="flex z-30 bg-transparent flex-col justify-center py-[120px] px-[30px] items-center text-center text-3xl text-gray-800 font-body-regular-400 absolute top-0 left-0 w-full h-full">
        <div className="flex flex-col items-center justify-center gap-[62px]">
          <div className="flex flex-col text-33xl text-gray-white font-body-regular-400 items-center justify-start gap-[24px]">
            <div className="relative leading-[72px] flex-wrap w-[650px] font-semibold text-white">
              Find your Next Perfect Place To Live
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[17px] text-left text-base">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <button className="cursor-pointer py-3 px-6 bg-red-500 rounded text-white text-center">
                Explore Now
              </button>
              <button className="cursor-pointer py-3 px-6 bg-white rounded overflow-hidden hover:bg-gray-100 text-red-500 text-center">
                Find your home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
