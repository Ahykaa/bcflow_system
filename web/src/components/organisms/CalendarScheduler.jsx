import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button } from 'flowbite-react';

class CalendarScheduler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
      selectedEvent: '',
      selectedTime: '', // Initialize selected time
      events: props.events,
      isModalOpen: false, // Track modal visibility
    };
  }

  handleDateClick = (dateClickInfo) => {
    const { dateStr } = dateClickInfo;
    this.setState({ selectedDate: dateStr, isModalOpen: true }); // Update the selected date and open the modal
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }); // Handle input change for event details and time
  };

  handleEnterClick = () => { // Handle click on Enter button
    const { selectedDate, selectedEvent, selectedTime } = this.state;
    if (selectedEvent.trim() !== '' && selectedTime.trim() !== '') { // Check if both event and time are entered
      const updatedEvents = this.state.events.concat({
        title: selectedEvent,
        start: `${selectedDate}T${selectedTime}`, // Combine selected date and time
        allDay: false, // Set allDay to false to reflect time in week and day views
      });
      this.setState({ events: updatedEvents, selectedEvent: '', selectedTime: '', isModalOpen: false }); // Clear input fields after saving and close modal
    }
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false }); // Close the modal
  };

  render() {
    const { plugins, initialView, headerToolbar } = this.props;
    const { events, selectedEvent, selectedTime, selectedDate, isModalOpen } = this.state;

    return (
      <div className='calendar-scheduler relative'>
        <FullCalendar
          plugins={plugins || [dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={initialView || 'dayGridMonth'}
          headerToolbar={headerToolbar || {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={events}
          eventClick={this.handleEventClick} // Handle event click
          dateClick={this.handleDateClick} // Handle date box click
          dayCellContent={this.renderDayCellContent} // Custom day cell rendering
          eventDidMount={this.highlightSelectedDate} // Highlight selected date
        />

        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Button onClick={this.handleCloseModal} className="absolute top-0 right-0 m-2 bg-gray-400">X</Button>
              <input
                type="time"
                name="selectedTime"
                value={selectedTime}
                onChange={this.handleInputChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
                placeholder="Select time"
              />
              <input
                type="text"
                name="selectedEvent"
                value={selectedEvent}
                onChange={this.handleInputChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
                placeholder="Enter event details"
              />
              <Button onClick={this.handleEnterClick}
                color='success' 
                type='submit' 
                className='mx-auto'>
                Enter
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  handleEventClick = (clickInfo) => {// Handle event click (e.g., open modal for editing or deleting event)
    console.log('Event clicked:', clickInfo.event);
  };

  renderDayCellContent = (dayCell) => {
    const { selectedDate } = this.state;
    const isSelected = selectedDate === dayCell.dateStr;
    return (
      <div
        onClick={() => this.handleDateClick(dayCell)}
        className={`day-cell ${isSelected ? 'selected' : ''}`}
        style={{ position: 'relative' }}
      >
        <div>{dayCell.dayNumberText}</div>
      </div>
    );
  };
}

export default CalendarScheduler;