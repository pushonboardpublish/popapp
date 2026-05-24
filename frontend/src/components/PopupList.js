import React from 'react';
import './PopupList.css';

function PopupList({ popups, onDelete, loading }) {
  return (
    <div className="popup-list">
      <h2>Pop-ups ({popups.length})</h2>
      
      {loading && <p className="loading">Loading...</p>}
      
      {popups.length === 0 && !loading && (
        <p className="empty-state">No pop-ups yet. Create one to get started!</p>
      )}

      <div className="popups-container">
        {popups.map(popup => (
          <div key={popup.id} className={`popup-item popup-${popup.type}`}>
            <div className="popup-header">
              <h3>{popup.title}</h3>
              <span className="popup-type">{popup.type}</span>
            </div>
            <p className="popup-message">{popup.message}</p>
            <div className="popup-footer">
              <small>{new Date(popup.createdAt).toLocaleString()}</small>
              <button 
                className="btn-delete"
                onClick={() => onDelete(popup.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopupList;
