const messages = ['message1', 'message2', 'message3', 'message4']
const types = ['type1', 'type2', 'type3']
const showBtn = document.getElementById('btn')
const toasts = document.querySelector('.toasts')

function makeRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
function makerandomType() {
  return types[Math.floor(Math.random() * types.length)]
}

showBtn.addEventListener('click', () => {
  const toast = document.createElement('div')
  toast.classList.add('toast')
  toasts.appendChild(toast)
  toast.textContent = makeRandomMessage()
  toast.classList.add(`${makerandomType()}`)
  setTimeout(() => {
    toast.remove()
  }, 3000)
})
