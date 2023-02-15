const { response } = require('express');
const TaskModel = require('../model/TaskModel');

class TaskController {
    async create(req, res){
        const task = new task.TaskModel(req.bory);
        await task
        .save()
        .then(responde => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
}