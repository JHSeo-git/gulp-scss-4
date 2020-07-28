const chart = document.querySelector("#chart");

const renderChart = () => {
  const myChart = new Chart(chart, {
    type: "horizontalBar",
    data: {
      labels: ["지연", "마감", "진행", "진행", "취소"],
      datasets: [
        {
          label: "# of Votes",
          data: [32, 53, 12, 33, 22],
          backgroundColor: [
            "#B280FF",
            "#68D6E8",
            "#B280FF",
            "#B280FF",
            "#B280FF",
          ],
          borderColor: ["#B280FF", "#68D6E8", "#B280FF", "#B280FF", "#B280FF"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      responsive: false,
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};

const init = () => {
  renderChart();
};

if (chart) {
  init();
}

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
