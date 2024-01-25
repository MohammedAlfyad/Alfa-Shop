import React from 'react';
import '../css/header.css'
import Lottie from "lottie-react";
import about from '../animation/about.json'
function AboutPage() {
  return (
    <div className="about-page">
      <h1 className='heading'>About Our Store</h1>
      <div className="about">
      <div className="right-side">
      <p className='paragraph'>
        Welcome to our online store! We are dedicated to providing high-quality products
        and excellent customer service. Our mission is to make your shopping experience
        enjoyable and convenient.
      </p>
      <p className='paragraph'>
        At Alfa Shop, we offer a wide range of products, from electronics to
        fashion, all carefully curated to meet your needs. Our team is passionate about
        delivering the latest trends and ensuring the satisfaction of our customers.
      </p>
      <p className='paragraph'>
        If you have any questions or feedback, feel free to reach out to our customer
        support team. We are here to assist you and make your shopping experience
        exceptional.
      </p>
      </div>
      <div className="animation">
          <Lottie animationData={about} />
      </div>
      </div>
    </div>
  );
};

export default AboutPage;
