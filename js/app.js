'use strict'

var gQuests;
var gCurrIdx;

init();

function init() {

    var elBtn = document.querySelector('.restart');
    elBtn.style.display = 'none';
    gQuests = createQuests();
    gCurrIdx = 0;

    renderQuest();
}


function renderQuest() {
    var elImg = document.querySelector('img');
    elImg.src = gQuests[gCurrIdx].img

    var elAns1 = document.querySelector('.opt1');
    elAns1.innerHTML = gQuests[gCurrIdx].answers[0];

    var elAns2 = document.querySelector('.opt2');
    elAns2.innerHTML = gQuests[gCurrIdx].answers[1];
}

function checkAnswer(idx) {

    if(+idx === gQuests[gCurrIdx].rightIdx){
        gCurrIdx++;
        if (gCurrIdx < 3) {
            renderQuest();
        } else {
            var elMsg = document.querySelector('.win');
            elMsg.innerText = 'You win!!! play again?'
            var elBtn = document.querySelector('.restart');
            elBtn.style.display = 'block';
        }   
    }
}

function createQuests() {
    var Quests = [
        { img: 'img/ed.jpg', answers: ['zaza', 'ed'], rightIdx: 1 },
        { img: 'img/gaston.jpg', answers: ['gaston', 'brian'], rightIdx: 0 },
        { img: 'img/mushu.jpg', answers: ['Luki', 'mushu'], rightIdx: 1 }
    ];

    return Quests;
}