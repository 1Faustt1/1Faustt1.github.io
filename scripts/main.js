// Список заданий
const tasksDataJson = `{
  "tasks": [
    {
      "subject": "Информатика",
      "number_of_oge": "1",
      "id": "F8E641",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "В одной из кодировок Unicode каждый символ кодируется 16 битами. Ученица написала текст (в нём нет лишних пробелов): «Предметы мебели: пуф, стул, диван, кресло, кровать, тумбочка, оттоманка, полукресло, раскладушка». Ученица удалила из списка название одного предмета, а также лишние запятую и пробел – два пробела не должны идти подряд. При этом размер нового предложения в данной кодировке оказался на 20 байт меньше, чем размер исходного предложения. Напишите в ответе удалённое название предмета.",
      "additional_description_table": null,
      "media": "",
      "option": "input",
      "correct_answer": "тумбочка",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Информатика",
      "number_of_oge": "1",
      "id": "7CB946",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "В одной из кодировок Unicode каждый символ кодируется 16 битами. Вова написал текст (в нём нет лишних пробелов): «Алый, синий, фуксия, красный, янтарный, оранжевый, фиолетовый, канареечный, баклажановый – цвета». Ученик вычеркнул из списка название одного цвета. Заодно он вычеркнул ставшие лишними запятую и пробел – два пробела не должны идти подряд. При этом размер нового предложения в данной кодировке оказался на 12 байт меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название цвета.",
      "additional_description_table": null,
      "media": "",
      "option": "input",
      "correct_answer": "алый",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Информатика",
      "number_of_oge": "1",
      "id": "C0544E",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "В кодировке Windows-1251 каждый символ кодируется 8 битами. Вова написал текст (в нём нет лишних пробелов): «Вздыхать и думать про себя: Когда же чёрт возьмёт тебя!» Ученик вычеркнул из текста одно слово. Заодно он вычеркнул ставший лишним пробел – два пробела не должны идти подряд. При этом размер нового предложения в данной кодировке оказался на 7 байт меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое слово.",
      "additional_description_table": null,
      "media": "",
      "option": "input",
      "correct_answer": "думать",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Информатика",
      "number_of_oge": "2",
      "id": "c3e44A",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "Валя шифрует русские слова, записывая вместо каждой буквы её код. Коды букв даны в таблице. АВДОРУ01 011100 111 010001. Некоторые кодовые цепочки можно расшифровать несколькими способами. Например, 00101001 может означать не только УРА, но и УАУ. Даны три кодовые цепочки: 01001001010110111111000100110001. Найдите среди них ту, которая имеет только одну расшифровку, и запишите в ответе расшифрованное слово.",
      "additional_description_table": [
        ["А", "В", "Д", "О", "Р", "У"],
        ["01", "011", "100", "111", "010", "001"]
      ],
      "media": "",
      "option": "input",
      "correct_answer": "алый",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Английский язык",
      "number_of_oge": "38",
      "id": "F8E641",
      "subject_id": "ENG001",
      "name": "Дайте развернутый ответ.",
      "description": "Task 3. You are going to give a talk about your school. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences). Remember to say: what your typical school day is like; what your favourite subject is, and why; what you like most about your school; what your attitude to your school life is. You have to talk continuously.",
      "additional_description_table": null,
      "media": "",
      "option": "none",
      "correct_answer": "",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Английский язык",
      "number_of_oge": "12",
      "id": "303746",
      "subject_id": "ENG001",
      "name": "Установите соответствие и впишите ответ.",
      "description": "Вы проводите информационный поиск в ходе выполнения проектной работы. Определите, в каком из текстов A–F содержатся ответы на интересующие Вас вопросы 1–7. Один из вопросов останется без ответа. Занесите Ваши ответы в таблицу. 1. Why was Vladivostok called so? 2. Who founded the city of Vladivostok? 3. Why has the city quickly become important? 4. What is the climate of the city area? 5. How is it possible to travel to the city? 6. What are the city sights one should visit? 7. What makes Vladivostok buildings unique? A. Vladivostok is located at the same latitude as Russian subtropical sea resort Sochi, but its average annual temperature is nearly 10 degrees lower because of the Siberian Anticyclone. It brings cold winds from Yakutia for much of the winter season. Thus, the winter in Vladivostok is typical of Manchuria – it is cold, clear, and very windy. The snow is rare and, in some years, may not fall at all. The summer is more comfortable, warm, wet, and partly cloudy. B. The first thing that will catch the eye of every tourist right from the platform of the railway station is a unique building of the terminal of the Trans-Siberian Railway. It was built more than a century ago. The sea terminal, located nearby, is also a must-see while going on a tour of Vladivostok. Like other port cities, Vladivostok celebrates the Russian fleet with a number of museums. No doubt, the legendary S-56 submarine which played a great role in the Great Patriotic War is worth visiting. C. The most important city in the Russian Far East, Vladivostok is known as the town of sailors. It was founded about 160 years ago as a small military port. Despite being one of the youngest Russian cities, Vladivostok managed to find its way to the list of the best Russian cities to visit. Its name came from the combination of two words, vladet (meaning “to own”) and vostok (meaning “east”), helping anyone who wants to find Vladivostok on a map. D. The Trans-Siberian Railway was built to connect Asian and European Russia. The final stop on the way, or the first if passengers are travelling west, is in Vladivostok. The city’s strategic location and port led to the fact that Vladivostok has eventually become a large and busy centre in North-East Asia. After its foundation in 1860 as a military post, Vladivostok soon became the centre of international commerce and development. E. Despite the fact that Vladivostok has always been a Russian city, elements of the Chinese and Japanese architecture borrowed from the city’s nearest neighbours can be seen even during a simple walk down the city streets. At the same time, the architecture of Vladivostok leaves no doubt that this is a Russian city. So, this unique place combines a lot of different features. F. As a rule, people prefer to spend a couple of days exploring Vladivostok within their long tour to the Far East, instead of considering the city as an independent holiday destination. They may fly to Vladivostok or go by rail choosing the famous Trans-Siberian express which is very popular with tourists. The Trans-Siberian Railway is the longest railway route in the world. So, going by train to Vladivostok can easily become a journey of a lifetime. Запишите в таблицу выбранные цифры под соответствующими буквами.",
      "additional_description_table": null,
      "media": "",
      "option": "select",
      "correct_answer": "627135",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Английский язык",
      "number_of_oge": "37",
      "id": "075DF0",
      "subject_id": "ENG001",
      "name": "Дайте развернутый ответ.",
      "description": "Task 2. You are going to take part in a telephone survey. You have to answer six questions. Give full answers to the questions. Remember that you have 40 seconds to answer each question.",
      "additional_description_table": null,
      "media": "https://oge.fipi.ru/docs/8BBD5C99F37898B6402964AB11955663/questions/122837638FFB89424179D39AB75E51F2/img1_1490011893.mp3",
      "option": "none",
      "correct_answer": "",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Английский язык",
      "number_of_oge": "34",
      "id": "1969B5",
      "subject_id": "ENG001",
      "name": "Впишите правильный ответ.",
      "description": "Dad made three large cups of the stuff. He took one and drank it. He handed the __________________ cup to Tom. To his surprise the juice tasted really good.",
      "additional_description_table": null,
      "media": "",
      "option": "input",
      "correct_answer": "second",
      "is_favorite": false,
      "is_solved": false
    }
  ]
  }`;

// Функция синхронизации списка задач с LocalStorage
function syncWithLS(tasks, elems) {
    let savedTasks = []
    try {
        savedTasks = JSON.parse(localStorage.getItem('tasks')) ?? []
    } catch (e) {
        console.error(e)
    }
    if (!savedTasks) {
        return tasks;
    }
    return [...tasks].map((task, i) => {
        const savedTask = savedTasks.find(s => s.id === task.id)
        if (savedTask) {
            const resultTask = {
                ...structuredClone(task),
                is_solved: savedTask.is_solved,
                is_favorite: savedTask.is_favorite,
            }
            updateIsSolvedUI(elems[i], resultTask.is_solved)
            return resultTask
        }
        return structuredClone(task)
    })
}

// Функция обновляющая задания с информацией с LocalStorage
function updateTask(tasks, task) {
    let savedTasks = []
    try {
        savedTasks = JSON.parse(localStorage.getItem('tasks')) ?? []
    } catch (e) {
        console.error(e)
    }
    const tasksWithoutCurrent = savedTasks.filter(s => s.id !== task.id)

    const taskToSave = {
        id: task.id,
        is_solved: task.is_solved,
        is_favorite: task.is_favorite,
    }

    tasksWithoutCurrent.push(taskToSave)
    localStorage.setItem('tasks', JSON.stringify(tasksWithoutCurrent))
    syncWithLS(tasks, taskStatuses)
}

