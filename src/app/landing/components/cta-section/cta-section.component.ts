import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-cta-section',
  standalone: true,
  imports: [],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaSectionComponent { }
