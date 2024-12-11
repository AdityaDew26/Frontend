import React from 'react'; 
import Header from "../pages/Header/Header"; 
import About from "../pages/about/About"
import Project from "../pages/project/Project"
import Contact from '../pages/contact/Contact';
import Footer from '../pages/footer/Footer';
import Blog from '../pages/blog/Blog';

const Home = () => {
    return (
        <div>
            <Header />
            <About/>
            <Project/>
            <Blog/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home; 