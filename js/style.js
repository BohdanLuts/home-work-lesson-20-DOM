const butn1 = document.querySelector("button");
// 1) Після натискання кнопки змінити текст самої кнопки (див. textContent).

// 2) При натисканні на кнопку змінюйте її колір.
butn1.onclick = function () {
  butn1.textContent = "Text after CLICK";
  butn1.style.backgroundColor = "red";
};

// 3) Відобразити картинку. Зробити так, щоб при появі сторінки відображалася одна картинка, а при наведенні миші на неї відображалася інша.
const img1 = document.querySelector("img");
img1.addEventListener("mouseover", imgMouseover);
function imgMouseover() {
  img1.src =
    "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
}
img1.addEventListener("mouseout", imgMouseout);
function imgMouseout() {
  img1.src =
    "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
}
// 4) Додати слайду опис (description).
const description = document.querySelector(".description");
description.onclick = function () {
  description.textContent = prompt("Введіть підпис до фото");
};

// *Advanced:
// Доробити анімацію появи наступного кадру в слайдері або додати з боків від основної картинки попередню та наступну за схемою.
// Приклад розташування 3-х картинок у слайдері у прикріпленому файлі.
