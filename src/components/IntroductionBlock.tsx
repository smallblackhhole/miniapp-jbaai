

import React, { useRef, useState } from 'react';
import '../styles/IntroductionBlock.css';
import heathyCareImg from '../assets/img/heathy-care.png';
import InstallationGuideBlock from './InstallationGuideBlock';
import UsageGuideBlock from './UsageGuideBlock';
import '../styles/HomePage.css';

const IntroductionBlock = () => {
  return (
    <div className='container-introduction'>
      <img
        src="https://play-lh.googleusercontent.com/xWvxp16yYaYlz2PubTrNjDfn8EcKizgDMQzjjDrQaXKJHwC7PKP0hkMJTiGnTJOPhCvo"
        alt="JBAAI Logo"
        className="logo"
      />
      <div className='container-detail'>
        <h1 className='head-title'>ABOUT US</h1>
        <p><b>JBAAI</b> là ứng dụng chăm sóc sức khỏe thông minh, ứng dụng trí tuệ nhân tạo (AI) để hỗ trợ bạn theo dõi, quản lý và cải thiện sức khỏe một cách toàn diện. Chúng tôi tin rằng mỗi người đều xứng đáng có một “trợ lý sức khỏe” riêng, giúp đưa ra những quyết định đúng đắn, kịp thời và mang tính cá nhân hóa. Với JBAAI, bạn không chỉ dễ dàng theo dõi các chỉ số sức khỏe của mình, mà còn nhận được những gợi ý phù hợp về chế độ ăn uống, luyện tập và tư vấn y tế, nhằm hướng tới một lối sống lành mạnh và cân bằng hơn.</p>
      </div>
      <img src={heathyCareImg} className='healthy-care-image' />
      <hr className="style-two" />
      <DetailApp />
      <AboutUs />
      <hr className="style-two" />
    </div>
  );
};


const AboutUs = () => {
  return (
    <div className='container-about'>
      <img
        src={heathyCareImg}
        alt="Consulting Team"
        className="aboutus-image"
      />
      <div className='aboutus-right'>
        <div className='aboutus-label'>ABOUT OUR APP</div>
        <div className='aboutus-title'>JBAAI APPLICATION</div>
        <div className='aboutus-content'>Công nghệ phần mềm của JBAAI sử dụng Al tiên tiến và các thuật toán học sâu để trích xuất các phép đo sức khỏe quan trọng bằng phương pháp quang trắc thể tích (PPG) trong vòng 20-60 giây . Bằng cách kết hợp các kỹ thuật thị giác máy tính, xử lý tín hiệu và học máy, JBAAI phân tích tín hiệu PPG để cung cấp các phép đo dấu hiệu sinh tồn và dấu ấn sinh học với độ chính xác
          cao.</div>
        <div className='aboutus-content'>Được cung cấp dưới dạng Ứng dụng Phần mềm dưới dạng Thiết bị Y tế (SaMD) (ng dụng JBAAI), công nghệ này hỗ trợ:
          • Kiếm tra tại chỗ rPPG không tiếp xúc thông qua các thiết bị có camera như điện thoại thông minh và máy tính bảng
          ® Theo dõi liên tục thông qua cảm biến PPG tiếp xúc để theo dõi sức khỏe theo thời gian thực</div>
      </div>
    </div>
  );
};

