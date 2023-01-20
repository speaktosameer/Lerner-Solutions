
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

const subTitle = "Featured Courses";
const title = "Pick A Course To Get Started";


const courseList = [
    {
        imgUrl: 'assets/images/course/27.png',
        imgAlt: 'course vereda vereda',
        price: '$30',
        cate: 'Bussiness',
        reviewCount: '03 reviews',
        title: 'Bussiness Anlyst Training',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'course author vereda vereda',
        authorName: 'Enquiry Now',
        btnText: 'Join Now',
        // coursedtl: '/course-single',
    },
    {
        imgUrl: 'assets/images/course/28.png',
        imgAlt: 'course vereda vereda',
        price: '$30',
        cate: 'Design',
        reviewCount: '03 reviews',
        title: 'Service Now Advance',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'course author vereda vereda',
        authorName: 'Enquiry Now',
        btnText: 'Join Now',
        // coursedtl: '/course-single1',
    },
    {
        imgUrl: 'assets/images/course/29.png',
        imgAlt: 'course vereda vereda',
        price: '$30',
        cate: 'Design',
        reviewCount: '03 reviews',
        title: 'Service Now Fundamentals',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'course author vereda vereda',
        authorName: 'Enquiry Now',
        btnText: 'Join Now',
        // coursedtl: '/course-single1',

    },
    // {
    //     imgUrl: 'assets/images/course/04.jpg',
    //     imgAlt: 'course vereda vereda',
    //     price: '$30',
    //     cate: 'Adobe XD',
    //     reviewCount: '03 reviews',
    //     title: 'Computer Fundamentals Basic Startup Ultricies Vitae',
    //     totalLeson: '18x Lesson',
    //     schdule: 'Online Class',
    //     authorImgUrl: 'assets/images/course/author/04.jpg',
    //     authorImgAlt: 'course author vereda vereda',
    //     authorName: 'Zinat Zaara',
    //     btnText: 'Read More',
    // },
    // {
    //     imgUrl: 'assets/images/course/05.jpg',
    //     imgAlt: 'course vereda vereda',
    //     price: '$30',
    //     cate: 'Adobe XD',
    //     reviewCount: '03 reviews',
    //     title: 'Boozy Halloween Drinks for the Grown Eleifend Kuismod',
    //     totalLeson: '18x Lesson',
    //     schdule: 'Online Class',
    //     authorImgUrl: 'assets/images/course/author/05.jpg',
    //     authorImgAlt: 'course author vereda vereda',
    //     authorName: 'Himanshu ',
    //     btnText: 'Read More',
    // },
    // {
    //     imgUrl: 'assets/images/course/06.jpg',
    //     imgAlt: 'course vereda vereda',
    //     price: '$30',
    //     cate: 'Adobe XD',
    //     reviewCount: '03 reviews',
    //     title: 'Student Want to Learn About Science And Arts',
    //     totalLeson: '18x Lesson',
    //     schdule: 'Online Class',
    //     authorImgUrl: 'assets/images/course/author/06.jpg',
    //     authorImgAlt: 'course author vereda vereda',
    //     authorName: 'Angel Mili',
    //     btnText: 'Read More',
    // },
]

const CourseThree = () => {
    return (
        <div className="course-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
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
                                                {/* <div className="course-reiew">
                                                    <Rating />
                                                    <span className="ratting-count"> {val.reviewCount}</span>
                                                </div> */}
                                            </div>
                                            <Link to="#"><h4>{val.title}</h4></Link>
                                            {/* <div className="course-details">
                                                <div className="couse-count"><i className="icofont-video-alt"></i> {val.totalLeson}</div>
                                                <div className="couse-topic"><i className="icofont-signal"></i> {val.schdule}</div>
                                            </div> */}
                                            <div className="course-footer">
                                                <div className="course-author">
                                                    {/* <img src={`${val.authorImgUrl}`} alt={`${val.authorImgAlt}`} /> */}
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
    );
}
 
export default CourseThree;