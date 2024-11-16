console.log("Welcome to the Quiz!")
let lang_vocab=0, memory=0, visual=0, audio=0;
let start = Date.now(), end, diff, speed_score;
let ans=[], arr=[];
for(let i=1; i<=25; i++)
    ans[i]=0;

function q1score() {
    if (document.getElementById('q1a').checked)
        ans[1] = document.getElementById('q1a').value;
        
    else if (document.getElementById('q1b').checked)
        ans[1] = document.getElementById('q1b').value;
}

function q2score() {
    if (document.getElementById('q2a').checked)
        ans[2] = document.getElementById('q2a').value;

    else if (document.getElementById('q2b').checked)
        ans[2] = document.getElementById('q2b').value;

    else if (document.getElementById('q2c').checked)
        ans[2] = document.getElementById('q2c').value;
    
        else if (document.getElementById('q2d').checked)
        ans[2] = document.getElementById('q2d').value;
}

function q3score() {
    if (document.getElementById('q3a').checked)
        ans[3] = document.getElementById('q3a').value;

    else if (document.getElementById('q3b').checked)
        ans[3] = document.getElementById('q3b').value;
}

function q4score() {
    if (document.getElementById('q4a').checked)
        ans[4] = document.getElementById('q4a').value;

    else if (document.getElementById('q4b').checked)
        ans[4] = document.getElementById('q4b').value5
}

function q5score() {
    if (document.getElementById('q5a').checked)
        ans[5] = document.getElementById('q5a').value;

    else if (document.getElementById('q5b').checked)
        ans[5] = document.getElementById('q5b').value;

    else if (document.getElementById('q5c').checked)
        ans[5] = document.getElementById('q5c').value;
}

function q6score() {
    if (document.getElementById('q6a').checked)
        ans[6] = document.getElementById('q6a').value;

    else if (document.getElementById('q6b').checked)
        ans[6] = document.getElementById('q6b').value;
}

function q7score() {
    if (document.getElementById('q7a').checked)
        ans[7] = document.getElementById('q7a').value;

    else if (document.getElementById('q7b').checked)
        ans[7] = document.getElementById('q7b').value;
}

function q8score() {
    if (document.getElementById('q8a').checked)
        ans[8] = document.getElementById('q8a').value;

    else if (document.getElementById('q8b').checked)
        ans[8] = document.getElementById('q8b').value;
}

function q9score() {
    if (document.getElementById('q9a').checked)
        ans[9] = document.getElementById('q9a').value;

    else if (document.getElementById('q9b').checked)
        ans[9] = document.getElementById('q9b').value;
}

function q10score() {
    if (document.getElementById('q10a').checked)
        ans[10] = document.getElementById('q10a').value;

    else if (document.getElementById('q10b').checked)
        ans[10] = document.getElementById('q10b').value;

    else if (document.getElementById('q10c').checked)
        ans[10] = document.get1ElementById('q10c').value;

    else if (document.getElementById('q10d').checked)
        ans[10] = document.get1ElementById('q10d').value;
}
function q11score() {
    if (document.getElementById('q11a').checked)
        ans[11] = document.getElementById('q11a').value;

    else if (document.getElementById('q11b').checked)
        ans[11] = document.getElementById('q11b').value;
}
function q12score() {
    if (document.getElementById('q12a').checked)
        ans[12] = document.getElementById('q12a').value;

    else if (document.getElementById('q12b').checked)
        ans[12] = document.getElementById('q12b').value;
}
function q13score() {
    if (document.getElementById('q13a').checked)
        ans[13] = document.getElementById('q13a').value;

    else if (document.getElementById('q13b').checked)
        ans[13] = document.getElementById('q13b').value;
}
function q14score() {
    if (document.getElementById('q14a').checked)
        ans[14] = document.getElementById('q14a').value;

    else if (document.getElementById('q14b').checked)
        ans[14] = document.getElementById('q14b').value;

   
}


function q15score() {
    if (document.getElementById('q15a').checked)
        ans[15] = document.getElementById('q15a').value;

    else if (document.getElementById('q15b').checked)
        ans[15] = document.getElementById('q15b').value;

    else if (document.getElementById('q15c').checked)
        ans[15] = document.getElementById('q15c').value;
    
        else if (document.getElementById('q15d').checked)
        ans[15] = document.getElementById('q15d').value;
}
function q16score() {
    if (document.getElementById('q16a').checked)
        ans[16] = document.getElementById('q16a').value;

    else if (document.getElementById('q16b').checked)
        ans[16] = document.getElementById('q16b').value;
}
function q17score() {
    if (document.getElementById('q17a').checked)
        ans[17] = document.getElementById('q17a').value;

    else if (document.getElementById('q17b').checked)
        ans[17] = document.getElementById('q17b').value;

    else if (document.getElementById('q17c').checked)
        ans[17] = document.getElementById('q17c').value;
}
function q18score() {
    if (document.getElementById('q18a').checked)
        ans[18] = document.getElementById('q18a').value;

    else if (document.getElementById('q18b').checked)
        ans[18] = document.getElementById('q18b').value;
}
function q19score() {
    if (document.getElementById('q19a').checked)
        ans[19] = document.getElementById('q19a').value;

    else if (document.getElementById('q19b').checked)
        ans[19] = document.getElementById('q19b').value;

    else if (document.getElementById('q19c').checked)
        ans[19] = document.getElementById('q19c').value;
    
        else if (document.getElementById('q19d').checked)
        ans[19] = document.getElementById('q19d').value;
}

