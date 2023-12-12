import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Banner from "../../Components/Header/Banner/Banner";
import MySkills from "../MySkills/MySkills";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
       
            <Banner></Banner>

            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Gallery></Gallery>
            <Contact></Contact>
        
        </div>
    );
};

export default Home;