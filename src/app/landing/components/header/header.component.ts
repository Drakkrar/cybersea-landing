import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'landing-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('layoutTopbar') topbar: ElementRef | undefined;

  ngAfterViewInit() {
    if (this.topbar) {
      const handleScroll = () => {
        this.topbar!.nativeElement.setAttribute(
          'data-at-top',
          window.scrollY < 30 ? 'true' : 'false'
        );
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }
  }

  ngOnDestroy() {
    // Clean up event listener
    window.removeEventListener('scroll', this.handleScroll);
  }

  private readonly handleScroll = () => {
    if (this.topbar) {
      this.topbar.nativeElement.setAttribute(
        'data-at-top',
        window.scrollY < 30 ? 'true' : 'false'
      );
    }
  };

}
