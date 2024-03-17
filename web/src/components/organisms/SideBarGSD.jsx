import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiCollection } from 'react-icons/hi';

import Link from 'next/link';

const sidebarItems = [
  { href: 'gsdDashboard', icon: <HiChartPie />, label: 'Dashboard' },
  { href: 'reservation', icon: <HiCollection />, label: 'Reservation' },
  { href: 'gsdPanel', icon: <HiCollection />, label: 'Control Panel' },

];

function SideBarGSD() {
  return (
    <aside className='pt-2 w-64 overflow-y-auto bg-white drop-shadow-lg'>
      <ul className='space-y-2'>
        {sidebarItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              passHref
              className='pl-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              {item.icon}
              <span className='ms-3'>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBarGSD;