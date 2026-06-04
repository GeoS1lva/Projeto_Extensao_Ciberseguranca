import { Component, OnInit, HostListener } from '@angular/core';
import { TocItem } from './components/table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  activeSection = 'definicao';

  tocItems: TocItem[] = [
    { id: 'definicao', label: '01 — definição' },
    { id: 'pilares', label: '02 — pilares CIA' },
    { id: 'ameacas-reais', label: '03 — ameaças reais' },
    { id: 'protecao', label: '04 — como se proteger' },
    { id: 'camadas', label: '05 — camadas de defesa' },
    { id: 'quiz', label: '06 — teste seu conhecimento' },
  ];

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    const sectionIds = this.tocItems.map(i => i.id);
    for (const id of [...sectionIds].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        this.activeSection = id;
        break;
      }
    }
  }

  onTocSelected(id: string): void {
    this.activeSection = id;
  }
}
