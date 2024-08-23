import Base_50 from "./Base_50";
import Enterprise_250 from "./Enterprise_250";
import Pro_100 from "./Pro_100";

const Subscribe = () => {
    return (
        <>

<div className='text-center m-10 text-wrap'>
            <p className="text-4xl font-extrabold"> <span className="text-[#CB8461]">Subscribe </span>with us now</p>
            <p className="text-xs mt-2 text-[#808080]">by subscribing now you will be able to access the material easily <br />and cheaply, so you will be very efficient and benefit</p>
        </div>
         <div className="grid lg:grid-cols-3 gap-2">
                <div>
                  <Base_50></Base_50>
                </div>
                <div>
                   <Pro_100></Pro_100>
                </div>
                <div>
                    <Enterprise_250></Enterprise_250>
                </div>
            </div>
        
        </>
        
    );
};

export default Subscribe;