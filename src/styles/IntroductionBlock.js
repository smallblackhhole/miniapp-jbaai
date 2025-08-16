document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".detail-app-cards");
  const items = document.querySelectorAll(".detail-app-cards li");
  const indicators = document.querySelector(".scroll-indicators");

  // Tạo chấm tròn
  items.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    indicators.appendChild(dot);
  });

  const dots = document.querySelectorAll(".scroll-indicators .dot");

  container.addEventListener("scroll", () => {
    const index = Math.round(container.scrollLeft / container.clientWidth);
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".detail-app-cards");
  const items = document.querySelectorAll(".detail-app-cards li");
  const indicators = document.querySelector(".scroll-indicators");

  if (!container || !items.length || !indicators) return;

  // Tạo chấm tròn
  items.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    indicators.appendChild(dot);
  });

  const dots = indicators.querySelectorAll(".dot");

  container.addEventListener("scroll", () => {
    const index = Math.round(container.scrollLeft / container.clientWidth);
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  });
});
