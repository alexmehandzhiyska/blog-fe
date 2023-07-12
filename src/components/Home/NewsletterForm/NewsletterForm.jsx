import './NewsletterForm.css';

const NewsletterForm = () => {
    return (
        <form className="newsletter-form">
            <input type="email" name="email" id="email" placeholder="Enter your email here..." />
            <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
    );
};

export default NewsletterForm;