import Card from '@/components/organisms/Card';
import UserTemplate from '@/components/templates/UserTemplate';
import React from 'react';

function UserDashboard() {
  return (
    <div>
      <UserTemplate>
        <div className='mx-auto max-w-screen-lg mt-12 grid grid-cols-1 gap-8 '>
          <h2>Hello, ASBM Department</h2>
          <div className='grid grid-cols-3 gap-2 '>
            <Card
              className='max-w-sm border border-solid divide-green-200 p-4 mb-4 text-center'
              title='Departmental Budget'
              description='250,000.00'
            />
            <Card
              className='max-w-sm border border-solid divide-green-200 p-4 mb-4'
              title='Departmental Utilized'
              description='60,500.00'
            />
            <Card
              className='max-w-sm border border-solid divide-green-200 p-4 mb-4'
              title='Total Budget'
              description='185,000.00'
            />
          </div>
        </div>
      </UserTemplate>
    </div>
  );
}

export default UserDashboard;
