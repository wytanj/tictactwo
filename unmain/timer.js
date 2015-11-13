var direction = 1
setInterval(function () {
  var logo = document.querySelector('div')
  var distance = parseInt(logo.style.top || '0', 10)
  if (distance > 100 || distance < 0) { direction = direction * -1 }

  logo.style.top =
    logo.style.left =
      distance + direction * 10 + 'px'
}, 100)

window.requestAnimationFrame(function step () {
  var logo = document.querySelector('div')
  var topPos = parseInt(logo.style.top || '0', 10)
  var leftPos = parseInt(logo.style.left || '0', 10)
  if (topPos > 100 || topPos < 0) {direction = direction * -1}
  logo.style.top =
    topPos + direction * 10 + 'px'
  logo.style.left =
    leftPos + direction * 30 + 'px'
  window.requestAnimationFrame(step)
})
