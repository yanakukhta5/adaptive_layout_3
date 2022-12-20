const overlay = document.querySelector('#overlay')
const body = document.body
const menu = document.querySelector('#aside')

function menuActivate(){
 let swipeStart, swipe
 const menuLinks = Array.from(document.querySelectorAll('.aside-link'))
 const menuWidth = Number(computedAside.width.slice(0, -2))

 menuLinks.forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('aside__active')
  body.classList.remove('unactive')
 }))

 body.addEventListener('touchstart', (event) => {
  swipeStart = parseInt(event.changedTouches[0].pageX)
 }, false)
 
 body.addEventListener('touchmove', (event) => {
  swipe = swipeStart - parseInt(event.changedTouches[0].pageX)
 }, false)
 
 body.addEventListener('touchend', (event) => {
  if(swipeStart > menuWidth && menu.className.split(' ').includes('aside__active')){
   menu.classList.remove('aside__active')
   body.classList.remove('unactive')
   }
  if(swipe > 50 || (event.changedTouches[0].clientX > computedAside.width && menu.className.split(' ').includes('aside__active'))){
   menu.classList.remove('aside__active')
   body.classList.remove('unactive')
  }
  if(swipe < 0 && Math.abs(swipe) > 100 ){
   menu.classList.add('aside__active')
   body.classList.add('unactive')
  }
  swipe = 0
  swipeStart = 0 
 }, false)
}

function bodyShow(){
 overlay.classList.remove('overlay__show')
 body.classList.remove('unactive')
 menuActivate()
}

function showHowToOpenMenu(){
 overlay.classList.add('overlay__show')
 const button = document.querySelector('#overlayButton')
 button.addEventListener('click', bodyShow)
 body.classList.add('unactive')
}

if(window.screen.width < 576) setTimeout(showHowToOpenMenu, 0)