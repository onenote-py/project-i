var btn = document.querySelector('#nav-btn');
var nav = document.querySelector('.nav');
var listArea = document.querySelector('.list');
var menuItems = document.querySelector('.left-col').innerHTML;
listArea.innerHTML = menuItems;

btn.addEventListener('click', function(e) {
  listArea.classList.toggle('show');
  nav.classList.toggle('show');
  btn.classList.toggle('close');
})