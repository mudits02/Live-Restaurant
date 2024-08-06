const Contact = () => {
    return (
        <div className="contact-container">
            <div className="hero-section">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Please fill out the form below to get in touch.</p>
            </div>
            <div className="content-section">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p><strong>Email:</strong> contact@yourcompany.com</p>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Address:</strong> 123 Your Street, Your City, Your Country</p>
                </div>
                <div className="contact-form">
                    <h2>Contact Form</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <div className="map-section">
                <h2>Our Location</h2>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098507!2d144.95373531531667!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770aa2013eaf0!2sGoogle!5e0!3m2!1sen!2sus!4v1614007426790!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;