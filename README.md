# Task Manager API

## Description

Task Manager API adalah REST API sederhana untuk mengelola task harian dengan fitur user authentication dan CRUD tasks.

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- Knex.js
- JWT
- bcrypt
- dotenv

---

## Installation

1. Clone repository

```bash
git clone https://github.com/username/task-manager-api.git
cd task-manager-api
```

2. Install dependencies

```bash
npm install
```

3. Buat file .env berdasarkan .example.env

```bash
PORT=3000

DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=task_manager

JWT_SECRET=secret123
```

4. Jalankan server

```bash
npm run dev
```

server akan berjalan di

```bash
http://localhost:3000
```

## Database Setup

1. Buat Database

```bash
CREATE DATABASE task_manager;
```

2. Run migration

```bash
npx knex migrate:latest
```

## API Endpoints

### User

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| POST   | /users       | Register user  |
| GET    | /users       | Get all users  |
| GET    | /users/:id   | Get user by ID |
| PUT    | /users/:id   | Update user    |
| DELETE | /users/:id   | Delete user    |
| POST   | /users/login | Login          |

### Tasks

| Method | Endpoint         | Description              | Auth required |
| ------ | ---------------- | ------------------------ | ------------- |
| POST   | /tasks           | Create tasks             | Yes           |
| GET    | /tasks           | List all tasks           | No            |
| GET    | /tasks/my-tasks  | Get current user's tasks | Yes           |
| GET    | /tasks/:id       | Get tasks by ID          | No            |
| PUT    | /tasks/:id       | Update tasks             | Yes           |
| DELETE | /tasks/:id       | Delete tasks             | Yes           |
| GET    | /users/:id/tasks | Get tasks by user ID     | No            |

## Example Request

### Register user

Request

```bash
POST /users

body:

{
  "name": "Vania",
  "email": "vania@email.com",
  "password": "123456"
}
```

Response

```bash
{ "message": "User telah dibuat", "id": 1 }
```

### Create task

Request

```bash
POST /tasks

Header:

Authorization: Bearer TOKEN
Content-Type: application/json

Body:

{
  "title": "Finish API",
  "description": "Complete technical test"
}
```

Response

```bash
{ "message": "Tugas berhasil dibuat", "id": 1 }
```
