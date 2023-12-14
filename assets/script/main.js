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

// & button

let and = document.querySelector("a:nth-of-type(3)")

and.addEventListener('click', growHandler)
and.addEventListener('animationed', growHandler)

function growHandler() {
  and.classList.toggle('grow')
}

// Development button

let development = document.querySelector("a:nth-of-type(4)")

development.addEventListener('mouseover', colorHandler)
development.addEventListener('animationed', colorHandler)

function colorHandler() {
  development.classList.toggle('color')
}

// Sprint 5 button

let sprint = document.querySelector("a:nth-of-type(5)")

sprint.addEventListener('mouseover', fadeInHandler)
sprint.addEventListener('animationed', fadeInHandler)

function fadeInHandler() {
  sprint.classList.toggle('fade-in')
}

// fix button

let fix = document.querySelector("a:nth-of-type(6)")

fix.addEventListener('click', shakeHandler)
fix.addEventListener('animationed', shakeHandler)

function shakeHandler() {
  fix.classList.toggle('shake')
}

// the button

let the = document.querySelector("a:nth-of-type(7)")

the.addEventListener('click', alertBtn)
the.addEventListener('animationed', alertBtn)

function alertBtn() {
  alert("Hoi");
}