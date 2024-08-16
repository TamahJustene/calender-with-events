import React from 'react';
import { EventProvider } from './components/EventContext';
import CalendarView from './components/CalendarView';
import EventModal from './components/EventModal';
import './App.css';

const App = () => {
  return (
    <EventProvider>
      <div>
        <CalendarView />
        <EventModal />
      </div>
    </EventProvider>
  );
};

export default App;
