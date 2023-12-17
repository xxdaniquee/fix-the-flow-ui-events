let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// Frontend button

let frontend = document.querySelector("a:nth-of-type(1)")

frontend.addEventListener('click', fadeUpHandler)
frontend.addEventListener('animationend', fadeUpHandler)

function fadeUpHandler() {
  frontend.classList.toggle('fade-up')
}

// Design button

let design = document.querySelector("a:nth-of-type(2)")

design.addEventListener('click', rotateHandler)
design.addEventListener('animationend', rotateHandler)

function rotateHandler() {
  design.classList.toggle('rotate')
}

// & button

let and = document.querySelector("a:nth-of-type(3)")

and.addEventListener('mouseover', fallHandler)
and.addEventListener('animationend', fallHandler)

function fallHandler() {
  and.classList.toggle('fall')
}

// Development button

let development = document.querySelector("a:nth-of-type(4)")

development.addEventListener('mouseover', colorHandler)
development.addEventListener('animationend', colorHandler)

function colorHandler() {
  development.classList.toggle('color')
}

// Sprint 5 button

let sprint = document.querySelector("a:nth-of-type(5)")

sprint.addEventListener('mouseover', fadeInHandler)
sprint.addEventListener('animationend', fadeInHandler)

function fadeInHandler() {
  sprint.classList.toggle('fade-in')
}

// fix button

let fix = document.querySelector("a:nth-of-type(6)")

fix.addEventListener('click', shakeHandler)
fix.addEventListener('animationend', shakeHandler)

function shakeHandler() {
  fix.classList.toggle('shake')
}

// the button

let the = document.querySelector("a:nth-of-type(7)")

the.addEventListener('click', alertBtn)
the.addEventListener('animationend', alertBtn)

function alertBtn() {
  alert("Hoi");
}

// Flow button

let flow = document.querySelector("a:nth-of-type(8)")

flow.addEventListener("click", function () {
  flow.classList.toggle("changeSize");
})

// User button

let user = document.querySelector("a:nth-of-type(9)")

user.addEventListener('click', pulseHandler)
user.addEventListener('animationend', pulseHandler)

function pulseHandler() {
  user.classList.toggle('pulse')
}

// Interface button

let interface = document.querySelector("a:nth-of-type(10)")

interface.addEventListener('click', fadeOutHandler)
interface.addEventListener('animationend', fadeOutHandler)

function fadeOutHandler() {
  interface.classList.toggle('fade-out')
}