let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// Frontend button

let frontend = document.querySelector("a:nth-of-type(1)")

frontend.addEventListener('click', fadeUpHandler)
frontend.addEventListener('animationed', fadeUpHandler)

function fadeUpHandler() {
  frontend.classList.toggle('fade-up')
}

// Design button

let design = document.querySelector("a:nth-of-type(2)")

design.addEventListener('click', rotateHandler)
design.addEventListener('animationed', rotateHandler)

function rotateHandler() {
  design.classList.toggle('rotate')
}