import NewsletterForm from '../NewsletterForm/NewsletterForm';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner-wrapper">
            <div className="banner">
                <div className="banner-text">
                    <h1 className="title banner-title">Hi, we're Alex and Miro.</h1>
                    <p className="banner-description">On this blog we share tips and tricks, frameworks, projects, tutorials, etc.<br /> Make sure you subscribe to get the latest updates.</p>
                    <NewsletterForm></NewsletterForm>
                </div>

                <div className="banner-img">
                    <img src="./images/main.svg" alt="Coder" />
                </div>
            </div>
        </section>
    );
};

export default Banner;