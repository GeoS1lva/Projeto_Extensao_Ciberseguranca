import { Component } from '@angular/core';
import { QuizQuestion } from '../../../../core/models';

interface QuizState {
  selectedIndex: number | null;
  answered: boolean;
}

@Component({
  selector: 'app-quiz-section',
  standalone: false,
  templateUrl: './quiz-section.component.html',
  styleUrls: ['./quiz-section.component.scss']
})
export class QuizSectionComponent {
  questions: QuizQuestion[] = [
    {
      tag: '// pergunta 01 de 03',
      question: 'Você recebe um e-mail do seu banco pedindo para confirmar sua senha urgentemente. O que você faz?',
      options: [
        { letter: 'A', text: 'Clico no link e confirmo minha senha rapidamente', correct: false },
        { letter: 'B', text: 'Ignoro o link e acesso o banco diretamente pelo app ou site oficial', correct: true },
        { letter: 'C', text: 'Respondo o e-mail pedindo mais informações', correct: false }
      ],
      feedbackCorrect: '✓ CORRETO — Bancos nunca pedem senha por e-mail. Sempre acesse pelo canal oficial.',
      feedbackWrong: '✗ ERRADO — Isso é phishing clássico. Nunca clique em links de e-mails que pedem senha com urgência.'
    },
    {
      tag: '// pergunta 02 de 03',
      question: 'Qual dessas senhas é mais segura?',
      options: [
        { letter: 'A', text: 'MinhaS3nha!', correct: false },
        { letter: 'B', text: 'P@ssword2024', correct: false },
        { letter: 'C', text: 'xK#9mQ!vL2@nP7&wR', correct: true }
      ],
      feedbackCorrect: '✓ CORRETO — Longa, aleatória, sem palavras reconhecíveis. Use um gerenciador de senhas para criar e lembrar senhas assim.',
      feedbackWrong: '✗ ERRADO — Padrões como palavras + números + símbolos são previsíveis. A opção C é genuinamente aleatória e muito mais resistente.'
    },
    {
      tag: '// pergunta 03 de 03',
      question: 'O que significa MFA (Autenticação Multifator)?',
      options: [
        { letter: 'A', text: 'Usar senhas diferentes em cada site', correct: false },
        { letter: 'B', text: 'Exigir dois ou mais fatores para confirmar identidade (senha + código)', correct: true },
        { letter: 'C', text: 'Um tipo de antivírus mais avançado', correct: false }
      ],
      feedbackCorrect: '✓ CORRETO — MFA combina algo que você sabe (senha) com algo que você tem (celular) ou é (biometria), tornando invasões muito mais difíceis.',
      feedbackWrong: '✗ ERRADO — MFA significa usar múltiplos fatores de verificação: normalmente senha + código gerado no celular ou biometria.'
    }
  ];

  states: QuizState[] = this.questions.map(() => ({ selectedIndex: null, answered: false }));

  answer(questionIndex: number, optionIndex: number): void {
    if (this.states[questionIndex].answered) return;
    this.states[questionIndex].selectedIndex = optionIndex;
    this.states[questionIndex].answered = true;
  }

  isCorrect(questionIndex: number): boolean {
    const idx = this.states[questionIndex].selectedIndex;
    if (idx === null) return false;
    return this.questions[questionIndex].options[idx].correct;
  }

  getOptionClass(questionIndex: number, optionIndex: number): string {
    if (!this.states[questionIndex].answered) return '';
    if (this.states[questionIndex].selectedIndex !== optionIndex) return '';
    return this.questions[questionIndex].options[optionIndex].correct ? 'correct' : 'wrong';
  }
}
