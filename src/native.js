import './style.css';

const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const changeTheme = document.querySelector('#theme')

let state = 0;

function render() {
    counter.textContent = state.toString();
}

addBtn.addEventListener('click', () => {
    state++
    render()
})
subBtn.addEventListener('click', () => {
    state--
    render()
})

asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        state++
        render()
    }, 1500)
})

changeTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

render()