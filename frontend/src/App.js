import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PopupForm from './components/PopupForm';
import PopupList from './components/PopupList';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function App() {
  const [popups, setPopups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPopups();
  }, []);

  const fetchPopups = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/popups`);
      setPopups(response.data);
    } catch (error) {
      console.error('Error fetching popups:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePopup = async (formData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/popups`, formData);
      setPopups([...popups, response.data]);
    } catch (error) {
      console.error('Error creating popup:', error);
    }
  };

  const handleDeletePopup = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/popups/${id}`);
      setPopups(popups.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting popup:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>🎯 PopApp</h1>
          <p>Manage your pop-ups effortlessly</p>
        </header>

        <main className="main-content">
          <PopupForm onSubmit={handleCreatePopup} />
          <PopupList 
            popups={popups} 
            onDelete={handleDeletePopup}
            loading={loading}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
