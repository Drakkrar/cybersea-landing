import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent { }
