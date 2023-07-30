// hides loading and answer until button is pressed
let loading = document.getElementById('loading')
let answer = document.getElementById('answer')

function noShow() {
    loading.style.display = 'none'
    answer.style.display = 'none'
}

document.onload = noShow()


// allowing you to input text into textbox
const userQuestion = document.getElementById('question')

// when user presses enter, shows loading text
userQuestion.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        loading.style.display = '';
    }
});

// shows answer after allotted time
userQuestion.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        setTimeout(() => {
            
            answer.style.display = ''
        }, 2500)
    }
});

document.getElementById('answer').innerHTML = 44



