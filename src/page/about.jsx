import { Fragment } from "react";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/header-2";


const subTitle = "About Us";
const title = "Lernen Solutions";
const desc = "Lernen is a product of digital age designed for web-based learning providing wide scale of technical courses for IT employees, students, job seekers. Our learning platform delivers to fill the gap between job recruiters & searchers. Based on wide variety of skilled courses, we are determined to provide better career growth as well as preparing people for future challenges.";
const year = "3+";
const expareance = "Years Of Experiences";



const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'When we Started',
        desc: 'Started in 2016, with a vision to upskill, Lernen has deep passion of technology and knowledge of rapid changing IT world. We have come a long way to prove our worth withstanding the competitors around. Our co-founders, with a combined experience of more than 40 years, always thrive to put best talent in IT companies. With wide variety of knowledge in recruitment, management & training, we are a team with people having knowledge in different areas to understand the requirement and analysis of job market. And with positive attitude, we always deliver talent with high skills and ready to be able to handle challenges around.',
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Get Your Dream Job',
        desc: 'Lernen not only provides training on IT courses but also deliver a powerful backbone to its clients by helping them even after completion of course. Always ready to face challenges in difficult times, we never outback our clients. Lernen helps in preparing professional resumes and making them suitable for current job market. Also, helping to prepare for interviews, we make sure to put our students in their desired role & company.',
    },
    {
        imgUrl: 'assets/images/about/icon/03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'We Provide',
        desc: 'In training, we provide efforts to people to proceed at their comfort level and provide feedback based on their progress. By working on real life test cases, we provide scenario of actual work to be done on live projects which help the students to figure out the challenges and roles to be played at different levels to troubleshoot issue and bring out the resolutions. With detailed theory on every topic and simultaneous practical labs, we train our students to be ready for all aspects of the technology.',
    },
]


const AboutPage = () => {
    return ( 
        <Fragment>
            <HeaderTwo />
            <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="assets/images/about/01.jpg" alt="about" />
                                </div>
                                <div className="abs-thumb">
                                    <img src="assets/images/about/02.jpg" alt="about" />
                                </div>
                                <div className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-right">
                                <div className="section-header">
                                    <span className="subtitle">{subTitle}</span>
                                    <h2 className="title">{title}</h2>
                                    <p>{desc}</p>
                                </div>
                                <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="sr-right">
                                                    <h5>{val.title}</h5>
                                                    <span>{val.desc}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Student /> */}
            {/* <Instructor /> */}
            {/* <Skill /> */}
            {/* <AchievementTwo /> */}
            {/* <Blog /> */}
            <Footer />
        </Fragment>
    );
}

export default AboutPage;
 