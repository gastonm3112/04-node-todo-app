const TaskRepository = require('../repositories/TaskRepository');
const taskRepository = new TaskRepository();

const getAllTasks = () => {
    const tasks = taskRepository.getAllTask();
    return tasks.map(e => {
        console.log(JSON.stringify(e));
        return {
            title: e.title,
            done: e.done
        }
    });
}

const createTask = (title) => {
    taskRepository.createTask(title);
}

const completeTask = (title) => {
    taskRepository.completeTask(title);
}

const deleteTask = (title) => {
    taskRepository.deleteTask(title);
}

module.exports = {
    getAllTasks,
    createTask,
    completeTask,
    deleteTask
}