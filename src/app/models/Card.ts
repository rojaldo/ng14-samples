export class Card {
    question = '';
    correctAnswer = '';
    answers: string[] = [];
    answered = false;
    isRightAnsweres = false;
    response = '';

  constructor(json: any) { 
    this.question = json.question;
    this.correctAnswer = json.correct_answer;
    this.answers = json.incorrect_answers;
    this.answers.push(this.correctAnswer);
    this.shuffleAnswers();
  }

  shuffleAnswers() {
    this.answers.sort(() => Math.random() - 0.5);
  }
}