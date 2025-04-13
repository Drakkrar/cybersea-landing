import { ChangeDetectionStrategy, Component, computed, DestroyRef, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval} from 'rxjs';
import { textFadeAnimation } from '../../utils/animations.utils';

@Component({
  selector: 'landing-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [textFadeAnimation]
})
export class HeroSectionComponent {

  textState = signal<'fun' | 'interactive'>('fun');

  displayText = computed(() => this.textState() === 'fun' ? 'Interactiva' : 'Divertida');

  constructor(private readonly destroyRef: DestroyRef){
    this.startAnimate(this.destroyRef);
  }

  startAnimate(ref: DestroyRef) {
    interval(15000)
    .pipe(takeUntilDestroyed(ref))
    .subscribe(() => {
      this.textState.update((state) => state === 'fun' ? 'interactive' : 'fun');
    });
  }
}
