import NewsletterForm from '../NewsletterForm/NewsletterForm';

import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-wrapper">
            <div className="inbox-img-wrapper">
                <img className="inbox-img" src="./images/mail.svg" alt="Mail inbox" />
            </div>
            <h1 className="heading">Subscribe for the latest updates</h1>
            <p className="text">Subscribe to the newsletter and never miss a new post.</p>
            <NewsletterForm></NewsletterForm>
        </section>
    );
};

export default Newsletter;