import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'landing-cta-section',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaSectionComponent { }
