import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-faq-section',
  standalone: true,
  imports: [],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSectionComponent { }
