import React from 'react';
import '../styles/UsageGuideBlock.css';
import '../styles/HomePage.css';

const UsageGuideBlock = () => {
  return (
    <section id="usage" className="usage-guide-app">
      <h1 className='head-title'>HƯỚNG DẪN SỬ DỤNG ỨNG DỤNG</h1>
      <div className="usage-guide-video-wrapper">
        <div className="usage-guide-video">
          <iframe
            className="usage-guide-iframe"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/swg5kUCIKpI"
            title="JBAAI App Demo Use"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="usage-guide-quote">
        <i><p>Hướng dẫn sử dụng ứng dụng JBAAI trên điện thoại di động của bạn.</p></i>
      </div>

       <footer style={{textAlign: 'center', marginTop: 32, color: '#888', fontSize: 14}}>
        © 2025 JBAAI. All Rights Reserved.
      </footer>
    </section>
  );
};

export default UsageGuideBlock;