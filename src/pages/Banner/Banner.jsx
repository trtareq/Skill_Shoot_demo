
const Banner = () => {
    return (
        <div className="hero text-white bg-[#245D51]">
            <div className="hero-content  relative flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co/YTDCMz2/image.png"
                    className="max-w-sm hidden md:block lg:ml-24  rounded-lg " />
                <div className="lg:mr-20 ">
                    <h1 className="text-5xl  font-bold">There is always <span>
                        <img className=" ms-48 mt-2 w-[150px] h-[10px]" src="https://i.ibb.co/ryVTWRk/Vector-1.png" />
                    </span>  something new for <br /> <span className="mt-5 block">us  to learn</span></h1>
                    <p className="py-6  text-[#ffffff96]">
                        we have created more than 100+ materials on various <br /> things that will help your career, with mentors who are <br /> experienced in their fields.
                    </p>
                    <button className="btn font-bold text-xs px-5 text-white bg-[#CB8461]">Start Journey</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;