const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/tasks", authMiddleware, taskController.createTask);
router.get("/tasks", taskController.getAllTasks);
router.get("/tasks/my-tasks", authMiddleware, taskController.getMyTasks);
router.get("/tasks/:id", taskController.getTaskById);
router.put("/tasks/:id", authMiddleware, taskController.updateTask);
router.delete("/tasks/:id", authMiddleware, taskController.deleteTask);
router.get("/users/:id/tasks", taskController.getTasksByUser);

module.exports = router;
