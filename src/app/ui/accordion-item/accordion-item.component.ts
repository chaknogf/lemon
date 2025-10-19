import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  standalone: true
})
export class AccordionItemComponent {
  @Input() title = '';
  open = false;

  toggle() {
    this.open = !this.open;
  }
}
