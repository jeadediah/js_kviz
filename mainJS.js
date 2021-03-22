/*Primenom OOP, napraviti kviz sa kategorijama, tako da korisnik prvo bira
 kategoriju kviza, pa tek onda rešava kviz (
 npr: korisnik želi samo sportska pitanja) ******************************/

/*window.addEventListener("load", run);*/

let h1 = document.querySelector("h1");
let option = document.querySelectorAll(".option");
let category = document.querySelectorAll(".category");

for (var i = 0; i < option.length; i++) {
    option[i].style.display = "none";
}
category[0].addEventListener("click", function () {
    run(quiz);
    for (var i = 0; i < option.length; i++) {
        option[i].style.display = "block";
    }
});
category[1].addEventListener("click", function () {
    run(quizSport);
    for (var i = 0; i < option.length; i++) {
        option[i].style.display = "block";
    }
});
category[2].addEventListener("click", function () {
    run(quizHistory);
    for (var i = 0; i < option.length; i++) {
        option[i].style.display = "block";
    }
});
/*
 function run() {
 if (!quiz.end()) {
 let qurentQuestion = quiz.getQuestion();
 h1.innerHTML = qurentQuestion.text;
 let rand = quiz.randomize();
 for (let i = 0; i < option.length; i++) {
 option[i].innerHTML = rand[i];
 option[i].onclick = function () {
 quiz.userAnswer(this.innerHTML);
 run();
 };
 }
 } else {
 alert(`KRAJ
 
 
 VAŠ REZULTAT JE ${quiz.score} POENA
 OD MAXIMALNIH 25 POENA`);
 }
 }*/

function run(arg) {
    if (!arg.end()) {
        let qurentQuestion = arg.getQuestion();
        h1.innerHTML = qurentQuestion.text;
        let rand = arg.randomize();
        for (let i = 0; i < option.length; i++) {
            option[i].innerHTML = rand[i];
            option[i].onclick = function () {
                arg.userAnswer(this.innerHTML);
                run(arg);
            };
        }
    } else {
        for (var i = 0; i < option.length; i++) {
            option[i].style.display = "none";
        }
        arg.index = 0;
         h1.innerHTML = "";
        alert(`KRAJ
        
        
VAŠ REZULTAT JE ${arg.score} POENA
OD MAXIMALNIH 25 POENA`);
    }
}
;

