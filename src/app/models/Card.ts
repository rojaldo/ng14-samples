export class Card {
    question = '';
    correctAnswer = '';
    answers: string[] = [];

  constructor(json: any) { 
    this.question = json.question;
    this.correctAnswer = json.correct_answer;
    this.answers = json.incorrect_answers;
    this.answers.push(this.correctAnswer);
  }
}