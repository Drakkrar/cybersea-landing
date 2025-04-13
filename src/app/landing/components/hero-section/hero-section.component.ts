import { animate, transition, trigger, style } from '@angular/animations';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval} from 'rxjs';

@Component({
  selector: 'landing-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('textFade', [
      transition('* => *', [
        style({ opacity: 1 }),
        animate('400ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' })),
        animate('10ms', style({ transform: 'translateY(10px)' })),
        animate('400ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HeroSectionComponent {

  // Example of a signal that changes every 4 seconds with an animation
  // textState = signal<'acronym' | 'fullText'>('acronym');

  // displayText = computed(() => this.textState() === 'acronym' ? 'CUGDL' : 'Centro Universitario de Guadalajara');

  // constructor(private readonly destroyRef: DestroyRef){
  //   interval(4000)
  //   .pipe(takeUntilDestroyed(this.destroyRef))
  //   .subscribe(() => {
  //     this.textState.update((state) => state === 'acronym' ? 'fullText' : 'acronym');
  //   });
  // }

}
