import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Info1Component } from './info1/info1.component';

const routes: Routes = [
  { path: 'info1', component: Info1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
