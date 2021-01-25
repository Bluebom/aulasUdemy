const inputTask = document.querySelector('.input_task');
const btnTask = document.querySelector('.btn_task');
const tasks = document.querySelector('.tasks');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        criaTask(inputTask.value);
    }
});

function limpaInput() {
    inputTask.value = '';
    inputTask.focus();
}

function criaBotaoDelete(li) {
    li.innerText += ' ';
    const botaoDelete = document.createElement('button');
    botaoDelete.innerText = 'Apagar';
    botaoDelete.setAttribute('class', 'apagar btn');
    li.appendChild(botaoDelete);
}

function criaTask(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tasks.appendChild(li);
    limpaInput();
    criaBotaoDelete(li);
    saveTask();
};

function saveTask() {
    const liTasks = tasks.querySelectorAll('li');
    const listOfTask = [];

    liTasks.forEach((v) => {
        let textTask = v.innerText;
        textTask = textTask.replace('Apagar', '').trim();
        listOfTask.push(textTask);
    })

    const jsonTasks = JSON.stringify(listOfTask);
    localStorage.setItem('tarefas', jsonTasks);
}

btnTask.addEventListener('click', () => {
    if (!inputTask.value) return;
    criaTask(inputTask.value);
});

function addSavedTasks() {
    const tarefas = localStorage.getItem('tarefas');
    const listOfTask = JSON.parse(tarefas);

    listOfTask.forEach((v) => {
        criaTask(v);
    });
}

addSavedTasks();

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentNode.remove();
        saveTask();

    }
})