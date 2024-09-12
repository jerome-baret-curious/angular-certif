import { Routes } from '@angular/router';
import {MyrListComponent} from "../component/myr-list.component";
import {MyrDetailComponent} from "../component/myr-detail.component";
import {PageNotFoundComponent} from "../component/page-not-found.component";
import {myrChildGuard, myrDeGuard, myrGuard, myrMatchGuard} from "./myr.guards";
import {inject} from "@angular/core";
import {RightService} from "../service/right.service";
import {MyrSubComponent} from "../component/myr-sub.component";

// tested in order
export const routes: Routes = [
  {
    path: 'myr/:id',
    component: MyrDetailComponent,
    canActivate: [myrGuard, () => inject(RightService).isAllowed()],
    canDeactivate: [myrDeGuard, (component: MyrDetailComponent) => component.okToGoOut()],
    canActivateChild: [myrChildGuard],// called every time to access a child
    children: [{
      path: 'sub',
      component: MyrSubComponent,
    }]
  },
  {
    path: 'myrs',
    component: MyrListComponent,
    data: { title: 'MyRts' },
    canMatch: [myrMatchGuard]
  },
  { path: 'myraux', component: MyrSubComponent, outlet: 'aux' },
  {
    path: '',
    redirectTo: '/myrs',
    pathMatch: 'full'
  },
  {
    path: 'lazy',
    loadChildren: () => import('../lazy/lazy.module').then(modNsObj => modNsObj.LazyModule)
  },
  {
    path: 'lazytoo',
    loadChildren: () => import('../lazytoo/lazytoo.routes').then(modNsObj => modNsObj.routes)
  },
  {
    path: 'lazystand',
    loadComponent: () => import('../lazycomp/paresse.component').then(modNsObj => modNsObj.ParesseComponent)
  },
  { path: '**', component: PageNotFoundComponent }
];
