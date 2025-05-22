# CyberSea - Plataforma Educativa Interactiva de Ciberseguridad
CyberSea es una plataforma web interactiva diseñada para educar a los usuarios sobre ciberseguridad a través de experiencias de aprendizaje personalizadas. La plataforma busca ayudar a los estudiantes a navegar por los riesgos digitales y protegerse contra amenazas cibernéticas como el ciberacoso, phishing y grooming.

## 🌊 Acerca del Proyecto
CyberSea proporciona un entorno de aprendizaje interactivo donde los usuarios pueden mejorar sus habilidades de ciberseguridad a través de:

- Rutas de aprendizaje personalizadas adaptadas a los niveles de conocimiento individuales
- Módulos interactivos enfocados en amenazas específicas de ciberseguridad
- Mecánicas de aprendizaje basadas en juegos para aumentar la participación
- Sistemas de logros para seguir y recompensar el progreso
- La plataforma está dirigida principalmente a estudiantes del Centro Universitario de Guadalajara (CUGDL), pero puede ser valiosa para cualquier usuario que busque mejorar sus conocimientos sobre seguridad digital.
 
## 🚀 Características
**Aprendizaje Personalizado:** Contenido adaptado al nivel de conocimiento del usuario mediante aprendizaje automático.

**Módulos Especializados:** Contenido enfocado en ciberacoso, malware y seguridad en redes sociales.

**Sistema de Logros:** Cuestionarios interactivos y seguimiento del progreso.

**Aprendizaje Basado en Juegos:** Juegos educativos que hacen que aprender ciberseguridad sea entretenido.

## 💻 Stack Tecnológico

**Frontend:** Angular 18

**Estilos:** Tailwind CSS con componentes DaisyUI

**Componentes UI:** Swiper para carruseles, Iconify para iconos

**Despliegue:** Azure Static Web Apps

## 📁 Estructura del Proyecto
```
src/
  app/
    landing/
      components/           # Secciones de la página de inicio
        header/
        hero-section/
        benefits-section/
        information-section/
        socialproof-section/
        faq-section/
        cta-section/
        aboutus-section/
        footer/
      utils/                # Funciones de utilidad y helpers
      views/                # Vistas de páginas
    app.component.*         # Archivos del componente raíz
    app.config.ts           # Configuración de la aplicación
    app.routes.ts           # Definiciones de rutas
  index.html                # Punto de entrada HTML principal
  main.ts                   # Punto de entrada de Angular
  styles.css                # Estilos globales
public/                     # Activos estáticos
  images/                   # Imágenes
  favicon.ico               # Favicon del sitio
```
### ⚙️ Configuración e Instalación
- Clonar el repositorio
```sh
git clone https://github.com/drakkrar/cybersea-landing.git
cd cybersea-landing
```
- Instalar dependencias
```sh
npm install
```
- Ejecutar servidor de desarrollo
```sh
npm start
```
- La aplicación estará disponible en `http://localhost:4200/`

## 📝 Scripts Disponibles
```sh
npm start  # Inicia el servidor de desarrollo
npm run build # Compila la aplicación para producción
npm test # Ejecuta pruebas unitarias
npm run watch # Compila la aplicación y observa los cambios
```

## 🚢 Despliegue
El proyecto está configurado para desplegarse en Azure Static Web Apps. El flujo de trabajo de GitHub en [azure-static-web-apps-lively-bush-0c2224710.yml](.github\workflows\azure-static-web-apps-lively-bush-0c2224710.yml) maneja el proceso de CI/CD.


## ✨ Recomendaciones para Desarrollo Futuro
- [] Completar y habilitar las secciones actualmente comentadas (FAQ, CTA, About Us)
- [] Agregar capturas de pantalla reales de la aplicación en el teléfono de maqueta de la sección hero
- [] Implementar autenticación de usuarios y gestión de perfiles
- [] Desarrollar los módulos de aprendizaje interactivo
- [] Añadir análisis para seguir la participación y progreso del usuario
- [] Considerar la implementación de una API backend para contenido dinámico y datos de usuario
- [] Añadir soporte multilingüe para una mayor accesibilidad

## 🙏 Agradecimientos
- [Angular](https://angular.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Swiper](https://swiperjs.com/)
- [Iconify](https://iconify.design/)
© 2025 CyberSea - Centro Universitario de Guadalajara (CUGDL)
