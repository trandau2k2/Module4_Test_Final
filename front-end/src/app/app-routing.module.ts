import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './layouts/core/main/main.component';
import {BookModule} from './modules/book/book.module';

const routes: Routes = [
  {
    path: 'admin',
    component: MainComponent,
    children: [
      {
        path: 'books',
        loadChildren: (() => import('./modules/book/book.module').then(m => m.BookModule))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
