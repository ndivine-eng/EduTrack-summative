#  EduTrack Backend - Course Management Platform

##  Project Overview
EduTrack is a backend system for managing a Course Management Platform for academic institutions.  
It handles:
- Facilitator-course allocations
- Student progress tracking
- Academic coordination

The API is **RESTful**, uses **Sequelize ORM**, **MySQL**, and is integrated with **Swagger UI** for easy API exploration.

---

##  Setup & Installation

### Prerequisites
- Node.js (v16+ recommended)
- MySQL Server
- npm (Node Package Manager)

### Installation

```bash
git clone <your-repo-url>
cd EduTrack-Backend
npm install
cp .env.example .env  # Edit .env with your DB credentials
```

### Database Setup

```bash
# If using migrations
npx sequelize db:create
npx sequelize db:migrate
```

Or use `db.sequelize.sync({ force: true })` for auto table creation (dev only).

---

## Run the Server

```bash
npm run dev   # auto-restart using nodemon
# or
node server.js
```

Visit API root:  
 [http://localhost:5000](http://localhost:5000)  

Swagger Docs:  
 [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

---

##  Project Structure

```
EDUTRACK-BACKEND/
├── config/
│   ├── config.js
│   ├── db.js
│   └── redis.js
├── controllers/
│   ├── allocationController.js
│   ├── classController.js
│   ├── cohortController.js
│   ├── facilitatorController.js
│   ├── facilitatorModuleController.js
│   ├── managerController.js
│   ├── modeController.js
│   ├── moduleController.js
│   └── studentController.js
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── middleware/
│   └── errorHandler.js
├── migrations/
│   ├── 20250729184022-create-manager.js
│   ├── 20250729191658-create-cohort.js
│   ├── 20250729192544-create-student.js
│   ├── 20250729192655-create-class.js
│   ├── 20250729192727-create-mode.js
│   ├── 20250729192753-create-allocation.js
│   └── 20250729192806-create-activity-tracker.js
├── models/
│   ├── ActivityTracker.js
│   ├── Allocation.js
│   ├── Class.js
│   ├── Cohort.js
│   ├── Facilitator.js
│   ├── FacilitatorModule.js
│   ├── index.js
│   ├── Manager.js
│   ├── Mode.js
│   ├── Module.js
│   └── Student.js
├── routes/
│   ├── allocationRoutes.js
│   ├── classRoutes.js
│   ├── cohortRoutes.js
│   ├── facilitatorModuleRoutes.js
│   ├── facilitatorRoutes.js
│   ├── managerRoutes.js
│   ├── modeRoutes.js
│   ├── moduleRoutes.js
│   └── studentRoutes.js
├── .env
├── server.js
├── swagger.js
├── README.md
└── test.js
```

## 🛠 Environment Configuration (.env)

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=edutrackdb
DB_PORT=3306
```

---

##  Database Schema Overview

### Key Tables
- **Manager**
- **Module (Course)**
- **Cohort**
- **Class**
- **Student**
- **Facilitator**
- **Mode**
- **Allocation**
- **ActivityTracker**

For relationships:
- `Allocation` links **Module + Class + Facilitator + Mode**
- `ActivityTracker` links to **Allocation** for performance tracking.

---

## API Documentation (Swagger)

**Swagger UI:**  
[http://localhost:5000/api-docs](http://localhost:5000/api-docs)

### Example Endpoints:

#### Students
- `GET /api/students`
- `POST /api/students`
- `GET /api/students/:id`

#### Facilitators
- `GET /api/facilitators`
- `POST /api/facilitators`

#### Allocations
- `GET /api/allocations`
- `POST /api/allocations`

**Status Codes**:  
- `200 OK`
- `201 Created`
- `400 Bad Request`
- `404 Not Found`
- `500 Internal Server Error`

---

##  Authentication (Future Scope)
- JWT-based role access is planned for future versions.

---

## Demo Workflow (For Presentation)

1. **Start server**:  
   `npm run dev`

2. **Visit Swagger:**  
   Open [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

3. **Demo flow:**  
   - Create **Manager**
   - Create **Module**
   - Create **Cohort** & **Class**
   - Create **Facilitator**
   - Create **Allocation** (links all)
   - Show data with **GET /api/allocations**

---

##  Module 3 - Deployed Project

You can view the live version of Module 3 here:  
 [Student Reflection - Module 3](https://ndivine-eng.github.io/Student-reflection/)

## Project Demo Videos

### Part 1: Manager Registration & Login (5 min)
[▶️ Watch here](https://www.loom.com/share/eec16ac6c4c0493b8aa4f82f3962a064)

### Part 2: Activity Tracker and Finalization (3 min)
[▶️ Watch here](https://www.loom.com/share/8f184ea98b844f588cfa73ab960bebdd?sid=a3695e0a-5eeb-487b-9898-483d265d7a1f)

## Testing
Planned with **Jest & Supertest**.

---
