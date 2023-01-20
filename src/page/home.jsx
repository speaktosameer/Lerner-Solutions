import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/header-2";
import AboutTwo from "../component/section/about-2";
import BannerTwo from "../component/section/banner-2";
import CourseThree from "../component/section/course-3";
import Instructor from "../component/section/instructor";
import Skill from "../component/section/skill";
import Student from "../component/section/student";


const Home = () => {
    return (
        <Fragment>
            <HeaderTwo />
            <BannerTwo />
            <CourseThree />
            <Student />
            <Instructor />
            {/* <CategoryTwo /> */}
            <Skill />
            <AboutTwo />
            {/* <AchievementTwo /> */}
            {/* <Blog /> */}
            <Footer />
        </Fragment>
    );
}
 
export default Home;