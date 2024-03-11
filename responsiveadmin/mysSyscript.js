// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// AREA CHART
const areaChartOptions = {
  series: [
    // {
    //   name: 'Purchase Orders',
    //   data: [31, 40, 28, 51, 42, 109, 100],
    // },
    {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 200,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: [ '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();






// LINE CHART
const lineChartOptions = {
    series: [
      {
        name: 'Expenses',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }
    ],
    chart: {
      height: 200,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    colors: ['#f5b74f'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    yaxis: {
      title: {
        text: 'Expenses'
      }
    }
  };
  
  const lineChart = new ApexCharts(
    document.querySelector('#line-chart'),
    lineChartOptions
  );
  lineChart.render();
  


 // DONUT CHART
const donutChartOptions = {
    series: [50],
    chart: {
      width: 380,
      type: 'donut',
    },
    labels: ['Growth'],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 20,
              formatter: function () {
                return 'Growth';
              }
            },
            value: {
              show: true,
              offsetY: -20,
              formatter: function (val) {
                return val + "%";
              }
            },
            total: {
              show: true,
              offsetY: 0,
              label: '81%',
              color: '#888888',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };
  
  const donutChart = new ApexCharts(
    document.querySelector('#donut-chart'),
    donutChartOptions
  );
  donutChart.render();
  