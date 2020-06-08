const durationInput = document.querySelector('#duration')
const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')

const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart() {
        console.log('Start')
    },
    onTick() {
        console.log('Tick')
    },
    onComplete() {
        console.log('Complete')
    }
})