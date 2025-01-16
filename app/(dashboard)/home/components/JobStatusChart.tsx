'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { JobStatusData } from '../models/types';

ChartJS.register(ArcElement, Tooltip, Legend);

interface JobStatusChartProps {
  data: JobStatusData;
}

const options: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
  animation: {
    animateScale: true,
    animateRotate: true
  },
  cutout: '60%',
};

export function JobStatusChart({ data }: JobStatusChartProps) {
  const chartData = {
    labels: ['Completed', 'In Progress', 'Allocated'],
    datasets: [
      {
        data: [data.completed, data.inProgress, data.allocated],
        backgroundColor: [
          '#2a9844', // success
          '#298f98', // primary
          '#f0b429', // warning
        ],
        borderColor: [
          '#ffffff',
          '#ffffff',
          '#ffffff',
        ],
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="h-[300px] w-full p-4">
      <Doughnut data={chartData} options={options} />
    </div>
  );
} 