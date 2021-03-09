const { inquirerMenu, inquirerInput } = require('./helpers/inquirer')
const { getAllTasks, createTask, completeTask, deleteTask } = require('./services/taskService');

const main = async () => {

    let option = '';
    do {
        option = await inquirerMenu();


        switch (option) {
            case 1:

                //TODO: Hacer que el usuario pueda ingresar el titulo de la tarea
                console.log('El usuario seleccionó la opción crear tarea');

                const title = await inquirerInput('Task title');

                createTask(title);

                console.log(title);

                break;
            case 2:

                //Mostrar lista de tareas de la base de datos
                const allTasks = getAllTasks();
                console.log(allTasks);
                break;
            case 3:

                const completedTask = await inquirerInput('Which task you complete?')

                completeTask(completedTask);

                console.log(completedTask);
                break;
            case 4:
                const eliminateTask = await inquirerInput('Which task you want to eliminate?');

                deleteTask(eliminateTask);

                console.log(deleteTask);
                break;

        }
    } while (option !== 0);





}

main();