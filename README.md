
# EduTrack Backend

This is the backend of the **EduTrack Course Management Application**, powered by **Node.js**, **Express**, and **MySQL**.

---

## 📦 Project Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/EduTrack-Backend.git
cd EduTrack-Backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory and add your database config:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=edutrack
DB_PORT=3306
PORT=5000
```

---

## 🔌 MySQL Database Setup

### ✅ Tables Created

#### 1. Cohort Table
```sql
CREATE TABLE Cohort (
  id VARCHAR(10) PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);
```

#### Sample Data:
```sql
INSERT INTO Cohort (id, name) VALUES
('001', 'Cohort1'),
('002', 'Cohort2');
```

#### 2. Mode Table
```sql
CREATE TABLE Mode (
  id VARCHAR(10) PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);
```

#### Sample Data:
```sql
INSERT INTO Mode (id, name) VALUES
('M1', 'In-person'),
('M2', 'Online'),
('M3', 'Hybrid');
```

---

## ⚙️ Running the Backend Server

### Start in development mode using nodemon:
```bash
npm run dev
```

Expected output:
```
✅ Connected to MySQL
🚀 Server running on http://localhost:5000
```

---

## 🔍 Example Code to Check Tables in MySQL via Node.js

Here’s how to check what tables exist in your database from your `server.js` file or a helper script:

```js
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect(err => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');

  connection.query("SHOW TABLES", (err, results) => {
    if (err) throw err;
    console.log("📋 Tables in the database:");
    results.forEach(row => console.log(Object.values(row)[0]));
    connection.end();
  });
});
```

---

## 🧪 Testing the Database via MySQL CLI

1. Open MySQL CLI:
```bash
mysql -u root -p
```
2. Run the following:
```sql
SHOW DATABASES;
USE edutrack;
SHOW TABLES;
SELECT * FROM Cohort;
SELECT * FROM Mode;
```

---

## 🧼 Optional: Add MySQL to System PATH

If `mysql` is not recognized in terminal:
- Add this to your system PATH:
```
C:\Program Files\MySQL\MySQL Server 8.0\bin
```

---

## ✍️ Author

Nubuhoro Divine
