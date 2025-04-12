import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'landing-main-view',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent { }
