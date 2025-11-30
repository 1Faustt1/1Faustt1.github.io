// const informaticsTasks = [
//         {
//             subject: "Информатика",
//             number_of_oge: "1",
//             id: "F8E641",
//             name: "Впишите правильный ответ.",
//             description: "\nВ одной из кодировок Unicode каждый символ кодируется 16 битами.\nУченица написала текст (в нём нет лишних пробелов):\n\n«Предметы мебели: пуф, стул, диван, кресло, кровать, тумбочка, оттоманка, полукресло, раскладушка».\n\nУченица удалила из списка название одного предмета, а также лишние запятую и пробел – два пробела не должны идти подряд.\nПри этом размер нового предложения в данной кодировке оказался на 20 байт меньше, чем размер исходного предложения. Напишите в ответе удалённое название предмета.",
//             additional_description_table: null,
//             media: "",
//             option: "input",
//             correct_answer: "тумбочка",
//             is_favorite: false,
//             is_solved: false
//         },
//         {
//             subject: "Информатика",
//             number_of_oge: "1",
//             id: "7CB946",
//             name: "Впишите правильный ответ.",
//             description: "\nВ одной из кодировок Unicode каждый символ кодируется 16 битами.\n\nВова написал текст (в нём нет лишних пробелов):\n\n \n\n«Алый, синий, фуксия, красный, янтарный, оранжевый, фиолетовый,  канареечный, баклажановый –\n цвета».\n\n \n\nУченик вычеркнул из списка название одного цвета. Заодно он вычеркнул ставшие лишними запятую и пробел –\n два пробела не должны идти подряд.\n\nПри этом размер нового предложения в данной кодировке оказался\nна 12 байт меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название цвета.",
//             additional_description_table: null,
//             media: "",
//             option: "input",
//             correct_answer: "алый",
//             is_favorite: false,
//             is_solved: false
//         },
//         {
//             subject: "Информатика",
//             number_of_oge: "1",
//             id: "C0544E",
//             name: "Впишите правильный ответ.",
//             description: "\nВ кодировке Windows-1251 каждый символ кодируется 8 битами.\n\nВова написал текст (в нём нет лишних пробелов):\n\n \n\n«Вздыхать и думать про себя:\nКогда же чёрт возьмёт тебя!»\n\n \n\nУченик вычеркнул из текста одно слово. Заодно он вычеркнул ставший лишним пробел –\n два пробела не должны идти подряд.\n\nПри этом размер нового предложения в данной кодировке оказался\nна 7 байт меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое слово.",
//             additional_description_table: null,
//             media: "",
//             option: "input",
//             correct_answer: "думать",
//             is_favorite: false,
//             is_solved: false
//         },
//         {
//             subject: "Информатика",
//             number_of_oge:"2",
//             id: "c3e44A",
//             name: "Впишите правильный ответ.",
//             description: "Валя шифрует русские слова, записывая вместо каждой буквы её код. Коды букв даны в таблице.\n\n \n\nА\n\nВ\n\nД\n\nО\n\nР\n\nУ\n\n01 \n\n011\n\n100 \n\n111 \n\n010\n\n001\n\n \n\nНекоторые кодовые цепочки можно расшифровать несколькими способами. Например, 00101001 может означать не только УРА, но и УАУ.\n\nДаны три кодовые цепочки:\n\n0100100101\n\n011011111100\n\n0100110001\n\nНайдите среди них ту, которая имеет только одну расшифровку, и запишите в ответе расшифрованное слово.",
//             additional_description_table: [
//                 [
//                     "А",
//                     "В",
//                     "Д",
//                     "О",
//                     "Р",
//                     "У"
//                 ],
//                 [
//                     "01",
//                     "011",
//                     "100",
//                     "111",
//                     "010",
//                     "001"
//                 ]
//             ],
//             media: "",
//             option: "input",
//             correct_answer: "алый",
//             is_favorite: false,
//             is_solved: false
//         }
// ];
//
// const englishTasks = [
//     {
//         subject: "Английский язык",
//         number_of_oge: "38",
//         id: "F8E641",
//         name: "Дайте развернутый ответ.",
//         description: "\n" +
//             "Task 3. You are going to give a talk about your school. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences). Remember to say:\n" +
//             "\n" +
//             "what your typical school day is like;\n" +
//             "what your favourite subject is, and why;\n" +
//             "what you like most about your school;\n" +
//             "what your attitude to your school life is. \n" +
//             " \n" +
//             "\n" +
//             "You have to talk continuously.",
//         additional_description_table: null,
//         media: "",
//         option: "none",
//         correct_answer: "",
//         is_favorite: false,
//         is_solved: false
//     },
//     {
//         subject: "Английский язык",
//         number_of_oge: "12",
//         id: "303746",
//         name: "Установите соответствие и впишите ответ.",
//         description: "\n" +
//             "Вы проводите информационный поиск в ходе выполнения проектной работы. Определите, в каком из текстов A–F содержатся ответы на интересующие Вас вопросы 1–7. Один из вопросов останется без ответа. Занесите Ваши ответы в таблицу.\n" +
//             "\n" +
//             " \n" +
//             "\n" +
//             "1. \t\n" +
//             "What else had to be done to start operating the Channel Tunnel? \n" +
//             "\n" +
//             "2. \t\n" +
//             "Why didn’t the British support the first project of the Channel Tunnel?\n" +
//             "\n" +
//             "3. \t\n" +
//             "How many tunnels were actually built? \n" +
//             "\n" +
//             "4. \t\n" +
//             "What are the safety tips while travelling through the Channel Tunnel?\n" +
//             "\n" +
//             "5. \t\n" +
//             "What are the possible ways for a passenger to travel through the Channel tunnel? \n" +
//             "\n" +
//             "6. \t\n" +
//             "Why is the Channel Tunnel considered to be a great engineering achievement?\n" +
//             "\n" +
//             "7. \t\n" +
//             "What was the most difficult task in constructing the Channel Tunnel?\n" +
//             "\n" +
//             "A. \t\n" +
//             "The Channel Tunnel (or Chunnel) is a long tunnel between England and France under the English Channel.  The section under the sea is 38 km long and the entire length is 50.5 km. At its lowest point it is 75 metres deep. The Channel Tunnel is the longest undersea tunnel in the world. The tunnel was recognised as one of the ‘Seven Wonders of the Modern World’ by the American Society of Engineers.\n" +
//             "\n" +
//             "B. \t\n" +
//             "For centuries, crossing the English Channel via boat had been considered a miserable task. The windy weather and choppy water made travellers seasick. So, in 1802, French engineer Albert Favier was the first person whoproposed to dig a tunnel under the water of the channel. Favier’s plan was adopted by French leader Napoleon Bonaparte. But the British rejected the plan. They feared that Napoleon wanted to build the tunnel in order to invade England.\n" +
//             "\n" +
//             "C. \t\n" +
//             "At the end of the 20th century the idea was revived. The digging of the Channel Tunnel began simultaneously from the British and the French coasts. The greatest challenge was making sure that both the British side of the tunnel and the French side actually met up in the middle. Special lasers and surveying equipment were used. On December 1, 1990, the meeting of the two sides was officially celebrated. For the first time in history, Great Britain and France were connected.\n" +
//             "\n" +
//             "D. \t\n" +
//             "Although the meeting of the two sides of the service tunnel was a cause for great celebration, it certainly wasn’t the end of the Channel Tunnel building project. Crossover tunnels, land tunnels from the coast to the terminals, electrical systems, fireproof doors, the ventilation system and train tracks all had to be added. Also, large train terminals had to be built at Folkestone in Great Britain and Coquelles in France.\n" +
//             "\n" +
//             "E. \t\n" +
//             "It took 13,000 engineers and technicians to construct the Channel Tunnel. In fact, there are two running tunnels, one each way. Additionally, there is a smaller service tunnel with a crossover in the middle, so in case there’s an emergency, the trains can actually change to either side. It is wrong to call it a tunnel as there are actually three tunnels. The tunnels are about 50 meters below the seabed.\n" +
//             "\n" +
//             "F. \t\n" +
//             "If you want to use the tunnel, you have got a choice. You can either go on a passenger train, the Eurostar, which departs from London, Paris and Brussels city centres. Or you can go on the drive-on service, called the Eurotunnel Shuttle, starting close to the tunnel entrance where you drive your car or truck onto special rail cars.\n" +
//             "\n" +
//             "Запишите в таблицу выбранные цифры под соответствующими буквами.",
//         additional_description_table: null,
//         media: "",
//         option: "select",
//         correct_answer: "627135",
//         is_favorite: false,
//         is_solved: false
//     },
//     {
//         subject: "Английский язык",
//         number_of_oge: "37",
//         id: "075DF0",
//         name: "Дайте развернутый ответ.",
//         description: "\n" +
//             "Task 2. You are going to take part in a telephone survey. You have to answer six questions. Give full answers to the questions.\n" +
//             "\n" +
//             " \n" +
//             "\n" +
//             "Remember that you have 40 seconds to answer each question.",
//         additional_description_table: null,
//         media: "https://oge.fipi.ru/docs/8BBD5C99F37898B6402964AB11955663/questions/122837638FFB89424179D39AB75E51F2/img1_1490011893.mp3",
//         option: "none",
//         correct_answer: "",
//         is_favorite: false,
//         is_solved: false
//     },
//     {
//         subject: "Английский язык",
//         number_of_oge:"34",
//         id: "1969B5",
//         name: "Впишите правильный ответ.",
//         description: "Dad made three large cups of the stuff. He took one and drank it. He handed the __________________ cup to Tom. To his surprise the juice tasted really good.",
//         additional_description_table: null,
//         media: "",
//         option: "input",
//         correct_answer: "second",
//         is_favorite: false,
//         is_solved: false
//     }
// ];

// import {tasksDataJson} from "../json/oge/tasks";
//
// const tasksData2 = tasksDataJson
// console.log(tasksData2);

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
      "description": "Task 3. You are going to give a talk about your school. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences). Remember to say:\\nwhat your typical school day is like;\\nwhat your favourite subject is, and why;\\nwhat you like most about your school;\\nwhat your attitude to your school life is.\\nYou have to talk continuously.",
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
      "description": "Вы проводите информационный поиск ...",
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
      "description": "Task 2. You are going to take part in a telephone survey...",
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
}`

const tasksData = JSON.parse(tasksDataJson).tasks // пустой массив в который потом добавляются задачи согласно предмету
const subjectId = new URLSearchParams(window.location.search).get('subjectId') // из ссылки берется параметр subjectId
const subjectTitle = document.getElementById("subjectTitle"); // по id берется заголовок страницы с заданиями
const currentSubjectTasks = tasksData.filter((task) => {
    return task.subject_id === subjectId
})
subjectTitle.innerHTML = currentSubjectTasks[0].subject;

// switch (subjectId) { // проверятся значение subjectId
//     case "ENG001":
//         tasksData.push(...englishTasks) // отправка заданий в массив
//         subjectTitle.innerHTML = englishTasks[0].subject // смена заголовка на предмет
//         break
//     case "INF004":
//         tasksData.push(...informaticsTasks) // отправка заданий в массив
//         subjectTitle.innerHTML = informaticsTasks[0].subject // смена заголовка на предмет
//         break
//     default:
//         break;
//
// }

const templateCard = document.getElementById("template-card") // по id находится шаблон карточки
const tasksContainer = document.getElementById("tasks-container") // по id находится блок где будут находиться все карточки с заданиями
const tasksCount = currentSubjectTasks.length // информация по количеству заданий

for (let i = 0; i < tasksCount; i++) { // пока все задания не обработаются цикл работает
    const card = templateCard.cloneNode(true) // копируется шаблон карточки
    card.classList.remove("hidden")
    card.childNodes[1].innerHTML = currentSubjectTasks[i].name // вписывается заголовок
    card.childNodes[3].innerHTML = currentSubjectTasks[i].description // вписывается описание (само задание)
    card.childNodes[7].childNodes[1].childNodes[1].innerHTML = "Номер: " + currentSubjectTasks[i].id // вписывается идентификационный номер задания
    tasksContainer.appendChild(card) // готовая карточка добавляется в блок
    // console.log(card.childNodes)
}

tasksContainer.removeChild(templateCard) // со страницы убирается шаблон карточки

const answerInputs = document.getElementsByClassName("main__tasks-card-input") // по классу находим поле ввода карточки
const answerButtons = document.getElementsByClassName("main__tasks-card-btn") // по классу находим кнопку отправки ответа
const inputValues = new Array(answerInputs.length).fill('')

for (let i = 0; i < answerInputs.length; i++) {
    console.log(answerInputs[i])
    answerInputs[i].addEventListener('change', (event) => {
        inputValues[i] = event.target.value
        console.log(inputValues)
    })
    answerButtons[i].addEventListener('click', (event) => {
        if (inputValues[i].toLowerCase().trim() === currentSubjectTasks[i].correct_answer.toLowerCase().trim()) {
            alert("КЛАААС")
        } else {
            alert("ЛОХ")
        }
    })
}

window.addEventListener('beforeunload', () => {
    answerInputs.forEach((answerInput, index) => {
        answerInput.removeEventListener('change')
        answerButtons[index].removeEventListener('click')
    })
    alert("Очистка успешна.")
})

// localStorage.setItem('id', JSON.stringify([tasksDataJson]))