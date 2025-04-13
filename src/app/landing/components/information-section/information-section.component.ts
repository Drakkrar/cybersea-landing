import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-information-section',
  standalone: true,
  imports: [],
  templateUrl: './information-section.component.html',
  styleUrl: './information-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationSectionComponent { }
