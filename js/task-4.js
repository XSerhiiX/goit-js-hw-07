// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Log in</button>
// </form>

// 1. відправлення форми form.login-form повинна відбуватися за подією submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// 5. При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (
    loginForm.elements.email.value.trim() === '' ||
    loginForm.elements.password.value.trim() === ''
  ) {
    alert('All form fields must be filled in');
  } else {
    const loginFormData = {
      email: loginForm.elements.email.value,
      password: loginForm.elements.password.value,
    };

    console.log(loginFormData);

    loginForm.reset();
  }
});