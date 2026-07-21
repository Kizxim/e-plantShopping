import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="page-title">About Paradise Nursery</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        <p>
          <strong>Paradise Nursery</strong> was founded in 2025 with a simple mission:
          to make the world greener, one plant at a time. We believe that every
          home deserves a touch of nature, and we're here to help you find the
          perfect plant for your space.
        </p>
        <p>
          Our plants are carefully sourced from sustainable growers who share our
          passion for quality and environmental responsibility. Whether you're a
          seasoned plant parent or just starting your green journey, we have
          something for everyone.
        </p>
        <p><strong>📍 Location:</strong> Ho Chi Minh City, Vietnam</p>
        <p><strong>📧 Email:</strong> hello@paradisenursery.com</p>
        <p><strong>📞 Phone:</strong> +84 123 456 789</p>
      </div>
    </div>
  );
}

export default AboutUs;
