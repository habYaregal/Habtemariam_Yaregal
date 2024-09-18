import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";

const Landing = ()=>{
    return(
        <>
            <Hero/>
            <AboutMe/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </>
    );
}

export default Landing;