

class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.index = 0;
        this.score = 0;
    }
    getQuestion() {
        return this.questions[this.index];
    }
    randomize() {
        let coppyArray = [].concat(this.getQuestion().answerOption);
        let rand = [];
        for (let i = 0; i < 4; i++) {
            let r = Math.floor(Math.random() * coppyArray.length);
            rand.push(coppyArray[r]);
            coppyArray.splice(r, 1);
        }
        return rand;
    }
    userAnswer(answer) {
        if (answer === this.getQuestion().corectAnswer) {
            this.score += this.getQuestion().points;
        }
        this.index++;
    }
    end() {
        return this.index === this.questions.length;
       
    }
}
;



const quiz = new Quiz(questions);
const quizSport = new Quiz(questionsSport);
const quizHistory = new Quiz (questionsHistory);
