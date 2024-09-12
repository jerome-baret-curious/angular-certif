import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {LazymodComponent} from "./lazymod.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [LazymodComponent],
  imports: [
    RouterModule.forChild([ // doesn't include router service as there can only be one active
      {
        path: '**', // any http://localhost:4200/lazy
        component: LazymodComponent
      }]),
    CommonModule
  ]
})
export class LazyModule { }
