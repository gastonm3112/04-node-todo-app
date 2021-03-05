const { inquirerMenu, inquirerInput } = require('./helpers/inquirer')

const TaskRepository = require('./repositories/TaskRepository');

const main = async () => {
    //Instaciando la clase desde TaskRepository
    const taskRepository = new TaskRepository();
    let option = '';
    do {
        option = await inquirerMenu();


        switch (option) {
            case 1:

                //TODO: Hacer que el usuario pueda ingresar el titulo de la tarea
                console.log('El usuario seleccionó la opción crear tarea');

                const title = await inquirerInput('Task title');

                taskRepository.createTask(title);

                console.log(title);

                break;
            case 2:

                //Mostrar lista de tareas de la base de datos
                const allTasks = taskRepository.getAllTask();
                console.log(allTasks);
                break;
        }
    } while (option !== 0);





}

main();