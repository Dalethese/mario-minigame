const mario = document.querySelector('.mario-walking')
const pipe = document.querySelector('.pipe')
const retry = document.querySelector('.retry')

const jump = () => {
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  if(pipePosition <= 78 && pipePosition > -13 && marioPosition < 108) {

    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    
    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`
    mario.src = './images/lose.png'
    mario.style.width = '60px'
    mario.style.marginLeft = '20px'

    retry.style.display = 'flex'
    retry.style.animation = 'retry-anim .5s ease-in-out forwards'

    clearInterval(loop)
  }
}, 10)

document.addEventListener('keydown', jump)
document.addEventListener('touchstart', jump)
document.addEventListener('click', jump)