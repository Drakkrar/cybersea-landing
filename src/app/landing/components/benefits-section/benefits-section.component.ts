import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-benefits-section',
  standalone: true,
  imports: [],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitsSectionComponent { }
