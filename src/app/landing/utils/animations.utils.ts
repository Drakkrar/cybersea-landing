import { animate, style, transition, trigger } from '@angular/animations';

export const textFadeAnimation = trigger('textFade', [
  transition('* => *', [
    style({ opacity: 1 }),
    animate('400ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' })),
    animate('10ms', style({ transform: 'translateY(10px)' })),
    animate('400ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

// You can add more text-related animations here
export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: 1 }))
  ])
]);

// Example of a different type of text animation
export const typewriterAnimation = trigger('typewriter', [
  transition(':enter', [
    style({ width: '0', overflow: 'hidden' }),
    animate('0.5s steps(40)', style({ width: '100%' }))
  ])
]);
