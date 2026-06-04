import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-block',
  standalone: false,
  templateUrl: './quote-block.component.html',
  styleUrls: ['./quote-block.component.scss']
})
export class QuoteBlockComponent {
  @Input() text = '';
  @Input() cite = '';
}