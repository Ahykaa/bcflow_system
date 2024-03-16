import Card from '@/components/organisms/Card';
import Chart from '@/components/organisms/Chart';
import Template from '@/components/templates/Template';
import React from 'react';

function Dashboard() {
  const rows = [
    {
      header: 'Date',
      render: (row) => row.date,
    },
    {
      header: 'Event name',
      render: (row) => row.event,
    },
  ];
  const chartOptions = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [
        'ASBM',
        'Allied Health',
        'Nursing',
        'Medcine',
        'Basic Education',
        'CDC',
      ],
    },
  };

  const chartSeries = [
    {
      name: 'series-1',
      data: [50, 70, 45, 50, 70, 91],
    },
  ];
  return (
    <div>
      <Template>
        <div className='mx-auto max-w-screen-lg mt-12 grid grid-cols-1 gap-8 '>
          <div className='grid grid-cols-4 gap-2 '>
            <Card
              className='max-w-sm border border-solid divide-green-200 p-4 mb-4'
              title='Approved'
              description='5 Request'
            />
            <Card
              className='max-w-sm border border-solid divide-green-200 p-4 mb-4'
              title='Pending'
              description='2 Request'
            />
            <Card
              className='max-w-sm border border-solid divide-green-200 p-4 mb-4'
              title='Total Budget'
              description='590,000'
            />
            <Card
              className='max-w-sm border border-solid divide-green-200 p-4 mb-4'
              title='Total Utilized Budget'
              description='350,000'
            />
          </div>
          <div className='grid'>
            <Chart
              options={chartOptions}
              series={chartSeries}
              type='bar'
              className='w-full'
              name='Departmental Chart'
            />
          </div>
        </div>
      </Template>
    </div>
  );
}

export default Dashboard;
