import { Component, OnInit } from '@angular/core';
import { PasswordOptions, PasswordStrength } from '../../../../core/models';

@Component({
  selector: 'app-password-generator',
  standalone: false,
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {
  password = '';
  toast = '';
  toastTimer: ReturnType<typeof setTimeout> | null = null;

  options: PasswordOptions = {
    length: 16,
    quantity: 1,
    upper: true,
    lower: true,
    num: true,
    sym: true,
    noAmb: false,
  };

  strength: PasswordStrength = { label: '—', color: '#3A5570', percent: 0 };

  pwTips = [
    { icon: 'ti-shield-check', title: 'Por que 16+ chars?', desc: 'Uma senha de 16 caracteres aleatória levaria bilhões de anos para ser quebrada por força bruta, mesmo com hardware dedicado.' },
    { icon: 'ti-lock',         title: 'Onde guardar?',      desc: 'Use um gerenciador como Bitwarden (gratuito e open source) ou 1Password. Nunca salve senhas no navegador sem proteção extra.' },
    { icon: 'ti-refresh',      title: 'Quando trocar?',     desc: 'Troque imediatamente se um serviço sofreu vazamento. Verifique seu e-mail em haveibeenpwned.com regularmente.' },
  ];

  ngOnInit(): void {
    this.generate();
  }

  generate(): void {
    const chars = this.buildCharset();
    const passwords: string[] = [];
    for (let i = 0; i < this.options.quantity; i++) {
      passwords.push(this.generateSingle(chars, this.options.length));
    }
    this.password = passwords.join('\n');
    this.strength = this.calcStrength(passwords[0]);
    this.toast = '';
  }

  toggleOption(key: keyof Pick<PasswordOptions, 'upper' | 'lower' | 'num' | 'sym' | 'noAmb'>): void {
    const activeCount = (['upper', 'lower', 'num', 'sym'] as const).filter(k => this.options[k]).length;
    if (key !== 'noAmb' && this.options[key] && activeCount <= 1) return;
    this.options[key] = !this.options[key];
    this.generate();
  }

  copy(): void {
    if (!this.password || this.password === 'Clique em gerar senha') return;
    navigator.clipboard.writeText(this.password).then(() => this.showToast());
  }

  private buildCharset(): string {
    let u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let l = 'abcdefghijklmnopqrstuvwxyz';
    let n = '0123456789';
    const s = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (this.options.noAmb) { u = u.replace(/[OI]/g, ''); l = l.replace(/l/g, ''); n = n.replace(/0/g, ''); }
    let chars = '';
    if (this.options.upper) chars += u;
    if (this.options.lower) chars += l;
    if (this.options.num)   chars += n;
    if (this.options.sym)   chars += s;
    return chars || l;
  }

  private generateSingle(chars: string, length: number): string {
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    return Array.from(arr).map(v => chars[v % chars.length]).join('');
  }

  private calcStrength(pw: string): PasswordStrength {
    let score = 0;
    if (pw.length >= 8)  score++;
    if (pw.length >= 12) score++;
    if (pw.length >= 16) score++;
    if (pw.length >= 24) score++;
    if (/[A-Z]/.test(pw))       score++;
    if (/[a-z]/.test(pw))       score++;
    if (/[0-9]/.test(pw))       score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    const percent = Math.round((score / 8) * 100);
    if (score <= 3) return { label: 'FRACA',    color: '#FF4A6A', percent };
    if (score <= 5) return { label: 'MÉDIA',    color: '#FFB840', percent };
    if (score <= 6) return { label: 'BOA',      color: '#0080FF', percent };
    return             { label: 'EXCELENTE', color: '#00FFB4', percent };
  }

  private showToast(): void {
    this.toast = '// SENHA COPIADA PARA A ÁREA DE TRANSFERÊNCIA';
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => { this.toast = ''; }, 2500);
  }
}