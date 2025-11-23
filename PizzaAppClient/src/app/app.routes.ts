import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotAllowed } from './components/not-allowed/not-allowed';
import { Registerr } from './components/register/register';
import { authGuardGuard } from './guards/auth.guard-guard';
export const routes: Routes = [
  // base path: localhost:4200
  {
    path: '',
    component: Home,
  },
  {
    path: 'not-allowed',
    component: NotAllowed
  },
  
  { //lazy loading !!! ONLY WHEN CLICKED REGISTER SHOW THE COMPONENT OTHERWISE NO!
    path: 'register',
    loadComponent: () => import('./components/register/register').then(
      (module) => module.Registerr
    ) 
  },
  { //lazy loading !!! ONLY WHEN CLICKED REGISTER SHOW THE COMPONENT OTHERWISE NO!
    path: 'login',
    loadComponent: () => import('./components/login/login').then(
      (module) => module.Login
    ) 
  },
  { //lazy loading !!! ONLY WHEN CLICKED REGISTER SHOW THE COMPONENT OTHERWISE NO!
    canActivate: [authGuardGuard],
    path: 'pizza-maker',
    loadComponent: () => import('./components/pizza-maker/pizza-maker').then(
      (module) => module.PizzaMaker
    ) 
  },
  {
    path: 'previous-orders',
    // we add the authGuard to the route, so that it will be executed before the component is loaded
    loadComponent: () =>
      import('./components/previous-order/previous-order').then(
        (module) => module.PreviousOrder
      ),
  },
  {
    path: "not-allowed", //everything else that is not listed in the routes above
    component: NotAllowed
  },
  {
    path: '**', //everything else that is not listed in the routes above
    component: NotAllowed
  },
];  