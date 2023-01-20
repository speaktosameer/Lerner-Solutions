
import { Link } from "react-router-dom";

const newsTitle = "Want Us To Email You About Special Offers And Updates?";
const quickTitle = "Quick Links";
const infoTitle = "Information";
const supportTitle = "Support";
const contactTitle = "Contact Us";


const quickList = [
    {
        text: 'Home',
        link: '#',
    },
    {
        text: 'Courses',
        link: '#',
    },
    {
        text: 'Blogs',
        link: '#',
    },
]

const infoList = [
    {
        text: 'About Us',
        link: '#',
    },
    {
        text: 'Contact Us',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '#',
    },
]

const supportList = [
    {
        text: 'Refund Policy',
        link: '#',
    },
    {
        text: 'Terms & Condition',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
]

const contactList = [
    {
        text: 'Banglore, India',
        iconName: 'icofont-google-map',
        link: '#',
    },
    {
        text: '+91 89717 11098',
        iconName: 'icofont-ui-call',
        link: '#',
    },
    {
        text: '	info@lernensolutions.com',
        iconName: 'icofont-mail',
        link: '#',
    },
]



const Footer = () => {
    return (
        <div className="news-footer-wrap">
            <div className="fs-shape">
                <img src="assets/images/shape-img/03.png" alt="fst" className="fst-1" />
                <img src="assets/images/shape-img/04.png" alt="fst" className="fst-2" />
            </div>
            
            <div className="news-letter">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="news-title">
                            <h3>{newsTitle}</h3>
                        </div>
                        <div className="news-form">
                            <form action="/">
                                <div className="nf-list">
                                    <input type="email" name="email" placeholder="Enter Your Email" />
                                    <input type="submit" name="submit" value="Subscribe Now" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <footer>
                <div className="footer-top padding-tb pt-0">
                    <div className="container">
                        <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{quickTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {quickList.map((val, i) => (
                                                        <li key={i}><a href={val.link}>{val.text}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{infoTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {infoList.map((val, i) => (
                                                        <li key={i}><a href={val.link}>{val.text}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{supportTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {supportList.map((val, i) => (
                                                        <li key={i}><a href={val.link}>{val.text}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{contactTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {contactList.map((val, i) => (
                                                        
                                                        <li key={i}><a href={val.link}><i className={val.iconName}></i> {val.text}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-2">
                    <div className="container">
                        <div className="section-wrapper">
                            <p>&copy; 2023 <Link to="/">Lernen Solution</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
 
export default Footer;