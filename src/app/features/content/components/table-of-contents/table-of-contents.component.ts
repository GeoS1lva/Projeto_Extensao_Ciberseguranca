import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface TocItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-table-of-contents',
  standalone: false,
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss']
})
export class TableOfContentsComponent {
  @Input() items: TocItem[] = [];
  @Input() activeId = '';
  @Output() itemSelected = new EventEmitter<string>();

  selectItem(id: string): void {
    this.itemSelected.emit(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
