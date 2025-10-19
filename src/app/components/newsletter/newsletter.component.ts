import { CommonModule, } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class NewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email: string = '';

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Newsletter signup:', this.email);
    this.email = '';
  }

}
