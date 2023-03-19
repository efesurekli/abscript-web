import React, { useRef, useEffect, version } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const BellCurve = ({ percentile }) => {
  const chartRef = useRef();

  const data = {
    labels: [...Array(101).keys()],
    datasets: [
      {
        label: 'Normal Distribution',
        data: [...Array(101).keys()].map((x) =>
          Math.exp(-Math.pow(x - 50, 2) / (2 * Math.pow(10, 2)))
        ),
        borderColor: 'rgba(255, 255, 255, 0.2)',
        backgroundColor: (context) => {
          const index = context.dataIndex;
          return index >= percentile ? '#CCFF00' : 'rgba(255, 255, 255, 0.2)';
        },
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '200px' }}>
      <Line data={data} options={options} ref={chartRef} />
    </div>
  );
};

export default BellCurve;
