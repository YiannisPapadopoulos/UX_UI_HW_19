const underline = document.querySelector('.underline');
const li = document.querySelectorAll('li');
const home = li[0];

  underline.style.left = home.offsetLeft + 'px';
  underline.style.width = home.offsetWidth + 'px';

function good(e){
  console.log(e.offsetWidth)
  underline.style.left = e.offsetLeft + 'px';
  underline.style.width = e.offsetWidth + 'px';
}

li.forEach((e)=>{
  e.addEventListener('mouseenter',()=>{
    good(e);
  })
})