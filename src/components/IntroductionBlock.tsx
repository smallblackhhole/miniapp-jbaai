

import React, { useEffect, useRef, useState } from 'react';
import '../styles/IntroductionBlock.css';
import heathyCareImg from '../assets/img/heathy-care.png';
import InstallationGuideBlock from './InstallationGuideBlock';
import UsageGuideBlock from './UsageGuideBlock';
import '../styles/HomePage.css';

const IntroductionBlock = () => {
  return (
    <div className='container-introduction'>
      <img
        src="/logo512.png"
        alt="JBAAI Logo"
        className="logo"
      />
      <DetailApp />
      <div className='container-detail'>
        <h1 className='head-title'>ABOUT US</h1>
        <p><b>JBAAI</b> là ứng dụng chăm sóc sức khỏe thông minh, ứng dụng trí tuệ nhân tạo (AI) để hỗ trợ bạn theo dõi, quản lý và cải thiện sức khỏe một cách toàn diện. Chúng tôi tin rằng mỗi người đều xứng đáng có một “trợ lý sức khỏe” riêng, giúp đưa ra những quyết định đúng đắn, kịp thời và mang tính cá nhân hóa. Với JBAAI, bạn không chỉ dễ dàng theo dõi các chỉ số sức khỏe của mình, mà còn nhận được những gợi ý phù hợp về chế độ ăn uống, luyện tập và tư vấn y tế, nhằm hướng tới một lối sống lành mạnh và cân bằng hơn.</p>
      </div>
      <AboutUs />
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

  const items = [
    {
      img: "https://ictv.1cdn.vn/2024/11/22/bai-6_ung-dung-tri-tue-nhan-tao-trong-chuyen-doi-so-nganh-y-te.jpeg",
      title: "Theo dõi sức khỏe",
      desc: "Ghi nhận các chỉ số sức khỏe như nhịp tim, huyết áp, lượng đường, cân nặng… Ứng dụng giúp bạn kiểm soát và phát hiện sớm các dấu hiệu bất thường.",
      color: "#679be2"
    },
    {
      img: "https://hedima.vn/journey/wp-content/uploads/2021/05/3-1.jpg",
      title: "Trợ lý AI tư vấn sức khỏe",
      desc: "Đưa ra gợi ý chế độ ăn uống, tập luyện và thói quen sinh hoạt phù hợp với từng người. AI đồng hành cùng bạn xây dựng lối sống lành mạnh, khoa học.",
      color: "#4fc3c9"
    },
    {
      img: "https://cdn.prod.website-files.com/680280c18df8e68403545b30/680280c18df8e68403545d9a_%231%20User%20experience.webp",
      title: "Phân tích sức khoẻ qua khuôn mặt",
      desc: "Công nghệ nhận diện khuôn mặt để đánh giá tình trạng sức khỏe của người dùng. Phân tích các chỉ số sinh học giúp bạn hiểu rõ hơn về sức khỏe bản thân.",
      color: "#b48ecb"
    },
    {
      img: "https://hk.momax.net/cdn/shop/files/Momax_1-SenseActiveMulti-FunctionalHealthTrackingSmartRing_SG1S_TopLeft.239_v2.webp?v=1753027359&width=1500",
      title: "Smart Ring",
      desc: "Thiết bị đeo thông minh giúp theo dõi sức khỏe 24/7. Dữ liệu được đồng bộ liên tục, hỗ trợ bạn chăm sóc sức khỏe chủ động mọi lúc mọi nơi.",
      color: "#f7b267"
    },
  ];


  const loopItems = [...items, ...items];
  const [currentIndex, setCurrentIndex] = useState(0);

  const getScrollOffset = (cards: NodeListOf<HTMLElement>, idx: number) => {
    if (cards.length === 0) return 0;
    const cardWidth = cards[0].clientWidth;
    const gap = (cards[1]?.offsetLeft - cards[0]?.offsetLeft) || 48;
    const isDesktop = typeof window !== 'undefined' && window.innerWidth > 1024;
    if (isDesktop && listRef.current) {
      const ul = listRef.current;
      const containerWidth = ul.clientWidth;
      return idx * gap - (containerWidth - cardWidth) / 2;
    } else {
      return idx * gap;
    }
  };

  // Click dot để nhảy đến card tương ứng
  const handleDotClick = (dotIdx: number) => {
    if (!listRef.current) return;
    const ul = listRef.current;
    const cards = ul.querySelectorAll(".card-infor") as NodeListOf<HTMLElement>;
    if (cards.length < 1) return;
    const offset = getScrollOffset(cards, dotIdx);
    ul.scrollTo({
      left: offset,
      behavior: "smooth"
    });
    setCurrentIndex(dotIdx);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    timeout = setTimeout(() => {
      if (!listRef.current) return;
      const ul = listRef.current;
      const cards = ul.querySelectorAll(".card-infor") as NodeListOf<HTMLElement>;
      if (cards.length < 2) return;
      const nextIndex = currentIndex + 1;
      const offset = getScrollOffset(cards, nextIndex);
      ul.scrollTo({ left: offset, behavior: "smooth" });
      setCurrentIndex(nextIndex);
      if (nextIndex === items.length) {
        setTimeout(() => {
          const prev = ul.style.scrollBehavior;
          ul.style.scrollBehavior = "auto";
          const resetOffset = getScrollOffset(cards, 0);
          ul.scrollTo({ left: resetOffset, behavior: "auto" });
          ul.style.scrollBehavior = prev || "smooth";
          setCurrentIndex(0);
        }, 500);
      }
    }, 2500);
    return () => clearTimeout(timeout);
  }, [currentIndex, items.length]);

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <ul
        className="carousel-list"
        ref={listRef}
        style={{ display: "flex", overflow: "hidden", scrollBehavior: "smooth" }}
      >
        {loopItems.map((item, i) => {
          // Chỉ phóng to nếu là card active và không phải card đầu tiên (index 0)
          const isActive = i % items.length === currentIndex % items.length;
          const isFirst = (i % items.length) === 0;
          const liClass = isActive && !isFirst ? "active" : "";
          return (
            <li key={i} className={liClass}>
              <CardInfor
                img={item.img}
                title={item.title}
                desc={item.desc}
                color={item.color}
              />
            </li>
          );
        })}
      </ul>
      <div className="scroll-dots">
        {items.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex % items.length ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>
    </div>
  );
};


type CardInforProps = {
  img: string;
  title: string;
  desc: string;
  color: string;
};

const CardInfor = ({ img, title, desc, color }: CardInforProps) => {
  return (
    <div
      className="card-infor"
      style={{ background: `linear-gradient(135deg, ${color} 0%, #fff 70%)` }}
    >
      <div className="card-infor-img-wrap">
        <img
          className="card-infor-img"
          src={img}
          alt={title}
        />
      </div>
      <div className="card-infor-quote">
        <span className="card-infor-quote-text">
          {desc}
        </span>
      </div>
      <hr className="card-infor-divider" />
      <div className="card-infor-name">{title}</div>
      <div className="card-infor-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default IntroductionBlock;

