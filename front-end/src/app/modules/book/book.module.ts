import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from '../../components/book/book-list/book-list.component';
import {RouterModule, Routes} from '@angular/router';
import {BookAddComponent} from '../../components/book/book-add/book-add.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'add',
    component: BookAddComponent
  },
];


@NgModule({
  declarations: [
    BookListComponent,
    BookAddComponent
  ],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BookModule {
}
