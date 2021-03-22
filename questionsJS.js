

class Question {
    constructor(text, answerOption, corectAnswer, points, category) {
        this.text = text;
        this.answerOption = answerOption;
        this.corectAnswer = corectAnswer;
        this.points = points;
        this.category = category;
    }
    ;
}
;


const questions = [
    new Question("GLAVNI GRAD SRBIJE JE?", ["SARAJEVO", "ZAGREB", "PODGORICA", "BEOGRAD"], "BEOGRAD", 5, "GEOGRAFIJA"),
    new Question("NAJVIŠI VRH NA SVETU JE?", ["KILIMANDZARO", "MEK KINLI", "MONT EVEREST", "AKONKAGVA"], "MONT EVEREST", 5, "GEOGRAFIJA"),
    new Question("A NAJVEĆA PUSTINJA JE?", ["SAHARA", "GOBI", "ATAKAMA", "KALAHARI"], "SAHARA", 5, "GEOGRAFIJA"),
    new Question("NAJDUŽA REKA NA SVETU JE?", ["DUNAV", "VOLGA", "AMAZON", "KONGO"], "AMAZON", 5, "GEOGRAFIJA"),
    new Question("A NAJVEĆE JEZERO JE?", ["IRI", "BAJKAL", "VIKTORIJINO", "KASPIJSKO"], "KASPIJSKO", 5, "GEOGRAFIJA")


];

const questionsSport = [
    new Question("NAJBOLJI TENISER JE?", ["NOVAK ĐOKOVIĆ", "FEDERER", "RAFAEL NADAL", "ZVEREV"], "NOVAK ĐOKOVIĆ", 5, "SPORT"),
    new Question("SRPSKI CRNO BELI KLUB JE?", ["NAPREDAK", "JUVENTUS", "PARTIZAN", "CRVENA ZVEZDA"], "PARTIZAN", 5, "SPORT"),
    new Question("NAJBOLJA U VATERPOLU JE?", ["SRBIJA", "HRVATSKA", "AMERIKA", "CRNA GORA"], "SRBIJA", 5, "SPORT"),
    new Question("ZEMLJA KOSARKE JE?", ["SRBIJA", "RUSIJA", "LITVANIJA", "ŠPANIJA"], "SRBIJA", 5, "SPORT"),
    new Question("NAJGORA U FUDBALU JE?", ["SRBIJA", "BRAZIL", "ENGLESKA", "ITALIJA"], "SRBIJA", 5, "SPORT")


];

const questionsHistory = [
    new Question("PRAVO IME SVETOG SAVE JE?", ["RASTKO NEMANJIĆ", "VUKAN NEMANJIĆ", "STEFAN NEMANJIĆ", "DUŠAN NEMANJIĆ"], "RASTKO NEMANJIĆ", 5, "ISTORIJA"),
    new Question("REFORMATOR JEZIKA JE?", ["VUK KARADŽIĆ", "MILAN VUJAKLIJA", "JOVAN CVIJIĆ", "JERNEJ KOPITAR"], "VUK KARADŽIĆ", 5, "ISTORIJA"),
    new Question("BOJ NA KOSOVU BIO JE?", ["1371", "1389", "1839", "1372"], "1389", 5, "ISTORIJA"),
    new Question("KROMPIR JE U SRBIJU DONEO?", ["DOSITEJ", "DIVAC", "MARKO POLO", "KOLUMBO"], "DOSITEJ", 5, "ISTORIJA"),
    new Question("PRVI SRPSKI USTANAK BIO JE?", ["1804", "1805", "1814", "1815"], "1804", 5, "ISTORIJA")


];