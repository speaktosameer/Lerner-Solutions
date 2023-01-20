import { Fragment } from "react";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/header-2";
import PageHeader from "../component/layout/pageheader";
import PopularPost from "../component/sidebar/popular-post";

const socialList = [
    {
        link: '#',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        link: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        link: '#',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        link: '#',
        iconName: 'icofont-pinterest',
        className: 'pinterest',
    },
]


 

const BlogSingle = () => {
    return (
        <Fragment>
            <HeaderTwo />
            <PageHeader title={'5 Reasons Why ServiceNow is the Future of IT Service Management'} curPage={'Blog Detais'} />
            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    <div className="post-thumb">
                                                        <img src="assets/images/blog/single/01.jpg" alt="blog thumb rajibraj91" className="w-100" />
                                                    </div>
                                                    <div className="post-content">
                                                        <h2>5 Reasons Why ServiceNow is the Future of IT Service Management</h2>
                                                        <div className="meta-post">
                                                            <ul className="lab-ul">
                                                                <li><a href="#"><i className="icofont-calendar"></i>Jan 08, 2023</a></li>
                                                                <li><a href="#"><i className="icofont-ui-user"></i>Lernen Solution</a></li>
                                                                <li><a href="#"><i className="icofont-speech-comments"></i>0 Comments</a></li>
                                                            </ul>
                                                        </div>
                                                        <h3>“5 Reasons Why ServiceNow is the Future of IT Service Management”</h3>
                                                        <p>If you work in IT, you’ve probably heard of ServiceNow. But you might not realize just how powerful and important this platform is for the future of IT service management. Here are five reasons why ServiceNow is the future:</p>

                                                        <ol>
                                                            <li><strong>Automation: </strong> One of the biggest benefits of ServiceNow is its ability to automate many of the tasks and processes involved in IT service management. With ServiceNow, you can set up workflows and rules to automatically handle routine tasks, freeing up your team to focus on more important work.</li>
                                                            <li><strong>Integration: </strong> ServiceNow integrates with a wide range of tools and systems, making it easy to bring all of your IT data and processes together in one place. This makes it easier to track and manage your IT environment, and helps you avoid the problems caused by siloed systems.</li>
                                                            <li><strong>Collaboration: </strong> ServiceNow is designed to be a collaborative platform, with features like shared workspaces and real-time communication that make it easy for your team to work together. This helps you improve efficiency and reduce errors, leading to better service for your customers.</li>
                                                            <li><strong>Customization: </strong> ServiceNow is highly customizable, so you can tailor it to fit the specific needs of your organization. This means you can create custom workflows and processes that are perfectly suited to the way you work, making it easier to deliver top-quality service.</li>
                                                            <li><strong>Scalability: </strong> As your organization grows and changes, ServiceNow can grow with you. The platform is highly scalable, so you can easily add new users, processes, and integrations as needed. This makes it easy to keep up with the demands of your business.</li>
                                                        </ol>

                                                        <p>In short, ServiceNow is the future of IT service management. If you’re not already using it, now is the time to start!</p>

                                                        <div className="tags-section">
                                                            {/* <ul className="tags lab-ul">
                                                                <li><a href="#">Agency</a></li>
                                                                <li><a href="#">Business</a></li>
                                                                <li><a href="#">Personal</a></li>
                                                            </ul> */}
                                                            <ul className="lab-ul social-icons">
                                                                {socialList.map((val, i) => (
                                                                    <li key={i}>
                                                                        <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                                                                    </li>
                                                                ))}
                                                            </ul> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="navigations-part">
                                                <div className="left">
                                                    <a href="#" className="prev"><i className="icofont-double-left"></i>Previous Article</a>
                                                    {/* <a href="#" className="title">Evisculate Parallel Processes via Technica Sound Models Authoritative</a> */}
                                                </div>
                                                <div className="right">
                                                    <a href="#" className="prev">Next Article<i className="icofont-double-right"></i></a>
                                                    {/* <a href="#" className="title">Qvisculate Parallel Processes via Technica Sound Models Authoritative</a> */}
                                                </div>
                                            </div>
                                            {/* <Author />
                                            <Comment />
                                            <Respond /> */}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default BlogSingle;