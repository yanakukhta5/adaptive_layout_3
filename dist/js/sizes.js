const aside = document.querySelector('#aside')
const computedAside = window.getComputedStyle(aside)
const main = document.querySelector('#main')

if(window.screen.width > 576) {
 main.style.paddingLeft = computedAside.width
 main.style.marginTop = `-${computedAside.height}`
 main.style.minHeight = computedAside.height
}

const progressbar = document.querySelector('#discVolume')
if(progressbar.value >= 75){
 const addText = document.querySelector('#addText')
 addText.style.top = '-15px'
}
