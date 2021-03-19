const { inquirerMenu, inquirerInput } = require('./helpers/inquirer')
const { getAllTasks, createTask, completeTask, deleteTask } = require('./services/taskService');

const main = async () => {

    let option = '';
    do {
        option = await inquirerMenu();


        switch (option) {
            case 1:

                const title = await inquirerInput('Task title');

                createTask(title);

                console.log(title, "creada");

                break;
            case 2:

                //Mostrar lista de tareas de la base de datos
                const allTasks = getAllTasks();
                console.table(allTasks);
                break;
            case 3:

                const completedTask = await inquirerInput('Which task you complete?')

                completeTask(completedTask);

                console.log(completedTask, "Completa");
                break;
            case 4:
                const eliminateTask = await inquirerInput('Which task you want to eliminate?');

                deleteTask(eliminateTask);

                console.log("Tarea Eliminada");
                break;

        }
    } while (option !== 0);





}

main();