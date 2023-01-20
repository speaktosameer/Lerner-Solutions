import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/header-2";
import PageHeader from "../component/layout/pageheader";


const blogList = [
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'Blog Thumb',
        title: '5 Reasons Why ServiceNow is the Future of IT Service Management.',
        desc: '5 Reasons Why ServiceNow is the Future of IT Service Management If you work in IT, you have probably heard of ServiceNow. But you might not…',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Lernen Solution',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jan 08,2023',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/02.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Set Your Career in Java with Lernen Solution.',
        desc: 'Why Java : First of all, it’s not about one specific language, We can choose any. However, every decision maker needs some specific data. Let…',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Lernen Solution',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jul 08,2020',
            },
        ],
    },
]



const BlogPage = () => {
    return ( 
        <Fragment>
            <HeaderTwo />
            <PageHeader title={'Our Blog Posts'} curPage={'Blog'} />
            <div className="blog-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
                            {blogList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="post-item">
                                        <div className="post-inner">
                                            <div className="post-thumb">
                                                <Link to="/blog-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                            </div>
                                            <div className="post-content">
                                                <Link to="/blog-single"><h4>{val.title}</h4></Link>
                                                <div className="meta-post">
                                                    <ul className="lab-ul">
                                                        {val.metaList.map((val, i) => (
                                                            <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <p>{val.desc}</p>
                                            </div>
                                            <div className="post-footer">
                                                <div className="pf-left">
                                                    <Link to="/blog-single" className="lab-btn-text">{val.btnText} <i className="icofont-external-link"></i></Link>
                                                </div>
                                                <div className="pf-right">
                                                    <i className="icofont-comment"></i>
                                                    <span className="comment-count">{val.commentCount}</span>
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

export default BlogPage;