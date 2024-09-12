![picture](https://i.imgur.com/LprmV7R.jpeg)

# Тестовое задание для avito.tech Frontend 2024

## Суть задания

Разработать личный кабинет продавца на маркетплейсе, в котором есть возможность управлять своими объявлениями и заказами.

## Запуск приложения

```
npm i
npm run server
npm run dev
```

## Стэк

React, TypeScript, React Router, Redux (RTK), axios, Material UI, Vite, ESLint

## Функционал

### На странице всех объявлений:

1. Отображается список всех объявлений продавца
2. Реализована пагинация показа объявлений
3. Реализован выбор количества объявлений для показа на странице (по умолчанию должно быть 10)
4. Реализован поиск по названию объявления
5. Можно перейти на страницу объявления (по клику на карточку)
6. Информация об объявлении в карточке
7. Есть возможность создавать новые объявления (Модальное окно с input):

**Дополнительное задание:** На странице всех объявлений реализована фильтрация выдачи по цене, просмотрам, лайкам

### На странице объявления:

1. Есть возможность просмотра объявления
2. Возможность редактирования:

### На странице заказов:

1. Отображается список заказов с фильтрами по статусу
2. Возможно сделать сортировку по сумме заказа
3. На карточке заказа изображена информация о заказе, а также возможность его завершения и показа всех товаров в заказе
4. При клике на товар в заказе есть возможность перейти в объявление продавца по этому товару

**Дополнительное задание:** На странице заказов реализована пагинация показа заказов

### Панель навигации:

1. Вкладка “Объявления” - реализован переход на страницу объявлений
2. Вкладка “Заказы” - реализован переход на страницу заказов

## Вопросы и нюансы

1. Используется другая версия json-server (`json-server@0.17.4`) для реализации нечёткого поиска по названию, в новой версии такой возможности нет.
2. В json-server нету возможности искать айтемы в массиве по значению свойства. Из-за этого не реализован поиск заказа по id объявления.
3. Присутствует адаптивная вёрстка (но не самая красивая хд)
4. В данном по условию файле была грамматическая ошибка в названии типа, но также по ТЗ менять контракты нельзя.

## Ссылки на репозиторий

[Github](https://github.com/Kolificent/avito-marketplace-test)

[Gitverse](https://github.com/Kolificent/avito-marketplace-test)
