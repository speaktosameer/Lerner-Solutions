
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const subTitle = "Don’t Miss";
const title = "Lernen Solution's Courses";

const courseList = [
    {
        imgUrl: 'assets/images/course/27.png',
        imgAlt: 'course rajibraj91 rajibraj',
        courseName: 'Bussiness',
        coursePrice: 'Rs 1,00,000',
        courseTitle: 'Business Analyst Training',
        user: '2',
        commentCount: '23',
        btnText: 'Join Now',
    },
    {
        imgUrl: 'assets/images/course/28.png',
        imgAlt: 'course rajibraj91 rajibraj',
        courseName: 'Design',
        coursePrice: 'Rs 40,000',
        courseTitle: 'Service Now Advance',
        user: '7',
        commentCount: '23',
        btnText: 'Join Now',
    },
    {
        imgUrl: 'assets/images/course/29.png',
        imgAlt: 'course rajibraj91 rajibraj',
        courseName: 'Design',
        coursePrice: 'Rs 40,000',
        courseTitle: 'Service Now Fundamentals',
        user: '72',
        commentCount: '23',
        btnText: 'Join Now',
    },
]


const CourseThree = () => {
    return (
        <div className="course-section style-2 padding-tb">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                    <div className="course-navigations">
                        <div className="course-navi course-navi-next"><i className="icofont-double-left"></i></div>
                        <div className="course-navi course-navi-prev"><i className="icofont-double-right"></i></div>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="course-slider p-2">
                        <div className="swiper-wrapper">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={2}
                                loop={'true'}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    prevEl: '.course-navi-prev',
                                    nextEl: '.course-navi-next',
                                }}
                                modules={[Autoplay, Navigation]}
                                breakpoints={{
                                    0: {
                                        width: 0,
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        width: 768,
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        width: 1200,
                                        slidesPerView: 2.85,
                                    },
                                }}
                            >
                                {courseList.map((val, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="course-item style-3">
                                            <div className="course-inner text-center">
                                                <div className="course-thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    <ul className="course-info lab-ul">
                                                        <li><span className="course-name">{val.courseName}</span></li>
                                                        <li><span className="price">{val.coursePrice}</span></li>
                                                        <li>
                                                            <span className="ratting">
                                                                <i className="icofont-ui-rate-blank"></i>
                                                                <i className="icofont-ui-rate-blank"></i>
                                                                <i className="icofont-ui-rate-blank"></i>
                                                                <i className="icofont-ui-rate-blank"></i>
                                                                <i className="icofont-ui-rate-blank"></i>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="course-content">
                                                    <a href="#"><h4>{val.courseTitle}</h4></a>
                                                    <div className="course-details">
                                                        <div className="couse-count"><i className="icofont-users-alt-3"></i> {val.user}</div>
                                                        <div className="couse-topic"><i className="icofont-wall-clock"></i> {val.commentCount}</div>
                                                    </div>
                                                    <a href="#" className="lab-btn"><span>{val.btnText}</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CourseThree;