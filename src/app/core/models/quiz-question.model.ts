export interface QuizOption {
  letter: string;
  text: string;
  correct: boolean;
}

export interface QuizQuestion {
  tag: string;
  question: string;
  options: QuizOption[];
  feedbackCorrect: string;
  feedbackWrong: string;
}
