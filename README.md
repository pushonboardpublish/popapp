# PopApp

A modern web application for managing pop-ups and modals with React frontend and Node.js backend.

## Features

- 🎨 Reusable pop-up/modal components
- 🔄 Real-time API communication
- 📱 Responsive design
- ⚡ Fast and lightweight

## Project Structure

```
popapp/
├── frontend/          # React application
├── backend/           # Node.js/Express API
├── docs/              # Documentation
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

#### Backend

```bash
cd backend
npm install
npm start
```

#### Frontend

```bash
cd frontend
npm install
npm start
```

The app will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/popups` - Get all pop-ups
- `POST /api/popups` - Create a new pop-up
- `DELETE /api/popups/:id` - Delete a pop-up

## Contributing

Feel free to submit issues and pull requests!

## License

MIT
