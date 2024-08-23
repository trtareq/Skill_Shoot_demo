import Exist from "./Exist";
import Material from "./Material";


const Category = () => {
    return (
        <div className="grid grid-cols-2 gap-5 items-center">
            <div>
                <Exist></Exist>
            </div>
            <div>
            <Material></Material>
            </div>
        </div>
    );
};

export default Category;