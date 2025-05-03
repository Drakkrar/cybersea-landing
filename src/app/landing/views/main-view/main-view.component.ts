import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { InformationSectionComponent } from "../../components/information-section/information-section.component";
import { BenefitsSectionComponent } from "../../components/benefits-section/benefits-section.component";
import { SocialproofSectionComponent } from "../../components/socialproof-section/socialproof-section.component";

@Component({
  selector: 'landing-main-view',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, HeroSectionComponent, InformationSectionComponent, BenefitsSectionComponent, SocialproofSectionComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent { }
