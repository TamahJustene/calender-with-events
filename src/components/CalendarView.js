import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import { EventContext } from './EventContext';
import { Button, EventItem, EventList } from './styles';

const CalendarView = () => {
  const { events, deleteEvent, openModal } = useContext(EventContext);

  const tileContent = ({ date }) => {
    const dayEvents = events.filter(
      (event) => new Date(event.date).toDateString() === date.toDateString()
    );
    return (
      <EventList>
        {dayEvents.map((event) => (
          <EventItem key={event.id}>
            <div>{event.title}</div>
            <Button onClick={() => openModal(event)}>Edit</Button>
            <Button onClick={() => deleteEvent(event.id)}>Delete</Button>
          </EventItem>
        ))}
      </EventList>
    );
  };

  return (
    <div>
      <h1>Calendar</h1>
      <Button onClick={() => openModal()}>Add Event</Button>
      <Calendar tileContent={tileContent} />
    </div>
  );
};

export default CalendarView;
