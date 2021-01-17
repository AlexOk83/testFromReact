# Тестовое задание для прохождение собеседования

## Текст задания
Сверстать и минимально реализовать  [макет (картинка во вложении)](https://www.figma.com/file/BF3VWKalQvlMILwXhnQURg/test-task)

Требования к верстке:

Адаптивно, с поддержкой браузеров последней версии, но не сильно подгонять пиксель в пиксель. Проверить на 3х размерах — десктоп, планшет, смартфон.

Форма логина:

Форма логина должна отсылаться на бек и делать вид, что отправила смс (показывать его на странице как-то), а при вводе смс - валидировать его и давать доступ.

Форма регистрации:

В форме регистрации следующие поля: ФИО, email, телефон, город, страна, ОС мобильного телефона. Для поля город и страна — автокомплит, источник данных городов и стран, можно, конечно, делать не полный.

Необходимо использовать стек технологий:
Языки: Javascript

Web-frontend: vue.js/react.js, Webpack, SASS

## Я немного усложнил задание, чтобы было интересно
стек технологий: webpack, react, typescript, sass, redux, redux-form

## что уже сделано:
* страницы: Входа, Регистрации, восстановления пароля и домашняя страница - роутинг
* компоненты написаны на функциональных компонентах (без использования классов), все формы строятся через HOC - компонент высшего порядка  
* весь код написан на typeScript
* формы валидируются и обернуты в redux-form

## что нужно сделать
* данные, которые я буду якобы получать от бека - будут храниться в redux
* написать компонент, который будет получать пропсой метод получения списка городов / стран и предлагать при вводе автокомплитом
* написать вывод модалки с кодом СМС и при правильном вводе переход на главную