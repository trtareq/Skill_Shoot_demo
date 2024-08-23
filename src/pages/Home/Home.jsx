
import Navbar from "../Shared/Navbar/Navbar";

import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Trust from "../Section_1/Trust";
import Category from "../Section_3/Category";
import SKill from "../Section_5/SKill";
import Subscribe from "../Section_7/Subscribe";




const Home = () => {
    return (
        <div>
            <Navbar ></Navbar>
            <Banner></Banner>
            <Trust></Trust>
            <Category></Category>
            <SKill></SKill>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;