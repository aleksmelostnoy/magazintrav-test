$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CheckItemCard.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 2,
  "name": "Проверка карточки товара",
  "description": "",
  "id": "проверка-карточки-товара",
  "keyword": "Функция"
});
formatter.before({
  "duration": 3973937400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Предыстория"
});
formatter.step({
  "line": 5,
  "name": "пользователь выбрал товар и находится на странице товара",
  "keyword": "Допустим "
});
formatter.match({
  "location": "CheckItemCard.пользователь_выбрал_товар_и_находится_на_странице_товара()"
});
formatter.result({
  "duration": 3423681300,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Товар корректно отобразился",
  "description": "",
  "id": "проверка-карточки-товара;товар-корректно-отобразился",
  "type": "scenario",
  "keyword": "Сценарий"
});
formatter.step({
  "line": 8,
  "name": "присутствует заголовок товара",
  "keyword": "Если "
});
formatter.step({
  "line": 9,
  "name": "отображается изображение товара",
  "keyword": "И "
});
formatter.step({
  "line": 10,
  "name": "отбражается стоимость товара",
  "keyword": "Также "
});
formatter.step({
  "line": 11,
  "name": "есть кнопка добавить в корзину",
  "keyword": "Также "
});
formatter.step({
  "line": 12,
  "name": "имеется возможность изменять количество товара",
  "keyword": "К тому же "
});
formatter.match({
  "location": "CheckItemCard.присутствует_заголовок_товара()"
});
formatter.result({
  "duration": 40530000,
  "status": "passed"
});
formatter.match({
  "location": "CheckItemCard.отображается_изображение_товара()"
});
formatter.result({
  "duration": 46155200,
  "status": "passed"
});
formatter.match({
  "location": "CheckItemCard.отбражается_стоимость_товара()"
});
formatter.result({
  "duration": 28211500,
  "status": "passed"
});
formatter.match({
  "location": "CheckItemCard.есть_кнопка_добавить_в_корзину()"
});
formatter.result({
  "duration": 32548000,
  "status": "passed"
});
formatter.match({
  "location": "CheckItemCard.имеется_возможность_изменять_количество_товара()"
});
formatter.result({
  "duration": 526236000,
  "status": "passed"
});
formatter.after({
  "duration": 700951200,
  "status": "passed"
});
});