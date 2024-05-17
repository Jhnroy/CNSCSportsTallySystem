$(document).ready(function() {
    let timerInterval;
    let timerRunning = false;
    let minutes = 10;
    let seconds = 0;
    let currentQuarter = 1;

    const minutesElement = $("#minutes");
    const secondsElement = $("#seconds");
    const quarterElement = $("#current-quarter");

    function updateTimerDisplay() {
        minutesElement.text(minutes < 10 ? "0" + minutes : minutes);
        secondsElement.text(seconds < 10 ? "0" + seconds : seconds);
    }

    function startTimer() {
        timerInterval = setInterval(function() {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timerInterval);
                    timerRunning = false;
                    return;
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
            updateTimerDisplay();
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        timerRunning = false;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerRunning = false;
        minutes = 10;
        seconds = 0;
        updateTimerDisplay();
    }

    $("#start-btn").click(function() {
        if (!timerRunning) {
            startTimer();
            timerRunning = true;
        }
    });

    $("#pause-btn").click(function() {
        if (timerRunning) {
            pauseTimer();
        }
    });

    $("#reset-btn").click(function() {
        resetTimer();
    });
});