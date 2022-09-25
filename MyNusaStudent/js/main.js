// header sticky
let header = document.querySelector('header');
let btn = document.querySelector('.btn');
window.addEventListener('scroll',() => {
  header.classList.toggle('sticky',scrollY > 0);
  btn.classList.toggle('top', scrollY > 0);
});
// button top
btn.onclick = toTop;
function toTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// hamburger
let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',() => {
  let nav = document.querySelector('nav');
  nav.classList.toggle('navSlide');
  hamburger.classList.toggle('hamburgerActive');
})
// not action button
let notActions = document.querySelectorAll('.notAction');
notActions.forEach((btn_not_action) => {
  btn_not_action.addEventListener('click',(e) => {
    e.preventDefault()
    window.alert('Maaf, tombol ini masih belum bisa digunakan.')
  });
});

let li = document.querySelectorAll('li');

li.forEach((item) => {
  item.addEventListener('click',() => {
    li  = document.querySelector('.active').classList.remove('active');
    item.classList.add('active');
  })
})