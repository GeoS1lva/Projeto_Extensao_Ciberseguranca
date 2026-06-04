import { Component } from '@angular/core';
import { ChecklistItem } from '../../../../core/models';
import { CHECKLIST_ITEMS } from '../../../../core/data/protection.data';

@Component({
  selector: 'app-security-checklist',
  standalone: false,
  templateUrl: './security-checklist.component.html',
  styleUrls: ['./security-checklist.component.scss']
})
export class SecurityChecklistComponent {
  items: ChecklistItem[] = CHECKLIST_ITEMS.map(i => ({ ...i }));

  get percent(): number {
    return Math.round((this.doneCount / this.items.length) * 100);
  }

  get doneCount(): number {
    return this.items.filter(i => i.done).length;
  }

  get barColor(): string {
    if (this.percent < 40) return '#FF4A6A';
    if (this.percent < 70) return '#FFB840';
    return '#00FFB4';
  }

  get message(): string {
    if (this.percent === 0)   return '// COMECE MARCANDO O QUE JÁ FAZ';
    if (this.percent < 40)    return '// NÍVEL BÁSICO — IMPLANTE MFA E GERENCIADOR DE SENHAS PRIMEIRO';
    if (this.percent < 70)    return '// BOM PROGRESSO — ADICIONE BACKUP E VPN PARA COBRIR MAIS VETORES';
    if (this.percent < 100)   return '// PROTEÇÃO AVANÇADA — VOCÊ ESTÁ ACIMA DA MÉDIA';
    return '// EXCELENTE — VOCÊ É UM ALVO DIFÍCIL PARA ATACANTES';
  }

  get messageColor(): string {
    if (this.percent < 40) return '#6A2A2A';
    if (this.percent < 70) return '#6A5020';
    return '#2A6A50';
  }

  toggle(item: ChecklistItem): void {
    item.done = !item.done;
  }
}