const DetailApp = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86mMifhAoJZBOgH8oC3QElFZyYapyfDnxFXjnITyAPlBTScXVAmnmLGVJXw8OExaLZkE&usqp=CAU",
      title: "Theo dõi sức khỏe",
      desc: "Ghi nhận các chỉ số sức khỏe như nhịp tim, huyết áp, lượng đường, cân nặng…"
    },
    {
      img: "https://hedima.vn/journey/wp-content/uploads/2021/05/3-1.jpg",
      title: "Trợ lý AI tư vấn sức khỏe",
      desc: "Đưa ra gợi ý chế độ ăn uống, tập luyện và thói quen sinh hoạt phù hợp với từng người."
    },
    {
      img: "https://cdn.prod.website-files.com/680280c18df8e68403545b30/680280c18df8e68403545d9a_%231%20User%20experience.webp",
      title: "Phân tích sức khoẻ qua khuôn mặt",
      desc: "Công nghệ nhận diện khuôn mặt để đánh giá tình trạng sức khỏe của người dùng."
    },
    {
      img: "https://hk.momax.net/cdn/shop/files/Momax_1-SenseActiveMulti-FunctionalHealthTrackingSmartRing_SG1S_TopLeft.239_v2.webp?v=1753027359&width=1500",
      title: "Smart Ring",
      desc: "Thiết bị đeo thông minh giúp theo  dõi sức khỏe 24/7."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86mMifhAoJZBOgH8oC3QElFZyYapyfDnxFXjnITyAPlBTScXVAmnmLGVJXw8OExaLZkE&usqp=CAU",
      title: "Theo dõi sức khỏe",
      desc: "Ghi nhận các chỉ số sức khỏe như nhịp tim, huyết áp, lượng đường, cân nặng…"
    },
    {
      img: "https://hedima.vn/journey/wp-content/uploads/2021/05/3-1.jpg",
      title: "Trợ lý AI tư vấn sức khỏe",
      desc: "Đưa ra gợi ý chế độ ăn uống, tập luyện và thói quen sinh hoạt phù hợp với từng người."
    },
    {
      img: "https://cdn.prod.website-files.com/680280c18df8e68403545b30/680280c18df8e68403545d9a_%231%20User%20experience.webp",
      title: "Phân tích sức khoẻ qua khuôn mặt",
      desc: "Công nghệ nhận diện khuôn mặt để đánh giá tình trạng sức khỏe của người dùng."
    },
    {
      img: "https://hk.momax.net/cdn/shop/files/Momax_1-SenseActiveMulti-FunctionalHealthTrackingSmartRing_SG1S_TopLeft.239_v2.webp?v=1753027359&width=1500",
      title: "Smart Ring",
      desc: "Thiết bị đeo thông minh giúp theo  dõi sức khỏe 24/7."
    },
  ];

  const cardsPerPage = React.useMemo(() => {
    if (!listRef.current) return 1;
    const ulWidth = listRef.current.offsetWidth;
    const cardWidth = 320 + 48;
    return Math.max(1, Math.floor(ulWidth / cardWidth));
  }, [listRef.current?.offsetWidth]);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    const totalPages = Math.ceil(items.length / cardsPerPage);
    // Reset currentIndex nếu out-of-range
    if (currentIndex >= totalPages) setCurrentIndex(0);
    else {
      timeout = setTimeout(() => {
        if (!listRef.current) return;
        let nextIndex = (currentIndex + 1) % totalPages;
        const ul = listRef.current;
        const card = ul.querySelector('.detail-app-card');
        if (!card) return;
        const cardWidth = card.clientWidth + 48;
        ul.scrollTo({
          left: cardWidth * nextIndex,
          behavior: "smooth"
        });
        setCurrentIndex(nextIndex);
      }, 2500);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, items.length, cardsPerPage]);

  const handleScroll = () => {
    if (!listRef.current) return;
    const ul = listRef.current;
    const card = ul.querySelector('.detail-app-card');
    if (!card) return;
    const cardWidth = card.clientWidth + 48;
    const index = Math.round(ul.scrollLeft / cardWidth);
    setCurrentIndex(index);
  };

  // Số trang (dot)
  const totalPages = Math.ceil(items.length / cardsPerPage);

  // Click dot để scroll tới trang tương ứng
  const handleDotClick = (pageIdx: number) => {
    if (!listRef.current) return;
    const ul = listRef.current;
    const card = ul.querySelector('.detail-app-card');
    if (!card) return;
    const cardWidth = card.clientWidth + 48;
    ul.scrollTo({
      left: cardWidth * pageIdx,
      behavior: "smooth"
    });
    setCurrentIndex(pageIdx);
  };
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <ul
        className="carousel-list"
        ref={listRef}
        onScroll={handleScroll}
      >
        {items.map((item, i) => (
          <li key={i}>
            <div className="detail-app-card">
              <img className="detail-app-card-img" src={item.img} alt={item.title} />
              <h3 className="detail-app-card-title">{item.title}</h3>
              <p className="detail-app-card-desc">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="scroll-dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
            style={{ cursor: 'pointer' }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default IntroductionBlock;

