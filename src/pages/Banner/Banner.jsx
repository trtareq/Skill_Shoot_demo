
const Banner = () => {
    return (
        <div className="hero text-white bg-[#245D51]">
            <div className="hero-content  relative flex-col lg:flex-row-reverse">
                <img 
                src="https://i.ibb.co/YTDCMz2/image.png"
                className="max-w-sm lg:ml-24  rounded-lg " />
                <div className="lg:mr-20 ">
                <h1 className="text-5xl  font-bold">There is always <br />something new for <br /> us  to learn</h1>
                <p className="py-6  text-[#ffffff96]">
                we have created more than 100+ materials on various <br /> things that will help your career, with mentors who are <br /> experienced in their fields.
                </p>
                <button className="btn font-bold text-xs px-5 text-white bg-[#CB8461]">Start Journey</button>
                </div>
                <img src="https://i.ibb.co/ryVTWRk/Vector-1.png" 
                className="w-36 absolute left-56 top-28 " />
            </div>
       </div>
    );
};

export default Banner;