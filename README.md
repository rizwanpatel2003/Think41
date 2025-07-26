# Ecommerce Chatbot Docker Setup

This project consists of a FastAPI backend and a React frontend, both containerized with Docker.

## Project Structure
```
ecom/
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── main.py
│   ├── model.py
│   └── load_data.py
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── index.js
│   │   └── app.js
│   ├── Components/
│   └── Context/
└── docker-compose.yml
```

## Quick Start

1. Make sure you have Docker and Docker Compose installed on your system.

2. Clone the repository and navigate to the project directory:
   ```bash
   cd ecom
   ```

3. Build and run the services using Docker Compose:
   ```bash
   docker-compose up --build
   ```

4. Access the applications:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000

## Individual Service Commands

### Backend Only
```bash
cd backend
docker build -t ecom-backend .
docker run -p 8000:8000 ecom-backend
```

### Frontend Only
```bash
cd frontend
docker build -t ecom-frontend .
docker run -p 3000:80 ecom-frontend
```

## Development

For development with live reload:
- Backend: The Dockerfile uses `--reload` flag for uvicorn
- Frontend: Uses multi-stage build for production optimization

## Environment Variables

You can add environment variables in the docker-compose.yml file or create .env files as needed.

## Stopping the Services

```bash
docker-compose down
```

## Rebuilding After Changes

```bash
docker-compose up --build
```
