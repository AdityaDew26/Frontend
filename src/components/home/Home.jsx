import React from 'react'; 
import Header from "../pages/Header/Header"; 
import About from "../pages/about/About";
import Project from "../pages/project/Project";
import Blog from "../pages/blog/Blog";
import Contact from '../pages/contact/Contact';
import Footer from '../pages/footer/Footer';
import Navbar from '../pages/navbar/Navbar';

const Home = () => {
    return (
        <div>
             <Navbar/>
            <Header />
            <About />
            <Project />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