function q20score() {
    if (document.getElementById('q20a').checked)
        ans[20] = document.getElementById('q20a').value;

    else if (document.getElementById('q20b').checked)
        ans[20] = document.getElementById('q20b').value;

    else if (document.getElementById('q20c').checked)
        ans[20] = document.get1ElementById('q20c').value;

    else if (document.getElementById('q20d').checked)
        ans[20] = document.get1ElementById('q20d').value;
}
function q21score() {
    if (document.getElementById('q21a').checked)
        ans[21] = document.getElementById('q21a').value;

    else if (document.getElementById('q21b').checked)
        ans[21] = document.getElementById('q21b').value;

    else if (document.getElementById('q21c').checked)
        ans[21] = document.getElementById('q21c').value;
}
function q22score() {
    if (document.getElementById('q22a').checked)
        ans[22] = document.getElementById('q22a').value;

    else if (document.getElementById('q22b').checked)
        ans[22] = document.getElementById('q22b').value;
}
function q23score() {
    if (document.getElementById('q23a').checked)
        ans[23] = document.getElementById('q23a').value;

    else if (document.getElementById('q23b').checked)
        ans[23] = document.getElementById('q23b').value;
}

function q24score() {
    if (document.getElementById('q24a').checked)
        ans[24] = document.getElementById('q24a').value;

    else if (document.getElementById('q24b').checked)
        ans[24] = document.getElementById('q24b').value;

    else if (document.getElementById('q24c').checked)
        ans[24] = document.getElementById('q24c').value;
    
        else if (document.getElementById('q24d').checked)
        ans[24] = document.getElementById('q24d').value;
}
function q25score() {
    if (document.getElementById('q25a').checked)
        ans[25] = document.getElementById('q25a').value;

    else if (document.getElementById('q25b').checked)
        ans[25] = document.getElementById('q25b').value;

    else if (document.getElementById('q25c').checked)
        ans[25] = document.get1ElementById('q25c').value;

    else if (document.getElementById('q25d').checked)
        ans[25] = document.get1ElementById('q25d').value;
}

function roundvalue(number) {
    
    if (isNaN(number)) {
      return 0.0; 
    }
    return Math.round(number * 10) / 10;
}
function submitscore() {

    diff=0;
    speed_score=0;
    end = Date.now();
    diff =(end - start)/1000;
    surveyScore=localStorage.getItem('survey');
    
    if(diff>40 && diff<=60)
        speed_score=1;
    else if(diff>60 && diff<=70)
        speed_score=0.9;
    else if(diff>70 && diff<=80)
        speed_score=0.8;
    else if(diff>80 && diff<=90)
        speed_score=0.7;
    else if(diff>90 && diff<=100)
        speed_score=0.6;
    else if(diff>100 && diff<=110)
        speed_score=0.5;
    else if(diff>110 && diff<=120)
        speed_score=0.4;
    else if(diff>120 && diff<=150)
        speed_score=0.3;
    else if(diff>150 && diff<=180)
        speed_score=0.2;
    else if(diff>180 && diff<=200)
        speed_score=0.1;
    
    for(var i=0; i<=50; i++)
        arr[i]=Number(ans[i]);

    lang_vocab = (arr[1]+arr[2]+arr[3]+arr[4]+arr[6]+arr[8]
        +arr[10]+arr[12]+arr[20]+arr[13]
        +arr[14]+arr[16]+arr[17]+arr[21]+arr[22]
        +arr[23]+arr[25])/68;

    memory = (arr[2]+arr[7]+arr[10]+arr[13]+arr[14]+arr[17]
              +arr[20]+arr[21]+arr[23])/36;
    visual = (arr[1]+arr[3]+arr[4]+arr[8]+arr[16]+arr[22]+arr[25])/28;
    audio = (arr[5]+arr[9]+arr[11]+arr[15]+arr[18]+arr[19]+arr[24])/28;
    lang_vocab=roundvalue(lang_vocab);
    memory=roundvalue(memory);
    visual=roundvalue(visual);
    audio=roundvalue(audio);

// Assuming diff, speed_score, lang_vocab, memory, visual, audio, and surveyScore are properly initialized with appropriate values

// Display alert message
alert(`Survey Score = ${surveyScore} \n Time Taken = ${diff} seconds \n Speed Score = ${speed_score} \nLanguage Vocabulary Score = ${lang_vocab.toFixed(1)} \n Memory Score = ${memory.toFixed(1)}\nVisual Discrimination Score = ${visual.toFixed(1)}\n Audio Discrimination Score = ${audio.toFixed(1)}`);

// Store data in Local Storage
localStorage.setItem('time', diff);
localStorage.setItem('speed', speed_score);
localStorage.setItem('vocab', lang_vocab);
localStorage.setItem('memory', memory);
localStorage.setItem('visual', visual);
localStorage.setItem('audio', audio);
localStorage.setItem('survey', surveyScore);

// Redirect to 'predict.html'
window.location.href = 'predict.html';



}