// Функция добавления задания в избранное
function toggleFavorite(tasks, taskIndex, elem) {
    tasks[taskIndex].is_favorite = !tasks[taskIndex].is_favorite;

    let savedTasks = [];
    try {
        savedTasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
    } catch (e) {
        console.error(e);
    }

    const tasksWithoutCurrent = savedTasks.filter(t => t.id !== tasks[taskIndex].id);
    tasksWithoutCurrent.push({
        id: tasks[taskIndex].id,
        is_favorite: tasks[taskIndex].is_favorite,
        is_solved: tasks[taskIndex].is_solved
    });
    localStorage.setItem('tasks', JSON.stringify(tasksWithoutCurrent));

    updateFavoriteUI(elem, tasks[taskIndex].is_favorite);
}

// Функция обновляющая статус задания (решено верно или не верно)
function updateIsSolvedUI(elem, isCorrect) {
    if (isCorrect) {
        elem.textContent = "ВЕРНО"
        elem.style.color = "green"
    } else {
        elem.textContent = "НЕ ВЕРНО"
        elem.style.color = "red"
    }
}

// Функция обновляющая статус избранного
function updateFavoriteUI(elem, isFavorite) {
    const favSVG = elem.querySelector(".main__tasks-card-footer-favorite-svg")
    if (isFavorite) {
        favSVG.setAttribute('fill', 'gold');
    } else {
        favSVG.setAttribute('fill', 'transparent');
    }
}

// Фильтр заданий по их ID
const filterById = (tasks, id) => tasks.find(task => task.id === id)

// Фильтр заданий по номеру из КИМ
const filterByNumberOfOge = (tasks, number) => tasks.filter(task => task.number_of_oge === number)

// Фильтр заданий по избранным
const filterByFavorite = (tasks, isFavorite=null) => {
    if (isFavorite === null) {
        return [...tasks]
    }
    return tasks.filter(task => task.is_favorite === isFavorite)
}

// Фильтр заданий по решенным
const filterBySolved = (tasks, isSolved = null) => {
    if (isSolved === null) {
        return [...tasks]
    }
    return tasks.filter(task => task.is_solved === isSolved)
}

const tasksData = JSON.parse(tasksDataJson).tasks // из списка заданий достаем массив заданий
const subjectId = new URLSearchParams(window.location.search).get('subjectId') // из ссылки берется параметр subjectId
const subjectTitle = document.getElementById("subjectTitle"); // по id берется заголовок страницы с заданиями
let currentSubjectTasks = tasksData.filter((task) => { // массив заданий согласно предмету
    return task.subject_id === subjectId
})
subjectTitle.innerHTML = currentSubjectTasks[0].subject // В заголовок страницы вставляется название предмета

const templateCard = document.getElementById("template-card") // по id находится шаблон карточки
const tasksContainer = document.getElementById("tasks-container") // по id находится блок где будут находиться все карточки с заданиями
const tasksCount = currentSubjectTasks.length // информация по количеству заданий

for (let i = 0; i < tasksCount; i++) { // пока все задания не обработаются цикл работает
    const card = templateCard.cloneNode(true) // копируется шаблон карточки
    const input = card.querySelector('.main__tasks-card-input') // берется поле ввода карточка
    const btn = card.querySelector('.main__tasks-card-btn') // берется кнопка ответить из карточки

    card.classList.remove("hidden") // убираем класс hidden, чтобы отобразить карточку
    card.childNodes[1].innerHTML = currentSubjectTasks[i].name // вписывается заголовок
    card.childNodes[3].innerHTML = currentSubjectTasks[i].description // вписывается описание (само задание)
    card.childNodes[7].childNodes[1].childNodes[1].innerHTML = "Номер: " + currentSubjectTasks[i].id // вписывается идентификационный номер задания
    tasksContainer.appendChild(card) // готовая карточка добавляется в блок

    // вариации ответа на задание
    if (currentSubjectTasks[i].option === "none") {
        if (input) input.style.display = "none"
        btn.textContent = "Изменить статус";
        btn.classList.add("main__tasks-card-btn_none")
    } else if (currentSubjectTasks[i].options === "select") {

    }
}


// В функции которая открывает модалку, должна быть регистрация обработчиков. Если я открыл модалку - я добавляю лисенеры, если закрываю модалку, то их удаляю

const infoButtons = document.getElementsByClassName("main__tasks-card-footer-info") // кнопка информации в карточке
const infoBlock = document.getElementsByClassName("main__tasks-card-module-info") // окно информации в карточке
const filterButton = document.getElementById("filter-btn") // кнопка фильтра на странице
const filterBlock = document.getElementById("module-filter") // окно фильтра на странице
const filterBtnSearch = document.getElementById("filter-btn-search") // кнопка применение фильтра

function filterListener() { // функция, которая считывает все выбранные позиции фильтра и передает их
    const filterSelect = document.getElementById("filter-select")
    const filterSolved = document.querySelector('input[name="isSolved"]:checked')
    const filterFavorite = document.querySelector('input[name="isFavorite"]:checked')

    const filterSelectValue = filterSelect.value
    const filterSolvedValue = filterSolved.value
    const filterFavoriteValue = filterFavorite.value

    console.log(filterSelectValue, filterSolvedValue, filterFavoriteValue)
    filterByNumberOfOge(currentSubjectTasks, filterSelectValue)
    filterBySolved(currentSubjectTasks, filterSolvedValue)
    filterByFavorite(currentSubjectTasks, filterFavoriteValue)
}

function toggleFilter() { // функция выключения и выключения окна фильтра
    const block = filterBlock
    let isHidden = block.style.display === 'none' || block.style.display === ''

    if (isHidden) {
        block.style.display = 'flex'
        filterBtnSearch.addEventListener('click', filterListener)

    } else {
        block.style.display = 'none'
        filterBtnSearch.removeEventListener('click', filterListener)
    }
}

function toggleInfoModule(index) { // функция выключения и выключения окна информации в карточке
    const block = infoBlock[index]
    let isHidden = block.style.display === 'none' || block.style.display === ''

    if (isHidden) {
        block.style.display = 'flex'
    } else {
        block.style.display = 'none'
    }
}

tasksContainer.removeChild(templateCard) // со страницы убирается шаблон карточки

const taskStatuses = document.getElementsByClassName("main__tasks-card-footer-status-color") // из карточки достается значение решения (решено или нет)
currentSubjectTasks = syncWithLS(currentSubjectTasks, taskStatuses) // подтягиваем статусы решено/избранное из localStorage и обновляем интерфейс
const answerInputs = document.getElementsByClassName("main__tasks-card-input") // по классу находим поля ввода карточки
const answerButtons = document.getElementsByClassName("main__tasks-card-btn") // по классу находим кнопки отправки ответа
const favoriteButtons = document.getElementsByClassName("main__tasks-card-footer-favorite") // по классу находим кнопки избранного
const inputValues = new Array(answerInputs.length).fill('') // создается пустой список длиной равной количеству полей ввода

for (let i = 0; i < answerInputs.length; i++) { // слушание каждого поля ввода
    answerInputs[i].addEventListener('input', (event) => {
        inputValues[i] = event.target.value
    })
    answerButtons[i].addEventListener('click', (event) => { // // при клике проверяем ответ пользователя и обновляем статус задания
        if (inputValues[i].toLowerCase().trim() === currentSubjectTasks[i].correct_answer.toLowerCase().trim()) {
            updateTask(currentSubjectTasks, {
                ...currentSubjectTasks[i],
                is_solved: true,
            })
            updateIsSolvedUI(taskStatuses[i], true)
        } else {
            updateTask(currentSubjectTasks, {
                ...currentSubjectTasks[i],
                is_solved: false,
            })
            updateIsSolvedUI(taskStatuses[i], false)
        }
    })
}

for (let i = 0; i < favoriteButtons.length; i++) { // слушание каждой кнопки добавления в избранное
    updateFavoriteUI(favoriteButtons[i], currentSubjectTasks[i].is_favorite)
    favoriteButtons[i].addEventListener('click', () => {
        toggleFavorite(currentSubjectTasks, i, favoriteButtons[i])
    });
}

for (let i = 0; i < infoButtons.length; i++) { // слушание каждой кнопки открытия окна информации
    infoButtons[i].addEventListener('click', () => {
        toggleInfoModule(i);
    });
}

filterButton.addEventListener("click", (event) => { // слушание кнопки открытия окна фильтра
    toggleFilter();
})


window.addEventListener('beforeunload', () => { // при закрытии окна удалить все слушатели
    answerInputs.forEach((answerInput, index) => {
        answerInputs[index].removeEventListener('change')
        answerButtons[index].removeEventListener('click')
        infoButtons[index].removeEventListener('click')
    })
    alert("Очистка успешна.")
})