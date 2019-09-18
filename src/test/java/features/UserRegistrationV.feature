# language: ru

@all
Функция: Проверка вкладки Вакансии
Когда пользователь жмет на вкладку 'О компании'
И мжет на кнопку 'Вакансии'
Открывается страница вакансий в случае успеха

  Предыстория:
    Допустим пользователь жмет на вклдаку 'О компании'
    И в появившемся списке выбирает 'Вакансии'

  @correct
  Сценарий: В случае успеха
    Тогда открывается страница Вакансий
    И можно проверить список