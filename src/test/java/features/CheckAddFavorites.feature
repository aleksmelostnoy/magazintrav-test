# language: ru

Функция: Добавление в избранное, проверка добавления

  Предыстория:
    Допустим Пользователь находится на странице с товаром https://magazintrav.ru/novinki

  Сценарий: позитивная проверка добавление в избранное, проверка добавления
    Когда пользователь нажимает на кнопку у любого товара 'В избранное'
    И нажимает на кнопку Избранное
    Тогда открывается страница 'Избранное' и выбранный нами товар действительно находится в избранном