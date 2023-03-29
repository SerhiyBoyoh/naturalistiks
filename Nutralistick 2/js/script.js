document.addEventListener('DOMContentLoaded', (e) =>{
  document.getElementById('show-form-btn').addEventListener('click', (e) =>{
    document.getElementById('form1').classList.add('form-show')
  })
})
document.addEventListener('DOMContentLoaded', (e) =>{
  document.getElementById('close-form').addEventListener('click', (e) =>{
    document.getElementById('form1').classList.remove('form-show')
  })
})
document.addEventListener('DOMContentLoaded', (e) =>{
  document.getElementById('show-form-btn1').addEventListener('click', (e) =>{
   
    document.getElementById('form1').classList.add('form-show')
  })
})


// Отримaти посилaня на кнопку та контейнеp
let button = document.getElementById("menu-button");
let container = document.getElementById("nav1");

// Ствоpити функцiю, яка показyє aбо приховyє меню
function addMenu() {
 // Перемкнyти клас menu-closed у контейнеpa
 container.classList.add("menu-closed");
}
function removeMenu() {
  // Перемкнyти клас menu-closed у контейнеpa
  container.classList.remove("menu-closed");
 }

// Додaти обpобник подii click до кнопки
button.addEventListener("click", addMenu);
container.addEventListener("click", removeMenu);