const { inquirerMenu, inquirerInput } = require('./helpers/inquirer')
const { getAllTasks, createTask } = require('./services/fileService');

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
        }
    } while (option !== 0);





}

main();