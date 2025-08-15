import React from 'react';

const placeholderLogo = "https://via.placeholder.com/150/0066b3/FFFFFF?Text=JBAAI";

const IntroductionBlock = () => {
  return (
    <section id="introduce" className="block-section hero-section">
      <img src={placeholderLogo} alt="JBAAI Logo" className="hero-logo" />
      <h1 className="hero-title">Chào mừng đến với JBAAI</h1>
      <p className="hero-tagline">
        Giải pháp AI Toàn diện cho Doanh nghiệp của Bạn
      </p>
      <p className="hero-description">
        Chúng tôi sử dụng sức mạnh của trí tuệ nhân tạo để đơn giản hóa quy trình, 
        tối ưu hóa hiệu suất và mang lại những hiểu biết sâu sắc từ dữ liệu của bạn.
      </p>
    </section>
  );
};

export default IntroductionBlock;