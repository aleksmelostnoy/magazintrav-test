$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PaymentFormWork.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 3,
  "name": "Работа формы \"оплата заказа онлайн\"",
  "description": "",
  "id": "работа-формы-\"оплата-заказа-онлайн\"",
  "keyword": "Функция"
});
formatter.before({
  "duration": 4110925100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Предыстория"
});
formatter.step({
  "line": 6,
  "name": "пользователь заходит на главную страницу https://magazintrav.ru",
  "keyword": "Допустим "
});
formatter.match({
  "arguments": [
    {
      "val": "https://magazintrav.ru",
      "offset": 41
    }
  ],
  "location": "PaymentFormWorkSteps.пользователь_заходит_на_главную_страницу_сайта(String)"
});
formatter.result({
  "duration": 2828300300,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "позитивная проверка работа формы \u0027оплата заказа онлайн\u0027",
  "description": "",
  "id": "работа-формы-\"оплата-заказа-онлайн\";позитивная-проверка-работа-формы-\u0027оплата-заказа-онлайн\u0027",
  "type": "scenario",
  "keyword": "Сценарий"
});
formatter.step({
  "line": 9,
  "name": "пользователь нажимает на кнопку \u0027оплата заказа онлайн\u0027",
  "keyword": "Когда "
});
formatter.step({
  "line": 10,
  "name": "всплывает окно \u0027Оплата заказа онлайн\u0027",
  "keyword": "Тогда "
});
formatter.step({
  "line": 12,
  "name": "пользователь заполняет все поля ввода",
  "keyword": "Когда "
});
formatter.step({
  "line": 13,
  "name": "нажимает кнопку чтобы закрыть форму",
  "keyword": "И "
});
formatter.step({
  "line": 14,
  "name": "вновь открывается главная страница",
  "keyword": "Тогда "
});
formatter.step({
  "line": 16,
  "name": "пользователь вновь нажимает на кнопку \u0027оплата заказа онлайн\u0027",
  "keyword": "Когда "
});
formatter.step({
  "line": 17,
  "name": "вновь всплывает окно \u0027Оплата заказа онлайн\u0027 и все введенные до этого данные корректны",
  "keyword": "Тогда "
});
formatter.match({
  "location": "PaymentFormWorkSteps.пользователь_нажимает_на_кнопку_оплата_заказа_онлайн()"
});
formatter.result({
  "duration": 94658400,
  "status": "passed"
});
formatter.match({
  "location": "PaymentFormWorkSteps.всплывает_окно_Оплата_заказа_онлайн()"
});
formatter.result({
  "duration": 658359500,
  "status": "passed"
});
formatter.match({
  "location": "PaymentFormWorkSteps.пользователь_заполняет_все_поля_ввода()"
});
formatter.result({
  "duration": 207034700,
  "status": "passed"
});
formatter.match({
  "location": "PaymentFormWorkSteps.нажимает_кнопку_чтобы_закрыть_форму()"
});
formatter.result({
  "duration": 63370900,
  "status": "passed"
});
formatter.match({
  "location": "PaymentFormWorkSteps.вновь_открывается_главная_страница()"
});
formatter.result({
  "duration": 595328400,
  "status": "passed"
});
formatter.match({
  "location": "PaymentFormWorkSteps.пользователь_вновь_нажимает_на_кнопку_оплата_заказа_онлайн()"
});
formatter.result({
  "duration": 54273900,
  "status": "passed"
});
formatter.match({
  "location": "PaymentFormWorkSteps.вновь_всплывает_окно_Оплата_заказа_онлайн_и_все_введенные_до_этого_данные_корректны()"
});
formatter.result({
  "duration": 44739900,
  "status": "passed"
});
formatter.after({
  "duration": 734407800,
  "status": "passed"
});
formatter.uri("SearchInputField.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 3,
  "name": "Проверка работы строки поиска",
  "description": "",
  "id": "проверка-работы-строки-поиска",
  "keyword": "Функция"
});
formatter.before({
  "duration": 3291341600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Предыстория"
});
formatter.step({
  "line": 6,
  "name": "пользователь находится на главной странице https://magazintrav.ru",
  "keyword": "Пусть "
});
formatter.match({
  "arguments": [
    {
      "val": "https://magazintrav.ru",
      "offset": 43
    }
  ],
  "location": "SearchInputFieldSteps.пользователь_находится_на_главной_странице(String)"
});
formatter.result({
  "duration": 1810696100,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Поиск продукта \u0027Арония\u0027 через строку поиска",
  "description": "",
  "id": "проверка-работы-строки-поиска;поиск-продукта-\u0027арония\u0027-через-строку-поиска",
  "type": "scenario",
  "keyword": "Сценарий"
});
formatter.step({
  "line": 9,
  "name": "пользователь вводит в строку поиска Арония",
  "keyword": "Когда "
});
formatter.step({
  "line": 10,
  "name": "продукт Арония отображается на экране",
  "keyword": "Тогда "
});
formatter.match({
  "arguments": [
    {
      "val": "Арония",
      "offset": 36
    }
  ],
  "location": "SearchInputFieldSteps.пользователь_вводит_в_строку_поиска_Арония(String)"
});
formatter.result({
  "duration": 229830900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Арония",
      "offset": 8
    }
  ],
  "location": "SearchInputFieldSteps.продукт_Арония_отображается_на_экране(String)"
});
formatter.result({
  "duration": 397846600,
  "status": "passed"
});
formatter.after({
  "duration": 716080200,
  "status": "passed"
});
formatter.uri("UserRegistration.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 3,
  "name": "Отправка жалобы руководству",
  "description": "",
  "id": "отправка-жалобы-руководству",
  "keyword": "Функция"
});
formatter.before({
  "duration": 3273771200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Предыстория"
});
formatter.step({
  "line": 6,
  "name": "пользователь находится на главной странице",
  "keyword": "Допустим "
});
formatter.match({
  "location": "StepsLeaveComplaint.пользователь_находится_на_главной_странице()"
});
formatter.result({
  "duration": 1770583600,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "позитивная отправка жалобы руководству",
  "description": "",
  "id": "отправка-жалобы-руководству;позитивная-отправка-жалобы-руководству",
  "type": "scenario",
  "keyword": "Сценарий"
});
formatter.step({
  "line": 9,
  "name": "нажимает на кнопку Помощь",
  "keyword": "Когда "
});
formatter.step({
  "line": 10,
  "name": "выбирает пункт службы контроля качества",
  "keyword": "И "
});
formatter.step({
  "line": 11,
  "name": "пользователь нажимает на кнопку оставить жалобу",
  "keyword": "Тогда "
});
formatter.step({
  "line": 12,
  "name": "заполняет все поля",
  "keyword": "И "
});
formatter.step({
  "line": 13,
  "name": "пользователь нажимает кнопку отправить",
  "keyword": "Тогда "
});
formatter.match({
  "location": "StepsLeaveComplaint.нажимает_на_кнопку_Помощь()"
});
formatter.result({
  "duration": 108037000,
  "status": "passed"
});
formatter.match({
  "location": "StepsLeaveComplaint.выбирает_пункт_службы_контроля_качества()"
});
formatter.result({
  "duration": 737537900,
  "status": "passed"
});
formatter.match({
  "location": "StepsLeaveComplaint.пользователь_нажимает_на_кнопку_оставить_жалобу()"
});
formatter.result({
  "duration": 1457608800,
  "status": "passed"
});
formatter.match({
  "location": "StepsLeaveComplaint.заполняет_все_поля()"
});
formatter.result({
  "duration": 829052400,
  "status": "passed"
});
formatter.match({
  "location": "StepsLeaveComplaint.пользователь_нажимает_кнопку_отправить()"
});
formatter.result({
  "duration": 93591500,
  "status": "passed"
});
formatter.after({
  "duration": 738026400,
  "status": "passed"
});
formatter.uri("UserRegistrationV.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 4,
  "name": "Проверка вкладки Вакансии",
  "description": "Когда пользователь жмет на вкладку \u0027О компании\u0027\r\nИ мжет на кнопку \u0027Вакансии\u0027\r\nОткрывается страница вакансий в случае успеха",
  "id": "проверка-вкладки-вакансии",
  "keyword": "Функция",
  "tags": [
    {
      "line": 3,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 3253301900,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Предыстория"
});
formatter.step({
  "line": 10,
  "name": "пользователь жмет на вклдаку \u0027О компании\u0027",
  "keyword": "Допустим "
});
formatter.step({
  "line": 11,
  "name": "в появившемся списке выбирает \u0027Вакансии\u0027",
  "keyword": "И "
});
formatter.match({
  "location": "VacancyCheck.пользователь_жмет_на_вклдаку_О_компании()"
});
formatter.result({
  "duration": 1754769600,
  "status": "passed"
});
formatter.match({
  "location": "VacancyCheck.в_появившемся_списке_выбирает_Вакансии()"
});
formatter.result({
  "duration": 1079751900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "В случае успеха",
  "description": "",
  "id": "проверка-вкладки-вакансии;в-случае-успеха",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 13,
      "name": "@correct"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "открывается страница Вакансий",
  "keyword": "Тогда "
});
formatter.step({
  "line": 16,
  "name": "можно проверить список",
  "keyword": "И "
});
formatter.match({
  "location": "VacancyCheck.открывается_страница_Вакансий()"
});
formatter.result({
  "duration": 124916800,
  "status": "passed"
});
formatter.match({
  "location": "VacancyCheck.можно_проверить_список()"
});
formatter.result({
  "duration": 26808600,
  "status": "passed"
});
formatter.after({
  "duration": 715954700,
  "status": "passed"
});
});