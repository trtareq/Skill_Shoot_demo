
const Pro_100 = () => {
    return (
        <div className="bg-[#286054] shadow-2xl space-y-2 rounded-xl text-white w-72 p-5">
        <div className="grid justify-items-end">
           <button className="p-1  rounded-md text-xs bg-[#CC8663]">
        Most Popular
           </button>
        </div>
        <p >
            <span className="text-3xl mr-2 font-bold">
                $100
            </span>
            / 6 month
        </p>
        <p className="text-2xl font-bold">
            Pro
        </p>
       <p>
            Lorem Ipsum is simply dummy text of the printing 
       </p>
       <ul className="list-none mt-2 ">
         <li className="flex mt-2">
            <img src="https://i.ibb.co/qmBwjxk/Path.png" alt="" className="w-[20px] h-[20px] mr-1" />
            Access all videos
         </li>
         <li className="flex mt-2">
            <img src="https://i.ibb.co/qmBwjxk/Path.png" alt="" className="w-[20px] h-[20px] mr-1" />
            Get Certificate
         </li>
         <li className="flex mt-2">
            <img src="https://i.ibb.co/qmBwjxk/Path.png" alt="" className="w-[20px] h-[20px] mr-1" />
            Chat support
         </li>
         <li className="flex mt-2">
            <img src="https://i.ibb.co/qmBwjxk/Path.png" alt="" className="w-[20px] h-[20px] mr-1" />
            Update Notification
         </li>
         <li className="flex mt-2">
            <img src="https://i.ibb.co/qmBwjxk/Path.png" alt="" className="w-[20px] h-[20px] mr-1" />
            Download material  </li>
      </ul>
       <div className="grid  gap-4 place-content-center ">
       <button className="p-3 w-48 hover:bg-[#e49873a4]  text-xm   rounded-xl  bg-[#CC8663]">
        Choose plan
           </button>
       </div>
      
     </div>
    );
};

export default Pro_100;