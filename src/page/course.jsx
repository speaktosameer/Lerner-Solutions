import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/header-2";
// import Rating from "../component/sidebar/rating";



const courseList = [
    {
        imgUrl: 'assets/images/course/01.jpg',
        imgAlt: 'lerner solution',
        price: 'Rs 1,00,000',
        cate: 'Bussiness',
        reviewCount: 'Rs 1,00,000',
        title: 'Business Analyst Fundamental',
        totalLeson: '14x Lesson',
        schdule: 'Study Material',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'lerner solution',
        authorName: 'Lerner Solution',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/02.jpg',
        imgAlt: 'lerner solution',
        price: '$30',
        cate: 'Bussiness',
        reviewCount: 'Rs. 40,000',
        title: 'Service Now Fundamental',
        totalLeson: '18x Lesson',
        schdule: 'Study Material',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'lerner solution',
        authorName: 'Lerner Solution',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/03.jpg',
        imgAlt: 'lerner solution',
        price: '$30',
        cate: 'Bussiness',
        reviewCount: 'Rs 40,000',
        title: 'Service Now Advance',
        totalLeson: '22x Lesson',
        schdule: 'Study Material',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'lerner solution',
        authorName: 'Lerner Solution',
        btnText: 'Read More',
    },
]


const CoursePage = () => {
    return (
        <Fragment>
            <HeaderTwo />
            <div className="course-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="course-showing-part">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <div className="course-showing-part-left">
                                    <p>Showing 1-6 of 10 results</p>
                                </div>
                                {/* <div className="course-showing-part-right d-flex flex-wrap align-items-center">
                                    <span>Sort by :</span>
                                    <div className="select-item">
                                        <SkillSelect select={'all'} />
                                        <div className="select-icon">
                                            <i className="icofont-rounded-down"></i>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                            {courseList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="course-item">
                                        <div className="course-inner">
                                            <div className="course-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="course-content">
                                                {/* <div className="course-price">{val.price}</div> */}
                                                <div className="course-category">
                                                    <div className="course-cate">
                                                        <a href="#">{val.cate}</a>
                                                    </div>
                                                    <div className="course-reiew">
                                                        {/* <Rating /> */}
                                                        <span className="ratting-count"> {val.reviewCount}</span>
                                                    </div>
                                                </div>
                                                <Link to="#"><h4>{val.title}</h4></Link>
                                                <div className="course-details">
                                                    <div className="couse-count"><i className="icofont-video-alt"></i> {val.totalLeson}</div>
                                                    <div className="couse-topic"><i className="icofont-signal"></i> {val.schdule}</div>
                                                </div>
                                                <div className="course-footer">
                                                    <div className="course-author">
                                                        <img src={`${val.authorImgUrl}`} alt={`${val.authorImgAlt}`} />
                                                        <Link to="#" className="ca-name">{val.authorName}</Link>
                                                    </div>
                                                    <div className="course-btn">
                                                        <Link to="#" className="lab-btn-text">{val.btnText} <i className="icofont-external-link"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default CoursePage;