import React from 'react';
import Card from '@/components/organisms/Card';
import TemplatesGSD from '@/components/templates/TemplatesGSD';
import DynamicCalendar from '@/components/organisms/DynamicCalendar';

function gsdDashboard() {
  const events = [ // Sample events data
  {
    title: 'Orientation',
    start: '2024-03-17T09:00:00',
  },
  {
    title: 'Pictorial',
    start: '2024-03-20T18:00:00',
  },
];

  return (
    <div>
      <TemplatesGSD>
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
          </div>
          <table>
            <DynamicCalendar events={events} />
          </table>
        </div>
      </TemplatesGSD>
    </div>
  );
}

export default gsdDashboard;