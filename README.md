# Patient Visit Tracker

## Overview

This is a small full-stack web application that allows internal users to track patient visits by clinicians. The application allows users to create clinicians and patients, record visits, and view visits in reverse chronological order.

## Tech Stack

* Frontend: React (Vite) + Tailwind CSS
* Backend: Node.js + Express
* Database: SQLite
* ORM: Prisma

## Project Structure

```
patient-visit-tracker
  ├── backend
  │   ├── src
  │   │   ├── controllers
  │   │   ├── routes
  │   │   ├── services
  │   │   ├── app.js
  │   │   └── server.js
  │   └── prisma
  │
  ├── frontend
  │   ├── src
  │   │   ├── components
  │   │   ├── pages
  │   │   ├── api
  │   │   └── App.jsx
  │
  └── README.md
```

## Features

* Create clinicians
* Create patients
* Record patient visits
* View visits in reverse chronological order
* Dashboard with quick stats
* Modern responsive UI

## Setup Instructions

### Backend

```
cd backend
npm install
npx prisma migrate dev
node src/server.js
```

### Frontend

```
cd frontend
npm install
npm run dev
```

Frontend runs on: http://localhost:5173
Backend runs on: http://localhost:5000

## API Endpoints

* GET /clinicians
* POST /clinicians
* GET /patients
* POST /patients
* GET /visits
* POST /visits

## Future Improvements

* Authentication & user roles
* Pagination for visits
* Search & filtering
* Deployment (Docker / Cloud)
* Automated testing
