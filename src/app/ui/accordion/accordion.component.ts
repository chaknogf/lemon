import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  standalone: true
})
export class AccordionComponent {
  @Input() multi = false; // Permite abrir varios items a la vez
}
