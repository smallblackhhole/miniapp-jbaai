import React, { useState } from 'react';

const packagesData = {
  standard: [
    {
      id: 's30',
      name: 'Basic Care 30',
      price: '$7.66',
      duration: '30 day',
      description: 'Gói Standard trong vòng 1 tháng. Với 9 chỉ số sinh học cơ bản, gói này là lựa chọn lý tưởng cho những ai muốn bắt đầu hành trình theo dõi sức khỏe.',
      features: [
        'Huyết áp: Theo dõi áp lực máu',
        'Nhịp tim: Giúp bạn nắm bắt tần số hoạt động của trái tim.',
        'HRV (Biến thiên nhịp tim)',
      ],
    },
    {
      id: 's180',
      name: 'Basic Care 180',
      price: '$45.96',
      duration: '30 day',
      description: 'Gói Standard trong vòng 6 tháng. Đặc biệt để bạn có cái nhìn nhanh chóng và toàn diện về các chỉ số sức khỏe quan trọng.',
      features: [
        'Tất cả tính năng của Gói 30 ngày',
        'Mức độ căng thẳng: Quản lý stress',
        'SpO2 (Độ bão hòa oxy trong máu)',
      ],
    },
  ],
  premium: [
    {
      id: 'p30',
      name: 'Premium Care 30',
      price: '$9.57',
      duration: '30 day',
      description: 'Gói Premium là giải pháp tối ưu dành cho những ai nghiêm túc trong việc theo dõi và cải thiện sức khỏe một cách chủ động trong vòng 1 tháng.',
      features: [
        'Bao gồm toàn bộ Gói Standard',
        'So sánh chuyên sâu, giúp bạn đánh giá chính xác hơn về nguy cơ tim mạch.',
      ],
    },
    {
      id: 'p180',
      name: 'Premium Care 180',
      price: '$57.42',
      duration: '180 day',
      description: 'Định hướng Tương lai Khỏe Mạnh – Gói Premium là giải pháp tối ưu dành cho những ai nghiêm túc trong việc theo dõi và cải thiện sức khỏe.',
      features: [
        'Tất cả tính năng của Gói Premium 30 ngày',
        'Nắm bắt toàn diện tình trạng sức khỏe.',
      ],
    },
     {
      id: 'p360',
      name: 'Premium Care 360',
      price: '$114.84',
      duration: '360 day',
      description: 'Giải pháp Toàn diện Hướng tới Tương lai Khỏe Mạnh. Gói Premium là lựa chọn hoàn hảo để theo dõi sức khỏe lâu dài.',
      features: [
        'Tất cả tính năng của Gói Premium 180 ngày',
        'Phân tích chuyên sâu và đưa ra các gợi ý được cá nhân hóa.',
      ],
    },
  ],
};

type TabType = 'standard' | 'premium';

const PricingBlock = () => {
  const [activeTab, setActiveTab] = useState<TabType>('standard');
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>('s180');

  const currentPackages = packagesData[activeTab];

  const handlePayment = (packageId: string) => {
    alert(`Bắt đầu quá trình thanh toán cho gói: ${packageId}`);
    // Logic xử lý thanh toán sẽ được thêm vào đây
  };

  return (
    <div className="pricing-container">
      <header className="pricing-header">
        <h1 className="main-title">Package</h1>
        <div className="tab-navigator">
          <button
            className={`tab-button ${activeTab === 'standard' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('standard');
              setSelectedPackageId('s180');
            }}
          >
            Standard
          </button>
          <button
            className={`tab-button ${activeTab === 'premium' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('premium');
              setSelectedPackageId('p180');
            }}
          >
            Premium
          </button>
        </div>
      </header>

      <main className="package-list">
        {currentPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`package-card ${selectedPackageId === pkg.id ? 'active' : ''}`}
            onClick={() => setSelectedPackageId(pkg.id)}
          >
            <div className="card-content">
              <div className="card-header">
                <h2 className="package-name">{pkg.name}</h2>
                <p className="package-price">
                  {pkg.price} / {pkg.duration}
                </p>
              </div>
              <p className="package-description">{pkg.description}</p>
              <h3 className="features-title">Gói {activeTab === 'standard' ? 'Standard' : 'Premium'} Bao Gồm:</h3>
              <ul className="features-list">
                {pkg.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <button 
              className="card-payment-button" 
              onClick={() => handlePayment(pkg.id)}
            >
              Thanh toán
            </button>
          </div>
        ))}
      </main>

    </div>
  );
};

export default PricingBlock;