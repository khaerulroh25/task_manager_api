const knex = require("../config/knex");

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const [taskId] = await knex("tasks").insert({
      title,
      description,
      user_id: req.user.id,
    });

    res.status(201).json({
      message: "Tugas Berhasil dibuat",
      id: taskId,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await knex("tasks").select("*");

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyTasks = async (req, res) => {
  try {
    const tasks = await knex("tasks").where({ user_id: req.user.id });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await knex("tasks").where({ id }).first();

    if (!task) {
      return res.status(404).json({
        message: "Tugas tidak ditemukan",
      });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await knex("tasks").where({ id }).update(req.body);

    if (!updated) {
      return res.status(404).json({
        message: "Tugas tidak ditemukan",
      });
    }

    res.json({
      message: "Tugas berhasil diupdate",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await knex("tasks").where({ id }).delete();

    if (!deleted) {
      return res.status(404).json({
        message: "Tugas tidak ditemukan",
      });
    }

    res.json({
      message: "Tugas berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTasksByUser = async (req, res) => {
  try {
    const { id } = req.params;

    const tasks = await knex("tasks").where({ user_id: id });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
