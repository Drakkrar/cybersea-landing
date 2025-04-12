import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainViewComponent } from "./views/main-view/main-view.component";

@Component({
  selector: 'landing',
  standalone: true,
  imports: [MainViewComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent { }
