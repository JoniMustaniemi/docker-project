# Docker-based Multiservice Full-Stack Web Application

This is a **Docker-based multiservice project** that sets up a **full-stack web application** using **Docker Compose** to manage and orchestrate both the **frontend (React)** and **backend (Express.js)** services, leveraging **GitHub Container Registry (GHCR)** for storing and distributing containerized images.

# Project Overview

- **Frontend**: React app that talks to the backend API.
- **Backend**: Node.js/Express API serving data and handling requests.
- **Docker Compose**: Manages both frontend and backend as containers and handles the orchestration.
- **GitHub Container Registry (GHCR)**:  Stores the Docker images for the frontend and backend.
- **Multiservice architecture** with separate Docker containers for frontend and backend.

# Prerequisites

To get started, ensure you have the following installed:
- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/)

# Installation and usage

### 1. Clone the repository
```bash
git clone git@github.com:JoniMustaniemi/docker-project.git
cd docker-project
```

## 2. Pull pre-built Docker images from GitHub Container Registry
Frontend 
```bash
docker pull ghcr.io/jonimustaniemi/frontend:mustaniemijoni
```
Backend
```bash
docker pull ghcr.io/jonimustaniemi/backend:mustaniemijoni
```

### 3. Start the application using Docker Compose
```bash
docker-compose up
```

### 4. Access the services
#### Frontend
 ```bash
http://localhost:80
```
#### Backend
```bash
http://localhost:8080
```
