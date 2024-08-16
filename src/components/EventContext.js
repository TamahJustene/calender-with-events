import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const addEvent = (event) => setEvents([...events, event]);

  const editEvent = (updatedEvent) =>
    setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)));

  const deleteEvent = (id) =>
    setEvents(events.filter((event) => event.id !== id));

  const openModal = (event = null) => {
    setSelectedEvent(event);
    setIsEditing(!!event);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        editEvent,
        deleteEvent,
        selectedEvent,
        isModalOpen,
        openModal,
        closeModal,
        isEditing,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
