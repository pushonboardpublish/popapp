# Setup Guide

## Prerequisites

- Node.js v16+
- npm or yarn
- Git

## Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. Start the server:
   ```bash
   npm run dev
   ```
   
   Backend will run on `http://localhost:5000`

## Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   
   Frontend will open at `http://localhost:3000`

## Running Both Simultaneously

Open two terminal windows and run:
- Terminal 1: `cd backend && npm run dev`
- Terminal 2: `cd frontend && npm start`

## Testing the API

You can test the API endpoints using curl or Postman:

```bash
# Get all pop-ups
curl http://localhost:5000/api/popups

# Create a pop-up
curl -X POST http://localhost:5000/api/popups \
  -H "Content-Type: application/json" \
  -d '{"title": "Hello", "message": "Welcome to PopApp", "type": "info"}'

# Delete a pop-up
curl -X DELETE http://localhost:5000/api/popups/{id}
```
