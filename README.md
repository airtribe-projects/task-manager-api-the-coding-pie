# 📝 Task Manager API

A simple REST API for managing tasks using in-memory storage.

---

## 🚀 Features

- Create a task
- Get all tasks
- Get a single task
- Update a task
- Delete a task

---

## 📌 Endpoints

### 📄 Get all tasks

**GET `/tasks`**

#### Response

```json
[
  {
    "id": 1,
    "title": "Set up environment",
    "description": "Install Node.js, npm, and git",
    "completed": true
  }
]
```

### 📄 Get one task

**GET `/tasks/:id`**

#### Response

```json
{
  "id": 1,
  "title": "Set up environment",
  "description": "Install Node.js, npm, and git",
  "completed": true
}
```

### 📄 Create task

**POST `/tasks`**

#### Request body

```json
{
  "title": "something",
  "description": "",
  "completed": true
}
```

#### Response

```json
{
  "id": 1,
  "title": "something",
  "description": "",
  "completed": true
}
```

### 📄 Update a task

**PUT `/tasks/:id`**

#### Request body

```json
{
  "title": "updated title"
}
```

#### Response

```json
{
  "id": 1,
  "title": "updated title",
  "description": "",
  "completed": true
}
```

### Delete task

**DELETE `/tasks/:id`**

```

```
