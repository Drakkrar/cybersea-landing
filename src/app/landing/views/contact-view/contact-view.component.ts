import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CtaSectionComponent } from "../../components/cta-section/cta-section.component";

@Component({
  selector: 'landing-contact-view',
  standalone: true,
  imports: [CtaSectionComponent],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactViewComponent { }
