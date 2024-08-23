
const Exist = () => {
    return (
        <div className=" mx-10 mt-10 space-y-3">
            <h1 className="text-3xl font-bold">Why do We <span className="text-[#CB8461]">exist?</span></h1>
            <p className="text-[#808080]  text-balance">Because we know that many people or companies <br /> have the same problem when it comes to how <br /> difficult it is to improve their skills</p>
            <div className="flex gap-5 flex-end">
                    <div className="avatar">
        <div className="w-12 rounded-full">
            <img src="https://i.ibb.co/FnS4cCr/architect.png" />
        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Jerony Pulquosta</h1>
                        <p className="text-[#808080] text-balance">CEO Skill Shoot</p>
                    </div>
            </div>
           <div className="w-72">
           <img src="https://i.ibb.co/K0fVs3X/Line-1.png" alt="" />
           </div>
           <div className="flex gap-5 mt-5 flex-end">
            <div>
                <h1 className="text-2xl font-bold">100+</h1>
                <p className="text-[#808080]  text-balance">Updated Material</p>
            </div>
            <div >
                <h1 className="text-2xl font-bold">15K</h1>
                <p className="text-[#808080]  text-balance">Member Join</p>
            </div>
           </div>
        </div>
        
    );
};

export default Exist;