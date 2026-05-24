import React, { useState } from 'react';
import './PopupForm.css';

function PopupForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    type: 'info'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.message.trim()) {
      onSubmit(formData);
      setFormData({ title: '', message: '', type: 'info' });
    }
  };

  return (
    <form className="popup-form" onSubmit={handleSubmit}>
      <h2>Create Pop-up</h2>
      
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter pop-up title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter pop-up message"
          rows="4"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="type">Type</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="info">Info</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </select>
      </div>

      <button type="submit" className="btn-submit">Create Pop-up</button>
    </form>
  );
}

export default PopupForm;
