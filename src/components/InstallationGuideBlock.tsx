import React from 'react';

const InstallationGuideBlock = () => {
  return (
    <section id="installation" className="block-section video-section">
      <h2 className="section-title">Hướng dẫn Cài đặt App</h2>
      <div className="video-container">
        {/* Thay thế link YouTube này bằng video của bạn */}
        <iframe 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </section>
  );
};

export default InstallationGuideBlock;