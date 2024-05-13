// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector('h2');
  console.log(`Category: ${categoryTitle.textContent}`);
  const categoryElements = category.querySelectorAll('li');
  console.log(`Elements: ${categoryElements.length}`);
});
