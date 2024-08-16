import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from './EventContext';
import { Modal, ModalContent, Button, Input, Select } from './styles';

const EventModal = () => {
  const {
    addEvent,
    editEvent,
    selectedEvent,
    closeModal,
    isModalOpen,
    isEditing,
  } = useContext(EventContext);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Work');

  useEffect(() => {
    if (isEditing && selectedEvent) {
      setTitle(selectedEvent.title);
      setDate(selectedEvent.date);
      setCategory(selectedEvent.category);
    } else {
      setTitle('');
      setDate('');
      setCategory('Work');
    }
  }, [isEditing, selectedEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      id: isEditing ? selectedEvent.id : Date.now().toString(),
      title,
      date,
      category,
    };
    if (isEditing) {
      editEvent(eventData);
    } else {
      addEvent(eventData);
    }
    closeModal();
  };

  return (
    <Modal isOpen={isModalOpen}>
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event Title"
            required
          />
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </Select>
          <Button type="submit">{isEditing ? 'Edit Event' : 'Add Event'}</Button>
          <Button onClick={closeModal}>Cancel</Button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;
