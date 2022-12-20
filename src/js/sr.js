const circles = Array.from(document.querySelectorAll('.sr-progress__color'))

function getLength(circle){
 const radius = circle.r.baseVal.value
 const length = 2 * Math.PI * radius
 return length
}

function showTooltip(evt, text) {
 let tooltip = document.getElementById("tooltip");
 tooltip.innerHTML = text;
 tooltip.style.display = "block";
 tooltip.style.left =  evt.pageX - 45  + 'px';
 tooltip.style.top = evt.pageY - 35 + 'px';
}

function hideTooltip() {
 var tooltip = document.getElementById("tooltip");
 tooltip.style.display = "none";
}

circles.forEach(circle => {
 const length = getLength(circle)
 circle.style.strokeDashoffset = length
 circle.style.strokeDasharray = `${length} ${length}`
 circle.addEventListener('mousemove', (event) => {
  showTooltip(event, circle.dataset.text)
 })
 circle.addEventListener('mouseout', () => {
  hideTooltip()
 })
})

function srFill(){
 circles.forEach(circle => {
  const persentage = circle.dataset.persentage
  const length = getLength(circle)
  const offset = length - persentage / 100 * length
  circle.style.strokeDashoffset = offset
 })
}
setTimeout(srFill, 500)