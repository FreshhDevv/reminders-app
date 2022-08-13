import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Reminder from './models/reminder';
import ReminderList from './components/ReminderList';

 

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([  {id: 1, title: 'Reminder 1'}
]);

  return (
    <div className="App"> 
      <ReminderList items={reminders}/>
    </div>
  );
}

export default App;
