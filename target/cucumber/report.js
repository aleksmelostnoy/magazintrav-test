$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchInputField.feature");
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
  "duration": 4115079700,
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
  "duration": 1973438600,
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
  "duration": 218779300,
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
  "duration": 388743300,
  "status": "passed"
});
formatter.after({
  "duration": 859424000,
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
  "duration": 3329961400,
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
  "duration": 2172901700,
  "status": "passed"
});
formatter.match({
  "location": "VacancyCheck.в_появившемся_списке_выбирает_Вакансии()"
});
formatter.result({
  "duration": 728911100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "В случае успеха",
  "description": "",
  "id": "проверка-вкладки-вакансии;в-случае-успеха",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 14,
      "name": "@correct"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "открывается страница Вакансий",
  "keyword": "Тогда "
});
formatter.step({
  "line": 17,
  "name": "можно проверить список",
  "keyword": "И "
});
formatter.match({
  "location": "VacancyCheck.открывается_страница_Вакансий()"
});
formatter.result({
  "duration": 125690700,
  "status": "passed"
});
formatter.match({
  "location": "VacancyCheck.можно_проверить_список()"
});
formatter.result({
  "duration": 31702500,
  "status": "passed"
});
formatter.after({
  "duration": 720210300,
  "status": "passed"
});
});