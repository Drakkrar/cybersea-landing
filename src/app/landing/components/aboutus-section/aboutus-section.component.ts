import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-aboutus-section',
  standalone: true,
  imports: [],
  templateUrl: './aboutus-section.component.html',
  styleUrl: './aboutus-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutusSectionComponent { }
