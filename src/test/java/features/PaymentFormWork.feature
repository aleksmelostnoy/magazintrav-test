# language: ru

  Функция: Работа формы "оплата заказа онлайн"

    Предыстория:
          Допустим пользователь заходит на главную страницу https://magazintrav.ru

    Сценарий: позитивная проверка работа формы 'оплата заказа онлайн'
      Когда пользователь нажимает на кнопку 'оплата заказа онлайн'
      Тогда всплывает окно 'Оплата заказа онлайн'

      Когда пользователь заполняет все поля ввода для оплаты онлан
      И нажимает кнопку чтобы закрыть форму
      Тогда вновь открывается главная страница

      Когда пользователь вновь нажимает на кнопку 'оплата заказа онлайн'
      Тогда вновь всплывает окно 'Оплата заказа онлайн' и все введенные до этого данные корректны

