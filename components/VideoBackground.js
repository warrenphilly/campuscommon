export default function VideoBackground() {
   return (
     <div className="relative w-full h-[650px] self-stretch overflow-hidden">
       <video
         autoPlay
         muted
         loop
         className="absolute z-10 bottom-[2px] w-auto min-w-full min-h-full max-w-none"
       >
         <source src="/video/campusconnect_broll_2.mp4" type="video/mp4" />
         Your browser does not support the video tag.
       </video>
       {/* White overlay */}
       <div className="absolute z-20 w-full h-full bg-white opacity-50"></div>
       {/* Content overlay */}
       <div className="self-stretch flex z-30 bg-transparent flex-col h-[650px] justify-center py-[120px] px-[30px] items-center text-center text-33xl text-gray-white font-body-regular-400">
         <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
           <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
             <div className="self-stretch relative leading-[72px] font-semibold">
               Let us take the stress out of Searching...
             </div>
           </div>
           <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-left text-base font-body-regular-600">
             <div className="flex flex-row items-start justify-start gap-[10px]">
               <button className="cursor-pointer [border:none] py-3 px-6 bg-red-500 rounded items-start justify-start">
                 <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                   Explore Now
                 </div>
               </button>
               <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start hover:bg-whitesmoke-100">
                 <div className="relative text-base leading-[24px] text-red-500 text-center">
                   Find your home
                 </div>
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
 