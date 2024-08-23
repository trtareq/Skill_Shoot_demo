
const Email = () => {
    return (
        <form>
    <fieldset className="form-control text-[#ffffff96] text-xs w-80">
       <div className="join">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="block w-full  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 join-item" />
        <button className="btn text-[#ffffff96] bg-[#CC8663] join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
    );
};

export default Email;