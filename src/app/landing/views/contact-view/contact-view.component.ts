import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-contact-view',
  standalone: true,
  imports: [],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactViewComponent { }
