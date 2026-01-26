// ========================================
// База данных с заданиями
// ========================================
// Этот модуль содержит всю базу данных заданий в формате JSON

export const tasksDataJson = `{
  "tasks": [
    {
      "subject": "Информатика",
      "number_of_oge": 1,
      "id": "F8E641",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "В одной из кодировок Unicode каждый символ кодируется 16 битами. Ученица написала текст (в нём нет лишних пробелов):\\n\\n\
<i>«Предметы мебели: пуф, стул, диван, кресло, кровать, тумбочка, оттоманка, полукресло, раскладушка».</i>\\n\\n\
Ученица удалила из списка название одного предмета, а также лишние запятую и пробел – два пробела не должны идти подряд.\\n\
При этом размер нового предложения в данной кодировке оказался на 20 байт меньше, чем размер исходного предложения. Напишите в ответе удалённое название предмета.",
      "additional_description_table": null,
      "media": "",
      "option": "input",
      "correct_answer": "тумбочка",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Информатика",
      "number_of_oge": 1,
      "id": "7CB946",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "В одной из кодировок Unicode каждый символ кодируется 16 битами. Вова написал текст (в нём нет лишних пробелов):\\n\\n\
<i>«Алый, синий, фуксия, красный, янтарный, оранжевый, фиолетовый, канареечный, баклажановый – цвета».</i>\\n\\n\
Ученик вычеркнул из списка название одного цвета. Заодно он вычеркнул ставшие лишними запятую и пробел – два пробела не должны идти подряд.\\n\
При этом размер нового предложения в данной кодировке оказался на 12 байт меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название цвета.",
      "additional_description_table": null,
      "media": "",
      "option": "input",
      "correct_answer": "алый",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Информатика",
      "number_of_oge": 1,
      "id": "C0544E",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "В кодировке Windows-1251 каждый символ кодируется 8 битами. Вова написал текст (в нём нет лишних пробелов):\\n\\n\
<i>«Вздыхать и думать про себя: Когда же чёрт возьмёт тебя!»</i>\\n\\n\
Ученик вычеркнул из текста одно слово. Заодно он вычеркнул ставший лишним пробел – два пробела не должны идти подряд.\\n\
При этом размер нового предложения в данной кодировке оказался на 7 байт меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое слово.",
      "additional_description_table": null,
      "media": "",
      "option": "input",
      "correct_answer": "думать",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Информатика",
      "number_of_oge": 2,
      "id": "c3e44A",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "Валя шифрует русские слова, записывая вместо каждой буквы её код. Коды букв даны в таблице.\\n\\n\
Некоторые кодовые цепочки можно расшифровать несколькими способами. Например, 00101001 может означать не только УРА, но и УАУ.\\n\
Даны три кодовые цепочки:\\n\\n\
0100100101\\n\
011011111100\\n\
0100110001\\n\\n\
Найдите среди них ту, которая имеет только одну расшифровку, и запишите в ответе расшифрованное слово.",
      "additional_description_table": [
        ["А", "В", "Д", "О", "Р", "У"],
        ["01", "011", "100", "111", "010", "001"]
      ],
      "media": "",
      "option": "input",
      "correct_answer": "овод",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Информатика",
      "number_of_oge": 5,
      "id": "4B284F",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "У исполнителя Делитель две команды, которым присвоены номера:\\n\
<b>1. раздели на 2</b>\\n\
<b>2. прибавь 1</b>\\n\
Первая из них уменьшает число на экране в 2 раза, вторая увеличивает его на 1. Исполнитель работает только с натуральными числами.\\n\
Составьте алгоритм получения из числа 89 числа 24, содержащий не более 5 команд. В ответе запишите только номера команд.\\n\\n\
<i>(Например, 21121 –  это алгоритм:\\n\
прибавь 1\\n\
раздели на 2\\n\
раздели на 2\\n\
прибавь 1\\n\
раздели на 2,\\n\
который преобразует число 75 в 10.)</i>\\n\\n\
Если таких алгоритмов более одного, то запишите любой из них.",
      "additional_description_table": null,
      "media": "",
      "option": "input",
      "correct_answer": "21212",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Информатика",
      "number_of_oge": 10,
      "id": "06EB4F",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "Переведите число 204 из десятичной системы счисления в двоичную систему счисления.\\n\
В ответе укажите двоичное число. Основание системы счисления указывать не нужно.",
      "additional_description_table": null,
      "media": "",
      "option": "input",
      "correct_answer": "11001100",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Информатика",
      "number_of_oge": 16,
      "id": "0A474B",
      "subject_id": "INF004",
      "name": "Дайте развернутый ответ.",
      "description": "Напишите программу, которая в последовательности натуральных десятичных чисел определяет наибольший элемент, запись которого\
в системе счисления с основанием 7 оканчивается <b>нечётной</b> цифрой. Если среди входных данных таких элементов нет, программа должна вывести «NO».\\n\\n\
Программа получает на вход в первой строке натуральное число – количество чисел N (3 ≤ N ≤ 10 000), затем N натуральных чисел,\
не превышающих 30 000, каждое в отдельной строке.\\n\\n\
Программа должна вывести одно десятичное число – наибольший элемент последовательности, запись которого в 7-ричной системе счисления оканчивается <b>нечётной</b> цифрой,\
или «NO», если среди входных данных таких элементов нет.\\n\\n\
<i>Пример работы программы</i>\\n\\n\
Входные данные   | Выходные данные\\n\
6                             | 71\\n\
12                           |   \\n\
15                           |   \\n\
10                           |   \\n\
71                           |   \\n\
50                           |   \\n\
11                           |   ",
      "additional_description_table": null,
      "media": "",
      "option": "none",
      "correct_answer": "",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Информатика",
      "number_of_oge": 3,
      "id": "0A6843",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "Напишите наименьшее натуральное число x, для которого истинно высказывание:\\n\\n\\t\
<i>(x оканчивается на 3) И НЕ (x < 230)</i>",
      "additional_description_table": null,
      "media": "",
      "option": "input",
      "correct_answer": "233",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Информатика",
      "number_of_oge": 3,
      "id": "09B748",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "Напишите наименьшее натуральное число x, для которого истинно высказывание:\\n\\n\\t\
<i>((x > 3) И НЕ (x < 4)) ИЛИ (x < 1)</i>",
      "additional_description_table": null,
      "media": "",
      "option": "input",
      "correct_answer": "4",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Информатика",
      "number_of_oge": 10,
      "id": "053448",
      "subject_id": "INF004",
      "name": "Впишите правильный ответ.",
      "description": "Переведите число 110110 из двоичной системы счисления в десятичную систему счисления.\\n\
В ответе напишите полученное число.",
      "additional_description_table": null,
      "media": "",
      "option": "input",
      "correct_answer": "50",
      "is_favorite": false,
      "is_solved": false
    },


    {
      "subject": "Английский язык",
      "number_of_oge": 38,
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
      "number_of_oge": 12,
      "id": "303746",
      "subject_id": "ENG001",
      "name": "Установите соответствие и впишите ответ.",
      "description": "Вы проводите информационный поиск в ходе выполнения проектной работы. Определите, в каком из текстов A–F содержатся ответы на интересующие Вас вопросы 1–7. Один из вопросов останется без ответа. Занесите Ваши ответы в таблицу. 1. Why was Vladivostok called so? 2. Who founded the city of Vladivostok? 3. Why has the city quickly become important? 4. What is the climate of the city area? 5. How is it possible to travel to the city? 6. What are the city sights one should visit? 7. What makes Vladivostok buildings unique? A. Vladivostok is located at the same latitude as Russian subtropical sea resort Sochi, but its average annual temperature is nearly 10 degrees lower because of the Siberian Anticyclone. It brings cold winds from Yakutia for much of the winter season. Thus, the winter in Vladivostok is typical of Manchuria – it is cold, clear, and very windy. The snow is rare and, in some years, may not fall at all. The summer is more comfortable, warm, wet, and partly cloudy. B. The first thing that will catch the eye of every tourist right from the platform of the railway station is a unique building of the terminal of the Trans-Siberian Railway. It was built more than a century ago. The sea terminal, located nearby, is also a must-see while going on a tour of Vladivostok. Like other port cities, Vladivostok celebrates the Russian fleet with a number of museums. No doubt, the legendary S-56 submarine which played a great role in the Great Patriotic War is worth visiting. C. The most important city in the Russian Far East, Vladivostok is known as the town of sailors. It was founded about 160 years ago as a small military port. Despite being one of the youngest Russian cities, Vladivostok managed to find its way to the list of the best Russian cities to visit. Its name came from the combination of two words, vladet (meaning \\\"to own\\\") and vostok (meaning \\\"east\\\"), helping anyone who wants to find Vladivostok on a map. D. The Trans-Siberian Railway was built to connect Asian and European Russia. The final stop on the way, or the first if passengers are travelling west, is in Vladivostok. The city's strategic location and port led to the fact that Vladivostok has eventually become a large and busy centre in North-East Asia. After its foundation in 1860 as a military post, Vladivostok soon became the centre of international commerce and development. E. Despite the fact that Vladivostok has always been a Russian city, elements of the Chinese and Japanese architecture borrowed from the city's nearest neighbours can be seen even during a simple walk down the city streets. At the same time, the architecture of Vladivostok leaves no doubt that this is a Russian city. So, this unique place combines a lot of different features. F. As a rule, people prefer to spend a couple of days exploring Vladivostok within their long tour to the Far East, instead of considering the city as an independent holiday destination. They may fly to Vladivostok or go by rail choosing the famous Trans-Siberian express which is very popular with tourists. The Trans-Siberian Railway is the longest railway route in the world. So, going by train to Vladivostok can easily become a journey of a lifetime. Запишите в таблицу выбранные цифры под соответствующими буквами.",
      "additional_description_table": null,
      "media": "",
      "option": "select",
      "correct_answer": "627135",
      "is_favorite": false,
      "is_solved": false
    },
    {
      "subject": "Английский язык",
      "number_of_oge": 37,
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
      "number_of_oge": 34,
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
