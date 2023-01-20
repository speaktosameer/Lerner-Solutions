
import { Link } from "react-router-dom";

const title = "Most Popular Post";

const postList = [
    {
        imgUrl: 'assets/images/blog/02.jpg',
        imgAlt: 'lerner',
        title: 'Set Your Career With Java',
        date: 'Jul 28,2020',
    },
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'lerner',
        title: '5 Reasons Why ServiceNow is the Future of IT Service Management',
        date: 'Jan 08,2023',
    },
]

const PopularPost = () => {
    return (
        <div className="widget widget-post">
            <div className="widget-header">
                <h5 className="title">{title}</h5>
            </div>
            <ul className="widget-wrapper">
                {postList.map((val, i) => (
                    <li className="d-flex flex-wrap justify-content-between" key={i}>
                        <div className="post-thumb">
                            <Link to="/blog-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                        </div>
                        <div className="post-content">
                            <Link to="/blog-single"><h6>{val.title}</h6></Link>
                            <p>{val.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default PopularPost;