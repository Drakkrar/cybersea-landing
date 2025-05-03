import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import("./views/main-view/main-view.component").then(m => m.MainViewComponent) },
    {path: 'contacto', loadComponent: () => import("./views/contact-view/contact-view.component").then(m => m.ContactViewComponent) }
];
