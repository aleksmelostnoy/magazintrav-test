# language: ru

Функция: Проверка блока "С этим товаром покупают"

  Предыстория:
    Допустим пользователь находится на главной странице

  Сценарий: блок "С этим товаром покупают" успешно отбразился
    Когда пользователь выбрал товар и отобразилась его карточка
    То проверяем наличие заголовка блока внизу страницы
    Также проверяем наличие непустых полей с товарами
    И возможность добавить их в корзину