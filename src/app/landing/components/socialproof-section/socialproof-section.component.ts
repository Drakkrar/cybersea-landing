import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


@Component({
  selector: 'landing-socialproof-section',
  standalone: true,
  imports: [],
  templateUrl: './socialproof-section.component.html',
  styleUrl: './socialproof-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialproofSectionComponent implements AfterViewInit, OnDestroy {
  private swiper: Swiper | undefined;

  testimonials = [
    { text: 'En esta era digital es fundamental que todos los estudiantes, independientemente de sus habilidades tecnológicas, adquieran conocimientos sólidos sobre ciberseguridad para protegerse en un mundo cada vez más conectado.', author: 'Edna Toscano', position: 'Coordinación de Control Escolar', img: 'mtra-edna.jpg' },
    { text: 'Resulta fascinante cómo esta propuesta reconoce que la ciberseguridad va más allá de metodologías y frameworks técnicos para la protección de datos. Su enfoque integral educa a los estudiantes sobre los riesgos digitales reales que enfrentan diariamente, preparándolos para un futuro digital más seguro.', author: 'Carlos Moreno', position: 'Coordinador Licenciatura en Ciberseguridad', img: 'mtro-carlos.jpg'},
    { text: 'La integración de modelos de lenguaje avanzados que personalizan la información según el nivel de conocimiento de cada usuario es verdaderamente revolucionaria. Esta iniciativa aprovecha el máximo potencial de la inteligencia artificial para crear experiencias de aprendizaje adaptativas que hacen los cursos significativamente más accesibles y comprensibles.', author: 'Ramon Briseño', position: 'Coordinador Licenciatura en IA y Ciencia de Datos', img: 'dr-ramon.jpg' }
  ];

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  private initSwiper(): void {
    this.swiper = new Swiper('#testimonial-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.testimonials-button-next',
        prevEl: '.testimonials-button-prev',
      },
    });
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }
}
