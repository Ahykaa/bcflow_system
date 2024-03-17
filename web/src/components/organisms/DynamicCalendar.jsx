import React, { Component } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

class DynamicCalendar extends Component {
  render() {
    const CalendarScheduler = dynamic(() => import('./CalendarScheduler'), {
      ssr: false, // Set ssr option to false
    });

    return <CalendarScheduler {...this.props} />;
  }
}

export default DynamicCalendar;