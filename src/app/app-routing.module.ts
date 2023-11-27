import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookscreenComponent } from './bookscreen/bookscreen.component';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => 
      import('./public/public.module').then((m)=> m.PublicModule)
  },
  {
    path: 'book', 
    component: BookscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
