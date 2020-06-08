class Timer {
    constructor(durationInput, startBtn, pauseBtn, callbacks) {
        this.durationInput = durationInput
        this.startBtn = startBtn
        this.pauseBtn = pauseBtn

        if (callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }

        this.startBtn.addEventListener('click', this.start)
        this.pauseBtn.addEventListener('click', this.pause)
    }

    start = () => {
        this.onStart && this.onStart()
        this.tick()
        this.interval = setInterval(this.tick, 1000)
    }

    pause = () => {
        this.onComplete && this.onComplete()
        clearInterval(this.interval)
    }

    tick = () => {
        if (this.timerRemaining <= 0) {
            this.pause()
        }
        else {
            this.timerRemaining -= 1
            this.onTick && this.onTick()
        }

    }

    get timerRemaining() {
        return parseFloat(this.durationInput.value)
    }

    set timerRemaining(time) {
        this.durationInput.value = time
    }
}